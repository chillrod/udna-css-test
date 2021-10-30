import React, { useState } from "react";

import { Switch, FormLabel } from "@chakra-ui/react";

import {
  UserOption,
  UserOptionContainer,
  UserOptionNotSelected,
  UserOptionParagraph,
  UserOptionsContainer,
  UserSelector,
  UserSelectorList,
} from "./styles";

export const UserOptions = ({ options, selectors }: any) => {
  const [selected, setSelected] = useState(false);

  const setOptionSelected = () => {
    return setSelected(true);
  };

  return (
    <UserOptionsContainer>
      <UserOptionContainer>
        {options.map((option: any) => (
          <UserOption onClick={() => setOptionSelected()}>
            <p>{option.title}</p>
          </UserOption>
        ))}
      </UserOptionContainer>
      <UserOptionParagraph>
        Você já foi diagnosticado(a) para alguma dessas doenças/condições
        abaixo?
        <br />
        (Se necessário, marque mais de uma opção)
      </UserOptionParagraph>
      {selected && (
        <UserSelectorList>
          {selectors.map((selector: any) => (
            <UserSelector>
              <FormLabel className="labelTitle">{selector.title}</FormLabel>
              <Switch size="lg" />
            </UserSelector>
          ))}
        </UserSelectorList>
      )}
      {!selected && (
        <UserOptionNotSelected>
          <p>Selecione uma categoria acima para ver nossas </p>
        </UserOptionNotSelected>
      )}
    </UserOptionsContainer>
  );
};

export default UserOptions;
