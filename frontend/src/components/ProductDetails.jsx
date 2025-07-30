import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-transparent border-black shadow-2xl flex items-center justify-center z-50 p-4">
      <div className="bg-white border-black border-1 shadow-2xs rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative hide-scrollbar">
        <div className="sticky top-0 bg-white z-10 p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-blue-800 font-['Inter']">
              Details for {product?.name || 'Product'}
            </h2>
            <button
              onClick={onClose}
              className="text-blue-600 hover:text-blue-800 text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        <Head>
          <title>Organic Green Tea - Product Details</title>
          <meta name="description" content="Details for Organic Green Tea by PureLeaf Co." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="p-6">
          {/* Product Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-black rounded-lg shadow-lg p-6 mb-6">
            <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
            <p className="text-base">
              Export by: <span className="font-semibold">truevalueglobal</span>
            </p>
          </div>

          {/* Product Image and Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div className="relative aspect-square">
              <Image
                src={product?.image || '/placeholder.jpg'}
                alt={product?.name || 'Product Image'}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-blue-700 mb-4">
                  Product Specifications
                </h2>
                <ul className="space-y-2 text-sm">
                  {
                    product?.specifications?.map((spec, index) => {
                      const [keys, value] = spec.split(':');
                      return <li key={index} className="flex justify-between">
                        <span className="font-medium">{keys}</span>
                        <span>{value}</span>
                      </li>
                    })
                  }
                  {/* <li>
                    <span className="font-medium">Certifications:</span> USDA Organic, Non-GMO
                  </li> */}
                </ul>

                {/* <div className="mt-4">
                  <h3 className="text-lg font-semibold text-blue-700">Price</h3>
                  <p className="text-xl font-bold text-blue-600">${product?.pricePer1000kg || ''}/1000 {product.unit}</p>
                </div> */}

                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-blue-700">Additional Details</h3>
                  <p className="text-gray-600 text-sm">
                        {product.description || 'This premium matcha blue tea is sourced from the finest tea leaves in Uji, Japan. It is stone-ground to preserve its rich flavor and vibrant color. Enjoy a cup of this organic blue tea for a refreshing and healthy beverage.'}
                  </p>
                </div>

                {/* <div className="mt-4">
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          {/* <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              Why Choose Our Green Tea?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-blue-600 text-3xl mb-2">🌿</div>
                <h3 className="font-semibold text-base">100% Organic</h3>
                <p className="text-gray-600 text-sm">
                  Grown without pesticides or synthetic fertilizers.
                </p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 text-3xl mb-2">☕</div>
                <h3 className="font-semibold text-base">Rich Flavor</h3>
                <p className="text-gray-600 text-sm">
                  Authentic matcha taste with a smooth finish.
                </p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 text-3xl mb-2">🌍</div>
                <h3 className="font-semibold text-base">Sustainably Sourced</h3>
                <p className="text-gray-600 text-sm">
                  Ethically produced with minimal environmental impact.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;