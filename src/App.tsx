import { Phone, Mail, Coffee, Award, Users, Star, MapPin, Clock, Instagram } from 'lucide-react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import MediaGallery from './pages/MediaGallery';

function App() {
  const [selectedRating, setSelectedRating] = useState(0);
  const services = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Coffee Training",
      description: "Comprehensive training program covering espresso extraction, milk steaming, latte art, and customer service skills."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Business Consultation",
      description: "Professional business consultation including operations management, staff training, customer experience optimization, and coffee shop management."
    }
  ];

  const products = [
    {
      name: "Espresso Machine",
      description: "Professional Simonelli Appia Life espresso machine perfect for training and small coffee shops.",
      image: "/espresso machine.jpeg"
    },
    {
      name: "Espresso with Grinder",
      description: "Sage espresso machine with integrated grinder for complete brewing solutions.",
      image: "/espresso.jpeg"
    },
    // {
    //   name: "Coffee Grinder",
    //   description: "Fellow precision burr grinder for consistent grind size and optimal extraction.",
    //   image: "/coffee grinder.jpeg"
    // },
    {
      name: "Distributor",
      description: "MHW-3BOMBER coffee distribution tool for even grounds distribution before tamping.",
      image: "/distributor.jpeg"
    },
    {
      name: "Tamper",
      description: "MHW-3BOMBER professional-grade tamper for consistent espresso extraction and perfect puck preparation.",
      image: "/tamper.jpeg"
    },
    {
      name: "Knock Box",
      description: "MHW-3BOMBER square knock box for disposing of used coffee grounds efficiently and cleanly.",
      image: "/knock box.jpeg"
    },
    {
      name: "Green Beans Moisture Measurement",
      description: "SINAR TECHNOLOGY professional moisture meter for testing green coffee beans quality and storage conditions.",
      image: "/green beans mlisture measurement .jpeg"
    },
    {
      name: "Small Espresso Machine",
      description: "Compact professional espresso machine perfect for home use or small coffee shops.",
      image: "/Small Espresso Machine.jpeg"
    }
  ];

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/971581966701?text=Hi, I would like to know more about your training services and products.', '_blank');
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:1991suleimanali@gmail.com?subject=Training Inquiry&body=Hello, I am interested in learning more about your services and products.';
  };

  const handleReviewSubmit = (contactMethod: 'whatsapp' | 'email') => {
    // Get form data
    const nameInput = document.querySelector('input[placeholder="Enter your name"]') as HTMLInputElement;
    const emailInput = document.querySelector('input[placeholder="your@email.com"]') as HTMLInputElement;
    const reviewTextarea = document.querySelector('textarea[placeholder="Tell us about your training experience..."]') as HTMLTextAreaElement;

    const name = nameInput?.value || 'Anonymous';
    const email = emailInput?.value || '';
    const review = reviewTextarea?.value || 'No review provided';
    const rating = selectedRating || 0;

    // Create the message content
    const message = `🌟 NEW REVIEW SUBMISSION 🌟

👤 Name: ${name}
📧 Email: ${email || 'Not provided'}
⭐ Rating: ${rating}/5 stars
📝 Review: ${review}

---
This review was submitted through the website.`;

    if (contactMethod === 'whatsapp') {
      const whatsappUrl = `https://wa.me/971581966701?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      const emailSubject = `New Review Submission from ${name}`;
      const emailBody = message;
      window.location.href = `mailto:1991suleimanali@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    }

    // Reset form after submission
    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';
    if (reviewTextarea) reviewTextarea.value = '';
    setSelectedRating(0);
  };

  const MainWebsite = () => (
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
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">Services</a>
              <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">Products</a>
              <a href="#art-time" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">Art Time</a>
              <a href="#gallery" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">Gallery</a>
              <a href="/media-gallery" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">Media Gallery</a>
              <a href="#reviews" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">Reviews</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base">Contact</a>
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
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">Services</a>
              <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">Products</a>
              <a href="#art-time" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">Art Time</a>
              <a href="#gallery" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">Gallery</a>
              <a href="/media-gallery" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">Media Gallery</a>
              <a href="#reviews" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">Reviews</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                Master the Art of 
                <span className="text-amber-600"> Espresso</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your coffee knowledge with professional training programs designed by industry experts. 
                From barista skills to business management, we provide comprehensive education for coffee professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button 
                  onClick={handleWhatsAppContact}
                  className="bg-amber-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Training Journey
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-amber-600 text-amber-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 font-semibold text-base sm:text-lg"
                >
                  Explore Services
                </button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <img 
                src="/about1.jpeg" 
                alt="Professional Barista Training"
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover mx-auto max-w-md lg:max-w-none"
              />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Certified Training</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Professional Certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Our Services</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional coffee training and business consultation services
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-amber-600 mb-4 sm:mb-6">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                <button 
                  onClick={handleWhatsAppContact}
                  className="text-amber-600 font-semibold hover:text-amber-700 transition-colors flex items-center space-x-2 text-sm sm:text-base"
                >
                  <span>Enroll Me</span>
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Products On Sale</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional tools and materials to support your coffee training and business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{product.description}</p>
                  <button 
                    onClick={handleWhatsAppContact}
                    className="w-full bg-amber-600 text-white py-2 sm:py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium text-sm sm:text-base"
                  >
                    Contact for Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Videos Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Product Demonstrations</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our training videos showcasing the products and techniques we teach
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <video 
                controls 
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                poster="/picture1.jpeg"
              >
                <source src="/vida1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Products Showcase 1</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                  Professional coffee training demonstration showcasing our equipment and techniques.
                </p>
                <button 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-amber-600 text-white py-2 sm:py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium text-sm sm:text-base"
                >
                  Enroll Me
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <video 
                controls 
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                poster="/picture2.jpeg"
              >
                <source src="/vida2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Products Showcase Video 2</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                  Advanced coffee preparation techniques and machine operation training.
                </p>
                <button 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-amber-600 text-white py-2 sm:py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium text-sm sm:text-base"
                >
                  Enroll Me
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <video 
                controls 
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                poster="/picture10.jpeg"
              >
                <source src="/vida3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Products Showcase Video 3</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                  Complete barista training program covering all aspects of coffee preparation.
                </p>
                <button 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-amber-600 text-white py-2 sm:py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium text-sm sm:text-base"
                >
                  Enroll Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Time Section */}
      <section id="art-time" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">🎨 Art Time</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the creative side of coffee with our art demonstration video
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <video 
                controls 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              >
                <source src="/art.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Coffee Art Demonstration</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Watch our expert demonstrate the beautiful art of coffee preparation. Learn techniques 
                  that transform your coffee into a work of art while mastering the craft of espresso making.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button 
                    onClick={handleWhatsAppContact}
                    className="bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm sm:text-base"
                  >
                    Learn Coffee Art
                  </button>
                  <button 
                    onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-purple-600 text-purple-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-medium text-sm sm:text-base"
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Gallery</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our training facility, equipment, and student experiences
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {[1, 2, 3, 5, 6, 7, 8, 9, 10].map((num) => (
              <div 
                key={num}
                className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <img 
                  src={`/picture${num}.jpeg`}
                  alt={`Gallery Image ${num}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews & Feedback Section */}
      <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Reviews & Feedback</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Share your experience and read what others say about our training programs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Review Form */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Share Your Review</h3>
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email (Optional)</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex space-x-1 sm:space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button 
                        key={star} 
                        type="button" 
                        onClick={() => setSelectedRating(star)}
                        className={`text-xl sm:text-2xl transition-colors ${
                          star <= selectedRating ? 'text-amber-500' : 'text-gray-300 hover:text-amber-400'
                        }`}
                      >
                        ⭐
                      </button>
                    ))}
                  </div>
                  {selectedRating > 0 && (
                    <p className="text-sm text-gray-600 mt-1">You rated: {selectedRating}/5 stars</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                  <textarea 
                    rows={3}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Tell us about your training experience..."
                  ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button 
                    type="button"
                    onClick={() => handleReviewSubmit('whatsapp')}
                    className="flex-1 bg-amber-600 text-white py-2 sm:py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium text-sm sm:text-base"
                  >
                    Send via WhatsApp
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleReviewSubmit('email')}
                    className="flex-1 border-2 border-amber-600 text-amber-600 py-2 sm:py-3 rounded-lg hover:bg-amber-600 hover:text-white transition-colors font-medium text-sm sm:text-base"
                  >
                    Send via Email
                  </button>
                </div>
              </form>
            </div>

            {/* Audio Testimonial */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Student Testimonial</h3>
                <p className="text-gray-600 text-sm sm:text-base">Listen to our student's experience</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
                <audio controls className="w-full">
                  <source src="/audio.ogg" type="audio/ogg" />
                  Your browser does not support the audio element.
                </audio>
                <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 text-center">
                  Click play to hear our student's testimonial about their training experience
                </p>
              </div>
              
              <div className="text-center mt-4 sm:mt-6">
                <button 
                  onClick={handleWhatsAppContact}
                  className="bg-amber-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium text-sm sm:text-base"
                >
                  Start Your Training Journey
                </button>
              </div>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="mt-12 sm:mt-16 text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Share Your Experience</h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Help others discover our training by sharing on social media</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button 
                onClick={() => window.open('https://www.instagram.com/sulespresso_ali?igsh=cXNqMDB4YXN6dzhk&utm_source=qr', '_blank')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Share on Instagram</span>
              </button>
              <button 
                onClick={() => window.open('https://www.tiktok.com/@espresso.doctor?_t=ZS-8zrYidw3jFK&_r=1', '_blank')}
                className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span>Share on TikTok</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Course Fees & Payment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable training programs with flexible payment options
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Course Fees */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Course Fees</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-lg font-medium text-gray-700">Full Payment</span>
                  <span className="text-2xl font-bold text-amber-600">1,500 AED</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-lg font-medium text-gray-700">Installments (2 payments)</span>
                  <span className="text-2xl font-bold text-amber-600">750 AED each</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-lg font-medium text-gray-700">Kenyan Shillings</span>
                  <span className="text-xl font-bold text-gray-600">≈ 52,000 KSH</span>
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Bank Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Bank Name:</span>
                  <span className="ml-2 text-gray-600">Abu Dhabi Commercial Bank PJSC</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Account Title:</span>
                  <span className="ml-2 text-gray-600">SULEIMAN NGALA ALI</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Account Number:</span>
                  <span className="ml-2 text-gray-600">12004306820001</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">IBAN:</span>
                  <span className="ml-2 text-gray-600 font-mono">AE560030012004306820001</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Currency:</span>
                  <span className="ml-2 text-gray-600">AED</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Branch:</span>
                  <span className="ml-2 text-gray-600">IBD - KHALDIYA TOWER BRANCH</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Swift Code:</span>
                  <span className="ml-2 text-gray-600 font-mono">ADCBAEAA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={handleWhatsAppContact}
              className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Enroll Now - Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Operating Hours Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <Clock className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Operating Hours</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Morning Sessions</h3>
                <p className="text-lg">8:00 AM - 11:00 AM</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Evening Sessions</h3>
                <p className="text-lg">6:00 PM - 9:00 PM</p>
              </div>
            </div>
            <p className="text-xl mt-6 opacity-90">Monday to Friday</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Espresso Doctor</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in the coffee industry, the Espresso Doctor Training Institute 
                has been the premier destination for professional coffee education. Our founder, a certified 
                coffee expert and machine technician, has trained thousands of baristas and coffee shop owners.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700">1000+ Students Trained</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700">Certified Programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700">Industry Expert</span>
                </div>
              </div>
              <button 
                onClick={handleEmailContact}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
              >
                Get In Touch
              </button>
            </div>
            <div className="relative">
              <img 
                src="/about.jpeg" 
                alt="Coffee Training Expert"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today to discuss your training needs or product inquiries. We're here to help you succeed in the coffee industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div 
              onClick={handleWhatsAppContact}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="text-green-600 mb-4">
                <Phone className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">WhatsApp</h3>
              <p className="text-gray-600 mb-6">
                Get instant responses to your questions about training programs and products. Chat with us directly.
              </p>
              <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                Start WhatsApp Chat →
              </div>
            </div>
            
            <div 
              onClick={handleEmailContact}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="text-amber-600 mb-4">
                <Mail className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Email</h3>
              <p className="text-gray-600 mb-6">
                Send us detailed inquiries about our training programs, schedules, and product specifications.
              </p>
              <div className="text-amber-600 font-semibold group-hover:text-amber-700 transition-colors">
                Send Email →
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <a href="#services" className="text-gray-400 hover:text-white transition-colors block">Training Services</a>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors block">Products</a>
                <a href="#art-time" className="text-gray-400 hover:text-white transition-colors block">Art Time</a>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors block">Gallery</a>
                <a href="/media-gallery" className="text-gray-400 hover:text-white transition-colors block">Media Gallery</a>
                <a href="#reviews" className="text-gray-400 hover:text-white transition-colors block">Reviews</a>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors block">About Us</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors block">Contact</a>
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
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/media-gallery" element={<MediaGallery />} />
        <Route path="/*" element={<MainWebsite />} />
      </Routes>
    </Router>
  );
}

export default App;