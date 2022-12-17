import { Box, Center, Flex, Input, Text } from "@chakra-ui/react";
import { Records as Records } from "./Records";
import { Name } from "./Name";
import {
  BallsMissedLeftState,
  BallsMissedRightState,
  BallsPocketedLeftState,
  BallsPocketedRightState,
  BreakandRunLeftState,
  BreakandRunRightState,
  ConsecutiveBRLeftState,
  ConsecutiveBRRightState,
  DryBreakLeftState,
  DryBreakRightState,
  KickingErrorsLeftState,
  KickingErrorsRightState,
  WinningStreakLeftState,
  WinningStreakRightState,
  SafeteyErrorsLeftState,
  SafeteyErrorsRightState,
  ScoreLeftState,
  ScoreRightState,
  ScratchLeftState,
  ScratchRightState,
  ShotAfterBreakLeftState,
  ShotAfterBreakRightState,
  TotalBreaksLeftState,
  TotalBreaksRightState,
  UnforcedErrorsLeftState,
  UnforcedErrorsRightState,
  MadeOnBreakLeftState,
  MadeOnBreakRightState,
} from "../utils/DataGlobalState";
import { InGameStats } from "./InGameStats";
import { TotalScore } from "./TotalScore";
import { AccuStats } from "./AccuStats";
import { Footer } from "./Footer";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { pointerLeftState, pointerRightState } from "../utils/provider";

export const Analytics = () => {
  const [pointerLeft, setPointerLeft] = useRecoilState(pointerLeftState);
  const [pointerRight, setPointerRight] = useRecoilState(pointerRightState);
  useEffect(() => {
    if (pointerLeft) {
      setTimeout(() => {
        setPointerLeft("");
      }, 4000);
    } else if (pointerRight) {
      setTimeout(() => {
        setPointerRight("");
      }, 4000);
    }
  }, [pointerLeft, pointerRight]);
  return (
    <Box h={"100vh"} p={5} bgColor={"gray.100"}>
      <Name />
      <Records
        title="Game Score"
        leftState={ScoreLeftState}
        rightState={ScoreRightState}
      />
      <Records
        title="Total Break"
        leftState={TotalBreaksLeftState}
        rightState={TotalBreaksRightState}
      />
      <Records
        hasPercent
        title="Dry Breaks"
        leftState={DryBreakLeftState}
        rightState={DryBreakRightState}
      />
      <Records
        hasPercent
        title="Break Scratches"
        leftState={ScratchLeftState}
        rightState={ScratchRightState}
      />
      <Records
        hasPercent
        title="Made on Break"
        leftState={MadeOnBreakLeftState}
        rightState={MadeOnBreakRightState}
      />
      <Records
        hasPercent
        title="Shot After Break"
        leftState={ShotAfterBreakLeftState}
        rightState={ShotAfterBreakRightState}
      />
      <Records
        title="Break and Run"
        leftState={BreakandRunLeftState}
        rightState={BreakandRunRightState}
      />
      <Records
        hasPercent
        title="Consecutive B&R"
        leftState={ConsecutiveBRLeftState}
        rightState={ConsecutiveBRRightState}
      />
      <Records
        title="Winning Streak"
        leftState={WinningStreakLeftState}
        rightState={WinningStreakRightState}
      />
      <InGameStats />
      <TotalScore />

      <Records
        hasPercent
        title="Balls Pocketed"
        leftState={BallsPocketedLeftState}
        rightState={BallsPocketedRightState}
      />
      <Records
        hasPercent
        title="Balls Missed"
        leftState={BallsMissedLeftState}
        rightState={BallsMissedRightState}
      />
      <Records
        hasPercent
        title="Unforced Errors"
        leftState={UnforcedErrorsLeftState}
        rightState={UnforcedErrorsRightState}
      />
      <Records
        hasPercent
        title="Safety Errors"
        leftState={SafeteyErrorsLeftState}
        rightState={SafeteyErrorsRightState}
      />
      <Records
        hasPercent
        title="Kicking Errors"
        leftState={KickingErrorsLeftState}
        rightState={KickingErrorsRightState}
      />
      <AccuStats />
      <Footer />
    </Box>
  );
};
