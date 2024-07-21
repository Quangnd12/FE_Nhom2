// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("black.900", "white");
  const textColorSecondary = "gray.500";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Giới Thiệu Nghệ Sĩ/Ca SĨ
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Cũng đã quen với đắng cay Bước vào đời tay trắng cùng lắm lại trở về với trắng tay Mỗi ngày ta thức dậy, dành một lúc ngắm nhìn mây trắng bay Khi mày yêu cuộc đời, cuộc đời cũng sẽ yêu mày đắm say
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='Name'
          value='Đen Vâu'
        />
        <Information
          boxShadow={cardShadow}
          title='Languages'
          value='Vietnamese'
        />
        <Information
          boxShadow={cardShadow}
          title='Profession'
          value='Rapper'
        />
        <Information
          boxShadow={cardShadow}
          title='Albums'
          value='KOBUKOVU, Lối Nhỏ, Trời hôm nay nhiều mây cực!'
        />
        <Information
          boxShadow={cardShadow}
          title='Record Label'//nhãn đĩa
          value='Indie'
        />
        <Information
          boxShadow={cardShadow}
          title='Birthday'
          value='13 - 05 - 1989'
        />
      </SimpleGrid>

    </Card>
  );
}
