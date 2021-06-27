import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import axios from "axios";
import useDropdown from 'react-dropdown-hook';

import { Colors } from '../../styledHelpers/Colors';
import Icon from '../Common/Icon';
import { Wrapper, Title, BlockContainer, InnerWrapper, Text, ImageContainer } from '../../styledHelpers/Components';
import {Comment} from './Comment';

const StyledWrapper = styled(Wrapper)`
    justify-content: space-between;

    input {
        background: url(./media/icons/search.png) no-repeat scroll ${Colors.white};
        height: 30px;
        font-size: 15px;
        background-position: right;
        border: 2px solid #ebe9e9;
        border-radius: 3px;
        margin-left: 450px;
        
    }
`;

const OptionContainer = styled(BlockContainer)`
    color: ${Colors.blue};
    margin-right: 20px;
`;

const Container = styled.div`
    margin: 30px;


`;

const StyledReactPagination = styled.div`
    margin: 0 140px;
    .pagination {
        color: #44c3fd;
        display: flex;
        justify-content: space-around;
        padding-bottom: 100px;
    }

    .isActive {
        color: black
    }

`;


interface IProps {
    index?: number;
}

export const ResumeYourWork: FC = (props: any) => {

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();


    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);
    const [commentNumber]= useState(15);
    const [pageCount, setPageCount] = useState(0);

    const info: IProps = {
        index: props.index
    }

    const getData = async() => {
        const req1 = await axios.get('https://jsonplaceholder.typicode.com/comments');

        const commentsData = req1.data;
        const slicedPages = commentsData.slice(currentPage, currentPage + commentNumber);
        setData(slicedPages);
        setPageCount(Math.ceil(commentsData.length / commentNumber));

    }

    const changePage = (e: any) => {
        const selectedPage = e.selected;
        setCurrentPage(selectedPage + 1);
    };

    const [filtered, setFilter] = useState([]);
    useEffect(() => {
        setFilter(data);
        getData();
    }, [currentPage]);


    return (
        <>
            <Container>
                <StyledWrapper>
                    <Title>Resume your work</Title>
                    <input value={inputText} onChange={inputHandler} type="text" name="" id="" placeholder="Filter by title..."/>
                    <OptionContainer>
                        <InnerWrapper onClick={toggleDropdown}>
                            <Icon src="./media/icons/wifi.svg"></Icon>
                            <h3>Followed &#x25BC; </h3>
                        </InnerWrapper>
                        {dropdownOpen &&
                        <div>
                            <ul>
                                <li>Wszystkie</li>
                                <li>Moje</li>
                            </ul>
                        </div>
                        }
                    </OptionContainer>
                </StyledWrapper>

                <div>
                    {data.map((user: any, index: number,) => (
                        <div>
                            {
                                user.name.includes(inputText) && (
                                    <Comment
                                        id={user.id}
                                        title={user.name}
                                        body={user.body}
                                        postId={user.postId}
                                        index={Math.floor(Math.random() * 9)}
                                    >

                                    </Comment>
                                )
                            }
                        </div>
                    ))}
                </div>

            </Container>
            <StyledReactPagination>
                <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    breakLabel="..."
                    pageCount={pageCount}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={changePage}
                    containerClassName="pagination"
                    activeClassName={"isActive"}
                >
                </ReactPaginate>
            </StyledReactPagination>
        </>
    )
}