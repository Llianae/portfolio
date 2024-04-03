import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as enMessages } from "./locales/en/messages";
import { messages as frMessages } from "./locales/fr/messages";
import { ThemeProvider, createTheme } from "@mui/material";
import "./styles/index.css";
import { en, fr } from "make-plural/plurals";
import Layout from "./components/Layout";
import App from "./components/App";
import ParticlesBackground from "./components/ParticlesBackground";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import BackgroundDetails from "./components/BackgroundDetails";
import AboutMe from "./components/AboutMe";

i18n.load({
  en: enMessages,
  fr: frMessages,
});

i18n.loadLocaleData({
  en: { plurals: en },
  fr: { plurals: fr },
});

i18n.activate(localStorage.getItem("language") || "fr");

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#99df",
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#ffffff",
    },
    timelineFuturColor: {
      main: "#0055ff",
    },
    timelinePastColor: {
      main: "#dd00bb",
    },
    formulaireBorderColor: {
      main: "#2266FF",
    },
  },
  typography: {
    fontFamily: [
      "Fjalla One",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ParticlesBackground />
          <Layout>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/background" element={<Background />}>
                <Route path=":id" element={<BackgroundDetails />} />
              </Route>
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </I18nProvider>
  </React.StrictMode>
);
