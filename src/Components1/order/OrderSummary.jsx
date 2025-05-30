// src/components/order/OrderSummary.jsx
export default function OrderSummary({ order, onSubmit, onBack }) {
  const calculateTotal = () => {
    // In a real app, you would calculate based on selections
    return 7500; // Example fixed amount
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Review Your Order</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">Garment Details</h3>
            <p>{order.garmentType}</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">Fabric</h3>
            <div className="flex items-start">
              <img
                src={order.fabric?.image}
                alt={order.fabric?.name}
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <p>{order.fabric?.name}</p>
                <p className="text-sm text-gray-600">{order.fabric?.price}</p>
              </div>
            </div>
          </div>

          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">Measurements</h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(order.measurements).map(([key, value]) => (
                <div key={key}>
                  <span className="capitalize">{key}: </span>
                  <span className="font-medium">{value}"</span>
                </div>
              ))}
            </div>
          </div>

          {order.notes && (
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">Special Instructions</h3>
              <p className="text-gray-600">{order.notes}</p>
            </div>
          )}
        </div>

        <div className="md:col-span-1">
          <div className="bg-gray-50 p-4 rounded-lg sticky top-4">
            <h3 className="font-medium mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Garment</span>
                <span>₹5,000</span>
              </div>
              <div className="flex justify-between">
                <span>Fabric</span>
                <span>₹2,500</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-medium">Total</span>
                <span className="font-medium">
                  ₹{calculateTotal().toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={onSubmit}
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark"
            >
              Confirm & Pay
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={onBack}
          className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50"
        >
          Back
        </button>
      </div>
    </div>
  );
}
