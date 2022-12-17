import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  KickingErrorsRightState,
  KickingErrorsLeftState,
  SafeteyErrorsRightState,
  SafeteyErrorsLeftState,
  UnforcedErrorsRightState,
  UnforcedErrorsLeftState,
  BallsMissedRightState,
  BallsMissedLeftState,
  BallsPocketedRightState,
  BallsPocketedLeftState,
  WinningStreakRightState,
  WinningStreakLeftState,
  ConsecutiveBRRightState,
  ConsecutiveBRLeftState,
  BreakandRunRightState,
  BreakandRunLeftState,
  ShotAfterBreakLeftState,
  ShotAfterBreakRightState,
  MadeOnBreakLeftState,
  MadeOnBreakRightState,
  DryBreakLeftState,
  DryBreakRightState,
  ScratchLeftState,
  ScratchRightState,
  TotalBreaksLeftState,
  TotalBreaksRightState,
  ScoreLeftState,
  ScoreRightState,
} from "../utils/DataGlobalState";
import { pointerLeftState, pointerRightState } from "../utils/provider";

export const Footer = () => {
  const pointerLeft = useRecoilValue(pointerLeftState);
  const pointerRight = useRecoilValue(pointerRightState);

  const [ScoreLeft, setScoreLeft] = useRecoilState(ScoreLeftState);
  const [ScoreRight, setScoreRight] = useRecoilState(ScoreRightState);

  const [TotalBreaksLeft, setTotalBreaksLeft] =
    useRecoilState(TotalBreaksLeftState);
  const [TotalBreaksRight, setTotalBreaksRight] = useRecoilState(
    TotalBreaksRightState
  );

  const [DryBreaksLeft, setDryBreaksLeft] = useRecoilState(DryBreakLeftState);
  const [DryBreaksRight, setDryBreaksRight] =
    useRecoilState(DryBreakRightState);

  const [ScratchLeft, setScratchLeft] = useRecoilState(ScratchLeftState);
  const [ScratchRight, setScratchRight] = useRecoilState(ScratchRightState);

  const [MadeOnBreakLeft, setMadeOnBreakLeft] =
    useRecoilState(MadeOnBreakLeftState);
  const [MadeOnBreakRight, setMadeOnBreakRight] = useRecoilState(
    MadeOnBreakRightState
  );
  const [ShotAfterBreakLeft, setShotAfterBreakLeft] = useRecoilState(
    ShotAfterBreakLeftState
  );
  const [ShotAfterBreakRight, setShotAfterBreakRight] = useRecoilState(
    ShotAfterBreakRightState
  );

  const [BreakandRunLeft, setBreakandRunLeft] =
    useRecoilState(BreakandRunLeftState);
  const [BreakandRunRight, setBreakandRunRight] = useRecoilState(
    BreakandRunRightState
  );

  const [ConsecutiveBRLeft, setConsecutiveBRLeft] = useRecoilState(
    ConsecutiveBRLeftState
  );
  const [ConsecutiveBRRight, setConsecutiveBRRight] = useRecoilState(
    ConsecutiveBRRightState
  );

  const [WinningStreakLeft, setWinningStreakLeft] = useRecoilState(
    WinningStreakLeftState
  );
  const [WinningStreakRight, setWinningStreakRight] = useRecoilState(
    WinningStreakRightState
  );

  const [BallsPocketedLeft, setBallsPocketedLeft] = useRecoilState(
    BallsPocketedLeftState
  );
  const [BallsPocketedRight, setBallsPocketedRight] = useRecoilState(
    BallsPocketedRightState
  );

  const [BallsMissedLeft, setBallsMissedLeft] =
    useRecoilState(BallsMissedLeftState);
  const [BallsMissedRight, setBallsMissedRight] = useRecoilState(
    BallsMissedRightState
  );

  const [UnforcedErrorsLeft, setUnforcedErrorsLeft] = useRecoilState(
    UnforcedErrorsLeftState
  );
  const [UnforcedErrorsRight, setUnforcedErrorsRight] = useRecoilState(
    UnforcedErrorsRightState
  );

  const [SafeteyErrorsLeft, setSafeteyErrorsLeft] = useRecoilState(
    SafeteyErrorsLeftState
  );
  const [SafeteyErrorsRight, setSafeteyErrorsRight] = useRecoilState(
    SafeteyErrorsRightState
  );

  const [KickingErrorsLeft, setKickingErrorsLeft] = useRecoilState(
    KickingErrorsLeftState
  );
  const [KickingErrorsRight, setKickingErrorsRight] = useRecoilState(
    KickingErrorsRightState
  );

  const decrement = () => {
    if (pointerLeft === "Total Break" + "L") {
      setTotalBreaksLeft(TotalBreaksLeft - 1);
    } else if (pointerLeft === "Game Score" + "L") {
      setScoreLeft(ScoreLeft - 1);
    } else if (pointerLeft === "Dry Breaks" + "L") {
      setDryBreaksLeft(DryBreaksLeft - 1);
    } else if (pointerLeft === "Break Scratches" + "L") {
      setScratchLeft(ScratchLeft - 1);
    } else if (pointerLeft === "Made on Break" + "L") {
      setMadeOnBreakLeft(MadeOnBreakLeft - 1);
    } else if (pointerLeft === "Shot After Break" + "L") {
      setShotAfterBreakLeft(ShotAfterBreakLeft - 1);
    } else if (pointerLeft === "Break and Run" + "L") {
      setBreakandRunLeft(BreakandRunLeft - 1);
    } else if (pointerLeft === "Consecutive B&R" + "L") {
      setConsecutiveBRLeft(ConsecutiveBRLeft - 1);
    } else if (pointerLeft === "Winning Streak" + "L") {
      setWinningStreakLeft(WinningStreakLeft - 1);
    } else if (pointerLeft === "Balls Pocketed" + "L") {
      setBallsPocketedLeft(BallsPocketedLeft - 1);
    } else if (pointerLeft === "Balls Missed" + "L") {
      setBallsMissedLeft(BallsMissedLeft - 1);
    } else if (pointerLeft === "Unforced Errors" + "L") {
      setUnforcedErrorsLeft(UnforcedErrorsLeft - 1);
    } else if (pointerLeft === "Safety Errors" + "L") {
      setSafeteyErrorsLeft(SafeteyErrorsLeft - 1);
    } else if (pointerLeft === "Kicking Errors" + "L") {
      setKickingErrorsLeft(KickingErrorsLeft - 1);
    } else if (pointerRight === "Game Score" + "R") {
      setScoreRight(ScoreRight - 1);
    } else if (pointerRight === "Total Break" + "R") {
      setTotalBreaksRight(TotalBreaksRight - 1);
    } else if (pointerRight === "Dry Breaks" + "R") {
      setDryBreaksRight(DryBreaksRight - 1);
    } else if (pointerRight === "Break Scratches" + "R") {
      setScratchRight(ScratchRight - 1);
    } else if (pointerRight === "Made on Break" + "R") {
      setMadeOnBreakRight(MadeOnBreakRight - 1);
    } else if (pointerRight === "Shot After Break" + "R") {
      setShotAfterBreakRight(ShotAfterBreakRight - 1);
    } else if (pointerRight === "Break and Run" + "R") {
      setBreakandRunRight(BreakandRunRight - 1);
    } else if (pointerRight === "Consecutive B&R" + "R") {
      setConsecutiveBRRight(ConsecutiveBRRight - 1);
    } else if (pointerRight === "Winning Streak" + "R") {
      setWinningStreakRight(WinningStreakRight - 1);
    } else if (pointerRight === "Balls Pocketed" + "R") {
      setBallsPocketedRight(BallsPocketedRight - 1);
    } else if (pointerRight === "Balls Missed" + "R") {
      setBallsMissedRight(BallsMissedRight - 1);
    } else if (pointerRight === "Unforced Errors" + "R") {
      setUnforcedErrorsRight(UnforcedErrorsRight - 1);
    } else if (pointerRight === "Safety Errors" + "R") {
      setSafeteyErrorsRight(SafeteyErrorsRight - 1);
    } else if (pointerRight === "Kicking Errors" + "R") {
      setKickingErrorsRight(KickingErrorsRight - 1);
    }
  };

  const increment = () => {
    if (pointerLeft === "Total Break" + "L") {
      setTotalBreaksLeft(TotalBreaksLeft + 1);
    } else if (pointerLeft === "Game Score" + "L") {
      setScoreLeft(ScoreLeft + 1);
    } else if (pointerLeft === "Dry Breaks" + "L") {
      setDryBreaksLeft(DryBreaksLeft + 1);
    } else if (pointerLeft === "Break Scratches" + "L") {
      setScratchLeft(ScratchLeft + 1);
    } else if (pointerLeft === "Made on Break" + "L") {
      setMadeOnBreakLeft(MadeOnBreakLeft + 1);
    } else if (pointerLeft === "Shot After Break" + "L") {
      setShotAfterBreakLeft(ShotAfterBreakLeft + 1);
    } else if (pointerLeft === "Break and Run" + "L") {
      setBreakandRunLeft(BreakandRunLeft + 1);
    } else if (pointerLeft === "Consecutive B&R" + "L") {
      setConsecutiveBRLeft(ConsecutiveBRLeft + 1);
    } else if (pointerLeft === "Winning Streak" + "L") {
      setWinningStreakLeft(WinningStreakLeft + 1);
    } else if (pointerLeft === "Balls Pocketed" + "L") {
      setBallsPocketedLeft(BallsPocketedLeft + 1);
    } else if (pointerLeft === "Balls Missed" + "L") {
      setBallsMissedLeft(BallsMissedLeft + 1);
    } else if (pointerLeft === "Unforced Errors" + "L") {
      setUnforcedErrorsLeft(UnforcedErrorsLeft + 1);
    } else if (pointerLeft === "Safety Errors" + "L") {
      setSafeteyErrorsLeft(SafeteyErrorsLeft + 1);
    } else if (pointerLeft === "Kicking Errors" + "L") {
      setKickingErrorsLeft(KickingErrorsLeft + 1);
    } else if (pointerLeft === "Kicking Errors" + "L") {
      setKickingErrorsLeft(KickingErrorsLeft + 1);
    } else if (pointerRight === "Game Score" + "R") {
      setScoreRight(ScoreRight + 1);
    } else if (pointerRight === "Total Break" + "R") {
      setTotalBreaksRight(TotalBreaksRight + 1);
    } else if (pointerRight === "Dry Breaks" + "R") {
      setDryBreaksRight(DryBreaksRight + 1);
    } else if (pointerRight === "Break Scratches" + "R") {
      setScratchRight(ScratchRight + 1);
    } else if (pointerRight === "Made on Break" + "R") {
      setMadeOnBreakRight(MadeOnBreakRight + 1);
    } else if (pointerRight === "Shot After Break" + "R") {
      setShotAfterBreakRight(ShotAfterBreakRight + 1);
    } else if (pointerRight === "Break and Run" + "R") {
      setBreakandRunRight(BreakandRunRight + 1);
    } else if (pointerRight === "Consecutive B&R" + "R") {
      setConsecutiveBRRight(ConsecutiveBRRight + 1);
    } else if (pointerRight === "Winning Streak" + "R") {
      setWinningStreakRight(WinningStreakRight + 1);
    } else if (pointerRight === "Balls Pocketed" + "R") {
      setBallsPocketedRight(BallsPocketedRight + 1);
    } else if (pointerRight === "Balls Missed" + "R") {
      setBallsMissedRight(BallsMissedRight + 1);
    } else if (pointerRight === "Unforced Errors" + "R") {
      setUnforcedErrorsRight(UnforcedErrorsRight + 1);
    } else if (pointerRight === "Safety Errors" + "R") {
      setSafeteyErrorsRight(SafeteyErrorsRight + 1);
    } else if (pointerRight === "Kicking Errors" + "R") {
      setKickingErrorsRight(KickingErrorsRight + 1);
    }
  };

  return (
    <>
      <Center>
        <Box>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Button
              p={5}
              pb={7}
              m={2}
              bgColor={"red"}
              fontSize={35}
              disabled={pointerLeft === "" && pointerRight === ""}
              onClick={decrement}
            >
              -
            </Button>
            <Button>9 ball</Button>
            <Button
              p={5}
              pb={7}
              m={2}
              bgColor={"lightGreen"}
              fontSize={35}
              disabled={pointerLeft === "" && pointerRight === ""}
              onClick={increment}
            >
              +
            </Button>
          </Flex>
        </Box>
      </Center>
    </>
  );
};
