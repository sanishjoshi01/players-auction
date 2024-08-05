import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

//TODO games props for value of menu items
function CustomDropdown({ width, icon, label, sx }) {
  //ALL GAMES DROPDOWN
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box sx={{ width: { width } }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{
            "&.Mui-focused": {
              color: "white",
            },
          }}
        >
          <div className="flex items-center gap-2">
            {icon}
            {label}
          </div>
        </InputLabel>
        <Select sx={sx} value={value} onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default CustomDropdown;
