import { Flex, Input, Text, Box } from "@chakra-ui/react";

export const Name = () => {
  return (
    <Flex gap={1} justifyContent={"center"}>
      <Input
        fontSize={13}
        placeholder="First break        Full Name"
        w={250}
        h={30}
        bgColor={"white"}
        textAlign={"center"}
      />
      <Box border={"1px"} bgColor={"blue.200"} w={277}>
        <Text
          fontWeight={700}
          fontSize={{ base: 8, md: 13 }}
          align={"center"}
          p={2}
        >
          Player Names
        </Text>
      </Box>
      <Input
        fontSize={13}
        placeholder="Odd break        Full Name"
        w={250}
        h={30}
        bgColor={"white"}
        textAlign={"center"}
      />
    </Flex>
  );
};
