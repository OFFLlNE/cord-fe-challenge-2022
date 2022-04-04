import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../checkbox';

import * as colors from '../../colors';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div onClick={() => setIsActive(!isActive)}>
        <AccordionTitleWrapper>
          <AccordionSymbol>{isActive ? '—' : '+'}</AccordionSymbol>
          <AccordionTitle>{title}</AccordionTitle>
        </AccordionTitleWrapper>
      </div>
      {isActive && (
        <>
          {content.map((option) => (
            <Checkbox
              key={option.id}
              id={option.id}
              name={option.name}
              label={option.name}
            />
          ))}
        </>
      )}
    </>
  );
};

const AccordionFilter = ({ genres }) => {
  const accordionData = [
    {
      title: 'Select genre(s)',
      content: genres,
    },
    {
      title: 'Select min. vote',
      content: [
        { id: '7.5', name: 7.5 },
        { id: '8', name: 8 },
        { id: '8.5', name: 8.5 },
        { id: '9', name: 9 },
        { id: '10', name: 10 },
      ],
    },
    {
      title: 'Select language',
      content: [
        { id: 'GR', name: 'Greek' },
        { id: 'EN', name: 'English' },
        { id: 'RU', name: 'Russian' },
        { id: 'PO', name: 'Polish' },
      ],
    },
  ];

  return (
    <AccordionFilterWrapper>
      {accordionData.map(({ title, content }) => (
        <Accordion key={title} title={title} content={content} />
      ))}
    </AccordionFilterWrapper>
  );
};

export default AccordionFilter;

const AccordionFilterWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const AccordionTitleWrapper = styled.strong`
  color: ${colors.fontColor};
  display: flex;
  font-size: 1.2em;
  cursor: pointer;
`;

const AccordionTitle = styled.p`
  color: ${colors.fontColor};
  align-self: center;
  margin: 0;
`;

const AccordionSymbol = styled.p`
  color: ${colors.fontColor};
  margin: 0px 10px 0px 0px;
  font-size: 1.3em;
`;
