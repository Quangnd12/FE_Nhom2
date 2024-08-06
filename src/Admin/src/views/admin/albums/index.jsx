import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";

import ListAlbum from "./components/list";
import tableDataTopCreators from './variables/tableDataTopCreators.json'
import { tableColumnsAlbums } from "./variables/tableColumnsTopCreators";
import Card from "../../../components/card/Card";

function Album() {
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
            <ListAlbum
              tableData={tableDataTopCreators}
              columnsData={tableColumnsAlbums}
            />
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Album;

export { default as AddAlbum } from './components/add';
export { default as EditAlbum } from './components/edit';
export { default as DeleteAlbum } from './components/delete';
