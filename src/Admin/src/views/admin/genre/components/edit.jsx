import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Icon,
  Image
} from "@chakra-ui/react";
import { Link, useParams, useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useForm } from "react-hook-form";
import { getGenreById, updateGenre } from "Admin/src/service/genre";
import { toast } from "react-toastify";

const EditGenre = () => {
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const genre = await getGenreById(id);
        if (genre) {
          setValue("name", genre.name);
          setValue("description", genre.description);
          setCurrentImage(genre.cover_art);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching genre:", error);
        toast.error("Error fetching genre data");
        setLoading(false);
      }
    };

    fetchGenre();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      if (data.cover_art && data.cover_art.length > 0) {
        formData.append("cover_art", data.cover_art[0]);
      } else {
        toast.error("Cover art is required");
        return;
      }

      await updateGenre(id, formData);
      toast.success("Genre updated successfully");
      history.push("/admin/Genre");
    } catch (error) {
      console.error("Error updating genre:", error);
      toast.error("Failed to update genre");
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
      ></Flex>

      <Box overflowX="auto">
        <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
          <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="name" mb="20px" isInvalid={errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter genre name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <Text color="red.500">{errors.name.message}</Text>}
              </FormControl>

              <FormControl id="description" mb="20px" isInvalid={errors.description}>
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter genre description"
                  {...register("description", { required: "Description is required" })}
                />
                {errors.description && <Text color="red.500">{errors.description.message}</Text>}
              </FormControl>

              <FormControl id="cover_art" mb="20px" isInvalid={errors.cover_art}>
                <FormLabel>Cover Art</FormLabel>
                {currentImage && (
                  <Image
                    src={`http://localhost:4000/uploads/${currentImage}`}
                    alt="Current Cover Art"
                    boxSize="50px"
                    objectFit="cover"
                    mb="10px"
                  />
                )}
                <Input
                  type="file"
                  {...register("cover_art", {
                    required: currentImage ? false : "Cover art is required",
                  })}
                />
                {errors.cover_art && <Text color="red.500">{errors.cover_art.message}</Text>}
              </FormControl>

              <div className="flex justify-between">
                <Link to="/admin/Genre">
                  <Button
                    variant="outline"
                    leftIcon={<Icon as={MdArrowBack} />}
                    colorScheme="teal"
                    width={"70px"}
                    size="sm"
                  >
                    Back
                  </Button>
                </Link>
                <Button
                  colorScheme="teal"
                  size="sm"
                  textAlign={"center"}
                  width={"70px"}
                  type="submit"
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

export default EditGenre;
