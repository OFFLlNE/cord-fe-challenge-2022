import React, { useState } from 'react';
import styled from 'styled-components';

export default function Checkbox({ id, name, label }) {
  const [checked, setChecked] = useState(false);
  return (
    <CheckboxCont>
      <CheckboxInput
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      ></CheckboxInput>
      <label htmlFor={id}>{label}</label>
    </CheckboxCont>
  );
}

const CheckboxCont = styled.div`
  margin-top: 5px;
  position: relative;
`;

const CheckboxInput = styled.input`
  margin: 5px 10px 5px 0px;
  transform: scale(1.5);
`;
