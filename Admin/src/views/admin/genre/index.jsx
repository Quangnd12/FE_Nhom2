import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";

import ListGenre from "./components/list";
import tableDataTopCreators from './variables/tableDataTopCreators.json'
import { tableColumnsTopCreators } from "./variables/tableColumnsTopCreators";
import Card from '../../../components/card/Card'; 

function Genre() {
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
            <ListGenre
              tableData={tableDataTopCreators}
              columnsData={tableColumnsTopCreators}
            />
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Genre;

export { default as AddGenre } from './components/add';
export { default as EditGenre } from './components/edit';
export { default as DeleteGenre } from './components/delete';
