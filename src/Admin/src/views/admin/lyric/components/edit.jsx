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
  Textarea,
} from "@chakra-ui/react";
import { Link, useParams, useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useForm } from "react-hook-form";
import { getLyricById, updateLyric } from "Admin/src/service/lyric";
import { Song } from "Admin/src/service/song";
import { toast } from "react-toastify";

const EditLyric = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [songs, setSongs] = useState([]);
  const [currentLyric, setCurrentLyric] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [songRes, lyricRes] = await Promise.all([
          Song(),
          getLyricById(id),
        ]);
        console.log("Fetched songs:", songRes);
        console.log("Fetched lyric:", lyricRes);
        setSongs(songRes);
        setCurrentLyric(lyricRes);

        // Set form values
        setValue("song_id", lyricRes.song_id);
        setValue("content", lyricRes.content);
        setValue("language", lyricRes.language);
      } catch (error) {
        console.error("Failed to fetch data", error);
        toast.error("Failed to load data");
      }
    };
    fetchData();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      await updateLyric(id, data);
      toast.success("Lyric updated successfully");
      history.push("/admin/lyric");
    } catch (error) {
      console.error("Failed to update lyric", error);
      toast.error("Failed to update lyric");
    }
  };

  if (!currentLyric) {
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
        boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)">
       
      </Flex>
      <Box overflowX="auto">
        <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
          <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="song_id" mb="4" isInvalid={errors.song_id}>
                <FormLabel>Song</FormLabel>
                <Select
                  {...register("song_id", { required: "Song is required" })}
                  placeholder="Select a song"
                >
                  {songs && songs.length > 0 ? (
                    songs.map((song) => (
                      <option key={song.id} value={song.id}>
                        {song.title}
                      </option>
                    ))
                  ) : (
                    <option disabled>No songs available</option>
                  )}
                </Select>
                {errors.song_id && (
                  <Text color="red.500" fontSize="sm">
                    {errors.song_id.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="content" mb="4" isInvalid={errors.content}>
                <FormLabel>Content</FormLabel>
                <Textarea
                  {...register("content", { required: "Content is required" })}
                  placeholder="Enter lyric content"
                />
                {errors.content && (
                  <Text color="red.500" fontSize="sm">
                    {errors.content.message}
                  </Text>
                )}
              </FormControl>

              <FormControl id="language" mb="4" isInvalid={errors.language}>
                <FormLabel>Language</FormLabel>
                <Input
                  {...register("language", {
                    required: "Language is required",
                  })}
                  placeholder="Enter language"
                />
                {errors.language && (
                  <Text color="red.500" fontSize="sm">
                    {errors.language.message}
                  </Text>
                )}
              </FormControl>

              <Flex justify="space-between">
                <Link to="/admin/lyric">
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
              </Flex>
            </form>
          </div>
        </div>
      </Box>
    </Flex>
  );
};

export default EditLyric;
