import React from "react";
import 'tailwindcss/tailwind.css';
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import { MdArrowBack } from "react-icons/md";


const EditSong = () => {
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
          <Text color={textColor} fontSize='xl' fontWeight='600'>
          </Text>
        </Flex>

        <Box overflowX="auto">
          <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
            <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-2xl font-bold mb-6 text-left">Edit Song</h1>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Audio</label>
                    <input
                      type="file" 
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Title</label>
                    <input
                      type="text" value={'Em của ngày hôm qua'}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Duration</label>
                    <input
                      type="text" value={'3:03'}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Tempo</label>
                    <input
                      type="text" value={'1x'}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">More</label>
                    <input
                      type="text" value={'256kbps'}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Genre</label>
                    <input
                      type="text" value={'Nhạc hiện đại'}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Link to='/admin/song'>
                    <Icon as={MdArrowBack} width='20px' height='20px' color='inherit' />
                  </Link>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-medium"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>

        </Box>
      </Flex>
    </>
  );
};

export default EditSong;