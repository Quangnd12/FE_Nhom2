import React from "react";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useForm } from "react-hook-form";
import { addPlaylist } from "Admin/src/services/playlist";
import { toast } from "react-toastify";

const AddPlaylist = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("public", data.public ? 'public' : 'private');
    if (data.cover_image && data.cover_image.length > 0) {
      formData.append("cover_image", data.cover_image[0]);
    } else {
      toast.error("Cover image is required");
      return;
    }

    try {
      await addPlaylist(formData);
      toast.success("Added successfully");
      reset();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to add playlist");
      }
    }
  };

  return (
    <Flex
      direction="column"
      w="100%"
      overflowX={{ sm: "scroll", lg: "hidden" }}
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
        <Text fontSize="xl" fontWeight="600">
          Add New Playlist
        </Text>
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
                {errors.title && (
                  <Text color="red.500" fontSize="sm">
                    {errors.title.message}
                  </Text>
                )}
              </FormControl>
              <FormControl id="cover_image" mb="4" isInvalid={errors.cover_image}>
                <FormLabel>Cover Image</FormLabel>
                <Input
                  type="file"
                  {...register("cover_image", { required: "Cover image is required" })}
                />
                {errors.cover_image && (
                  <Text color="red.500" fontSize="sm">
                    {errors.cover_image.message}
                  </Text>
                )}
              </FormControl>
              <FormControl id="publicStatus" mb="4">
                <FormLabel>Public</FormLabel>
                <Switch {...register("public")} />
              </FormControl>
              <div className="flex justify-between">
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
                  Add Playlist
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Flex>
  );
};

export default AddPlaylist;
