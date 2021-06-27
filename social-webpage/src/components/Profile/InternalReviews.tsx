import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import {TableReviews} from '../Table/TableReviews';
import Line from '../Common/Line';
import {BlockContainer, MainTitle, StyledHeader} from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const StyledText = styled.h2`
    font-size: 20px;
    padding: 10px 0;
    color: ${Colors.darkBlue}
`;
interface IProps {
    isEditable?: boolean
}

export const InternalReviews: FC<IProps> = (props) => {
    return (
        <BlockContainer>
            <MainTitle>Internal Reviews</MainTitle>
            <TableReviews isEditable={props.isEditable}/>
            <StyledLink to="/test-site"><StyledText>See more Reviews</StyledText></StyledLink>

            <Line/>
        </BlockContainer>
    )
}