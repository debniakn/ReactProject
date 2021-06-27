import React, { FC, useState, ChangeEvent } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useSelector } from 'react-redux'; // wyciąga nam dane z reducerów
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IPhotosReducer } from '../../reducers/photosReducer';

import { InnerWrapper, InlineWrapper} from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

import Icon from '../Common/Icon';
import RoundAvatar from '../Common/RoundAvatar';
import Line from '../Common/Line';

const StyledDropdown = styled.div`
    background: ${Colors.white};
    display: block;
    position: absolute;
    top: 35px; 
    border: 2px solid ${Colors.verylightgray};
    width: -webkit-fill-available;
    input {
        margin: 5px;
        width: -webkit-fill-available;
        height: 25px;
        border: 2px solid ${Colors.verylightgray};
        border-radius: 3px;
        &::placeholder {
            color: ${Colors.mediumgray};
        }
    }
    
    h3 {
        padding: 5px;
        font-size: 12px;
        color: ${Colors.mediumgray};
        font-weight: bold;
    }

`;

const Styledlist = styled.div`
    color: ${Colors.darkgrey};
    font-weight: 540;
    h3, a {
        padding-left: 15px;
        text-decoration: none;
    }
`;

const FilterContainer = styled.div`
    max-height: 400px;
    overflow: auto;
`;

const CenterInnerWrapper = styled(InnerWrapper)`
justify-content: center;
    a{
        text-decoration: none
    }
    `;

export const HomeDropdown: FC = () => {
    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
    const { usersList, photosList, currentUser } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos
    })); 

    return (
        <StyledDropdown>
            <input value={inputText} onChange={inputHandler} type="text" placeholder="Filter..." />
            <FilterContainer>
                <h3>Platform</h3>
                <Styledlist>
                   {'Home'.toLowerCase().includes(inputText.toLowerCase()) && <InlineWrapper>
                        <Link to="/">
                            <Icon src='./media/icons/house.png' />
                            <h3>Home</h3>
                        </Link>
                    </InlineWrapper>}
                   {'Publications'.toLowerCase().includes(inputText.toLowerCase()) && <InlineWrapper>
                        <Link to="/test-site">
                            <Icon src='./media/icons/publications.png' />
                            <h3>Publications</h3>
                        </Link>
                    </InlineWrapper>}
                    {'People'.toLowerCase().includes(inputText.toLowerCase()) && <InlineWrapper>
                        <Link to="/test-site">
                            <Icon src='./media/icons/people.png' />
                            <h3>People</h3>
                        </Link>
                    </InlineWrapper>}
                    {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&<InlineWrapper>
                        <Link to="/entities">
                            <Icon src='./media/icons/entities.png' />
                            <h3>Entities</h3>
                        </Link>
                    </InlineWrapper>}
                    {'Administration'.toLowerCase().includes(inputText.toLowerCase()) && <InlineWrapper>
                        <Link to="/test-site">
                            <Icon src='./media/icons/administration.png' />
                            <h3>Administration</h3>
                        </Link>
                    </InlineWrapper>}
                </Styledlist>
                <h3>Workspaces</h3>
                <Styledlist>
                    {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&<InlineWrapper>
                        <Link to="/client-contract">
                            <Icon src='./media/icons/house.png' />
                            <h3>Client contract</h3>
                        </Link>
                    </InlineWrapper>}
                    {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&<InlineWrapper>
                        <Link to="/supplier-contract">
                            <Icon src='./media/icons/house.png' />
                            <h3>Supplier contract</h3>
                        </Link>
                    </InlineWrapper>}
                    {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&<InlineWrapper>
                        <Link to="/corporate">
                            <Icon src='./media/icons/house.png' />
                            <h3>Corporate</h3>
                        </Link>
                    </InlineWrapper>}
                    {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&<InlineWrapper>
                        <Link to="/group-norms">
                            <Icon src='./media/icons/house.png' />
                            <h3>Group Norms</h3>
                        </Link>
                    </InlineWrapper>}
                    {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&<InlineWrapper>
                        <Link to="/real-estate-contracts">
                            <Icon src='./media/icons/house.png' />
                            <h3>Real estate contracts</h3>
                        </Link>
                    </InlineWrapper>}
                </Styledlist>
            </FilterContainer>
            <Line/>
            <h3>Account</h3>
            <Styledlist>
                <InnerWrapper>
                    <RoundAvatar src={photosList?.[currentUser?.id]?.url}/>
                    <Styledlist>
                        <Link to="/profile">See profile</Link>
                    </Styledlist>
                    
                </InnerWrapper>
                <InnerWrapper>
                    <InlineWrapper>
                        <Link to="/test-site">
                            <Icon src='./media/icons/privacy.png' />
                            <h3>Privacy</h3>
                        </Link>
                    </InlineWrapper>
                </InnerWrapper>
                <InnerWrapper>
                    <InlineWrapper>
                        <Link to="/test-site">
                            <Icon src='./media/icons/settings.png' />
                            <h3>Settings</h3>
                        </Link>
                    </InlineWrapper>
                </InnerWrapper>
            </Styledlist>
            <Line />
            <CenterInnerWrapper>
                <Link to="/test-site">
                    <Icon src='./media/icons/logout.png' />
                    <h3>Logout</h3>
                </Link>
            </CenterInnerWrapper>
        </StyledDropdown>
    );
};