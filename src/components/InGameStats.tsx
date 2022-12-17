import { Flex, Input, Text, Box } from "@chakra-ui/react";

export const InGameStats = () => {
  return (
    <Flex gap={1} justifyContent={"center"}>
      <Box>
        <Text
          fontWeight={700}
          fontSize={{ base: 8, md: 13 }}
          align={"center"}
          p={2}
        >
          In Game Stats
        </Text>
      </Box>
    </Flex>
  );
};
