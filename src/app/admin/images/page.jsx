'use client';

import { useState, useEffect } from 'react';
import { 
  FaUpload, 
  FaEdit, 
  FaTrash, 
  FaEye, 
  FaEyeSlash, 
  FaStar, 
  FaSearch,
  FaTimes,
  FaCloudUploadAlt,
  FaSort,
  FaImage
} from 'react-icons/fa';

export default function ImageAdminPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [uploadProgress, setUploadProgress] = useState(0);

  // Fetch all images
  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/images');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
      alert('Error loading images');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Handle delete image
  const handleDeleteImage = async (imageId) => {
    if (!confirm('Are you sure you want to delete this image?')) {
      return;
    }

    try {
      const response = await fetch(`/api/images/${imageId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchImages();
        alert('Image deleted successfully');
      } else {
        throw new Error('Failed to delete image');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Error deleting image');
    }
  };

  // Handle toggle featured
  const handleToggleFeatured = async (imageId, featured) => {
    try {
      const response = await fetch(`/api/images/${imageId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ featured }),
      });

      if (response.ok) {
        fetchImages();
      } else {
        throw new Error('Failed to update image');
      }
    } catch (error) {
      console.error('Error updating image:', error);
      alert('Error updating image');
    }
  };

  // Handle toggle published
  const handleTogglePublished = async (imageId, isPublished) => {
    try {
      const response = await fetch(`/api/images/${imageId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isPublished }),
      });

      if (response.ok) {
        fetchImages();
      } else {
        throw new Error('Failed to update image');
      }
    } catch (error) {
      console.error('Error updating image:', error);
      alert('Error updating image');
    }
  };

  // Filter and sort images
  const filteredImages = images
    .filter(image => {
      const matchesSearch = image.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          image.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || image.category === filterCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'title':
          return a.title?.localeCompare(b.title);
        case 'featured':
          return (b.featured - a.featured) || (b.sortOrder - a.sortOrder);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Image Gallery Management</h1>
          <p className="text-gray-600 mt-2">Manage all temple images, events, and gallery content</p>
        </div>

        {/* Controls Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search images by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
              >
                <option value="all">All Categories</option>
                <option value="Temple Events">Temple Events</option>
                <option value="Puja">Puja</option>
                <option value="Festivals">Festivals</option>
                <option value="Cultural">Cultural</option>
                <option value="Daily Darshan">Daily Darshan</option>
                <option value="Prasad">Prasad</option>
                <option value="Other">Other</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
                <option value="featured">Featured First</option>
              </select>

              <button
                onClick={() => setShowUploadModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color)] transition duration-200"
              >
                <FaUpload className="text-sm" />
                Upload Image
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Total Images</p>
            <p className="text-2xl font-bold text-gray-900">{images.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Featured</p>
            <p className="text-2xl font-bold text-gray-900">
              {images.filter(img => img.featured).length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Published</p>
            <p className="text-2xl font-bold text-gray-900">
              {images.filter(img => img.isPublished).length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Categories</p>
            <p className="text-2xl font-bold text-gray-900">
              {new Set(images.map(img => img.category)).size}
            </p>
          </div>
        </div>

        {/* Images Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-color)]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <ImageCard
                key={image._id}
                image={image}
                onEdit={() => {
                  setSelectedImage(image);
                  setShowEditModal(true);
                }}
                onDelete={() => handleDeleteImage(image._id)}
                onToggleFeatured={() => handleToggleFeatured(image._id, !image.featured)}
                onTogglePublished={() => handleTogglePublished(image._id, !image.isPublished)}
              />
            ))}
          </div>
        )}

        {filteredImages.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
              <FaImage className="mx-auto text-4xl text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg mb-2">No images found</p>
              <p className="text-gray-400 text-sm mb-4">
                {searchTerm || filterCategory !== 'all' ? 'Try adjusting your search or filters' : 'Get started by uploading your first image'}
              </p>
              <button
                onClick={() => setShowUploadModal(true)}
                className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color)]"
              >
                Upload Your First Image
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showUploadModal && (
        <ImageUploadModal
          onClose={() => setShowUploadModal(false)}
          onSuccess={() => {
            setShowUploadModal(false);
            fetchImages();
          }}
          uploadProgress={uploadProgress}
        />
      )}

      {showEditModal && selectedImage && (
        <ImageEditModal
          image={selectedImage}
          onClose={() => {
            setShowEditModal(false);
            setSelectedImage(null);
          }}
          onSuccess={() => {
            setShowEditModal(false);
            setSelectedImage(null);
            fetchImages();
          }}
        />
      )}
    </div>
  );
}

// Image Card Component
function ImageCard({ image, onEdit, onDelete, onToggleFeatured, onTogglePublished }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-200">
      {/* Image */}
      <div className="relative aspect-square bg-gray-100">
        <img
          src={image.imageUrl}
          alt={image.title}
          className="w-full h-full object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1">
          {image.featured && (
            <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
              <FaStar className="text-xs" />
              Featured
            </span>
          )}
          {!image.isPublished && (
            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
              Draft
            </span>
          )}
        </div>

        {/* Category Badge */}
        <span className="absolute top-2 right-2 bg-[var(--primary-color)] text-white px-2 py-1 rounded text-xs font-medium">
          {image.category}
        </span>

        {/* Actions Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
          <div className="flex gap-2">
            <button
              onClick={onEdit}
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition duration-200"
              title="Edit"
            >
              <FaEdit className="text-gray-700" />
            </button>
            <button
              onClick={onToggleFeatured}
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition duration-200"
              title={image.featured ? 'Remove featured' : 'Mark as featured'}
            >
              <FaStar className={image.featured ? "text-yellow-500" : "text-gray-400"} />
            </button>
            <button
              onClick={onTogglePublished}
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition duration-200"
              title={image.isPublished ? 'Unpublish' : 'Publish'}
            >
              {image.isPublished ? <FaEye className="text-green-500" /> : <FaEyeSlash className="text-gray-400" />}
            </button>
            <button
              onClick={onDelete}
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition duration-200"
              title="Delete"
            >
              <FaTrash className="text-red-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 truncate">{image.title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{image.description}</p>
        <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
          <span>Order: {image.sortOrder}</span>
        </div>
      </div>
    </div>
  );
}

// Image Upload Modal Component
function ImageUploadModal({ onClose, onSuccess, uploadProgress }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Other',
    featured: false,
    sortOrder: 0,
    isPublished: true
  });
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert('Please select a valid image file (JPEG, PNG, WebP)');
        return;
      }

      // Validate file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }

      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !formData.title.trim()) {
      alert('Please select a file and provide a title');
      return;
    }

    setUploading(true);
    try {
      // Create FormData for file upload
      const uploadFormData = new FormData();
      uploadFormData.append('file', selectedFile);

      // Upload image
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const uploadResult = await uploadResponse.json();

      // Create image record
      const imageData = {
        ...formData,
        imageUrl: uploadResult.url
      };

      const createResponse = await fetch('/api/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(imageData),
      });

      if (!createResponse.ok) {
        throw new Error('Failed to create image record');
      }

      onSuccess();
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Upload New Image</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition duration-200"
          >
            <FaTimes className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image File *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[var(--primary-color)] transition duration-200">
              {previewUrl ? (
                <div className="space-y-4">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="mx-auto max-h-48 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedFile(null);
                      setPreviewUrl('');
                    }}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Remove Image
                  </button>
                </div>
              ) : (
                <div>
                  <FaCloudUploadAlt className="mx-auto text-4xl text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-2">Drag and drop an image here, or click to select</p>
                  <input
                    type="file"
                    accept="image/jpeg, image/jpg, image/png, image/webp"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-flex items-center px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color)] cursor-pointer transition duration-200"
                  >
                    Select Image
                  </label>
                  <p className="text-xs text-gray-500 mt-2">JPG, PNG, WebP up to 10MB</p>
                </div>
              )}
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                placeholder="Enter image title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                placeholder="Enter image description"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                >
                  <option value="Temple Events">Temple Events</option>
                  <option value="Puja">Puja</option>
                  <option value="Festivals">Festivals</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Daily Darshan">Daily Darshan</option>
                  <option value="Prasad">Prasad</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sort Order
                </label>
                <input
                  type="number"
                  value={formData.sortOrder}
                  onChange={(e) => setFormData({ ...formData, sortOrder: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                />
                <span className="ml-2 text-sm text-gray-700">Featured Image</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                  className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                />
                <span className="ml-2 text-sm text-gray-700">Publish Immediately</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            disabled={uploading}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={uploading || !selectedFile || !formData.title.trim()}
            className="flex items-center gap-2 px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color)] disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
          >
            {uploading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Uploading...
              </>
            ) : (
              'Upload Image'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// Image Edit Modal Component
function ImageEditModal({ image, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    title: image.title,
    description: image.description,
    category: image.category,
    featured: image.featured,
    sortOrder: image.sortOrder,
    isPublished: image.isPublished
  });
  const [updating, setUpdating] = useState(false);

  const handleUpdate = async () => {
    if (!formData.title.trim()) {
      alert('Please provide a title');
      return;
    }

    setUpdating(true);
    try {
      const response = await fetch(`/api/images/${image._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSuccess();
        alert('Image updated successfully!');
      } else {
        throw new Error('Failed to update image');
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('Update failed: ' + error.message);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Edit Image</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition duration-200"
          >
            <FaTimes className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Current Image Preview */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Image
            </label>
            <div className="border border-gray-300 rounded-lg p-4">
              <img
                src={image.imageUrl}
                alt={image.title}
                className="max-h-48 mx-auto rounded-lg"
              />
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                placeholder="Enter image title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                placeholder="Enter image description"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                >
                  <option value="Temple Events">Temple Events</option>
                  <option value="Puja">Puja</option>
                  <option value="Festivals">Festivals</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Daily Darshan">Daily Darshan</option>
                  <option value="Prasad">Prasad</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sort Order
                </label>
                <input
                  type="number"
                  value={formData.sortOrder}
                  onChange={(e) => setFormData({ ...formData, sortOrder: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                />
                <span className="ml-2 text-sm text-gray-700">Featured Image</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                  className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                />
                <span className="ml-2 text-sm text-gray-700">Published</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            disabled={updating}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={updating || !formData.title.trim()}
            className="flex items-center gap-2 px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color)] disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
          >
            {updating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Updating...
              </>
            ) : (
              'Update Image'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}