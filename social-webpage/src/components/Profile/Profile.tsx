import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'; // wyciąga nam dane z reducerów
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IPhotosReducer } from '../../reducers/photosReducer';

import Icon from '../Common/Icon';
import {Wrapper, BlockContainer} from '../../styledHelpers/Components';
import  {MainInfo} from '../Profile/MainInfo';
import  { MoreInformation } from '../Profile/MoreInformation';
import  { PanelInformation } from '../Profile/PanelInformation';
import  { Proposals } from '../Profile/Proposals';
import  { InternalReviews } from '../Profile/InternalReviews';
import  { Fees } from '../Profile/Fees';

const StyledBlockContainer = styled(BlockContainer)`
    background: #fff;
    width: 70%;
    margin: 0 auto;
`;

const EditContainer = styled.div`
    padding-bottom: 50px;
    h3 {
        text-overflow: ellipsis;
    overflow: hidden; 
    }
`;
const StyledButton = styled.button`
    border: none;
    background: none;
    float: right;
`;

const ClearBoth = styled.div`
    clear: both;
    padding: 0 10px;
    div {
        flex: auto
    }
`;

export const Profile: FC = () => {
    const [isEditable, edit] = useState(false);
    const { usersList, photosList, currentUser } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos
    })); 

    return (
        <StyledBlockContainer>
            <MainInfo 
                name= {usersList?.[currentUser?.id]?.name}
                city = {usersList?.[currentUser?.id]?.address?.city}
                company = {usersList?.[currentUser?.id]?.company?.name}
                email = {usersList?.[currentUser?.id]?.email}
                phone = {usersList?.[currentUser?.id]?.phone}
                phrase = {usersList?.[currentUser?.id]?.company.catchPhrase}
                url = {photosList?.[currentUser?.id]?.url}
            />
            <EditContainer>
                <StyledButton onClick={() => { return edit(!isEditable)}}>
                    <Icon src="./media/icons/pen-solid.svg"/>
                </StyledButton>
                <ClearBoth>
                    <MoreInformation isEditable={isEditable}/>
                    <PanelInformation isEditable={isEditable}/>
                    <Proposals isEditable={isEditable}/>
                    <InternalReviews isEditable={isEditable}/>
                    <Fees isEditable={isEditable}/>
                </ClearBoth>
            </EditContainer>
        </StyledBlockContainer>
    )
};
