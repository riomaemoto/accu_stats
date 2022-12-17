import { Flex, Input, Text, Box } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { AccuStatsState } from "../utils/DataGlobalState";

export const AccuStats = () => {
  const accustatsValue = useRecoilValue(AccuStatsState);
  return (
    <Flex gap={1} justifyContent={"center"}>
      <Input
        value={accustatsValue.left || 0}
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
          ACCU-STATS
        </Text>
      </Box>
      <Input
        value={accustatsValue.right || 0}
        w={250}
        h={30}
        bgColor={"white"}
        textAlign={"center"}
      />
    </Flex>
  );
};
