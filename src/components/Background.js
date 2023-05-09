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
import { Stack } from "@mui/material";
import { Link, Outlet, useParams } from "react-router-dom";
import { t } from "@lingui/macro";

function Background() {
  const elements = [
    /*{
      index: 0,
      title: t`Diplome d'ingénieur en informatique`,
      date: t`06/2025`,
      description: t`Obtention de mon diplôme d'ingénieur en informatique à l'école CESI de Lingolsheim.`,
      future: true,
    },
    {
      index: 1,
      title: t`Stage de cinquième année`,
      date: t`01/2025-06/2025`,
      description: t`Stage de fin d'étude.`,
      future: true,
    },
    {
      index: 2,
      title: t`Stage de quatrième année à l'étranger`,
      date: t`09/2023-01/2024`,
      description: t`Stage de qutrième année à l'étranger.`,
      future: true,
    },*/
    {
      index: 3,
      title: t`Stage de troisième année`,
      date: t`01/2023-04/2023`,
      description: t`Stage de troisième année de 14 semaines, effectué au sein de la société YggVal dans le service d'infogérance. 
      J'ai pu développer mes compétences en réseau et système. J'ai pu participer à la vie du service, 
      et intervenir chez des clients lors de la résolution de problèmes et pour le renouvellement d'infrastructure.`,
      future: false,
    },
    {
      index: 4,
      title: t`Stage de deuxième année`,
      date: t`04/2022-07/2022`,
      description: t`Stage de deuxième année, réalisé chez Alcatel-Lucent-Enterprise, dans le service de développement web. 
      J'ai pu découvrir ce qu'était la vie en entreprise, et j'ai pu développer mes compétences en développement web. 
      C'est durant ce stage que j'ai pu apprendre le language TypeScript et le framework Angular. J'ai aussi pu travailler
      sur un projet en autonomie, où j'ai pu apprendre le webgl, afin d'améliorer la création d'un arrière plan virtuel, lors 
      d'un appel vidéo dans la solution de communication Rainbow.`,
      future: false,
    },
    {
      index: 5,
      title: t`Entrée au CESI`,
      date: t`09/2020`,
      description: t`J'ai intégré l'école d'ingénieur CESI à Lingolsheim en septembre 2020, pour y suivre une formation 
      d'ingénieur en informatique. C'est un cursus de 5 ans, avec une classe préparatoire intégrée qui dure 2 ans, et le cycle
      d'ingénieur qui dure 3 ans.`,
      future: false,
    },
    {
      index: 6,
      title: t`Obtention du Baccalauréat Scientifique`,
      date: t`06/2020`,
      description: t`J'ai obtenu en 2020 mon baccalauréat scientifique spécialité ISN, avec mention bien.`,
      future: false,
    },
    {
      index: 7,
      title: t`Lycée Dr Koeberle`,
      date: t`09/2017-06/2020`,
      description: t`Filière général Scientifique-SVT, spécialité ISN, au lycée Dr Koeberle à Séléstat.`,
      future: false,
    },
  ];
  const { id } = useParams();
  const [selected, setSelected] = React.useState(
    elements.find((e) => e.index === parseInt(id))
  );

  return (
    <React.Fragment>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={5}
        justifyContent="space-evenly"
        alignItems="center"
        width="100%"
      >
        <CustomBox whiteBox responsive centered sx={{ width: "30%" }}>
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent color={"textSecondary"}>
                {t`Cliquer sur un élément pour en savoir plus.`}
              </TimelineContent>
            </TimelineItem>
            {elements.map((element, index) => (
              <React.Fragment key={element.title}>
                <TimelineItem>
                  <TimelineOppositeContent>
                    {element.date}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      variant={element.future ? "outlined" : "filled"}
                      color={
                        element.future
                          ? "timelineFuturColor"
                          : "timelineFuturColor"
                      }
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Link
                      to={index.toString()}
                      onClick={() => setSelected(element)}
                    >
                      {element.title}
                    </Link>
                  </TimelineContent>
                </TimelineItem>
              </React.Fragment>
            ))}
          </Timeline>
        </CustomBox>
        <Outlet context={selected} />
      </Stack>
    </React.Fragment>
  );
}

export default Background;
