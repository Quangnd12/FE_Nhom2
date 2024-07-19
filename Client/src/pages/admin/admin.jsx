import React from "react";

const Admin = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
            <div className="container mx-auto">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-2xl shadow-lg text-sm">
                        <thead>
                            <tr className="text-left">
                                <th colSpan="6" className="py-3 px-4 text-center font-medium">
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-2xl font-bold">Danh Sách Album</h1>
                                        <div className="flex justify-end ml-6">
                                            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium">
                                                Thêm
                                            </button>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                            <tr className="text-left font-medium">
                                <th className="py-3 px-4 text-center text-gray-400 border-b border-gray-300">TIÊU ĐỀ</th>
                                <th className="py-3 px-4 text-center text-gray-400 border-b border-gray-300">NGHỆ SĨ</th>
                                <th className="py-3 px-4 text-center text-gray-400 border-b border-gray-300">NGÀY PHÁT HÀNH</th>
                                <th className="py-3 px-4 text-center text-gray-400 border-b border-gray-300">TỔNG TRACK</th>
                                <th className="py-3 px-4 text-center text-gray-400 border-b border-gray-300">DATE</th>
                                <th className="py-3 px-4 text-center text-gray-400 border-b border-gray-300">HÀNH ĐỘNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-100">
                                <td className="py-3 px-4 text-center font-medium">Album 1</td>
                                <td className="py-3 px-4 text-center font-medium">Nghệ Sĩ 1</td>
                                <td className="py-3 px-4 text-center font-medium">01/01/2024</td>
                                <td className="py-3 px-4 text-center font-medium">10</td>
                                <td className="py-3 px-4 text-center font-medium">19/07/2024</td>
                                <td className="py-3 px-4 text-center">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium">Sửa</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 ml-2 font-medium">Xoá</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="py-3 px-4 text-center font-medium">Album 2</td>
                                <td className="py-3 px-4 text-center font-medium">Nghệ Sĩ 2</td>
                                <td className="py-3 px-4 text-center font-medium">02/02/2024</td>
                                <td className="py-3 px-4 text-center font-medium">12</td>
                                <td className="py-3 px-4 text-center font-medium">19/07/2024</td>
                                <td className="py-3 px-4 text-center">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium">Sửa</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 ml-2 font-medium">Xoá</button>
                                </td>
                            </tr>
                            {/* Thêm các hàng khác ở đây */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Admin;
