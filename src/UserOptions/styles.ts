import styled from "styled-components";

export const UserOptionsContainer = styled.section`
  margin-top: 29px;
`;

export const UserOptionContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  overflow-x: auto;
`;

export const UserOption = styled.li`
  height: 70px;

  border-radius: 12px;

  background: #fff;

  margin-right: 20px;

  padding: 13px;

  color: #744cb6;
  font-weight: 500;
  font-size: 15px;

  display: grid;
  grid-template-rows: 3fr 1fr;

  cursor: pointer;
  transition: 250ms ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  p {
    margin: 0;
    padding: 0;

    width: 115px;
    grid-row: 2;
    align-self: end;
  }
`;

export const UserSelectorList = styled.ul`
  margin-top: 32px;
`;

export const UserSelector = styled.li`
  display: grid;
  align-items: center;
  width: 100%;
  grid-template-columns: 1fr auto;
  margin-bottom: 15px;

  .labelTitle {
    background: #fff;
    padding: 6px 10px;

    border-radius: 25px;
    color: #3d7f88;

    font-size: 16px;
    font-weight: 400;

    &[data-checked] {
      background: red;
    }
  }
`;

export const UserOptionParagraph = styled.p`
  color: #5a3d8a;

  margin: 0;
  margin-top: 31px;

  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
`;

export const UserOptionNotSelected = styled.section`
  margin-top: 31px;
  font-size: 17px;

  opacity: 0.8;
`;
