import React, {FC} from 'react';
import { Wrapper, Title, BlockContainer, } from '../../styledHelpers/Components';
import Icon from '../Common/Icon';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

const StyledIcon = styled(Icon)`

`;

const Container = styled.div`
    margin: 40px;
    background: ${Colors.elephantbone};
    border-top: 1px solid ${Colors.verylightgray};
    border-right: 1px solid ${Colors.verylightgray};
    border-left: 1px solid ${Colors.verylightgray};
    border-bottom: 3px solid ${Colors.verylightgray};
`;

const StyledWrapper = styled(Wrapper)`
    color: ${Colors.mediumgray};
    font-weight: 500;
    justify-content: space-between;
    padding: 20px; 
`;

const Box = styled.div`
    background: ${Colors.white};
    width: 32%;
    margin: 10px;
    padding: 10px;
    border-top: 1px solid ${Colors.verylightgray};
    border-right: 1px solid ${Colors.verylightgray};
    border-left: 1px solid ${Colors.verylightgray};
    border-bottom: 3px solid ${Colors.verylightgray};
    border-radius: 7px;

    img {
        width: 50px;
        height: 50px;
    }

    h1 {
        font-size: 25px;
        padding: 5px 0;
    }

    p {
        padding: 5px 0;
        line-height: 1.6;
    }
`;
const WorkspacesMiddleBar: FC = () => {
    return (
        <Container>
            <StyledWrapper>
                <h3>Start working on corporate matters</h3>
                <h3>Hide</h3>
            </StyledWrapper>
            <Wrapper>
                <Box>
                    <StyledIcon src="./media/icons/entities.png"/>
                    <h1>Explore your <strong>entites</strong></h1>
                    <p>Take a few minutes to look at the most important elements and specifities of your entites.</p>
                </Box>
                <Box>
                    <StyledIcon src="./media/icons/entities.png"/>
                    <h1>Structure the <strong>ownership</strong></h1>
                    <p>Get a clear view of the ownership by looking at the relations between individual and entites.</p>
                </Box>
                <Box>
                    <StyledIcon src="./media/icons/entities.png"/>
                    <h1>Define the <strong>calendar</strong></h1>
                    <p>Prepare future events by creating detailed plans around the life of your entity.</p>
                </Box>
            </Wrapper>
        </Container>
    )
}

export default WorkspacesMiddleBar;
