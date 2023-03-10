import React from "react";
import Nav from "../components/nav.js";
import Head from "../components/head.js";
import Obfuscate from "../components/obfuscate.js";
import { useTranslation } from 'react-i18next';

function Support() {
  const { t } = useTranslation("credits");

  return (
    <>
      <Head defaultTitle="Credits | Metallic"></Head>
      <Nav />
      <div className="itemscontainer">
        <div className="itemsection">
          <Obfuscate>{t("title")}</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>{t("supporters")}</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>jayden - {t("mainDevText")}</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>jermia - {t("devText")}</Obfuscate>
        </div>
      </div>
    </>
  );
}

export default Support;
