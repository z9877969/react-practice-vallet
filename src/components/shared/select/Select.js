import React from "react";
// UI
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import SelectUI from "@material-ui/core/Select";
// import NativeSelect from "@material-ui/core/NativeSelect";

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
      {/* <SelectUI
        native
        value={value}
        onChange={onChange}
        // label="Period"
        inputProps={{
          name: { "name" },
          id: "outlined-age-native-simple",
        }}
      >
        {options.map(({ value, title }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </SelectUI> */}
    </label>
  );
};
