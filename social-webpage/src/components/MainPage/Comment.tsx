  import React, { FC } from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IPhotosReducer } from '../../reducers/photosReducer';
import { IPostsReducer } from '../../reducers/postsReducer';
import { IPosts } from '../../entities/posts';
import { ISinglePhoto } from '../../entities/photos';
import { ISingleUser } from '../../entities/users';

import { Wrapper, Title,  ImageContainer } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';


const StyledComment = styled.div`
    background: ${Colors.white};
    border-radius: 7px;
    border-top: 1px solid ${Colors.verylightgray};
    border-right: 1px solid ${Colors.verylightgray};
    border-left: 1px solid ${Colors.verylightgray};
    border-bottom: 3px solid ${Colors.verylightgray};
    margin: 10px
`;

const StyledTitle = styled(Title)`
    color: ${Colors.blue};
    &::first-letter {
        text-transform: uppercase;
    }
`;

const Content = styled.div`
    margin: 10px;
    letter-spacing: 1.6;
    color: ${Colors.darkgrey};
    &::first-letter {
        text-transform: uppercase;
    }
`;

const MiniatureImage = styled(ImageContainer)`
width: 20px;
border-radius: 50%;
margin: 10px;
border: 1px solid black;
`;

const Dot = styled.img`
    width: 4px;
    height: 4px;
    margin: 5px 10px;
`;

const StyledSmallIcon = styled.img`
    width: 15px;
    height: 20px;
    padding: 0 10px;
    filter: contrast(0.1);
`;

const CustomWrapper = styled(Wrapper)`
    place-content: flex-start;
    place-items: center;
`;

interface IComment {
    id: number;
    title: string;
    body: string;
    postId: number;
    index: number;
}

export const Comment: FC<IComment> = (props) => {
    const comment = {
        index: props.index,
    };

    const { usersList, postsList, photosList} = useSelector<IState, IUsersReducer & IPostsReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.posts,
        ...globalState.photos
    }));

    const currentPost:IPosts = postsList[props?.postId - 1];
    const postAuthor:ISingleUser = usersList[currentPost?.id - 1];
    const authorAvatar:ISinglePhoto = photosList[postAuthor?.id - 1]

    const commentData = [
        { 
            workspace: "People",
            workspaceUrl: './media/icons/administration.svg', 
            index: comment.index 
            },
        {
            workspace: "Publications",
            workspaceUrl: './media/icons/publications.svg',
            index: comment.index,
        },
        { 
            workspace: "Entities",
            workspaceUrl: './media/icons/entities.svg', 
            index: comment.index 
        },
        {
            workspace: "Administration",
            workspaceUrl: './media/icons/administration.svg',
            index: comment.index,
        },
        {
            workspace: "Supplier contract",
            workspaceUrl: './media/icons/file-signature-solid.svg',
            index: comment.index,
        },
        {
            workspace: "Corporate",
            workspaceUrl: './media/icons/file-signature-solid.svg',
            index: comment.index,
        },
        {
            workspace: "Group norms",
            workspaceUrl: './media/images/norms.jpg',
            index: comment.index,
        },
        {
            workspace: "Client contract",
            workspaceUrl: './media/icons/file-signature-solid.svg',
            index: comment.index,
        },
        
        {
            workspace: "Real estate contract",
            workspaceUrl: './media/icons/file-signature-solid.svg',
            index: comment.index,
        },
    ];
    return (
            <StyledComment key={props.id}>
                <StyledTitle>{props.title}</StyledTitle>
                <Content>{props.body}</Content>
                <CustomWrapper>
                    <MiniatureImage src={authorAvatar?.url} alt=""/>
                    <h3>Subsit. corp</h3>
                    <Dot src="./media/icons/black-circle.png" alt=""/>
                    <StyledSmallIcon src={commentData[props.index].workspaceUrl} alt=""/>
                    <h3>{commentData[props.index].workspace}</h3>
                    <Dot src="./media/icons/black-circle.png" alt=""/>
                    <h3>Updated 3 days ago by {postAuthor?.name}</h3>
                </CustomWrapper>

            </StyledComment>
    );
};