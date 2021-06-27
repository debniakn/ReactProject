import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 80px;
`;
const StyledImage = styled.img`
    width: 35px;
    height: auto;
    border-radius: 50%;
`;
const RoundAvatar = (props:any)=> (<StyledDiv>
    <StyledImage src={props.src} alt=""/>
</StyledDiv>)

export default RoundAvatar;