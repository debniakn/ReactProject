import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useTable } from 'react-table';

import {TableProposals} from '../Table/TableProposals';
import Line from '../Common/Line';
import {BlockContainer, MainTitle} from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

const StyledLink = styled(Link)`
    text-decoration: none;
    
`;

const StyledText = styled.h2`
    font-size: 18px;
    margin-left: 75%;
    color: ${Colors.blue};
    padding-bottom: 10px;
`;
interface IProps {
    isEditable?: boolean
}

export const Proposals: FC<IProps> = (props) => {


    return (
        <BlockContainer>
            <MainTitle>Proposals</MainTitle>
            
            <TableProposals isEditable={props.isEditable}></TableProposals>
            <StyledLink to="/test-site">See more proposals</StyledLink>
            <Line/>
        </BlockContainer>
    )
}