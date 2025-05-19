import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Hireme = ({ text }) => {
  return (
    <StyledWrapper>
      <button className="font-semibold"> {text}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  button:hover {
    background-color: #172554;
    box-shadow: 0px 15px 20px #1d4ed8;
    color: #fff;
    transform: translateY(-7px);
  }

  button:active {
    transform: translateY(-1px);
  }
`;

export default Hireme;
