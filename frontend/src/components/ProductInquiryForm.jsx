import React, { useRef } from 'react';
import { SubmitProductInquiryForm } from '../hooks/use-form';

const ProductInquiryForm = ({ product, onClose }) => {
  const formRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    companyName: useRef(null),
    productName: useRef(product || null),
    country: useRef(null),
    quantity: useRef(null),
    unit: useRef(null),
    comments: useRef(null),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: formRefs.firstName.current.value,
      lastName: formRefs.lastName.current.value,
      email: formRefs.email.current.value,
      phone: formRefs.phone.current.value,
      companyName: formRefs.companyName.current.value,
      productName: formRefs.productName.current.value || product,
      country: formRefs.country.current.value,
      quantity: formRefs.quantity.current.value,
      unit: formRefs.unit.current.value,
      comments: formRefs.comments.current.value,
    };
    SubmitProductInquiryForm(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
      <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100 hide-scrollbar">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 font-['Inter'] tracking-tight">
            Inquiry for {product?.name || 'Product'}
          </h2>
          <button
            onClick={onClose}
            className="text-blue-700 hover:text-blue-900 text-2xl font-bold transition-colors duration-200"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-blue-800 font-['Inter'] mb-1.5">
                First Name
              </label>
              <input
                type="text"
                ref={formRefs.firstName}
                required
                className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-900 font-['Inter'] text-sm bg-blue-50/50 transition-all duration-200 placeholder-gray-400"
                placeholder="John"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-800 font-['Inter'] mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                ref={formRefs.lastName}
                required
                className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-900 font-['Inter'] text-sm bg-blue-50/50 transition-all duration-200 placeholder-gray-400"
                placeholder="Doe"
                defaultValue=""
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-blue-800 font-['Inter'] mb-1.5">
                Email
              </label>
              <input
                type="email"
                ref={formRefs.email}
                required
                className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-900 font-['Inter'] text-sm bg-blue-50/50 transition-all duration-200 placeholder-gray-400"
                placeholder="john.doe@example.com"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-800 font-['Inter'] mb-1.5">
                WhatsApp Number
              </label>
              <input
                type="tel"
                ref={formRefs.phone}
                required
                className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-900 font-['Inter'] text-sm bg-blue-50/50 transition-all duration-200 placeholder-gray-400"
                placeholder="+1234567890"
                defaultValue=""
              />
            </div>
          </div>

          {/* Business Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-blue-800 font-['Inter'] mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                ref={formRefs.companyName}
                required
                className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-900 font-['Inter'] text-sm bg-blue-50/50 transition-all duration-200 placeholder-gray-400"
                placeholder="ABC Corporation"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-800 font-['Inter'] mb-1.5">
                Country
              </label>
              <input
                type="text"
                ref={formRefs.country}
                required
                className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-900 font-['Inter'] text-sm bg-blue-50/50 transition-all duration-200 placeholder-gray-400"
                placeholder="India"
                defaultValue=""
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-blue-800 font-['Inter'] mb-1.5">
                Product Name
              </label>
              <input
                type="text"
                ref={formRefs.productName}
                className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-900 font-['Inter'] text-sm bg-blue-50/50 transition-all duration-200 placeholder-gray-400"
                placeholder="Apple"
                defaultValue={product || ''}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-800 font-['Inter'] mb-1.5">
                Quantity
              </label>
              <input
                type="number"
                ref={formRefs.quantity}
                min="1"
                required
                className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-900 font-['Inter'] text-sm bg-blue-50/50 transition-all duration-200 placeholder-gray-400"
                placeholder="1"
                defaultValue="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-800 font-['Inter'] mb-1.5">
                Unit
              </label>
              <select
                ref={formRefs.unit}
                className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-900 font-['Inter'] text-sm bg-blue-50/50 transition-all duration-200"
                defaultValue="units"
              >
                <option value="units">Units</option>
                <option value="kg">Kilograms</option>
                <option value="tons">Tons</option>
                <option value="liters">Liters</option>
                <option value="meters">Meters</option>
              </select>
            </div>
          </div>

          {/* Additional Comments */}
          <div>
            <label className="block text-sm font-medium text-blue-800 font-['Inter'] mb-1.5">
              Additional Comments
            </label>
            <textarea
              ref={formRefs.comments}
              className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-900 font-['Inter'] text-sm bg-blue-50/50 transition-all duration-200 placeholder-gray-400 resize-y"
              rows="4"
              placeholder="Any additional details or requirements..."
              defaultValue=""
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-['Inter'] font-medium text-sm transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 font-['Inter'] font-medium text-sm transition-all duration-200 shadow-md"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductInquiryForm;