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
  Image,
  Select
} from "@chakra-ui/react";
import { Link, useParams, useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useForm } from "react-hook-form";
import { getArtistById, updateArtist } from "Admin/src/services/artists";
import { toast } from "react-toastify";

const EditArtist = () => {
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const artist = await getArtistById(id);
        if (artist) {
          setValue("name", artist.name);
          setValue("personal_info", artist.personal_info);
          setValue("musical_instrument_ability", artist.musical_instrument_ability);
          setValue("vocal_ability", artist.vocal_ability);
          setValue("experience_history", artist.experience_history);
          setValue("role", artist.role);
          setCurrentImage(artist.artist_art);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching artist:", error);
        toast.error("Error fetching artist data");
        setLoading(false);
      }
    };

    fetchArtist();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("personal_info", data.personal_info);
      formData.append("musical_instrument_ability", data.musical_instrument_ability);
      formData.append("vocal_ability", data.vocal_ability);
      formData.append("experience_history", data.experience_history);
      formData.append("role", data.role);
      if (data.artist_art && data.artist_art.length > 0) {
        formData.append("artist_art", data.artist_art[0]);
      } else {
        toast.error("Artist art is required");
        return;
      }

      await updateArtist(id, formData);
      toast.success("Artist updated successfully");
      history.push("/admin/Artist");
    } catch (error) {
      console.error("Error updating artist:", error);
      toast.error("Failed to update artist");
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
        <Link to="/admin/Artist">
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
      </Flex>

      <Box overflowX="auto">
        <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
          <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="name" mb="20px" isInvalid={errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter artist name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <Text color="red.500">{errors.name.message}</Text>}
              </FormControl>
              <FormControl id="personal_info" mb="20px" isInvalid={errors.personal_info}>
                <FormLabel>Personal Information</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter personal information"
                  {...register("personal_info", { required: "Personal information is required" })}
                />
                {errors.personal_info && <Text color="red.500">{errors.personal_info.message}</Text>}
              </FormControl>
              <FormControl id="musical_instrument_ability" mb="20px" isInvalid={errors.musical_instrument_ability}>
                <FormLabel>Musical Instrument Ability</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter musical instrument ability"
                  {...register("musical_instrument_ability", { required: "Musical instrument ability is required" })}
                />
                {errors.musical_instrument_ability && <Text color="red.500">{errors.musical_instrument_ability.message}</Text>}
              </FormControl>
              <FormControl id="vocal_ability" mb="20px" isInvalid={errors.vocal_ability}>
                <FormLabel>Vocal Ability</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter vocal ability"
                  {...register("vocal_ability", { required: "Vocal ability is required" })}
                />
                {errors.vocal_ability && <Text color="red.500">{errors.vocal_ability.message}</Text>}
              </FormControl>
              <FormControl id="experience_history" mb="20px" isInvalid={errors.experience_history}>
                <FormLabel>Experience History</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter experience history"
                  {...register("experience_history", { required: "Experience history is required" })}
                />
                {errors.experience_history && <Text color="red.500">{errors.experience_history.message}</Text>}
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
              <FormControl id="artist_art" mb="20px" isInvalid={errors.artist_art}>
                <FormLabel>Artist Art</FormLabel>
                {currentImage && (
                  <Image
                    src={`http://localhost:4000/uploads/${currentImage}`}
                    alt="Current Artist Art"
                    boxSize="50px"
                    objectFit="cover"
                    mb="10px"
                  />
                )}
                <Input
                  type="file"
                  {...register("artist_art", {
                    required: currentImage ? false : "Artist art is required",
                  })}
                />
                {errors.artist_art && <Text color="red.500">{errors.artist_art.message}</Text>}
              </FormControl>
              <div className="flex justify-between">
                <Link to="/admin/Artist">
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

export default EditArtist;
