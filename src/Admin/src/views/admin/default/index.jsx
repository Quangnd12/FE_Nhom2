import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets

// Custom components
// import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "../../../components/card/MiniStatistics";
import IconBox from "../../../components/icons/IconBox";
import React from "react";
import {
  MdMusicNote,
  MdBarChart,
  MdMic,
  MdPerson,
  MdLibraryMusic,
  MdPlayArrow
} from "react-icons/md";
import CheckTable from "./components/CheckTable";
import ComplexTable from "./components/ComplexTable";
import DailyTraffic from "./components/DailyTraffic";
import PieCard from "./components/PieCard";
import Tasks from "./components/Tasks";
import TotalSpent from "./components/TotalSpent";
import WeeklyRevenue from "./components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "./variables/columnsData";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";


export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdPerson} color={brandColor} />
              }
            />
          }
          name='Total users'
          value='1M'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='New users this month'
          value='200K'
        />
        <MiniStatistics  
        startContent={
          <IconBox
            w='56px'
            h='56px'
            bg={boxBg}
            icon={
              <Icon w='32px' h='32px' as={MdPlayArrow} color={brandColor} />
            }
          />
        }
        name='Most played song' value='456' />

        <MiniStatistics
         startContent={
          <IconBox
            w='56px'
            h='56px'
            bg={boxBg}
            icon={
              <Icon w='32px' h='32px' as={MdMusicNote} color={brandColor} />
            }
          />
        }
          
          name='Total songs'
          value='1K'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='28px' h='28px' as={MdLibraryMusic} color={brandColor} />}
            />
          }
          name='New songs added this month'
          value='154'
        />
        <MiniStatistics 
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdMic} color={brandColor} />
              }
            />
          }
          name='Total Artists'
          value='234'
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
          <WeeklyRevenue />
          <DailyTraffic />
        </SimpleGrid>        
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />      
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>       
      
    </Box>
  );
}
