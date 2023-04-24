import React from "react";
import CustomBox from "./CustomBox";
import { Divider, Stack, Typography } from "@mui/material";
import { Navigate, useOutletContext } from "react-router-dom";

function BackgroundDetails() {
  const selected = useOutletContext();

  if (!selected) {
    return <Navigate to="/background" />;
  }

  return (
    <CustomBox whiteBox responsive centered sx={{ width: "100%" }}>
      <Stack orientation="column" width="100%">
        <Typography variant="h4">{selected.title}</Typography>
        <Typography variant="h6" gutterBottom>
          {selected.date}
        </Typography>
        <Divider />
        <Typography variant="body1" mt={2} gutterBottom>
          {selected.description}
        </Typography>
      </Stack>
    </CustomBox>
  );
}

export default BackgroundDetails;
