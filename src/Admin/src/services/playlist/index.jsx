import request from "Admin/src/config/apiConfig";

// Fetch all playlists
const Playlists = async () => {
    try {
        const res = await request({
            method: "GET",
            path: "/api/playlists",
        });
        return res;
    } catch (error) {
        console.error('Error fetching playlists:', error);
        throw error;
    }
};
const getPlaylistById = async (id) => {
    const res = await request({
        method: "GET",
        path: `/api/playlists/${id}`,
    });
    return res;
};
// Add a new playlist
const addPlaylist = async (formData) => {
    try {
        const res = await request({
            method: "POST",
            path: "/api/playlists",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return res;
    } catch (error) {
        console.error('Error adding playlist:', error);
        throw error;
    }
};


const updatePlaylist = async (id, formData) => {
    const res = await request({
        method: "PUT",
        path: `/api/playlists/${id}`,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return res;
};

const deletePlaylist = async (id) => {
    const res = await request({
        method: "DELETE",
        path: `/api/playlists/${id}`,
    });
    return res;
};

export { Playlists, addPlaylist, updatePlaylist, deletePlaylist, getPlaylistById };
