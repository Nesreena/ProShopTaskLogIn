import styled from "styled-components";
import { FlexColumn, FlexRow, FlexBox, Typography } from "../../App.Styles";

export const CardTitle = styled("h3")`
  text-align: center;
  letter-spacing: 1.28px;
  color: #242424;
  text-transform: uppercase;
  opacity: 1;
  margin-top: 40px;
  font-size: 32px;
  margin-bottom: 30px;
`;

export const Cards = styled(FlexRow)`
  justify-content: space-between;
  align-items: start;
  border: ${(props) => props.border};
  height: auto;
`;

export const CardBox = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  background: ${(props) => props.background};
  height: ${(props) => props.height};
  border-right: ${(props) => props.borderRight};
  border-radius: ${(props) => props.borderRadius};
`;

export const CardImg = styled("img")`
  width: 100%;
  border-radius: 16px;
  opacity: 1;
  margin-bottom: 20px;
  object-fit: cover;
`;

export const ButtonsBox = styled(FlexRow)`
  margin-bottom: 40px;
`;

export const Border = styled("hr")`
  width: 40%;
  height: 5px;
  background-color: #fcdd06;
  margin-top: 12px;
`;
