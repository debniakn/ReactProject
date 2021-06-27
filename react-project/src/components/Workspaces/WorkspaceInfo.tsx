import React, {FC} from 'react';
import { Wrapper, InnerWrapper, } from '../../styledHelpers/Components';
import Icon from '../Common/Icon';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';


const Container = styled.div`
    margin: 40px;
    background: ${Colors.white};
    border-top: 1px solid ${Colors.verylightgray};
    border-right: 1px solid ${Colors.verylightgray};
    border-left: 1px solid ${Colors.verylightgray};
    border-bottom: 3px solid ${Colors.verylightgray};

    .bgImg {
        background-image: url("./media/images/Biuro.jpg");
        background-size: cover;
        height: 100px;
    }
`;

const StyledIcon = styled(Icon)`
    
   
`;
const Box = styled.div`
    div {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        h2 {
            font-size: 25px;
            padding: 5px;
        }
    }

    p {
        padding: 10px;
        color: ${Colors.mediumgray};
        line-height: 1.5;
        font-size: 18px;
        padding: 0 20px;
    }
`;

interface IWorkspace {
    icon: string,

    workspaceName: string
}
const WorkspacesInfo: FC<IWorkspace> = (props) => {
    return (
        <Container>
            <div className="bgImg">
            </div>
            <Wrapper>
                <StyledIcon className="icon" src={props.icon}/>
                <Box>
                    <InnerWrapper>
                        <h2>{props.workspaceName}</h2>
                        <Icon src="./media/icons/cog.svg"/>
                    </InnerWrapper>
                    <p>Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.</p>
                </Box>
            </Wrapper>
        </Container>
    )
}
export default WorkspacesInfo;