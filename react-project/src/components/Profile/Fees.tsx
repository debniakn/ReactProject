import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import {TableFees} from '../Table/TableFees';
import Icon from '../Common/Icon';
import {BlockContainer, MainTitle} from '../../styledHelpers/Components';

interface IProps {
    isEditable?: boolean
}

export const Fees: FC<IProps> = (props) => {
    return (
        <BlockContainer>
            <MainTitle>Amount of fees</MainTitle>
            <TableFees isEditable={props.isEditable}/>
        </BlockContainer>
    )
}