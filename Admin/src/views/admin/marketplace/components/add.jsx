import React from "react";
import 'tailwindcss/tailwind.css';



const AddSong = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
        <div className="container mx-auto max-w-xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-left">Add new song</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Audio</label>
              <input
                type="file"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Title</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
      
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Duration</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Tempo</label>
              <input
                type="number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">More</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Genre</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-medium"
              >
                Lưu
              </button>
            </div>
          </form>
        </div>
      </div>
      
    );
};

export default AddSong;