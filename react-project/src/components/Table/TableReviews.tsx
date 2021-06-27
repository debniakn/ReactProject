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
`;
const TableColumn = styled.h3`
    width: 110px;
    padding: 5px;
`;
interface IProps {
    isEditable?: boolean
}

export const TableReviews: FC<IProps> = (props) => {

    const [data, setData] = useState ({
                name1: 'Operation', 
                entity1: 'Renault', 
                location1: 'France', 
                expertise1: '#Tax', 
                date1: '20-01-2019', 
                name2: 'Operation', 
                entity2: 'Renault', 
                location2: 'France', 
                expertise2: '#Tax', 
                date2: '20-01-2019', 
                name3: 'Operation', 
                entity3: 'Renault', 
                location3: 'France', 
                expertise3: '#Tax', 
                date3: '20-01-2019', 
        }
    )
    return (
        <StyledBlockContainer>
            <Header>
                <TableHeader>Name</TableHeader>
                <TableHeader>Entity</TableHeader>
                <TableHeader>Location</TableHeader>
                <TableHeader>Expertise</TableHeader>
                <TableHeader>Date</TableHeader>
            </Header>
            <Line/>
            <Data>
                    {!props.isEditable 
                        ?
                            (<TableRow>
                                <TableColumn>{data.name1}</TableColumn>
                                <TableColumn>{data.entity1}</TableColumn>
                                <TableColumn>{data.location1}</TableColumn>
                                <TableColumn>{data.expertise1}</TableColumn>
                                <TableColumn>{data.date1}</TableColumn>
                            </TableRow>)
                        :   (<TableRow>
                                <input type="text" value={data?.name1} onChange={ev => setData({...data, name1: ev.target.value})}/>
                                <input type="text" value={data?.entity1} onChange={ev => setData({...data, entity1: ev.target.value})}/>
                                <input type="text" value={data?.location1} onChange={ev => setData({...data, location1: ev.target.value})}/>
                                <input type="text" value={data?.expertise1} onChange={ev => setData({...data, expertise1: ev.target.value})}/>
                                <input type="date" value={data?.date1} onChange={ev => setData({...data, date1: ev.target.value})}/>

                        </TableRow>)
                    }
                    {!props.isEditable 
                        ?
                            (<TableRow>
                                <TableColumn>{data.name2}</TableColumn>
                                <TableColumn>{data.entity2}</TableColumn>
                                <TableColumn>{data.location2}</TableColumn>
                                <TableColumn>{data.expertise2}</TableColumn>
                                <TableColumn>{data.date2}</TableColumn>
                            </TableRow>)
                        :   (<TableRow>
                                <input type="text" value={data?.name2} onChange={ev => setData({...data, name2: ev.target.value})}/>
                                <input type="text" value={data?.entity2} onChange={ev => setData({...data, entity2: ev.target.value})}/>
                                <input type="text" value={data?.location2} onChange={ev => setData({...data, location2: ev.target.value})}/>
                                <input type="text" value={data?.expertise2} onChange={ev => setData({...data, expertise2: ev.target.value})}/>
                                <input type="date" value={data?.date2} onChange={ev => setData({...data, date2: ev.target.value})}/>
                        </TableRow>)
                    }
                    {!props.isEditable 
                        ?
                            (<TableRow>
                                <TableColumn>{data.name3}</TableColumn>
                                <TableColumn>{data.entity3}</TableColumn>
                                <TableColumn>{data.location3}</TableColumn>
                                <TableColumn>{data.expertise3}</TableColumn>
                                <TableColumn>{data.date3}</TableColumn>
                            </TableRow>)
                        :   (<TableRow>
                                <input type="text" value={data?.name3} onChange={ev => setData({...data, name3: ev.target.value})}/>
                                <input type="text" value={data?.entity3} onChange={ev => setData({...data, entity3: ev.target.value})}/>
                                <input type="text" value={data?.location3} onChange={ev => setData({...data, location3: ev.target.value})}/>
                                <input type="text" value={data?.expertise3} onChange={ev => setData({...data, expertise3: ev.target.value})}/>
                                <input type="date" value={data?.date3} onChange={ev => setData({...data, date3: ev.target.value})}/>
                        </TableRow>)
                    }
            </Data>
        </StyledBlockContainer>
    )
}
