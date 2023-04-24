import React from "react";
import CustomBox from "./CustomBox";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MoodIcon from "@mui/icons-material/Mood";
import GavelIcon from "@mui/icons-material/Gavel";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ExploreIcon from "@mui/icons-material/Explore";
import CachedIcon from "@mui/icons-material/Cached";
import CreateIcon from "@mui/icons-material/Create";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import ExtensionIcon from "@mui/icons-material/Extension";
import StorageIcon from "@mui/icons-material/Storage";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import { getRandomColor } from "../data/colorSkillsIcon";

import { t } from "@lingui/macro";

function Skills() {
  const softSkills = [
    {
      name: t`Communication`,
      icon: <ChatIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Travail en équipe`,
      icon: <PeopleIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Gestion de projet`,
      icon: <AssignmentIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Gestion du stress`,
      icon: <MoodIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Rigueur`,
      icon: <GavelIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Autonomie`,
      icon: <FingerprintIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Curiosité`,
      icon: <ExploreIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Adaptabilité`,
      icon: <CachedIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Créativité`,
      icon: <CreateIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Esprit d'analyse`,
      icon: <AssessmentIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Perseverance`,
      icon: <DirectionsRunIcon style={{ color: getRandomColor() }} />,
    },
  ];

  const hardSkills = [
    { name: t`C++`, icon: <CodeIcon style={{ color: getRandomColor() }} /> },
    { name: t`C#`, icon: <CodeIcon style={{ color: getRandomColor() }} /> },
    { name: t`Python`, icon: <CodeIcon style={{ color: getRandomColor() }} /> },
    {
      name: t`HTML`,
      icon: <ExploreIcon style={{ color: getRandomColor() }} />,
    },
    { name: t`CSS`, icon: <ExploreIcon style={{ color: getRandomColor() }} /> },
    {
      name: t`JavaScript`,
      icon: <ExploreIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Typescript`,
      icon: <ExploreIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`React`,
      icon: <ExtensionIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Angular`,
      icon: <ExtensionIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`MySQL`,
      icon: <StorageIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`GitHub`,
      icon: <GitHubIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Microsoft Office`,
      icon: <DescriptionIcon style={{ color: getRandomColor() }} />,
    },
  ];
  return (
    <React.Fragment>
      <CustomBox whiteBox responsive centered sx={{ width: "100%" }}>
        <Stack
          direction={"column"}
          spacing={2}
          width={"100%"}
          justifyContent={"center"}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
            {t`Compétences`}
          </Typography>
          <Stack
            direction={"row"}
            spacing={2}
            width={"100%"}
            justifyContent={"center"}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Stack
              direction={"column"}
              spacing={2}
              width={"100%"}
              divider={<Divider orientation="horizontal" flexItem />}
            >
              <Typography variant="h5" textAlign={"center"}>
                {t`SoftSkills`}
              </Typography>
              <Stack direction={"column"} spacing={0} width={"100%"}>
                <List>
                  {softSkills.map((skill) => (
                    <ListItem>
                      <ListItemIcon>{skill.icon}</ListItemIcon>
                      <ListItemText primary={skill.name} />
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Stack>
            <Stack
              direction={"column"}
              spacing={2}
              width={"100%"}
              divider={<Divider orientation="horizontal" flexItem />}
            >
              <Typography variant="h5" textAlign={"center"}>
                {t`HardSkills`}
              </Typography>
              <Stack direction={"column"} spacing={0} width={"100%"}>
                <List>
                  {hardSkills.map((skill) => (
                    <ListItem>
                      <ListItemIcon>{skill.icon}</ListItemIcon>
                      <ListItemText primary={skill.name} />
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </CustomBox>
    </React.Fragment>
  );
}

export default Skills;
