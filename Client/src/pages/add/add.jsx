import React from "react";

const Add = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
            <div className="container mx-auto max-w-5xl bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-2xl font-bold mb-6 text-left">Thêm Album Mới</h1>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-left">Tiêu Đề</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-lg"
                            placeholder="Nhập tiêu đề album"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-left">Nghệ Sĩ</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-lg"
                            placeholder="Nhập tên nghệ sĩ"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-left">Ngày Phát Hành</label>
                        <input
                            type="date"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-left">Tổng Track</label>
                        <input
                            type="number"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-lg"
                            placeholder="Nhập số lượng track"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-left">Ngày</label>
                        <input
                            type="date"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-lg"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
                        >
                            Lưu
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Add;
