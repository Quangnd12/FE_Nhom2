import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
import { useForm } from "react-hook-form";
import { addGenre } from "Admin/src/service/genre";
import { toast } from "react-toastify";

const AddGenre = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("cover_art", data.cover_art[0]);

    try {
      await addGenre(formData);
      toast.success("Added successfully");
      reset();
    } catch (error) {
      if (error.message === "Genre already exists") {
        toast.error("Genre already exists!");
      } else {
        toast.error(error.message || "Failed to add genre");
      }
    }
  };

  return (
    <>
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
        ></Flex>
        <Box overflowX="auto" p="22px">
          <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
            <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <FormControl id="name" mb="4" isInvalid={errors.name}>
                  <FormLabel>Genre Name</FormLabel>
                  <Input
                    type="text"
                    {...register("name", { required: "Genre Name is required" })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                  {errors.name && (
                    <Text color="red.500" fontSize="sm">
                      {errors.name.message}
                    </Text>
                  )}
                </FormControl>
                <FormControl id="description" mb="4" isInvalid={errors.description}>
                  <FormLabel>Description</FormLabel>
                  <Input
                    type="text"
                    {...register("description", {
                      required: "Description is required",
                    })}
                  />
                  {errors.description && (
                    <Text color="red.500" fontSize="sm">
                      {errors.description.message}
                    </Text>
                  )}
                </FormControl>
                <FormControl id="cover_art" mb="4" isInvalid={errors.cover_art}>
                  <FormLabel>Cover Image</FormLabel>
                  <Input
                    type="file"
                    {...register("cover_art", { required: "Cover image is required" })}
                  />
                  {errors.cover_art && (
                    <Text color="red.500" fontSize="sm">
                      {errors.cover_art.message}
                    </Text>
                  )}
                </FormControl>
                <div className="flex justify-between">
                  <Link to="/admin/genre">
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
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Flex>
    </>
  );
};

export default AddGenre;
