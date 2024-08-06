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
  Image,
} from "@chakra-ui/react";
import { Link, useParams, useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useForm } from "react-hook-form";
import { getAlbumById, updateAlbum } from "Admin/src/services/albums";
import { Artists } from "Admin/src/services/artists"; // Assume this function exists
import { toast } from "react-toastify";

const EditAlbum = () => {
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        // Fetch album data
        const album = await getAlbumById(id);
        if (album) {
          const formattedDate = album.release_date.split('T')[0];
          setValue("title", album.title);
          setValue("artist_id", album.artist_id);
          setValue("release_date", formattedDate);
          setValue("total_tracks", album.total_tracks);
          setCurrentImage(album.album_art);
        }

        // Fetch artists data
        const artistRes = await Artists();
        setArtists(artistRes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching album:", error);
        toast.error("Error fetching data");
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("artist_id", data.artist_id);
      formData.append("release_date", data.release_date);
      formData.append("total_tracks", data.total_tracks);
  
      // Check if album_art is provided
      if (data.album_art && data.album_art.length > 0) {
        formData.append("album_art", data.album_art[0]);
      } else {
        toast.error("Album art is required");
        return;
      }
  
      await updateAlbum(id, formData);
      toast.success("Album updated successfully");
      history.push("/admin/albums");
    } catch (error) {
      console.error("Error updating album:", error);
      toast.error("Failed to update album");
    }
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Flex
      direction="column"
      w="100%"
      overflowX={{ sm: "scroll", lg: "hidden" }}
      p="20px"
    >
      <Flex
        align={{ sm: "flex-start", lg: "center" }}
        justify="space-between"
        w="100%"
        px="22px"
        pb="20px"
        mb="10px"
        boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)"
      >
        <Link to="/admin/albums">
          <Button
            variant="outline"
            leftIcon={<Icon as={MdArrowBack} />}
            colorScheme="teal"
            width="70px"
            size="sm"
          >
            Back
          </Button>
        </Link>
      </Flex>

      <Box overflowX="auto">
        <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
          <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              <FormControl id="title" mb="20px" isInvalid={errors.title}>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter album title"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && <Text color="red.500">{errors.title.message}</Text>}
              </FormControl>

              <FormControl id="artist_id" mb="20px" isInvalid={errors.artist_id}>
                <FormLabel>Artist</FormLabel>
                <Select
                  placeholder="Select Artist"
                  {...register("artist_id", { required: "Artist is required" })}
                >
                  {artists.map(artist => (
                    <option key={artist.id} value={artist.id}>{artist.name}</option>
                  ))}
                </Select>
                {errors.artist_id && <Text color="red.500">{errors.artist_id.message}</Text>}
              </FormControl>

              <FormControl id="release_date" mb="20px" isInvalid={errors.release_date}>
                <FormLabel>Release Date</FormLabel>
                <Input
                  type="date"
                  {...register("release_date", { required: "Release Date is required" })}
                />
                {errors.release_date && <Text color="red.500">{errors.release_date.message}</Text>}
              </FormControl>

              <FormControl id="total_tracks" mb="20px" isInvalid={errors.total_tracks}>
                <FormLabel>Total Tracks</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter total tracks"
                  {...register("total_tracks", { required: "Total Tracks is required" })}
                />
                {errors.total_tracks && <Text color="red.500">{errors.total_tracks.message}</Text>}
              </FormControl>

              <FormControl id="album_art" mb="20px" isInvalid={errors.album_art}>
                <FormLabel>Cover Image</FormLabel>
                {currentImage && (
                  <Image
                    src={`http://localhost:4000/uploads/${currentImage}`}
                    alt="Current Album Art"
                    boxSize="50px"
                    objectFit="cover"
                    mb="10px"
                  />
                )}
              <Input
                  type="file"
                  {...register("album_art", {
                    required: currentImage ? false : "Album art is required",
                  })}
                />
                {errors.album_art && <Text color="red.500">{errors.album_art.message}</Text>}
              </FormControl>

              <div className="flex justify-between">
                <Link to="/admin/albums">
                  <Button
                    variant="outline"
                    leftIcon={<Icon as={MdArrowBack} />}
                    colorScheme="teal"
                    width="70px"
                    size="sm"
                  >
                    Back
                  </Button>
                </Link>
                <Button
                  type="submit"
                  colorScheme="teal"
                  size="sm"
                  textAlign="center"
                  width="70px"
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Flex>
  );
};

export default EditAlbum;
