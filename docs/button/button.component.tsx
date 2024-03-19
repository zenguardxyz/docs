// eslint-disable-file no-use-before-define
import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
	padding: 1.4rem;
	min-width: 160px;
	font-weight: 600;
	font-size: 16px;
	color: #fff;
	// background: linear-gradient(132.56deg, #61FF47 -20.89%, #89B8FF 99.53%, #FF70F1 123.47%);
	border-radius: 5px;
	cursor: pointer;
	border-width: 0px;
`;

export const GreenButton = styled.button`
	padding: 1.4rem;
	min-width: 160px;
	font-weight: 600;
	font-size: 16px;
	color: #fff;
	background: rgb(124, 197, 98);
	border-radius: 5px;
	cursor: pointer;
	border-width: 0px;
`;

export const OutlineButton = styled.button`
	padding: 1.4rem;
	min-width: 160px;
	font-weight: 600;
	font-size: 16px;
	color: #fff;
	box-shadow: rgb(97, 255, 71) 0px 0px 2px;
    background: rgb(32, 40, 61);
	border-radius: 5px;
	cursor: pointer;
	border-width: 0px;
`;

export interface ButtonComponentProps {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonComponentProps> = ({
  children,
  className,
  ...rest
}) => className == 'green' ?  <GreenButton {...rest}>{children}</GreenButton> : ( className == 'outline' ? <OutlineButton {...rest}>{children}</OutlineButton> : <div/>);
