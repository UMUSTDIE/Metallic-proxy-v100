import React from "react";
import Nav from "../components/nav.js";
import Head from "../components/head.js";
import Obfuscate from "../components/obfuscate.js";
import { useTranslation } from 'react-i18next';

function Games() {
  const { t } = useTranslation("games");

  return (
    <>
      <Head defaultTitle="Games | Metallic"></Head>
      <Nav />
      <h1 className="title">
        <Obfuscate>{t("There is no games stop trying to play games in class")}</Obfuscate>
      </h1>
    </>
  );
}

export default Games;
