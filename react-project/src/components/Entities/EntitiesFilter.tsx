import React, { FC, useState } from 'react';
import styled from 'styled-components';

import Icon from '../Common/Icon';
import {Wrapper, InnerWrapper, BlockContainer, Title} from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

const StyledDiv = styled.div`
    background: ${Colors.white};
    padding: 10px;
    box-shadow:  0 4.5px 10px rgba(0, 0, 0, 0.15),
  0 36px 80px rgba(0, 0, 0, 0.07);
    h3 {
        color: ${Colors.mediumgray};
        padding-bottom: 10px;
    }

    h2 {
        padding: 0 15px;
    }

    div {
        justify-content: end;
    }

    .link {
        color: #0669db;
        font-weight: 500;
    }
`;

const EntitesFilter: FC = () => {
    return (
        <StyledDiv>
            <h3>Rows are filtered by the following conditions starting from the top.</h3>
            <Wrapper>
                <InnerWrapper>
                    <Icon src="./media/icons/times-solid.svg"/>
                    <h2>Where</h2>
                </InnerWrapper>
                <InnerWrapper>
                    <h2>Company</h2>
                    <Icon src="./media/icons/arrow-down.svg"/>
                </InnerWrapper>
                <InnerWrapper>
                    <h2>Contains</h2>
                    <Icon src="./media/icons/arrow-down.svg"/>
                </InnerWrapper>
                <input type="text" name="" placeholder="Type..." disabled/>
            </Wrapper>
            <Wrapper>
                <InnerWrapper>
                    <Icon src="./media/icons/times-solid.svg"/>
                    <h2>Where</h2>
                </InnerWrapper>
                <InnerWrapper>
                    <h2>Status</h2>
                    <Icon src="./media/icons/arrow-down.svg"/>
                </InnerWrapper>
                <InnerWrapper>
                    <h2>Is</h2>
                    <Icon src="./media/icons/arrow-down.svg"/>
                </InnerWrapper>
                <input type="text" name="" placeholder="Type..." disabled/>
                <InnerWrapper>
                    <h2>In</h2>
                    <Icon src="./media/icons/arrow-down.svg"/>
                </InnerWrapper>
                <input type="text" name="" placeholder="Entity..." disabled/>
            </Wrapper>
            <Wrapper>
                <InnerWrapper>
                    <Icon src="./media/icons/times-solid.svg"/>
                    <h2>And</h2>
                </InnerWrapper>
                <InnerWrapper>
                    <h2>Status</h2>
                    <Icon src="./media/icons/arrow-down.svg"/>
                </InnerWrapper>
                <InnerWrapper>
                    <h2>Ends before</h2>
                    <Icon src="./media/icons/arrow-down.svg"/>
                </InnerWrapper>
                <input type="text" name="" placeholder="Date..." disabled/>
                <InnerWrapper>
                    <h2>In</h2>
                    <Icon src="./media/icons/arrow-down.svg"/>
                </InnerWrapper>
                <input type="text" name="" placeholder="Entity..." disabled/>
            </Wrapper>
            <Wrapper>
                <InnerWrapper>
                    <Icon src="./media/icons/plus.svg"/>
                    <h2 className="link">Add filter</h2>
                </InnerWrapper>
                <InnerWrapper>
                    <h2 className="link">choose property</h2>
                    <Icon src="./media/icons/arrow-down.svg"/>
                </InnerWrapper>
            </Wrapper>
        </StyledDiv>
    )
}

export default EntitesFilter;