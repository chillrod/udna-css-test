import React from "react";
import "./base.css";

import InformationText from "./Info";

import { UserOptions } from "./UserOptions";

const options = [
  {
    title: "Doenças ou condições",
  },
  {
    title: "Medicamentos",
  },
  {
    title: "Suplementos",
  },
  {
    title: "Doenças autoimunes",
  },
  {
    title: "Características do sono",
  },
  {
    title: "Histórico familiar",
  },
];

const selectors = [
  { title: "Diabetes tipo II" },
  { title: "Diabetes tipo I" },
  { title: "Trombose" },
  { title: "Hipertensão Arterial Sistêmica (HAS)" },
  { title: "Insuficiência cardíaca (IC)" },
  { title: "Aterosclerose" },
  { title: "Infarto Agudo do Miocárdio (IAM)" },
  { title: "Hipovitaminose B" },
];

export const App = () => {
  return (
    <>
      <InformationText
        title="Informações adicionais"
        paragraph="Outras informações sobre sua saúde podem ser ser importantes para sua avaliação."
      />
      <UserOptions options={options} selectors={selectors} />
    </>
  );
};

export default App;
