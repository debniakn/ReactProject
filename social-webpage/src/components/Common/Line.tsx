import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

const StyledDiv = styled.div`
    border-bottom: 2px solid ${Colors.verylightgray};
`;

const Line: FC = () => {
    return ( 
    <StyledDiv/>
)};

export default Line;