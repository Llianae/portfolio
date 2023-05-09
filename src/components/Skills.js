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
import ExtensionIcon from "@mui/icons-material/Extension";
import StorageIcon from "@mui/icons-material/Storage";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import { getRandomColor } from "../data/colorSkillsIcon";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import WebIcon from "@mui/icons-material/Web";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

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

  const knowledge = [
    {
      name: t`Structurer, synthétiser des informations`,
      icon: <TextSnippetIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Analyser, exploiter, structurer des données`,
      icon: <DataUsageIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Créer une documentation technique`,
      icon: <DescriptionIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Rédiger un cahier des charges, des spécifications techniques`,
      icon: <AssignmentIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Concevoir et développer une solution digitale`,
      icon: <DeveloperBoardIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Développer un logiciel, un système d'informations, une application`,
      icon: <CodeIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Programmer`,
      icon: <CodeIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Concevoir une application web`,
      icon: <WebIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Développer une application en lien avec une base de données`,
      icon: <StorageIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Concevoir l'architecture d'un système, d'un réseau`,
      icon: <DeviceHubIcon style={{ color: getRandomColor() }} />,
    },
    {
      name: t`Concevoir la cartographie fonctionnelle du SI`,
      icon: <AccountTreeIcon style={{ color: getRandomColor() }} />,
    },
  ];
  return (
    <React.Fragment>
      <CustomBox
        whiteBox
        responsive
        centered
        sx={{ width: "100%", maxWidth: "65%" }}
      >
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
            <Stack
              direction={"column"}
              spacing={2}
              width={"100%"}
              divider={<Divider orientation="horizontal" flexItem />}
            >
              <Typography variant="h5" textAlign={"center"}>
                {t`knowledge`}
              </Typography>
              <Stack direction={"column"} spacing={0} width={"100%"}>
                <List>
                  {knowledge.map((skill) => (
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
