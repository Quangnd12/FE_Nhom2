import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";

import ListPlaylist from "./components/list";
import Card from "../../../components/card/Card.js";
import { tableColumnsPlaylists } from "./variables/tableColumnsTopCreators";

function Playlist() {
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <Grid
        mb='20px'
        gridTemplateColumns={{ base: "1fr" }}
        gap={{ base: "20px" }}
        display='block'>
        <Flex flexDirection='column'>
          <Card px='0px' mb='20px'>
            <ListPlaylist
              columnsData={tableColumnsPlaylists}
            />
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Playlist;

export { default as AddPlaylist } from './components/add';
export { default as EditPlaylist } from './components/edit';
export { default as DeletePlaylist } from './components/delete';
