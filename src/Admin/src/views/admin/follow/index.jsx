import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";

import ListFollow from "./components/list";
import { tableColumnsTopCreators } from "./variables/tableColumnsTopCreators";
import Card from "../../../components/card/Card";

function Follow() {
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
            <ListFollow
              columnsData={tableColumnsTopCreators}
            />
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Follow;

export { default as AddFollow } from './components/add';
export { default as EditFollow } from './components/edit';
export { default as DeleteFollow } from './components/delete';
