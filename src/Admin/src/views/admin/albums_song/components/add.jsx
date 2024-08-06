import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useForm } from "react-hook-form";
import { addAlbumSong } from "Admin/src/services/albums_song";
import { toast } from "react-toastify";
import { Album } from "Admin/src/services/albums";
import { Song } from "Admin/src/services/song";

const AddAlbumSong = () => {
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const fetchAlbumsAndSongs = async () => {
      try {
        const albumsRes = await Album();
        setAlbums(albumsRes);
        const songsRes = await Song();
        setSongs(songsRes);
      } catch (error) {
        console.error("Failed to fetch albums and songs", error);
      }
    };
    fetchAlbumsAndSongs();
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("albums_id", data.albums_id);
    formData.append("songs_id", data.songs_id);
    formData.append("date", data.date);

    try {
      await addAlbumSong(data);
      toast.success("Added successfully");
      reset();
      history.push("/admin/album_song");
    } catch (error) {
      toast.error("Failed to add album_song");
    }
  };

  return (
    <Flex direction="column" w="100%" overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex
        align={{ sm: "flex-start", lg: "center" }}
        justify="space-between"
        w="100%"
        px="22px"
        pb="20px"
        mb="10px"
        boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)"
      >
        <Link to="/admin/albums_songs" className="text-blue-600 hover:text-blue-800">
          <Icon as={MdArrowBack} width="20px" height="20px" />
          <span>Back to Album Songs</span>
        </Link>
      </Flex>

      <Box overflowX="auto" p="22px">
        <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
          <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              <FormControl id="albums_id" mb="4" isInvalid={errors.albums_id}>
                <FormLabel>Album</FormLabel>
                <Select
                  {...register("albums_id", {
                    required: "Album is required",
                  })}
                >
                  <option value="">Select Album</option>
                  {albums.map((album) => (
                    <option key={album.id} value={album.id}>
                      {album.title}
                    </option>
                  ))}
                </Select>
                {errors.albums_id && (
                  <Text color="red.500" fontSize="sm">
                    {errors.albums_id.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="songs_id" mb="4" isInvalid={errors.songs_id}>
                <FormLabel>Song</FormLabel>
                <Select
                  {...register("songs_id", {
                    required: "Song is required",
                  })}
                >
                  <option value="">Select Song</option>
                  {songs.map((song) => (
                    <option key={song.id} value={song.id}>
                      {song.title}
                    </option>
                  ))}
                </Select>
                {errors.songs_id && (
                  <Text color="red.500" fontSize="sm">
                    {errors.songs_id.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="date" mb="4" isInvalid={errors.date}>
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  {...register("date", { required: "Date is required" })}
                  placeholder="Date"
                />
                {errors.date && (
                  <Text color="red.500" fontSize="sm">
                    {errors.date.message}
                  </Text>
                )}
              </FormControl>

              <div className="flex justify-between">
                <Link to="/admin/album_song">
                  <Button variant="outline" leftIcon={<Icon as={MdArrowBack} />} colorScheme="teal" size="sm">
                    Back
                  </Button>
                </Link>
                <Button type="submit" colorScheme="teal" size="sm">
                  Add Album Song
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Flex>
  );
};

export default AddAlbumSong;