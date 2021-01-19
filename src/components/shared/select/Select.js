import React from 'react';

export const Select = ({ sets, onChange }) => {
  const { name, title, options } = sets;
  return (
    <label>
      {title && title}
      <select name={name} onChange={onChange}>
        {options.map(({ value, title }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
    </label>
  );
};
