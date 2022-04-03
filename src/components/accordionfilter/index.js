import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../checkbox';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          {isActive ? '-' : '+'}
          {title}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {content.map((option) => (
            <Checkbox
              key={option.id}
              id={option.id}
              name={option.name}
              checked={false}
              label={option.name}
            />
          ))}
        </div>
      )}
    </div>
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
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default AccordionFilter;
