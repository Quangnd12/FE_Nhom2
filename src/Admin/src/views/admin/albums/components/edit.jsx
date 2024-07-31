import React from "react";
import 'tailwindcss/tailwind.css';
import { Box, Flex, Text, useColorModeValue, Icon, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

const EditAlbum = () => {
  const textColor = useColorModeValue("navy.700", "white");

  return (
    <>
      <Flex
        direction='column'
        w='100%'
        overflowX={{ sm: "scroll", lg: "hidden" }}>
        <Flex
          align={{ sm: "flex-start", lg: "center" }}
          justify='space-between'
          w='100%'
          px='22px'
          pb='20px'
          mb='10px'
          boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'>
        </Flex> 
        

        <Box overflowX="auto">
          <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
            <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-2xl font-bold mb-6 text-left">Edit Album</h1>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Title</label>
                    <input
                      type="text"
                      defaultValue={'Sky Tour'}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Artist</label>
                    <input
                      type="text"
                      defaultValue={'Sơn Tùng MTP'}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Release Date</label>
                    <input
                      type="date"
                      defaultValue={'2020-06-12'}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Total Tracks</label>
                    <input
                      type="number"
                      defaultValue={8}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                <Link to="/admin/albums">
                  <Button
                    variant="outline"
                    leftIcon={<Icon as={MdArrowBack} />}
                    colorScheme="teal"
                    width={'70px'}
                    size="sm"
                  >
                    Back
                  </Button>
                  </Link>
                  <Button                 
                    colorScheme="teal"
                    size="sm" 
                    textAlign={'center'}
                    width={'70px'}>                   
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

export default EditAlbum;