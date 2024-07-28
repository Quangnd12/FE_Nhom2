import React from "react";
import { Box, Button, Flex, FormControl, FormLabel, Input, Text, useColorModeValue, Icon } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

const AddPlaylist = () => {
  const textColor = useColorModeValue("navy.700", "white");

  return (
    <Flex direction='column' w='100%' overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex
        align={{ sm: "flex-start", lg: "center" }}
        justify='space-between'
        w='100%'
        px='22px'
        pb='20px'
        mb='10px'
        boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'
      >
        <Text color={textColor} fontSize='xl' fontWeight='600'>
          Add New Playlist
        </Text>
      </Flex>

      <Box overflowX="auto" p='6'>
        <Box bg='white' rounded='2xl' shadow='lg' p='8' maxW='6xl' mx='auto'>
          <form>
            <Flex direction='column' gap='6'>
              <Flex direction={{ base: 'column', md: 'row' }} gap='6'>
                <FormControl>
                  <FormLabel>Playlist Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Last Modified</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Flex>
              <Flex direction={{ base: 'column', md: 'row' }} gap='6'>
                <FormControl>
                  <FormLabel>Song Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Artist Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Album Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Flex>
              <Flex direction={{ base: 'column', md: 'row' }} gap='6'>
                <FormControl>
                  <FormLabel>Local File Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Followers</FormLabel>
                  <Input type="number" />
                </FormControl>
              </Flex>
              <Flex justify='space-between' align='center'>
                <Link to='/admin/playlist'>
                  <Icon as={MdArrowBack} width='20px' height='20px' color='gray.500' />
                </Link>
                <Button
                  type="submit"
                  colorScheme='green'
                >
                  Save
                </Button>
              </Flex>
            </Flex>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default AddPlaylist;
