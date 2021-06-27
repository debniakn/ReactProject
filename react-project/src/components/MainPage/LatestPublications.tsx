import React, {FC} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'; // wyciąga nam dane z reducerów
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IPhotosReducer } from '../../reducers/photosReducer';
import { IPostsReducer } from '../../reducers/postsReducer';
import { Link } from 'react-router-dom';

import { Wrapper, InnerWrapper, BlockContainer, ImageContainer, Title, Text } from '../../styledHelpers/Components'
import { Colors } from '../../styledHelpers/Colors';
// 4 komentarze z postów w połączneiu w useramy i phots
// obrazki z photos, imie i nazwosko osoby która napisała post oraz zdjęcia, data na sztywno, opis z body w postach

const StyledWrapper = styled(Wrapper)`
background: ${Colors.white};
border: 5px;
margin-top: 20px;
margin-right: 30px;
border-radius: 5px;
padding: 0;
border: 1px solid ${Colors.verylightgray};
`;

const BigImageContainer = styled.div`
width: 33.3%;
`;

const MiniatureImage = styled(ImageContainer)`
width: 20px;
border-radius: 50%;
margin: 10px;
border: 1px solid black;
`;

const MediumImage = styled(ImageContainer)`
padding: 5px;
    height: 70px;
`;
const BigImage = styled(ImageContainer)`
    height: 350px;
    border-radius: 5px;
`;
const OverflowingTextFeild = styled.p`
text-overflow: ellipsis;
overflow: hidden;
font-size: 17px;
height: 36px;
white-space: no-wrap;
font-weight: 500;
`;

const AbsoluteContainer = styled(BlockContainer)`
    width: 300px;
    position: absolute;
    padding-left: 15px;
    color: ${Colors.white};
    top: 320px;
    z-index: 1000;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const LatestPublications: FC = () => {
const { usersList, photosList, currentUser, postsList } = useSelector<IState, IUsersReducer & IPhotosReducer &
    IPostsReducer>(globalState => ({
    ...globalState.users,
    ...globalState.photos,
    ...globalState.posts,
    }));

    return (
    <StyledWrapper>
        <BigImageContainer>
            <AbsoluteContainer>
                <OverflowingTextFeild>
                {postsList?.[currentUser?.id]?.body}
                </OverflowingTextFeild>
                <InnerWrapper>
                    <h4>7 jan. 2020</h4>
                    <h4>{usersList?.[0]?.name}</h4>
                </InnerWrapper>
            </AbsoluteContainer>
        </BigImageContainer>
        <BlockContainer>
            <Title>Latest publications</Title>
            <Wrapper>
                <BlockContainer>
                    <OverflowingTextFeild>{postsList?.[currentUser?.id]?.body}</OverflowingTextFeild>
                    <InnerWrapper>
                        <h4>7 jan. 2020</h4>
                        <MiniatureImage src={photosList?.[currentUser?.id]?.url} alt="" />
                        <h4>{usersList?.[0]?.name}</h4>
                    </InnerWrapper>
                </BlockContainer>
            </Wrapper>
            <Wrapper>
                <BlockContainer>
                    <OverflowingTextFeild>{postsList?.[currentUser?.id]?.body}</OverflowingTextFeild>
                    <InnerWrapper>
                        <h4>7 jan. 2020</h4>
                        <MiniatureImage src={photosList?.[currentUser?.id]?.url} alt="" />
                        <h4>{usersList?.[0]?.name}</h4>
                    </InnerWrapper>
                </BlockContainer>
            </Wrapper>
            <Wrapper>
                <BlockContainer>
                    <OverflowingTextFeild>{postsList?.[currentUser?.id]?.body}</OverflowingTextFeild>
                    <InnerWrapper>
                        <h4>7 jan. 2020</h4>
                        <MiniatureImage src={photosList?.[currentUser?.id]?.url} alt="" />
                        <h4>{usersList?.[0]?.name}</h4>
                    </InnerWrapper>
                </BlockContainer>
            </Wrapper>
            <StyledLink to="/test-site">
                <Text>See more publications</Text>
            </StyledLink>
        </BlockContainer>
    </StyledWrapper>
    )}