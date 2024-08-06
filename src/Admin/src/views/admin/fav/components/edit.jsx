import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Link, useParams, useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useForm } from "react-hook-form";
import { getFavoriteId, updateFavorite } from "Admin/src/service/fav";
import { User } from "Admin/src/service/user";
import { Artist } from "Admin/src/service/artist";
import { toast } from "react-toastify";

const EditFollow = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const favorite = await getFavoriteId(id);
        const userRes = await User();
        const artistRes = await Artist();

        if (favorite) {
          setValue("user_id", favorite.user_id);
          setValue("artist_id", favorite.artist_id);
        }
        setUsers(userRes);
        setArtists(artistRes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      await updateFavorite(id, data);
      toast.success("Favorite updated successfully");
      history.push("/admin/favorite");
    } catch (error) {
      console.error("Error updating follow:", error);
      toast.error("Failed to update follow");
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
              <FormControl id="user_id" mb="4" isInvalid={errors.user_id}>
                <FormLabel>User</FormLabel>
                <Select
                  {...register("user_id", { required: "User is required" })}
                >
                  <option value="">Select User</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.username}
                    </option>
                  ))}
                </Select>
                {errors.user_id && (
                  <Text color="red.500">{errors.user_id.message}</Text>
                )}
              </FormControl>

              <FormControl id="artist_id" mb="4" isInvalid={errors.artist_id}>
                <FormLabel>Artist</FormLabel>
                <Select
                  {...register("artist_id", { required: "Artist is required" })}
                >
                  <option value="">Select Artist</option>
                  {artists.map((artist) => (
                    <option key={artist.id} value={artist.id}>
                      {artist.name}
                    </option>
                  ))}
                </Select>
                {errors.artist_id && (
                  <Text color="red.500">{errors.artist_id.message}</Text>
                )}
              </FormControl>

              <div className="flex justify-between">
                <Link to="/admin/favorite">
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
                  type="submit"
                  colorScheme="teal"
                  size="sm"
                  textAlign={"center"}
                  width={"70px"}
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

export default EditFollow;
