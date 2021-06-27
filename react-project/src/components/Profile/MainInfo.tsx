import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'; // wyciąga nam dane z reducerów

import { Link } from "react-router-dom";
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IPhotosReducer } from '../../reducers/photosReducer';


import { Colors } from '../../styledHelpers/Colors';
import Icon from '../Common/Icon';
import Line from '../Common/Line';
import {Wrapper, BigAvatar, BlockContainer} from '../../styledHelpers/Components';
import  {ProfileTopOptions} from './ProfileTopOptions'


const ClearBothWrapper = styled(Wrapper)`
    clear: both;
    padding: 0 10px;
    margin: 20px 0;
    div {
        flex: auto
    }
`;

const AvatarContainer = styled(BlockContainer)`
    display: grid;
    width: 90px;
    a {
        text-decoration: none;
        color: ${Colors.blue}
    }
`;

const InfoContainer = styled.div`
    padding: 0 15px;
 
    h3 {
        padding: 3px;
        &:first-child {
            font-weight: 550;
        }

        &:nth-child(2) {
            font-weight: 550;
        }
    }
`;

const StyledButton = styled.button`
    border: none;
    background: none;
    float: right;
`;

interface IUserInfo {
    name: string,
    city: string,
    company: string,
    email: string,
    phone: string,
    phrase: string,
    url: string
}

// przynajmniej jeden klasowy komponent

export const MainInfo: FC<IUserInfo> = (props) => {
    const [isEditable, edit] = useState(false);
    const { usersList, photosList, currentUser } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos
    })); 

    const [userData, setUserData] = useState({
        name: props?.name,
        city: props?.city,
        company: props?.company,
        email: props?.email,
        phone: props?.phone,
        phrase: props?.phrase,
        url: props?.url
    })


    return <BlockContainer>
        <ProfileTopOptions/>
        <ClearBothWrapper>
            <AvatarContainer>
                <Link to="/profile">See profile</Link>
            </AvatarContainer>
            <BlockContainer>
                <InfoContainer>
                    { isEditable
                        ?   (
                            <div>
                                <label htmlFor="">Company</label>
                                <input type="text" value={userData?.company} onChange={e => setUserData({...userData, company: e.target.value})}/>
                            </div>
                        )
                        : <h3>{userData?.company}</h3>
                    }
                    { isEditable
                        ?   (
                            <div>
                                <label htmlFor="">City</label>
                                <input type="text" value={userData?.city} onChange={e => setUserData({...userData, city: e.target.value})}/>
                            </div>
                            )
                        : <h3>{userData?.city}</h3>
                    }
                    { isEditable
                        ?   (
                            <div>
                                <label htmlFor="">Catch phrase</label>
                                <input type="text" value={userData?.phrase} onChange={e => setUserData({...userData, phrase: e.target.value})}/>
                            </div>
                            )
                        : <h3>{userData?.phrase}</h3>
                    }
                </InfoContainer>
            </BlockContainer>
            <BlockContainer>
            <InfoContainer>
                <StyledButton onClick={() => { return edit(!isEditable)}}>
                    <Icon src="./media/icons/pen-solid.svg"/>
                </StyledButton>
                { isEditable
                        ?   (
                                <div>
                                    <label htmlFor="">Email</label>
                                    <input type="text" value={userData?.email} onChange={e => setUserData({...userData, email: e.target.value})}/>
                                </div>
                            )
                        : <h3>{userData?.email}</h3>
                    }
                    { isEditable
                        ?   (
                            <div>
                                <label htmlFor="">Phone</label>
                                <input type="text" value={userData?.phone} onChange={e => setUserData({...userData, phone: e.target.value})}/>
                            </div>
                        )
                        : <h3>{userData?.phone}</h3>
                    }
            </InfoContainer>
            </BlockContainer>
        </ClearBothWrapper>
        <Line/>
    </BlockContainer>
}