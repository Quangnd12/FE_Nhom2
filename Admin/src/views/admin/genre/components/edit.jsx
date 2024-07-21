import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
  Icon
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const EditGenre = () => {
  // const { id } = useParams();

  // Dummy data for form fields
  const genreData = {
    name: "Genre Name",
    description: "Genre Description",
  };

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
            <FormControl id="name" mb="20px">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                defaultValue={genreData.name}
                placeholder="Enter genre name"
              />
            </FormControl>
            <FormControl id="description" mb="20px">
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                defaultValue={genreData.description}
                placeholder="Enter genre description"
              />
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
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </Flex>
  );
};

export default EditGenre;
