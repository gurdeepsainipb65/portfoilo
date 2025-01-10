import React from "react";
import styled from "styled-components";

const Card = ({name, desc, image ,siteurl , codeurl}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img
          className="card__image"
          src={image}
          alt="Movie"
        />
        <div className="card__content">
          <p className="card__title">{name}</p>
          <p className="card__description">
            {desc}
          </p>
          <div className="flex gap-4">
          <button className="card__button text-white"><a href={siteurl}>Live Demo</a></button>
          <button className="card__button secondary"><a href={codeurl}>Source Code</a></button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 350px;
    aspect-ratio: 16/9;
    background-color: #bfdbfe;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__image {
    width: 100%;
    height: 100%;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #bfdbfe;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 20px;
    color: #172554;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 10px;
    font-size: 12px;
    color: #172554;
    line-height: 1.4;
  }

  .card__button {
    padding: 15px;
    border-radius: 8px;
    background: #172554 ;
    border: none;
  }

  .secondary {
    background:#bfdbfe;
    colour:#000;
    border: 1px solid #777;
  }
`;

export default Card;
