import { useState, useRef, useEffect } from 'react';
import { Upload, Image, Video, Trash2, Eye, LogOut, Plus, X } from 'lucide-react';

interface MediaFile {
  id: string;
  name: string;
  type: 'image' | 'video';
  url: string;
  size: number;
  uploadDate: Date;
}

const AdminDashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load existing files from localStorage on component mount
  useEffect(() => {
    const savedFiles = localStorage.getItem('adminMediaFiles');
    if (savedFiles) {
      try {
        const parsedFiles = JSON.parse(savedFiles);
        setMediaFiles(parsedFiles);
      } catch (error) {
        console.error('Error loading saved media files:', error);
      }
    }
  }, []);

  const handleFileUpload = async (files: FileList | null) => {
    if (!files) return;

    setIsUploading(true);
    setUploadProgress(0);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileType = file.type.startsWith('image/') ? 'image' : 'video';
      
      // Simulate upload progress
      for (let progress = 0; progress <= 100; progress += 10) {
        setUploadProgress(progress);
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      const newFile: MediaFile = {
        id: Date.now().toString() + i,
        name: file.name,
        type: fileType,
        url: URL.createObjectURL(file),
        size: file.size,
        uploadDate: new Date()
      };

      setMediaFiles(prev => {
        const updatedFiles = [...prev, newFile];
        // Save to localStorage so it appears in Media Gallery
        localStorage.setItem('adminMediaFiles', JSON.stringify(updatedFiles));
        return updatedFiles;
      });
    }

    setIsUploading(false);
    setUploadProgress(0);
    setShowUploadModal(false);
  };

  const handleDeleteFile = (id: string) => {
    setMediaFiles(prev => {
      const updatedFiles = prev.filter(file => file.id !== id);
      // Update localStorage
      localStorage.setItem('adminMediaFiles', JSON.stringify(updatedFiles));
      return updatedFiles;
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Media Management</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Media Library</h2>
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Upload Files</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Image className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-blue-900">
                    {mediaFiles.filter(f => f.type === 'image').length}
                  </p>
                  <p className="text-blue-600 text-sm">Images</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Video className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-purple-900">
                    {mediaFiles.filter(f => f.type === 'video').length}
                  </p>
                  <p className="text-purple-600 text-sm">Videos</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Upload className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-green-900">
                    {mediaFiles.length}
                  </p>
                  <p className="text-green-600 text-sm">Total Files</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Progress */}
          {isUploading && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Uploading...</span>
                <span className="text-sm text-gray-500">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mediaFiles.map((file) => (
            <div key={file.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                {file.type === 'image' ? (
                  <img
                    src={file.url}
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={file.url}
                    className="w-full h-full object-cover"
                    controls
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 truncate mb-2">{file.name}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>{file.type === 'image' ? 'Image' : 'Video'}</span>
                  <span>{formatFileSize(file.size)}</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">{formatDate(file.uploadDate)}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => window.open(file.url, '_blank')}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-1 text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button
                    onClick={() => handleDeleteFile(file.id)}
                    className="bg-red-100 text-red-700 py-2 px-3 rounded-lg hover:bg-red-200 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {mediaFiles.length === 0 && (
          <div className="text-center py-12">
            <Upload className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No files uploaded yet</h3>
            <p className="text-gray-500 mb-6">Upload your first image or video to get started</p>
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Upload Files
            </button>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Upload Files</h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Drag and drop files here, or click to select</p>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Choose Files
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              <p>Supported formats: JPG, PNG, GIF, MP4, MOV, AVI</p>
              <p>Max file size: 50MB per file</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
