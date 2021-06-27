import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'; // wyciąga nam dane z reducerów
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IPhotosReducer } from '../../reducers/photosReducer';

import Line from '../Common/Line';
import Icon from '../Common/Icon';
import { InnerWrapper, InlineWrapper, BigAvatar } from '../../styledHelpers/Components';


import { Colors } from '../../styledHelpers/Colors';

const Aside = styled.div`
    display:flex;
    flex-direction: column;
    width: 23%;
    height: 100vh;
    padding-top: 20px;
    place-self: flex-start;
    text-align: -webkit-center;
`;

const AsideMainContent = styled.div`    
    background: ${Colors.white};
    border: 1px solid ${Colors.verylightgray};
    border-radius: 5px;
    padding: 10px 20px;
    width: calc(100% * 0.65);
    place-self: center;
    margin: 0 20px 0 20px;
    h2, h3 {
        color: ${Colors.darkgrey};
        padding: 5px 0;
    }
    a{
        text-decoration: none
    }
`;

const AsideSecondaryContent = styled(AsideMainContent)`
    background: ${Colors.elephantbone};
    border: none;
    place-self: center;
    div {
        background: ${Colors.elephantbone};
    }
`;



export const LeftProfile: FC = () => {
    const { usersList, photosList, currentUser } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos
    })); 

    return (
        <Aside>
                <AsideMainContent>
                    <Link to="/profile">
                        <BigAvatar src={photosList?.[currentUser?.id]?.url} alt="Avatar"/>
                        <h2>{usersList?.[currentUser?.id]?.name}</h2>
                        <h3>Job title - {usersList?.[currentUser?.id]?.company.name}</h3>
                    </Link>
                    <Line />
                    <div>
                        <InnerWrapper>
                            <InlineWrapper>
                                <Link to="/test-site">
                                    <Icon src="./media/icons/network.png"/>
                                    <h3>Your network</h3>
                                    <Icon src="./media/icons/user-plus.png" />
                                </Link>
                            </InlineWrapper>             
                        </InnerWrapper>
                        <InnerWrapper>
                            <InlineWrapper>
                                <Link to="/test-site">
                                    <Icon src="./media/icons/publications.png" />
                                    <h3>Your publications</h3>
                                    <Icon src="./media/icons/plus.png"/>
                                </Link>
                            </InlineWrapper>
                        </InnerWrapper>
                    </div>
                </AsideMainContent>
            <AsideSecondaryContent>              
                    <InnerWrapper>
                        <InlineWrapper>
                            <Link to="test-site">
                                <Icon src="./media/icons/publications.png" />
                                <h3>Publications</h3>
                            </Link>
                        </InlineWrapper>
                    </InnerWrapper>
                    <InnerWrapper>
                        <InlineWrapper>
                            <Link to="/test-site">
                                <Icon src="./media/icons/ecosystem.png"/>
                                <h3>Ecosystem</h3>
                            </Link>
                        </InlineWrapper>
                    </InnerWrapper>
                    <InnerWrapper>
                        <InlineWrapper>
                            <Link to="/entities">
                                <Icon src="./media/icons/entities.png"/>
                                <h3>Entities</h3>
                            </Link>
                        </InlineWrapper>
                    </InnerWrapper>
            </AsideSecondaryContent>
        </Aside>
    )
}