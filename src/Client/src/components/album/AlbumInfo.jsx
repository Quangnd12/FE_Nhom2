import React from "react";

const AlbumInfo = () => {
  return (
    <div className="relative h-3/5 z-10 p-4">
      <div className="absolute top-36 left-4 flex items-center space-x-2">

        <span className="relative top-20 left-5 text-white font-semibold">
          Album
        </span>
        <div className="absolute top-28 left-3 text-white">
          <h1 className="text-8xl font-bold whitespace-nowrap">BẬT NÓ LÊN</h1>
          <div className="flex items-center mt-2">
            <img
              src="path/to/artist-image.jpg"
              alt="Artist"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-lg font-semibold">Soobin Hoàng Sơn</p>
              <p className="text-sm">2024-08-07</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
