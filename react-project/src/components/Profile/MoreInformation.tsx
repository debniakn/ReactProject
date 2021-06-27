import React, { FC, useState } from 'react';
import styled from 'styled-components';

import {Colors} from '../../styledHelpers/Colors';
import Line from '../Common/Line';
import {Wrapper, BigAvatar, BlockContainer, SubTitle, Flex} from '../../styledHelpers/Components';

const HighlightedData = styled.h3`
    margin: 10px;
    padding: 4px;
    color: ${Colors.blue};
    background: ${Colors.lightBlue};
    border-radius: 5px;
    width: max-content;
`;



interface IProps {
    isEditable?: boolean
}
//selecty
export const MoreInformation: FC<IProps> = (props) => {
    const [info, setInfo] = useState({
        expertise: 'Mergers and acquisition',
        firstSpeciality: 'Cross border operation',
        secondSpeciality: 'Transaction over 500M$',
        firstAdmissionToPractiseLaw: 'Paris bar association',
        secondAdmissionToPractiseLaw: 'Tunisian bar association',
        country: 'Tunisia'
    })
    return (
        <div>
            <BlockContainer>
                <BlockContainer>
                    <SubTitle>Expertise</SubTitle>
                    {
                        !props.isEditable
                        ? <HighlightedData>{info.expertise}</HighlightedData>
                        :   (
                                <select onChange={e => setInfo({...info, expertise: e.target.value})}>
                                    <option value="Computer skills">Computer skills</option>
                                    <option value="Leadership">Leadership</option>
                                    <option value="Management skills">Management skills</option>
                                    <option value="Active listening">Active listening</option>
                                    <option value="Transferable skills">Transferable skills</option>
                                </select>
                            )
                    }
                </BlockContainer>
            </BlockContainer>
            <BlockContainer>
                <BlockContainer>
                    <SubTitle>Specialities</SubTitle>
                    {
                        !props.isEditable
                        ?   (
                                <Flex>
                                    <HighlightedData>{info.firstSpeciality}</HighlightedData>
                                    <HighlightedData>{info.secondSpeciality}</HighlightedData>
                                </Flex>
                            )
                        :   (
                                <div>
                                    <select onChange={e => setInfo({...info, firstSpeciality: e.target.value})}>
                                        <option value="Cloud computing">Cloud computing</option>
                                        <option value="Business intelligence/analytics">Business intelligence/analytics</option>
                                        <option value="Application developments">Application development</option>
                                        <option value="Security">Security</option>
                                        <option value="Data center management">Data center management</option>
                                    </select>
                                    <select onChange={e => setInfo({...info, secondSpeciality: e.target.value})}>
                                        <option value="Software development">Software development</option>
                                        <option value="Systems architecture and engineering">Systems architecture and engineering</option>
                                        <option value="Quality assurance">Quality assurance</option>
                                        <option value="Data science and machine learning">Data science and machine learning</option>
                                        <option value="IT security and governance">IT security and governance</option>
                                    </select>
                                </div>
                            )
                    }
                </BlockContainer>
            </BlockContainer>
            <BlockContainer>
                <BlockContainer>
                    <SubTitle>Addmission to practise law</SubTitle>
                    {
                        !props.isEditable
                        ?   (
                                <Flex>
                                    <HighlightedData>{info.firstAdmissionToPractiseLaw}</HighlightedData>
                                    <HighlightedData>{info.secondAdmissionToPractiseLaw}</HighlightedData>
                                </Flex>
                            )
                        :   (
                                <div>
                                    <select onChange={e => setInfo({...info, firstAdmissionToPractiseLaw: e.target.value})}>
                                        <option value="Cloud computing">Cloud computing</option>
                                        <option value="Business intelligence/analytics">Business intelligence/analytics</option>
                                        <option value="Application developments">Application development</option>
                                        <option value="Security">Security</option>
                                        <option value="Data center management">Data center management</option>
                                    </select>
                                    <select onChange={e => setInfo({...info, secondAdmissionToPractiseLaw: e.target.value})}>
                                        <option value="Software development">Software development</option>
                                        <option value="Systems architecture and engineering">Systems architecture and engineering</option>
                                        <option value="Quality assurance">Quality assurance</option>
                                        <option value="Data science and machine learning">Data science and machine learning</option>
                                        <option value="IT security and governance">IT security and governance</option>
                                    </select>
                                </div>
                            )
                    }
                </BlockContainer>
            </BlockContainer>
            <BlockContainer>
                <BlockContainer>
                    <SubTitle>Countries</SubTitle>
                    {
                        !props.isEditable
                        ?   (
                                    <HighlightedData>{info.country}</HighlightedData>
                            )
                        :   (                              
                                <select onChange={e => setInfo({...info, country: e.target.value})}>
                                    <option value="Poland">Poland</option>
                                    <option value="USA">USA</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Mallorca">Mallorca</option>
                                    <option value="Germany">Germany</option>
                                </select>
                            )
                    }
                </BlockContainer>
            </BlockContainer>
            <Line/>
        </div>
    )
}