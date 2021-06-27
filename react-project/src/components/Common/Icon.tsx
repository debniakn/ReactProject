import React from 'react';
import styled from 'styled-components'; 

const StyledImage = styled.img`
    padding: 5px;
    width: 20px;
    height: 20px;
`;

const Icon = (props: any) => (
    <StyledImage src={props.src} alt="" />
);

export default Icon;