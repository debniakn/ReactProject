import React, { FC } from 'react';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';
import Icon from '../Common/Icon';

const RightWrapper = styled(Wrapper)`
    float: right;
    align-items: center;

    h1 {
        font-weight: 550;
    }
`;

export const ProfileTopOptions: FC = () => {
    return <RightWrapper>
        <Icon src="./media/icons/comment-regular.svg"/>
        <h1>Message</h1>
        <Icon src="./media/icons/file-alt-regular.svg"/>
        <h1>Create a request</h1>
        <Icon src="./media/icons/briefcase-solid.svg"/>
        <h1>Add to a cluster</h1>
        <Icon src="./media/icons/times-solid.svg"></Icon>
    </RightWrapper>
}