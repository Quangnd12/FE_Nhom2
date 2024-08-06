import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
import ListArtist from "./components/list";
import tableDataTopCreators from './variables/tableDataTopCreators.json'
import { tableColumnsArtists } from "./variables/tableColumnsTopCreators"; // Ensure this is the correct export
import Card from "../../../components/card/Card";

function Artist() {
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
            <ListArtist
              tableData={tableDataTopCreators}
              columnsData={tableColumnsArtists}
            />
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Artist;

export { default as AddArtist } from './components/add';
export { default as EditArtist } from './components/edit';
export { default as DeleteArtist } from './components/delete';
