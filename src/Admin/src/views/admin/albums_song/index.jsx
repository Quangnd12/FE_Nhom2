import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";

import ListAlbumSong from "./components/list";

import { tableColumnsAlbumsSong } from "./variables/tableColumnsTopCreators";
import Card from "../../../components/card/Card";

function Album_song() {
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <Grid
        mb="20px"
        gridTemplateColumns={{ base: "1fr" }}
        gap={{ base: "20px" }}
        display="block"
      >
        <Flex flexDirection="column">
          <Card px="0px" mb="20px">
            <ListAlbumSong
           
              columnsData={tableColumnsAlbumsSong}
            />
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Album_song;

export { default as AddAlbumSong } from './components/add';
export { default as EditAlbumSong } from './components/edit';
export { default as DeleteAlbumSong } from './components/delete';
