import React, { useRef } from 'react';
import { SubmitProductInquiryForm } from '../hooks/use-form';

const ProductInquiryForm = ({ product, onClose }) => {
  const formRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    companyName: useRef(null),
    productName: useRef(null),
    address: useRef(null),
    city: useRef(null),
    country: useRef(null),
    quantity: useRef(null),
    unit: useRef(null),
    comments: useRef(null)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: formRefs.firstName.current.value,
      lastName: formRefs.lastName.current.value,
      email: formRefs.email.current.value,
      phone: formRefs.phone.current.value,
      companyName: formRefs.companyName.current.value,
      productName: formRefs.productName.current.value,
      address: formRefs.address.current.value,
      city: formRefs.city.current.value,
      country: formRefs.country.current.value,
      quantity: formRefs.quantity.current.value,
      unit: formRefs.unit.current.value,
      comments: formRefs.comments.current.value
    };
    SubmitProductInquiryForm(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 ">
      <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl hide-scrollbar">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-green-800 font-['Inter']">
            Inquiry for {product?.name || 'Product'}
          </h2>
          <button
            onClick={onClose}
            className="text-green-600 hover:text-green-800 text-lg sm:text-xl font-bold"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-green-700 font-['Inter']">
                First Name
              </label>
              <input
                type="text"
                ref={formRefs.firstName}
                required
                className="mt-1 w-full px-3 sm:px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-['Inter'] text-sm sm:text-base"
                placeholder="John"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700 font-['Inter']">
                Last Name
              </label>
              <input
                type="text"
                ref={formRefs.lastName}
                required
                className="mt-1 w-full px-3 sm:px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-['Inter'] text-sm sm:text-base"
                placeholder="Doe"
                defaultValue=""
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-green-700 font-['Inter']">
                Email
              </label>
              <input
                type="email"
                ref={formRefs.email}
                required
                className="mt-1 w-full px-3 sm:px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-['Inter'] text-sm sm:text-base"
                placeholder="john.doe@example.com"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700 font-['Inter']">
                Whatsapp Phone
              </label>
              <input
                type="tel"
                ref={formRefs.phone}
                required
                className="mt-1 w-full px-3 sm:px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-['Inter'] text-sm sm:text-base"
                placeholder="+1234567890"
                defaultValue=""
              />
            </div>
          </div>

          {/* Business Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-green-700 font-['Inter']">
                Company Name
              </label>
              <input
                type="text"
                ref={formRefs.companyName}
                required
                className="mt-1 w-full px-3 sm:px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-['Inter'] text-sm sm:text-base"
                placeholder="ABC Corporation"
                defaultValue=""
              />
            </div>

          </div>

          {/* Address Details */}
          <div>
            <label className="block text-sm font-medium text-green-700 font-['Inter']">
              Address
            </label>
            <input
              type="text"
              ref={formRefs.address}
              required
              className="mt-1 w-full px-3 sm:px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-['Inter'] text-sm sm:text-base"
              placeholder="123 Main Street"
              defaultValue=""
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-green-700 font-['Inter']">
                City
              </label>
              <input
                type="text"
                ref={formRefs.city}
                required
                className="mt-1 w-full px-3 sm:px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-['Inter'] text-sm sm:text-base"
                placeholder="New York"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700 font-['Inter']">
                Country
              </label>
              <input
                type="text"
                ref={formRefs.country}
                required
                className="mt-1 w-full px-3 sm:px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-['Inter'] text-sm sm:text-base"
                placeholder="USA"
                defaultValue=""
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-green-700 font-['Inter']">
                Product Name
              </label>
              <input
                type="text"
                ref={formRefs.productName}
                className="mt-1 w-full px-3 sm:px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-['Inter'] text-sm sm:text-base"
                placeholder="Apple"
                defaultValue={product || ''}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700 font-['Inter']">
                Quantity
              </label>
              <input
                type="number"
                ref={formRefs.quantity}
                min="1"
                required
                className="mt-1 w-full px-3 sm:px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-['Inter'] text-sm sm:text-base"
                placeholder="1"
                defaultValue="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700 font-['Inter']">
                Unit
              </label>
              <select
                ref={formRefs.unit}
                className="mt-1 w-full px-3 sm:px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-['Inter'] text-sm sm:text-base"
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
            <label className="block text-sm font-medium text-green-700 font-['Inter']">
              Additional Comments
            </label>
            <textarea
              ref={formRefs.comments}
              className="mt-1 w-full px-3 sm:px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-['Inter'] text-sm sm:text-base"
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
              className="px-4 sm:px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-['Inter'] font-medium text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 sm:px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-['Inter'] font-medium text-sm sm:text-base"
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