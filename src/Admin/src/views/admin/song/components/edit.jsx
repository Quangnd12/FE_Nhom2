import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import { Box, Flex, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import { MdArrowBack } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useHistory,useParams } from "react-router-dom";
import { editSong,getbyIdSong } from "../../../../services/song";
import { Genre } from "../../../../services/genre";
import { Artists } from "../../../../services/artist";
import { Album } from "../../../../services/album";
import { toast } from "react-toastify";

const EditSong = () => {
  const { id } = useParams();
  const { register, handleSubmit, formState,setValue } = useForm();
  const history = useHistory();
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const album = await Album();
    const artist = await Artists();
    const genre = await Genre();
    setArtists(artist);
    setAlbums(album);
    setGenres(genre);

    const data  = await getbyIdSong(id);
    setValue("title", data.title);
    setValue("artist_id", data.artist_id);
    setValue("albums_id", data.albums_id);
    setValue("genre_id", data.genre_id);
    setValue("duration_ms", data.duration_ms);
  };



  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('artist_id', data.artist_id);
    formData.append('albums_id', data.albums_id);
    formData.append('genre_id', data.genre_id);
    if (data.audio_file.length > 0) formData.append('audio_file', data.audio_file[0]);
    if (data.cover_image.length > 0) formData.append('cover_image', data.cover_image[0]);
    formData.append('duration_ms', data.duration_ms);


    try {
      await editSong(id, formData);
      console.log(formData);
      toast.success("Updated successfully");
      history.push("/admin/song");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Flex
        direction='column'
        w='100%'
        overflowX={{ sm: "scroll", lg: "hidden" }}>
        <Flex
          align={{ sm: "flex-start", lg: "center" }}
          justify='space-between'
          w='100%'
          px='22px'
          pb='20px'
          mb='10px'
          boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'>
        </Flex>

        <Box overflowX="auto" p="22px">
          <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
            <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Audio</label>
                    <input
                      type="file" name="audio_file"
                      accept=".mp3,audio/*" 
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      {...register("audio_file", { required: "Audio file is required" })}
                    />
                    {formState.errors.audio_file && (
                      <small className="text-red-500">{formState.errors.audio_file.message}</small>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Image</label>
                    <input
                      type="file" name="cover_image"
                      accept="image/png, image/jpeg, image/gif"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      {...register("cover_image", { required: "Cover image is required" })}
                    />
                    {formState.errors.cover_image && (
                      <small className="text-red-500">{formState.errors.cover_image.message}</small>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Title</label>
                    <input
                      type="text" name="title"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      {...register("title", { required: "Title is required" })}
                    />
                    {formState.errors.title && (
                      <small className="text-red-500">{formState.errors.title.message}</small>
                    )}
                  </div>
                 
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Artist</label>
                    <select name="artist_id"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      {...register("artist_id", { required: "Artist is required" })}
                    >
                      <option value="">-Select-</option>
                      {artists.map((artist) => (
                        <option key={artist.id} value={artist.id}>{artist.name}</option>
                      ))}
                    </select>
                    {formState.errors.artist_id && (
                      <small className="text-red-500">{formState.errors.artist_id.message}</small>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Album</label>
                    <select
                      name="albums_id"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      {...register("albums_id", { required: "Album is required" })}
                    >
                      <option value="">-Select-</option>
                      {albums.map((album) => (
                        <option key={album.id} value={album.id}>{album.title}</option>
                      ))}
                    </select>
                    {formState.errors.albums_id && (
                      <small className="text-red-500">{formState.errors.albums_id.message}</small>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Genre</label>
                    <select
                      name="genre_id"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      {...register("genre_id", { required: "Genre is required" })}
                    >
                      <option value="">-Select-</option>
                      {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                      ))}
                    </select>
                    {formState.errors.genre_id && (
                      <small className="text-red-500">{formState.errors.genre_id.message}</small>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Link to="/admin/song">
                    <Button
                      variant="outline"
                      leftIcon={<Icon as={MdArrowBack} />}
                      colorScheme="teal"
                      width={'70px'}
                      size="sm"
                    >
                      Back
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    colorScheme="teal"
                    size="sm"
                    textAlign={'center'}
                    width={'70px'}>
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Flex>
    </>
  );
};

export default EditSong;