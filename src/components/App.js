import React from "react";
import { Grid, Typography } from "@mui/material";
import { t } from "@lingui/macro";

function App() {
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="stretch"
        sx={{
          marginLeft: "3em",
          position: "relative",
          bottom: "-2em",
        }}
      >
        <Grid>
          <Typography
            color="white.main"
            fontSize={"20px"}
            fontFamily={"montserrat,sans-serif;"}
          >
            {t`Etudiante en 1er année de cycle d'ingénieur en informatique`}
          </Typography>
        </Grid>
        <Grid xs={3}>
          <Typography
            color="white.main"
            fontStyle={"italic"}
            fontWeight={"bold"}
            fontSize={"135px"}
            lineHeight={"1.2"}
            fontFamily={"montserrat,sans-serif;"}
          >
            Laureline Zittel
          </Typography>
        </Grid>
        <Grid xs={5}>
          <Typography
            color="white.main"
            fontSize={"20px"}
            fontFamily={"montserrat,sans-serif;"}
          >
            {t`Actuellement en première année du cycle ingénieur en informatique
            dans une école d'ingénieur, je suis à la recherche d'un stage qui
            pourrait me rapprocher de mon futur métier.`}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
