import React from 'react';
import { FooterContainer } from '@/styles-components';


export interface FooterInterface {}

const Footer : React.FC<FooterInterface> = () => {
	return(
		<FooterContainer>
			<strong>Tech-</strong>  Vite - Reactjs - typeScript - Redux - Material UI - style-component
		</FooterContainer>
	)
};

export default Footer;
