import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomBox from "./CustomBox";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CodeIcon from "@mui/icons-material/Code";
import ExtensionIcon from "@mui/icons-material/Extension";
import StorageIcon from "@mui/icons-material/Storage";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import WebIcon from "@mui/icons-material/Web";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ComputerIcon from "@mui/icons-material/Computer";
import { getRandomColor } from "../data/colorSkillsIcon";
import { t } from "@lingui/macro";

function AboutMe() {
  const projects = [
    {
      name: t`Portfolio website`,
      description: t`Description portfolio website`,
      link: "https://github.com/Llianae",
      type: "personal",
    },
    {
      name: t`Vacation planner website`,
      description: t`Description vacation planner website`,
      link: "https://github.com/Loqui67/site-vacances",
      type: "personal",
    },
    {
      name: t`Plateformer game`,
      description: t`Description plateformer game`,
      link: "https://github.com/Llianae/First-Plateformer",
      type: "personal",
    },
  ];

  const logiciels = [
    {
      name: t`Visual Studio Code`,
      icon: <CodeIcon />,
      description: t`Description Visual Studio Code`,
    },
    {
      name: t`Visual Studio`,
      icon: <ExtensionIcon />,
      description: t`Description Visual Studio`,
    },
    {
      name: t`MySQL Workbench`,
      icon: <StorageIcon />,
      description: t`Description MySQL Workbench`,
    },
    {
      name: t`GitHub`,
      icon: <GitHubIcon />,
      description: t`Description GitHub`,
    },
    {
      name: t`Microsoft Office`,
      icon: <DescriptionIcon />,
      description: t`Description Microsoft Office`,
    },
    {
      name: t`Visual Paradigm`,
      icon: <TextSnippetIcon />,
      description: t`Description Visual Paradigm`,
    },
    {
      name: t`Power BI`,
      icon: <DataUsageIcon />,
      description: t`Description Power BI`,
    },
    {
      name: t`Talend`,
      icon: <DeveloperBoardIcon />,
      description: t`Description Talend`,
    },
    {
      name: t`Server Management`,
      icon: <WebIcon />,
      description: t`Description Server Management`,
    },
    {
      name: t`JMerise`,
      icon: <DeviceHubIcon />,
      description: t`Description JMerise`,
    },
    {
      name: t`DB Designer`,
      icon: <AccountTreeIcon />,
      description: t`Description DB Designer`,
    },
    {
      name: t`VMware et VirtualBox`,
      icon: <ComputerIcon />,
      description: t`Description VMware et VirtualBox`,
    },
  ];

  return (
    <React.Fragment>
      <CustomBox centered responsive width={"100%"} marginBlock={"5vh"}>
        <Stack
          direction={"column"}
          spacing={8}
          alignItems={"center"}
          width={"100%"}
        >
          <CustomBox whiteBox centered width={"100%"}>
            <Stack direction={"column"} spacing={2} width={"100%"}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center" }}
                gutterBottom
              >{t`About`}</Typography>

              <Divider
                orientation={"horinzontal"}
                flexItem
                display={{ xs: "none", sm: "block" }}
              />
              <Typography variant={"body1"} gutterBottom>
                {t`About me 1rst paragraph`}
              </Typography>
              <Typography variant={"body1"} gutterBottom>
                {t`About me 2nd paragraph`}
              </Typography>
              <Typography variant={"body1"} gutterBottom>
                {t`About me 3rd paragraph`}
              </Typography>
            </Stack>
          </CustomBox>

          <CustomBox whiteBox centered width={"100%"}>
            <Stack direction={"column"} spacing={2} width={"100%"}>
              <CustomBox width={"100%"}>
                <Stack direction={"column"} spacing={2} width={"100%"}>
                  <Typography
                    variant="h4"
                    sx={{ textAlign: "center" }}
                    gutterBottom
                  >
                    {t`Logiciels`}
                  </Typography>
                  <Divider></Divider>
                  <Typography variant={"body1"} gutterBottom>
                    {t`Logiciel paragraph`}
                  </Typography>
                  <List>
                    {logiciels.map((logiciel) => (
                      <ListItem key={logiciel.name}>
                        <ListItemText
                          secondary={logiciel.icon}
                          sx={{ marginRight: 2 }}
                        />

                        <Divider
                          orientation={"vertical"}
                          flexItem
                          sx={{ marginInline: 2 }}
                        />
                        <ListItemText
                          primary={logiciel.name}
                          secondary={logiciel.description}
                          sx={{ width: "100%" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </CustomBox>
            </Stack>
          </CustomBox>

          <CustomBox whiteBox centered width={"100%"}>
            <Stack direction={"column"} spacing={2} width={"100%"}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center" }}
                gutterBottom
                divider={false}
              >{t`My projects`}</Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                width={"100%"}
                justifyContent={"space-evenly"}
              >
                <CustomBox width={"100%"}>
                  <Stack direction={"column"} spacing={2} width={"100%"}>
                    <Divider>
                      <Typography divider={false} variant="h6">
                        {t`Projets personnels`}
                      </Typography>
                    </Divider>
                    <List>
                      {projects
                        .filter((project) => project.type === "personal")
                        .map((project) => (
                          <ListItem key={project.name}>
                            <ListItemText
                              primary={project.name}
                              secondary={project.description}
                              sx={{ width: "100%" }}
                            />
                            <Divider
                              orientation={"vertical"}
                              flexItem
                              sx={{ marginInline: 2 }}
                            />

                            <IconButton
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <OpenInNewIcon />
                            </IconButton>
                          </ListItem>
                        ))}
                    </List>
                  </Stack>
                </CustomBox>
              </Stack>
            </Stack>
          </CustomBox>
        </Stack>
      </CustomBox>
    </React.Fragment>
  );
}

export default AboutMe;
