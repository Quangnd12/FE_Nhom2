import React from "react";
// Chakra imports
import { Box, Flex, Grid} from "@chakra-ui/react";
// Custom components
import ListSong from "./components/list";
import Card from "components/card/Card.js";
// Assets

import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";

const Marketplace = () => {
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ base: "1fr" }}
        gap={{ base: "20px" }}
        display='block'>
        <Flex
          flexDirection='column'>
          <Card px='0px' mb='20px'>
            <ListSong
              tableData={tableDataTopCreators}
              columnsData={tableColumnsTopCreators}
            />
          </Card>
        </Flex>
      </Grid>

    </Box>
  );
}

export default Marketplace;
