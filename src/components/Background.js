import React from "react";
import CustomBox from "./CustomBox";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

function Background() {
  return (
    <React.Fragment>
      <CustomBox whiteBox responsive centered sx={{ width: "100%" }}>
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent>06/2025</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="timelineFuturColor" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Diplome d'ingé</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>01/2025-06/2025</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="timelineFuturColor" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Stage A5</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>09/2023-01/2024</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="timelineFuturColor" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Stage A4</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>01/2023-04/2023</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="timelinePastColor" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Stage A3</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>04/2022-06/2022</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="timelinePastColor" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Stage A2</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>09/2020</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="timelinePastColor" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Entrée CESI</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>06/2020</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="timelinePastColor" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Bac S</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>09/2017-06/2020</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="timelinePastColor" />
            </TimelineSeparator>
            <TimelineContent>Lycée Dr Koeberle</TimelineContent>
          </TimelineItem>
        </Timeline>
      </CustomBox>
    </React.Fragment>
  );
}

export default Background;
