import React, {FC} from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { Link } from "react-router-dom";

import Icon from '../Common/Icon';

import { Colors } from '../../styledHelpers/Colors';
import { HomeDropdown } from './HomeDropdown';



const Logo = styled.img`
    width: 35px;
    height: 35px;
    padding-right: 15px;
`;

const Wrapper = styled.div`
    background: ${Colors.white};
    display: flex;
    position: relative;
    padding: 10px 20px;
    box-shadow: 0 2px 2px lightgrey;
`;
const StyledDropdown = styled.div`
    position:relative;
    width: 15%;
    align-self: center;
`;

const InnerWrapper = styled.div`
    display: flex;
    width: 100%;
    & > h3 {
        align-self: center;
        padding: 0 10px 0 10px;
        width: -webkit-fill-available;
    }
    & > p {
        align-self: center;      
    }
`;

const StyledSearchBar = styled.div`
    width: 67%;
    margin: 0 50px 0 50px;
    input {
        background: url('./media/icons/search.png') no-repeat scroll ;
        height: 30px;
        font-size: 15px;
        background-position: right ;
        width: 50%;
        border: 2px solid ${Colors.verylightgray};
        border-radius: 3px;

        &::placeholder {
            text-align: center;
        }
    }


`;

const StyledIconsBar = styled.div`
    justify-content: flex-end;
    position: relative;
    .badge1 {
        text-decoration: none;
        position: absolute;
        top: -7px;
        right: 35px;
        font-size: smaller;
        padding: 2px 6px;
        border-radius: 50%;
        background: ${Colors.blue};
        color: white;
    }

    .badge2{
        text-decoration: none;
        position: absolute;
        top: -7px;
        right: -5px;
        font-size: smaller;
        padding: 2px 6px;
        border-radius: 50%;
        background: ${Colors.blue};
        color: white;
    }
`;

const RoundIcon =  styled.img`
    padding: 5px;
    margin: 0 4px;
    width: 20px;
    height: 20px;
    background: ${Colors.verylightgray};
    border-radius: 50% ;

`;

Logo.defaultProps = {
    src: './media/icons/logo.png',
};

export const TopMenu: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    

    
    return (
        <Wrapper>
            <Link to="/"><Logo /></Link>
            <StyledDropdown ref={wrapperRef}>
                <InnerWrapper onClick={toggleDropdown}>
                    <Icon src="./media/icons/house.png" />
                    <h3>Home</h3>
                    <p>&#x25BC;</p>                   
               </InnerWrapper> 
               {dropdownOpen &&
                        <HomeDropdown />
                }                     
            </StyledDropdown>          
            <StyledSearchBar>
                <input type="text" placeholder="Search Legalcluster" />
            </StyledSearchBar>
            <StyledIconsBar>
            <Link to="/test-site">
                <Icon src="./media/icons/comments.png" />
            </Link>
            <Link to="/test-site">
                <RoundIcon src="./media/icons/house.png"/>
                <span className="badge1">3</span>
            </Link>
            <Link to="/test-site">
                <RoundIcon src="./media/icons/bell.png"/>
                <span className="badge2">3</span>
            </Link>
            </StyledIconsBar>
        </Wrapper>
    )
}

