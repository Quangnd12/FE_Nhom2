import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";

import ListLyric from "./components/list";
import { tableColumnsTopCreators } from "./variables/tableColumnsTopCreators";
import Card from "../../../components/card/Card";

function Lyric() {
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
            <ListLyric columnsData={tableColumnsTopCreators} />
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Lyric;

export { default as AddLyric } from './components/add';
export { default as EditLyric } from './components/edit';
export { default as DeleteLyric } from './components/delete';
