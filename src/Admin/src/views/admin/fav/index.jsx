import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";

import ListFavorite from "./components/list";
import { tableColumnsTopCreators } from "./variables/tableColumnsTopCreators";
import Card from "../../../components/card/Card";

function Favorite() {
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
                <ListFavorite
                  columnsData={tableColumnsTopCreators}
                />
              </Card>
            </Flex>
          </Grid>
        </Box>
      );
}

export default Favorite;

export { default as AddFavorite } from './components/add';
export { default as EditFavorite } from './components/edit';
export { default as DeleteFavorite } from './components/delete';