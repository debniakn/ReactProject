import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import WorkspaceInfo from './WorkspaceInfo';
import WorkspacesComments from './WorkspacesComments';
import WorkspaceMiddleBar from './WorkspaceMiddleBar';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {workspaces} from '../../workspaces';


const WorkspacesContainer = styled.div`
    background: ${Colors.white};
`;

interface ParamTypes {
    param: string;
}
export const Workspaces: FC = () => {
    let { param } = useParams<ParamTypes>();
    
    const workspaceInfo = workspaces.filter((el: { url: string; }) => el.url === param)[0];

    return (
        <WorkspacesContainer>
            <WorkspaceInfo workspaceName={workspaceInfo.title}  icon={workspaceInfo.iconUrl}/>
            <WorkspaceMiddleBar/>
            <WorkspacesComments/>
        </WorkspacesContainer>
    )
}
