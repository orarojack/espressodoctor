import { useState, useEffect } from 'react';
import { Play, Image as ImageIcon, Video, X, ChevronLeft, ChevronRight, Phone, Mail, Coffee, Award, Users, Star, MapPin, Clock, Instagram } from 'lucide-react';

interface MediaFile {
  id: string;
  name: string;
  type: 'image' | 'video';
  url: string;
  size: number;
  uploadDate: Date;
}

const MediaGallery = () => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [selectedMedia, setSelectedMedia] = useState<MediaFile | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'images' | 'videos'>('all');

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/971581966701?text=Hi, I would like to know more about your training services and products.', '_blank');
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:1991suleimanali@gmail.com?subject=Training Inquiry&body=Hello, I am interested in learning more about your services and products.';
  };

  // Load admin-uploaded content - only shows files uploaded through admin panel
  useEffect(() => {
    const loadAdminFiles = () => {
      // Check localStorage for admin-uploaded files
      const adminFiles = localStorage.getItem('adminMediaFiles');
      if (adminFiles) {
        try {
          const parsedFiles = JSON.parse(adminFiles);
          // Convert string dates back to Date objects
          const filesWithDates = parsedFiles.map((file: any) => ({
            ...file,
            uploadDate: new Date(file.uploadDate)
          }));
          setMediaFiles(filesWithDates);
        } catch (error) {
          console.error('Error parsing admin media files:', error);
          setMediaFiles([]);
        }
      } else {
        // No admin files uploaded yet - show empty state
        setMediaFiles([]);
      }
    };

    // Load files on component mount
    loadAdminFiles();

    // Listen for storage changes (when admin uploads new files)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'adminMediaFiles') {
        loadAdminFiles();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check for changes every 2 seconds (for same-tab updates)
    const interval = setInterval(loadAdminFiles, 2000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const filteredFiles = mediaFiles.filter(file => {
    if (filter === 'all') return true;
    return file.type === filter;
  });

  const openModal = (file: MediaFile, index: number) => {
    setSelectedMedia(file);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const nextMedia = () => {
    const nextIndex = (currentIndex + 1) % filteredFiles.length;
    setCurrentIndex(nextIndex);
    setSelectedMedia(filteredFiles[nextIndex]);
  };

  const prevMedia = () => {
    const prevIndex = currentIndex === 0 ? filteredFiles.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedMedia(filteredFiles[prevIndex]);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (date: Date) => {
    // Ensure we have a valid Date object
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
      return 'Unknown date';
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
              <img 
                src="/espresso-doctor-logo.png" 
                alt="Espresso Doctor Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
              />
              <span className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 leading-tight">
                <span className="hidden sm:inline">Espresso Doctor Training Institute</span>
                <span className="sm:hidden">Espresso Doctor</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <a href="/#services" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">Services</a>
              <a href="/#products" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">Products</a>
              <a href="/#art-time" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">Art Time</a>
              <a href="/#gallery" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">Gallery</a>
              <a href="/media-gallery" className="text-amber-600 font-medium text-sm xl:text-base">Media Gallery</a>
              <a href="/#reviews" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">Reviews</a>
              <a href="/#about" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">About</a>
              <a href="/#contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">Contact</a>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Mobile Menu Button */}
              <button 
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                    mobileMenu.classList.toggle('hidden');
                  }
                }}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-amber-600 hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Contact Buttons */}
              <div className="hidden sm:flex space-x-2 lg:space-x-3">
                <button 
                  onClick={handleWhatsAppContact}
                  className="bg-green-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm shadow-md hover:shadow-lg"
                >
                  <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="hidden lg:inline">WhatsApp</span>
                  <span className="lg:hidden">WA</span>
                </button>
                <button 
                  onClick={handleEmailContact}
                  className="bg-amber-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-amber-700 transition-all duration-300 font-medium flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm shadow-md hover:shadow-lg"
                >
                  <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="hidden lg:inline">Email</span>
                  <span className="lg:hidden">Email</span>
                </button>
              </div>

              {/* Mobile Contact Buttons */}
              <div className="flex sm:hidden space-x-1">
                <button 
                  onClick={handleWhatsAppContact}
                  className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </button>
                <button 
                  onClick={handleEmailContact}
                  className="bg-amber-600 text-white p-2 rounded-lg hover:bg-amber-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div id="mobile-menu" className="hidden lg:hidden border-t border-gray-200 pt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <a href="/#services" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">Services</a>
              <a href="/#products" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">Products</a>
              <a href="/#art-time" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">Art Time</a>
              <a href="/#gallery" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">Gallery</a>
              <a href="/media-gallery" className="text-amber-600 font-medium py-2 px-3 rounded-lg bg-amber-50">Media Gallery</a>
              <a href="/#reviews" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">Reviews</a>
              <a href="/#about" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">About</a>
              <a href="/#contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              📸 Media Gallery
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our training photos and videos showcasing professional coffee preparation techniques. 
              All content is carefully curated and uploaded by our expert instructors through our admin system.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                All ({mediaFiles.length})
              </button>
              <button
                onClick={() => setFilter('images')}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  filter === 'images'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <ImageIcon className="w-4 h-4 inline mr-2" />
                Images ({mediaFiles.filter(f => f.type === 'image').length})
              </button>
              <button
                onClick={() => setFilter('videos')}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  filter === 'videos'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Video className="w-4 h-4 inline mr-2" />
                Videos ({mediaFiles.filter(f => f.type === 'video').length})
              </button>
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredFiles.map((file, index) => (
              <div
                key={file.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                onClick={() => openModal(file, index)}
              >
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  {file.type === 'image' ? (
                    <img
                      src={file.url}
                      alt={file.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        src={file.url}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        muted
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    {file.type === 'image' ? 'Photo' : 'Video'}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 truncate mb-2">{file.name}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{formatFileSize(file.size)}</span>
                    <span>{formatDate(file.uploadDate)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFiles.length === 0 && (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {mediaFiles.length === 0 ? 'No content uploaded yet' : 'No media found for this filter'}
              </h3>
              <p className="text-gray-500 mb-6">
                {mediaFiles.length === 0 
                  ? 'Our instructors will be uploading photos and videos soon. Check back later for training content!'
                  : 'Try selecting a different filter to see more content'
                }
              </p>
              {mediaFiles.length === 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-sm text-amber-800">
                    💡 <strong>For Instructors:</strong> Upload content through the admin panel to display it here.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/espresso-doctor-logo.png" 
                  alt="Espresso Doctor Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-semibold">Espresso Doctor Training Institute</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional coffee training and equipment solutions for the modern coffee industry.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors block">Training Services</a>
                <a href="/#products" className="text-gray-400 hover:text-white transition-colors block">Products</a>
                <a href="/#art-time" className="text-gray-400 hover:text-white transition-colors block">Art Time</a>
                <a href="/#gallery" className="text-gray-400 hover:text-white transition-colors block">Gallery</a>
                <a href="/media-gallery" className="text-amber-400 font-medium block">Media Gallery</a>
                <a href="/#reviews" className="text-gray-400 hover:text-white transition-colors block">Reviews</a>
                <a href="/#about" className="text-gray-400 hover:text-white transition-colors block">About Us</a>
                <a href="/#contact" className="text-gray-400 hover:text-white transition-colors block">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-400">1991suleimanali@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-400">+971 58 196 6701</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-400">Coffee Training Center, Downtown</span>
                </div>
                <div className="pt-4">
                  <h5 className="text-md font-semibold mb-3">Follow Us</h5>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/sulespresso_ali?igsh=cXNqMDB4YXN6dzhk&utm_source=qr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.tiktok.com/@espresso.doctor?_t=ZS-8zrYidw3jFK&_r=1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Espresso Doctor Training Institute. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {filteredFiles.length > 1 && (
              <>
                <button
                  onClick={prevMedia}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextMedia}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="bg-white rounded-2xl overflow-hidden">
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.name}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={selectedMedia.url}
                  controls
                  className="w-full h-auto max-h-[80vh]"
                  autoPlay
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedMedia.name}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{selectedMedia.type === 'image' ? 'Photo' : 'Video'}</span>
                  <span>{formatFileSize(selectedMedia.size)}</span>
                  <span>{formatDate(selectedMedia.uploadDate)}</span>
                </div>
                {filteredFiles.length > 1 && (
                  <p className="text-sm text-gray-400 mt-2">
                    {currentIndex + 1} of {filteredFiles.length}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;