import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Switch,
  Icon,
  Image,
  Spinner
} from "@chakra-ui/react";
import { Link, useParams, useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useForm } from "react-hook-form";
import { getPlaylistById, updatePlaylist } from "Admin/src/services/playlist";
import { toast } from "react-toastify";

const EditPlaylist = () => {
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const playlist = await getPlaylistById(id);
        if (playlist) {
          setValue("title", playlist.title);
          setValue("public", playlist.public);
          setCurrentImage(playlist.cover_image);
          setIsPublic(playlist.public);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching playlist:", error);
        toast.error("Error fetching playlist data");
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("public", isPublic ? 'public' : 'private');
    if (data.cover_image && data.cover_image.length > 0) {
      formData.append("cover_image", data.cover_image[0]);
    } else if (!currentImage) {
      toast.error("Cover image is required");
      return;
    }

    try {
      await updatePlaylist(id, formData);
      toast.success("Playlist updated successfully");
      history.push("/admin/playlist");
    } catch (error) {
      console.error("Error updating genre:", error);
      toast.error("Failed to update genre");
    }
  };

  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <Flex direction="column" w="100%" overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex align="center" justify="space-between" w="100%" px="22px" pb="20px" mb="10px" boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)">
        <Text fontSize="xl" fontWeight="600">Edit Playlist</Text>
      </Flex>
      <Box overflowX="auto" p="22px">
        <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
          <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              <FormControl id="title" mb="4" isInvalid={errors.title}>
                <FormLabel>Playlist Title</FormLabel>
                <Input
                  type="text"
                  {...register("title", { required: "Playlist title is required" })}
                />
                {errors.title && <Text color="red.500">{errors.title.message}</Text>}
              </FormControl>
              <FormControl id="cover_image" mb="4" isInvalid={errors.cover_image}>
                <FormLabel>Cover Image</FormLabel>
                {currentImage && (
                  <Image
                    src={`http://localhost:4000/uploads/${currentImage}`}
                    alt="Current Cover Image"
                    boxSize="150px"
                    objectFit="cover"
                    mb="10px"
                  />
                )}
                <Input
                  type="file"
                  {...register("cover_image")}
                />
                {errors.cover_image && <Text color="red.500">{errors.cover_image.message}</Text>}
              </FormControl>
              <FormControl id="publicStatus" mb="4">
                <FormLabel>Public</FormLabel>
                <Switch
                  isChecked={isPublic}
                  onChange={(e) => setIsPublic(e.target.checked)}
                />
                <Text mt="2">{isPublic ? "Public" : "Private"}</Text>
              </FormControl>
              <Flex justify="space-between">
                <Link to="/admin/playlist">
                  <Button
                    variant="outline"
                    leftIcon={<Icon as={MdArrowBack} />}
                    colorScheme="teal"
                    size="sm"
                  >
                    Back
                  </Button>
                </Link>
                <Button type="submit" colorScheme="teal" size="sm">
                  Save
                </Button>
              </Flex>
            </form>
          </div>
        </div>
      </Box>
    </Flex>
  );
};

export default EditPlaylist;
