import styled, { css } from "styled-components";

const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin: 10px;
`;
const ImageDiv = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

const CollectionFooterDiv = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const NameSpan = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
const PriceSpan = styled.span`
  width: 10%;
`;

const CustomButtonDiv = styled.div`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;
