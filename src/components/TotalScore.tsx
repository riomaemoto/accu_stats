import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import {
  BallsPocketedLeftState,
  BallsPocketedRightState,
  ScoreLeftState,
  ScoreRightState,
} from "../utils/DataGlobalState";

export const TotalScore = () => {
  const scoreLeft = useRecoilValue(ScoreLeftState);
  const scoreRight = useRecoilValue(ScoreRightState);
  const BallspocketedLeft = useRecoilValue(BallsPocketedLeftState);
  const BallspocketedRight = useRecoilValue(BallsPocketedRightState);

  /** TotalScore  */
  const TotalScore = useMemo((): number => {
    const left9 = scoreLeft * 9;
    const right9 = scoreRight * 9;
    return left9 + right9;
  }, [scoreLeft, scoreRight]);

  /** BallsValue */
  const BallsValue = useMemo((): number => {
    return TotalScore - BallspocketedLeft - BallspocketedRight;
  }, [TotalScore, BallspocketedLeft, BallspocketedRight]);

  return (
    <Flex gap={1} justifyContent={"center"}>
      <Input
        value={BallsValue}
        w={250}
        h={30}
        bgColor={"white"}
        textAlign={"center"}
      />
      <Box border={"1px"} bgColor={"blue.200"} w={277}>
        <Text fontSize={10} align={"center"} p={2}>
          {TotalScore}
        </Text>
      </Box>
      <Input
        value={BallsValue}
        w={250}
        h={30}
        bgColor={"white"}
        textAlign={"center"}
      />
    </Flex>
  );
};
