import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useForm } from "react-hook-form";
import { addArtist } from "Admin/src/services/artists";
import { toast } from "react-toastify";

const AddArtist = () => {
  const history = useHistory(); // Using useHistory for navigation

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("artist_art", data.artist_art[0]);
    formData.append("personal_info", data.personal_info);
    formData.append("musical_instrument_ability", data.musical_instrument_ability);
    formData.append("vocal_ability", data.vocal_ability);
    formData.append("experience_history", data.experience_history);
    formData.append("role", data.role);

    try {
      await addArtist(formData);
      toast.success("Added successfully");
      reset();
      history.push("/admin/artist"); // Redirecting after successful addition
    } catch (error) {
      if (error.message === "Artist already exists") {
        toast.error("Artist already exists!");
      } else {
        toast.error(error.message || "Failed to add artist");
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
        <Link to="/admin/artist" className="text-blue-600 hover:text-blue-800">
          <Icon as={MdArrowBack} width="20px" height="20px" />
          <span>Back to Artists</span>
        </Link>
      </Flex>

      <Box overflowX="auto" p="22px">
        <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
          <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              <FormControl id="name" mb="4" isInvalid={errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Artist Name"
                />
                {errors.name && (
                  <Text color="red.500" fontSize="sm">
                    {errors.name.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="personal_info" mb="4" isInvalid={errors.personal_info}>
                <FormLabel>Personal Info</FormLabel>
                <Textarea
                  {...register("personal_info", { required: "Personal Info is required" })}
                  placeholder="Personal Information"
                />
                {errors.personal_info && (
                  <Text color="red.500" fontSize="sm">
                    {errors.personal_info.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="musical_instrument_ability" mb="4" isInvalid={errors.musical_instrument_ability}>
                <FormLabel>Musical Instrument Ability</FormLabel>
                <Input
                  type="text"
                  {...register("musical_instrument_ability", { required: "Musical Instrument Ability is required" })}
                  placeholder="Musical Instrument Ability"
                />
                {errors.musical_instrument_ability && (
                  <Text color="red.500" fontSize="sm">
                    {errors.musical_instrument_ability.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="vocal_ability" mb="4" isInvalid={errors.vocal_ability}>
                <FormLabel>Vocal Ability</FormLabel>
                <Input
                  type="text"
                  {...register("vocal_ability", { required: "Vocal Ability is required" })}
                  placeholder="Vocal Ability"
                />
                {errors.vocal_ability && (
                  <Text color="red.500" fontSize="sm">
                    {errors.vocal_ability.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="experience_history" mb="4" isInvalid={errors.experience_history}>
                <FormLabel>Experience History</FormLabel>
                <Textarea
                  {...register("experience_history", { required: "Experience History is required" })}
                  placeholder="Experience History"
                />
                {errors.experience_history && (
                  <Text color="red.500" fontSize="sm">
                    {errors.experience_history.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="role" mb="4" isInvalid={errors.role}>
                <FormLabel>Role</FormLabel>
                <Select {...register("role", { required: "Role is required" })}>
                  <option value="Singer">Singer</option>
                  <option value="Musician">Musician</option>
                  <option value="Artist">Artist</option>
                </Select>
                {errors.role && (
                  <Text color="red.500" fontSize="sm">
                    {errors.role.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="artist_art" mb="4" isInvalid={errors.artist_art}>
                <FormLabel>Cover Image</FormLabel>
                <Input
                  type="file"
                  {...register("artist_art", { required: "Cover image is required" })}
                />
                {errors.artist_art && (
                  <Text color="red.500" fontSize="sm">
                    {errors.artist_art.message}
                  </Text>
                )}
              </FormControl>

              <div className="flex justify-between">
                <Link to="/admin/artist">
                  <Button variant="outline" leftIcon={<Icon as={MdArrowBack} />} colorScheme="teal" size="sm">
                    Back
                  </Button>
                </Link>
                <Button type="submit" colorScheme="teal" size="sm">
                  Add Artist
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Flex>
  );
};

export default AddArtist;
