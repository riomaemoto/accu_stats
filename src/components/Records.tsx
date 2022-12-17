import { Flex, Input, Text, Box } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import {
  RecoilState,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  TotalBreaksLeftState,
  TotalBreaksRightState,
} from "../utils/DataGlobalState";
import { pointerLeftState, pointerRightState } from "../utils/provider";

type Props = {
  title: string;
  leftState: RecoilState<number>;
  rightState: RecoilState<number>;
  hasPercent?: boolean;
};

export const Records: FC<Props> = ({
  title,
  leftState,
  rightState,
  hasPercent = false,
}) => {
  const [Left, setLeft] = useRecoilState(leftState);
  const [Right, setRight] = useRecoilState(rightState);
  const totalLeft = useRecoilValue(TotalBreaksLeftState);
  const totalRight = useRecoilValue(TotalBreaksRightState);
  const [pointerLeft, setPointerLeft] = useRecoilState(pointerLeftState);
  const [pointerRight, setPointerRight] = useRecoilState(pointerRightState);

  const percentLeft = useMemo(() => {
    const output = Math.round((Left / totalLeft) * 100) || 0;
    const retVal = hasPercent ? output + "%" : "";
    return retVal;
  }, [Left, totalLeft, hasPercent]);

  const percentRight = useMemo(() => {
    const output = Math.round((Right / totalRight) * 100) || 0;
    const retVal = hasPercent ? output + "%" : "";
    return retVal;
  }, [hasPercent, Right, totalRight]);

  return hasPercent ? (
    <Flex gap={1} w={"100%"} justifyContent={"center"}>
      <Input
        _focus={{ boxShadow: "none" }}
        fontSize={14}
        value={percentLeft}
        w={123}
        h={30}
        bgColor={"white"}
        textAlign={"center"}
      />
      <Input
        _focus={{ boxShadow: "none" }}
        borderColor={pointerLeft === title + "L" ? "blue.900" : undefined}
        fontSize={14}
        value={Left}
        onChange={(e) => {
          const { value } = e.target;
          const item = Number(value);
          setLeft(item);
        }}
        onFocus={() => {
          setPointerLeft(title + "L");
        }}
        w={{ base: 115, md: 122 }}
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
          {title}
        </Text>
      </Box>
      <Input
        _focus={{ boxShadow: "none" }}
        borderColor={pointerRight === title + "R" ? "blue.700" : undefined}
        fontSize={14}
        value={Right}
        onChange={(e) => {
          const { value } = e.target;
          const item = Number(value);
          setRight(item);
        }}
        onFocus={() => {
          setPointerRight(title + "R");
        }}
        w={{ base: 115, md: 122 }}
        h={30}
        bgColor={"white"}
        textAlign={"center"}
      />
      <Input
        _focus={{ boxShadow: "none" }}
        fontSize={14}
        value={percentRight}
        w={123}
        h={30}
        bgColor={"white"}
        textAlign={"center"}
      />
    </Flex>
  ) : (
    <Flex gap={1} w={"100%"} justifyContent={"center"}>
      <Input
        _focus={{ boxShadow: "none" }}
        borderColor={pointerLeft === title + "L" ? "blue.900" : undefined}
        onFocus={() => {
          setPointerLeft(title + "L");
        }}
        fontSize={14}
        value={Left}
        onChange={(e) => {
          const { value } = e.target;
          const item = Number(value);
          setLeft(item);
        }}
        w={250}
        h={30}
        bgColor={"white"}
        textAlign={"center"}
      />
      <Box border={"1px"} bgColor={"blue.200"} w={277}>
        <Text
          p={2}
          fontWeight={700}
          fontSize={{ base: 8, md: 13 }}
          align={"center"}
        >
          {title}
        </Text>
      </Box>
      <Input
        _focus={{ boxShadow: "none" }}
        borderColor={pointerRight === title + "R" ? "blue.900" : undefined}
        onFocus={() => {
          setPointerRight(title + "R");
        }}
        fontSize={14}
        value={Right}
        onChange={(e) => {
          const { value } = e.target;
          const item = Number(value);
          setRight(item);
        }}
        w={250}
        h={30}
        bgColor={"white"}
        textAlign={"center"}
      />
    </Flex>
  );
};
