import React from 'react';
import styled, { css } from 'styled-components';

const ModalInput = {};

ModalInput.EmailInput = styled.input`
  width: 330px;
  height: 50px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  font-size: 15px;
  color: #333;
  margin: 0 0 8px;

  ${(props) =>
    !props.isMatch &&
    css`
      &:focus {
        outline: 2px solid red;
      }
    `}
`;

export default ModalInput;
