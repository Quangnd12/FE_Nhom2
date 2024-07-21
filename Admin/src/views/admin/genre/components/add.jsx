import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";

const AddGenre = () => {

  // State để lưu thông tin thể loại mới
  const [genre, setGenre] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGenre((prevGenre) => ({
      ...prevGenre,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding genre:", genre);
    // Reset form
    setGenre({
      name: "",
      description: "",
    });
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
              <form onSubmit={handleSubmit}>
                <FormControl id="name" mb="4">
                  <FormLabel>Genre Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={genre.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </FormControl>
                <FormControl id="description" mb="4">
                  <FormLabel>Description</FormLabel>
                  <Input
                    type="text"
                    name="description"
                    value={genre.description}
                    onChange={handleChange}
                    required
                  />
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
                    Add Genre
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
