import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Line from '../Common/Line';
import Icon from '../Common/Icon';
import {Wrapper, BigAvatar, StyledBlockContainer, SubTitle, TableHeader} from '../../styledHelpers/Components';

const Header = styled.div`
    display: flex;
`;

const Data = styled.div``;

const TableRow = styled.div`
    display:flex;

    input {
        width: 110px !important;
    }
`;
const TableColumn = styled.h3`
    width: 130px;
    padding: 5px;
    font-size: 18px;
`;
interface IProps {
    isEditable?: boolean
}

export const TableFees: FC<IProps> = (props) => {

    const [data, setData] = useState ({
                year: '2020', 
                costCenter: 'CS 150', 
                totalAmount: '2800$', 
                lawFirm: 'Clifford', 
                year1: '2020', 
                costCenter1: 'CS 150', 
                totalAmount1: '2800$', 
                lawFirm1: 'Clifford', 
                year2: '2020', 
                costCenter2: 'CS 150', 
                totalAmount2: '2800$', 
                lawFirm2: 'Clifford', 
        }
    )
    return (
        <StyledBlockContainer>
            <Header>
                <TableHeader>Year</TableHeader>
                <TableHeader>Cost Center</TableHeader>
                <TableHeader>Total Amount</TableHeader>
                <TableHeader>Law Firm</TableHeader>
            </Header>

            <Data>
                    {!props.isEditable 
                        ?
                            (<TableRow>
                                <TableColumn>{data.year}</TableColumn>
                                <TableColumn>{data.costCenter}</TableColumn>
                                <TableColumn>{data.totalAmount}</TableColumn>
                                <TableColumn>{data.lawFirm}</TableColumn>
                            </TableRow>)
                        :   (<TableRow>
                                <input type="text" value={data?.year} onChange={ev => setData({...data, year: ev.target.value})}/>
                                <input type="text" value={data?.costCenter} onChange={ev => setData({...data, costCenter: ev.target.value})}/>
                                <input type="text" value={data?.totalAmount1} onChange={ev => setData({...data, totalAmount: ev.target.value})}/>
                                <input type="text" value={data?.lawFirm} onChange={ev => setData({...data, lawFirm: ev.target.value})}/>

                        </TableRow>)
                    }

                    {!props.isEditable 
                        ?
                            (<TableRow>
                                <TableColumn>{data.year1}</TableColumn>
                                <TableColumn>{data.costCenter1}</TableColumn>
                                <TableColumn>{data.totalAmount1}</TableColumn>
                                <TableColumn>{data.lawFirm1}</TableColumn>
                            </TableRow>)
                        :   (<TableRow>
                                <input type="text" value={data?.year1} onChange={ev => setData({...data, year1: ev.target.value})}/>
                                <input type="text" value={data?.costCenter1} onChange={ev => setData({...data, costCenter1: ev.target.value})}/>
                                <input type="text" value={data?.totalAmount1} onChange={ev => setData({...data, totalAmount1: ev.target.value})}/>
                                <input type="text" value={data?.lawFirm1} onChange={ev => setData({...data, lawFirm1: ev.target.value})}/>
                        </TableRow>)
                    }
                    {!props.isEditable 
                        ?
                            (<TableRow>
                                <TableColumn>{data.year2}</TableColumn>
                                <TableColumn>{data.costCenter2}</TableColumn>
                                <TableColumn>{data.totalAmount2}</TableColumn>
                                <TableColumn>{data.lawFirm2}</TableColumn>
                            </TableRow>)
                        :   (<TableRow>
                                <input type="text" value={data?.year2} onChange={ev => setData({...data, year2: ev.target.value})}/>
                                <input type="text" value={data?.costCenter2} onChange={ev => setData({...data, costCenter2: ev.target.value})}/>
                                <input type="text" value={data?.totalAmount2} onChange={ev => setData({...data, totalAmount2: ev.target.value})}/>
                                <input type="text" value={data?.lawFirm2} onChange={ev => setData({...data, lawFirm2: ev.target.value})}/>
                        </TableRow>)
                    }
            </Data>
        </StyledBlockContainer>
    )
}
