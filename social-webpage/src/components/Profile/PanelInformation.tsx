import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { IState } from './../../reducers';
import { IPhotosReducer } from './../../reducers/photosReducer';
import { IUsersReducer } from './../../reducers/usersReducer';

import Line from '../Common/Line';
import Icon from '../Common/Icon';
import RoundAvatar from '../Common/RoundAvatar';
import {Wrapper, BigAvatar, BlockContainer, SubTitle, MainTitle, StyledHeader, StyledFile, FlexContainer} from '../../styledHelpers/Components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-left: -600px;

`;

interface IProps {
    isEditable?: boolean,
    //userId: string
}
export const PanelInformation: FC<IProps> = (props) => {
    const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState =>({
        ...globalState.users,
        ...globalState.photos
    }));

    const [info, setInfo] = useState({
        fee: '610$/hour (Negociated)',
        terms: 'Monthly 10k$ retainer = see with Jeanny Smith',
        file: 'Attachment_lorem-ipsum23232.jpg',
        services: 'Corporate M&A and international acquisitions',
        user1: {
            id: 1,
            name: 'Leane Graham'
        },
        user2: {
            id: 2,
            name: 'Ervin Howell'
        }
    })

    const changeUser1 = (data: any) => setInfo({...info, user1: data});
    const changeUser2 = (data: any) => setInfo({...info, user2: data});
    return (
        <BlockContainer>
            <MainTitle>Panel Information</MainTitle>
            <div>
                <SubTitle>Hourly fee</SubTitle>
                {!props.isEditable
                    ? (<StyledHeader>{info?.fee}</StyledHeader>)
                    : <input type="text" value={info?.fee} onChange={ev => setInfo({...info, fee: ev.target.value})}/>
                }
            </div>
            <div>
                <SubTitle>Terms & conditions</SubTitle>
                {!props.isEditable
                    ?   (
                            <div>
                                <StyledHeader>{info?.terms}</StyledHeader>
                                <StyledFile>{info?.file}</StyledFile>
                            </div>
                        )
                    :   (
                            <div>
                                <input type="text" value={info?.terms} onChange={ev => setInfo({...info, terms: ev.target.value})}/>
                                <input type="file" onChange={e => setInfo({...info, file:  e.target.files[0].name as string})}/>
                            </div>
                        )
                }
            </div>
            <div>
                <MainTitle>Services & projects</MainTitle>
                {!props.isEditable
                    ? <StyledHeader>{info?.services}</StyledHeader>
                    : <input type="text" value={info?.services} onChange={ev => setInfo({...info, services: ev.target.value})}/>
                }
            </div>
            <div>
                <MainTitle>Internal correspondants</MainTitle>
                {!props.isEditable
                    ? (
                            <div>
                                <FlexContainer>
                                    <RoundAvatar src={photosList?.filter(el => el?.id === 1)[0]?.url} alt=""/>
                                    <StyledDiv>
                                        <StyledHeader>{usersList?.filter(el => el.id === 1)[0]?.name}</StyledHeader>
                                        <Icon src="./media/icons/comment-regular.svg"/>
                                        <h3>Message</h3>
                                        <Icon src="./media/icons/user-solid.svg"/>
                                        <h3>Profile</h3>
                                    </StyledDiv>
                                </FlexContainer>
                            </div>
                    )
                    : (
                        <div>
                            {/* <select 
                                value={info?.user1}
                                onChange={changeUser1}
                                options={usersList?.map(el => ({value:`${el.id}`, label:`${el.name}`}))}
                            /> */}

                        </div>
                    )
                }
                {!props.isEditable
                    ? (
                            <div>
                                <FlexContainer>
                                    <RoundAvatar src={photosList?.filter(el => el?.id === 2)[0]?.url} alt=""/>
                                    <StyledDiv>
                                        <StyledHeader>{usersList?.filter(el => el.id === 2)[0]?.name}</StyledHeader>
                                        <Icon src="./media/icons/comment-regular.svg"/>
                                        <h3>Message</h3>
                                        <Icon src="./media/icons/user-solid.svg"/>
                                        <h3>Profile</h3>
                                    </StyledDiv>
                                </FlexContainer>
                            </div>
                    )
                    : (
                        <div>
                            {/* <select 
                                value={info?.user2}
                                onChange={changeUser2}
                                options={usersList?.map(el => ({value:`${el.id}`, label:`${el.name}`}))}
                            /> */}

                        </div>
                    )
                }
            </div>
            <Line/>
        </BlockContainer>
    )
}