import React, {FC} from 'react';
import styled from 'styled-components';

const NotFound = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 800px;
`

export const TestSite: FC = () => {
    return (
        <NotFound> NOT FOUND </NotFound>
    )}