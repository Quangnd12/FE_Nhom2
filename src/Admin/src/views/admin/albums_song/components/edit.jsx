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
  Icon,
} from "@chakra-ui/react";
import { Link, useParams, useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useForm } from "react-hook-form";
import { getAlbumSongById, updateAlbumSong } from "Admin/src/services/albums_song";
import { toast } from "react-toastify";
import { Album } from "Admin/src/services/albums";
import { Song } from "Admin/src/services/song";

const EditAlbumSong = () => {
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchAlbumsAndSongs = async () => {
      try {
        const albumSong = await getAlbumSongById(id);
        if (albumSong) {
          setValue("albums_id", albumSong.albums_id);
          setValue("songs_id", albumSong.songs_id);
          setValue("date", albumSong.date.split('T')[0]);
        }

        const albumsRes = await Album();
        setAlbums(albumsRes);
        const songsRes = await Song();
        setSongs(songsRes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching album_song:", error);
        toast.error("Error fetching data");
        setLoading(false);
      }
    };

    fetchAlbumsAndSongs();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      await updateAlbumSong(id, data);
      toast.success("Album Song updated successfully");
      history.push("/admin/album_song");
    } catch (error) {
      console.error("Error updating album_song:", error);
      toast.error("Failed to update album_song");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Flex direction="column" w="100%" overflowX={{ sm: "scroll", lg: "hidden" }} p="20px">
      <Flex
        align={{ sm: "flex-start", lg: "center" }}
        justify="space-between"
        w="100%"
        px="22px"
        pb="20px"
        mb="10px"
        boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)"
      >
        <Link to="/admin/album_song" className="text-blue-600 hover:text-blue-800">
          <Icon as={MdArrowBack} width="20px" height="20px" />
          <span>Back to Album Songs</span>
        </Link>
      </Flex>

      <Box overflowX="auto" p="22px">
        <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
          <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="albums_id" mb="4" isInvalid={errors.albums_id}>
                <FormLabel>Album</FormLabel>
                <Select
                  {...register("albums_id", { required: "Album is required" })}
                >
                  <option value="">Select Album</option>
                  {albums.map(album => (
                    <option key={album.id} value={album.id}>{album.title}</option>
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
                  {...register("songs_id", { required: "Song is required" })}
                >
                  <option value="">Select Song</option>
                  {songs.map(song => (
                    <option key={song.id} value={song.id}>{song.title}</option>
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
                  <Button
                    variant="outline"
                    leftIcon={<Icon as={MdArrowBack} />}
                    colorScheme="teal"
                    size="sm"
                  >
                    Back
                  </Button>
                </Link>
                <Button
                  type="submit"
                  colorScheme="teal"
                  size="sm"
                >
                  Update Album Song
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Flex>
  );
};

export default EditAlbumSong;
