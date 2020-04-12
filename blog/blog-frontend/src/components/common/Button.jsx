import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[9]};
  &:hover {
    background: ${palette.gray[9]};
  }

  &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }
  
  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 90%;
      font-size: 1.125rem;
    `}
  
  ${props =>
    props.gray &&
    css`
      background: ${palette.gray[9]};
      &:hover {
        background: ${palette.gray[9]};
      }
  `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
  /* border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[9]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 90%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.gray &&
    css`
      background: ${palette.gray[9]};
      &:hover {
        background: ${palette.gray[9]};
      }
    `} */
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} gray={props.gray ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  )
};

export default Button;
