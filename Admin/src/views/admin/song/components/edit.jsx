import React from "react";
import 'tailwindcss/tailwind.css';
import { Box, Flex, Text, useColorModeValue,Button } from "@chakra-ui/react";
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

        <Box overflowX="auto" p="22px">
          <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
            <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-8">
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
                    <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500" >                 
                      <option value="" >40-60 BPM ( Very slow) </option>
                      <option value="" >66-76 BPM (Slow) </option>
                      <option value="" >76-108 BPM (Moderate, walking) </option>
                      <option value="" >108-120 BPM (Medium) </option>
                      <option value="" >120-168 BPM (Fast, upbeat) </option>
                      <option value="" >168-200 BPM (Very fast) </option>
                      <option value="" >Over 200 BPM (Extremely fast) </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">More</label>
                    <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500" >                    
                      <option value="" >128kbps</option>
                      <option value="" >258kbps</option>
                      <option value="" >320kbps</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">Genre</label>
                    <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-green-500 focus:border-green-500" >                     
                      <option value="" >Pop</option>
                      <option value="" >Jazz</option>
                      <option value="" >Rock</option>
                      <option value="" >Latin</option>
                      <option value="" >Ballad</option>
                      <option value="" >EDM</option>
                      <option value="" >Country music</option>
                      <option value="" >EDM</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Link to="/admin/song">
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

export default EditSong;