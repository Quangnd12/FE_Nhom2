import React, { useState } from 'react';

const DeleteSong = ({ isOpen, onClose, onDelete, songId }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  if (!isOpen) return null;

  const handleDeleteClick = () => {
    if (confirmDelete) {
      onDelete(songId);
      setConfirmDelete(false);
    } else {
      setConfirmDelete(true);
    }
  };

  const handleCancel = () => {
    setConfirmDelete(false); 
    onClose();
  };


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
        <p className="text-red-700 mb-4">
          {confirmDelete 
            ? "If you delete this song, all related records in tables with foreign keys will also be deleted." 
            : "Are you sure you want to delete this item?"}
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteClick}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            {confirmDelete ? "Confirm Delete" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteSong;
