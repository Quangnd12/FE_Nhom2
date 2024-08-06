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
  Textarea,
  useColorModeValue,
  Icon
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useForm } from "react-hook-form";
import { addAlbum } from "Admin/src/services/albums";
import { toast } from "react-toastify";
import { Artists } from "Admin/src/services/artists";

const AddAlbum = () => {
  const [artists, setArtists] = useState([]);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const artistRes = await Artists();
        setArtists(artistRes);
      } catch (error) {
        console.error("Failed to fetch artists", error);
      }
    };
    fetchArtists();
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("album_art", data.album_art[0]);
    formData.append("artist_id", data.artist_id);
    formData.append("release_date", data.release_date);
    formData.append("total_tracks", data.total_tracks);

    try {
      await addAlbum(formData);
      toast.success("Added successfully");
      reset();
      history.push("/admin/albums");
    } catch (error) {
      if (error.message === "Album already exists") {
        toast.error("Album already exists!");
      } else {
        toast.error(error.message || "Failed to add album");
      }
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
        <Link to="/admin/albums" className="text-blue-600 hover:text-blue-800">
          <Icon as={MdArrowBack} width="20px" height="20px" />
          <span>Back to Albums</span>
        </Link>
      </Flex>

      <Box overflowX="auto" p="22px">
        <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
          <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              <FormControl id="title" mb="4" isInvalid={errors.title}>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  {...register("title", { required: "Title is required" })}
                  placeholder="Album Title"
                />
                {errors.title && (
                  <Text color="red.500" fontSize="sm">
                    {errors.title.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="artist_id" mb="4" isInvalid={errors.artist_id}>
                <FormLabel>Artist</FormLabel>
                <Select
                  {...register("artist_id", {
                    required: "Artist is required",
                  })}
                >
                  <option value="">Select Artist</option>
                  {artists.map((artist) => (
                    <option key={artist.id} value={artist.id}>
                      {artist.name}
                    </option>
                  ))}
                </Select>
                {errors.artist_id && (
                  <Text color="red.500" fontSize="sm">
                    {errors.artist_id.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="release_date" mb="4" isInvalid={errors.release_date}>
                <FormLabel>Release Date</FormLabel>
                <Input
                  type="date"
                  {...register("release_date", { required: "Release Date is required" })}
                  placeholder="Release Date"
                />
                {errors.release_date && (
                  <Text color="red.500" fontSize="sm">
                    {errors.release_date.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="total_tracks" mb="4" isInvalid={errors.total_tracks}>
                <FormLabel>Total Tracks</FormLabel>
                <Input
                  type="number"
                  {...register("total_tracks", { required: "Total Tracks is required" })}
                  placeholder="Total Tracks"
                />
                {errors.total_tracks && (
                  <Text color="red.500" fontSize="sm">
                    {errors.total_tracks.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="album_art" mb="4" isInvalid={errors.album_art}>
                <FormLabel>Cover Image</FormLabel>
                <Input
                  type="file"
                  {...register("album_art", { required: "Cover image is required" })}
                />
                {errors.album_art && (
                  <Text color="red.500" fontSize="sm">
                    {errors.album_art.message}
                  </Text>
                )}
              </FormControl>

              <div className="flex justify-between">
                <Link to="/admin/albums">
                  <Button variant="outline" leftIcon={<Icon as={MdArrowBack} />} colorScheme="teal" size="sm">
                    Back
                  </Button>
                </Link>
                <Button type="submit" colorScheme="teal" size="sm">
                  Add Album
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Flex>
  );
};

export default AddAlbum;
