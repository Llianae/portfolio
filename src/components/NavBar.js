import { Box, Divider, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { t } from "@lingui/macro";

function NavBar() {
  const pages = [
    { name: t`Accueil`, path: "/" },
    { name: t`Parcours`, path: "/background" },
    { name: t`Competences`, path: "/skills" },
    { name: t`A Propos`, path: "/aboutme" },
    { name: t`Contact`, path: "/contact" },
  ];
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "white.main", opacity: "0.8" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Stack direction={"row"} spacing={6} ml={5}>
              {pages.map((page, index) => (
                <React.Fragment key={page.name}>
                  <Link to={page.path}>
                    <Typography variant="h6">{page.name}</Typography>
                  </Link>
                  {index < pages.length - 1 && (
                    <Divider orientation={"vertical"} flexItem />
                  )}
                </React.Fragment>
              ))}
            </Stack>
          </Box>
          <LanguageSwitcher />
        </Toolbar>
      </Box>
    </React.Fragment>
  );
}

export default NavBar;
