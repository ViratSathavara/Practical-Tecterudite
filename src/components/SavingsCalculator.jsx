export default function SavingsCalculator() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">WAS</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">NOW</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount"
        />
      </div>
      
      <button className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition">
        CALCULATE SAVINGS
      </button>
      
      <div className="mt-6 text-center text-xl font-semibold">
        Your potential savings: <span className="text-blue-600">$0</span>
      </div>
    </div>
  );
}