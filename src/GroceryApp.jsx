import { useState } from "react";

export default function GroceryApp() {
  // State to hold the array of grocery items
  const [items, setItems] = useState([]);
  // State for each input field
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setitemQuantity] = useState("");
  const [itemCategory, setitemCategory] = useState("");
  const [itemNote, setitemNote] = useState("");

  // Function to handle adding a new item
  const handleAddItem = () => {
    // Check if the item name is empty. The other fields are optional.
    if (!itemName.trim()) {
      return;
    }

    // Create a new item object with a unique ID
    const newItem = {
      id: Date.now(),
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
      note: itemNote,
    };

    // Add the new item to the items array
    setItems([...items, newItem]);

    // Clear the input fields after adding the item
    setItemName("");
    setitemQuantity("");
    setitemCategory("");
    setitemNote("");

  };

  // Function to handle deleting an item
  const handleDeleteItem = (id) => {
    // Filter out the item with the matching ID
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl mx-auto mt-8">
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          My Grocery List
        </h1>
        <p className="text-gray-500 text-center">Let's get shopping!</p>
      </div>

      {/* Input Fields and Add Button */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex flex-col flex-1 gap-4">
          <input
            type="text"
            placeholder="Item Name (e.g., Milk)"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-700 w-full"
          />
          <input
            type="text"
            placeholder="Item Quantity"
            value={itemQuantity}
            onChange={(e) => setitemQuantity(e.target.value)}
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-700 w-full"
          />
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <input
            type="text"
            placeholder="Item Category"
            value={itemCategory}
            onChange={(e) => setitemCategory(e.target.value)}
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-700 w-full"
          />
          <input
            type="text"
            placeholder="Item's Note"
            value={itemNote}
            onChange={(e) => setitemNote(e.target.value)}
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-700 w-full"
          />
        </div>
        <button
          onClick={handleAddItem}
          className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-200 flex-shrink-0"
        >
          Add Item
        </button>
      </div>

      {/* List of Items */}
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="bg-gray-50 p-4 rounded-xl shadow-sm flex items-center justify-between transition-all duration-200 hover:bg-gray-100"
          >
            <div className="flex-grow">
              <span className="text-lg font-medium text-gray-800 block">
                {item.name}
              </span>
              {(item.quantity || item.category || item.note) && (
                <div className="flex flex-wrap gap-x-2 text-sm text-gray-500">
                  {item.quantity && <span>{item.quantity}</span>}
                  {item.category && <span>· {item.category}</span>}
                  {item.note && <span className="italic">" {item.note}"</span>}
                </div>
              )}
            </div>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="text-gray-400 hover:text-red-500 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
