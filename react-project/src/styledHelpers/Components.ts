import styled from 'styled-components';
import { Colors } from '../styledHelpers/Colors';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;

`;
 export const InnerWrapper = styled.div`
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content:flex-start;
    background: rgba(255,255,255,0);
    & > h3 {
        padding-left: 15px;
    }
`;

export const JustifyCenter = styled.div`
    justify-content: center;
`;

export const Flex = styled.div`
    display: flex;
`;

export const FlexContainer = styled.div`
    display: flex;
    background: ${Colors.verylightgray};
    margin: 5px 0;
`;


export const InlineWrapper = styled(InnerWrapper)`
    h3 {
        text-align: center;
    }
    a {
        display: inline-flex;
        text-decoration: none;
    }
`;

export const BlockContainer = styled.div`
    display: block;
`;

export const StyledBlockContainer = styled.div`
    display: block;
    input {
        width: 90px !important;
        margin-right: 20px;
    }
`;

export const ImageContainer = styled.img`
    margin: 0;
    padding: 0;
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: bolder;
    padding: 10px;
`;

export const MainTitle = styled.h1`
    padding: 15px 0;
    color: ${Colors.darkBlue};
    font-weight: 550;
`;

export const SubTitle = styled.h2`
    color: ${Colors.mediumgray};
`;

export const Text = styled.h2`
    padding: 10px 10px 0 10px;
    color: ${Colors.blue};
    font-size: 17px;
    font-weight: bolder;
`;

export const BigAvatar = styled.img`
    width: 60px;
    height: auto;
    border-radius: 50%;
`;

export const StyledHeader = styled.h3`
    padding: 5px 0;
`;

export const StyledFile = styled.h3`
    padding: 15px 0;
    background: ${Colors.verylightgray};
`;

export const TableHeader = styled.h1`
    font-weight: 550;
    padding: 10px 30px;
`;