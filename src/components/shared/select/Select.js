import React from 'react';

export const Select = ({ sets, onChange, value }) => {
  const { name, title, options } = sets;
  return (
    <label>
      {title && title}
      <select name={name} value={value} onChange={onChange}>
        {options.map(({ value, title }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
    </label>
  );
};
