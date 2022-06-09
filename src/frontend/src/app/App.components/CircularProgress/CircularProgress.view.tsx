import React from "react";
import {ProgressStat, StatPercentage} from "./CircularProgress.style";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { activePink } from "styles";

export type CircularProgressProps = {
    percentage: number;
    title: string;
    text: string;
};

export const CircularProgressView = ({percentage, text, title} : CircularProgressProps) => (
    <ProgressStat>
    <h1>{title}</h1>
    <div style={{width: "100px"}}>
    <CircularProgressbarWithChildren value={percentage} strokeWidth={10} styles={buildStyles({
      textColor: percentage ? activePink : "grey",
      pathColor: activePink,
      trailColor: "grey"
      })}>
        <StatPercentage>{text}</StatPercentage>
      </CircularProgressbarWithChildren>
      </div>
  </ProgressStat>)



