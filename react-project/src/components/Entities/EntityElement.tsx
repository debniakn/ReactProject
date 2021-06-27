import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import {Wrapper, InnerWrapper, BlockContainer, Title} from '../../styledHelpers/Components';


const EntityBox = styled.div`
display: flex;
    box-shadow:  0 4.5px 10px rgba(0, 0, 0, 0.15),
  0 36px 80px rgba(0, 0, 0, 0.07);
  margin: 3px;
    img {
        width: 120px;
        height: 120px;
        padding: 3px;
    }


    .content {
        width: 200px;
        padding: 10px;

        h1 {
            white-space: nowrap;
    overflow: hidden;
        }
    }
`;

interface IEntity {
    url: string;
    title: string;
}



const EntityElement: FC<IEntity> = (props) => {


    return (
        <EntityBox >
            <img src={props?.url} alt=""/>
            <BlockContainer className='content'>
                <Title>{props?.title}</Title>
                <h3>Caracas 1050, Distrito Capital,</h3>
                <h3>Venezuela</h3>
            </BlockContainer>
        </EntityBox>
    )
}

export default EntityElement;