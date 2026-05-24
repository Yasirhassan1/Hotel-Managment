import { memo } from "react";
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import {TextField} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import {Switch} from "@mui/material";


import InputLabel from '@mui/material/InputLabel';


const Dashboard = () => {
	return (
		<div>
			<h2>Dashboard</h2>
            <div style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap"
            }}>
			<Button variant="contained" color="primary" size="large" >Primary button</Button>
			<Button variant="contained" color="secondary" >Secondary Button</Button>
			<Button variant="outlined" color="primary" >Outline Button</Button>
			<Button variant="text" color="primary" >Text Button</Button>
			<Button variant="contained" color="error" >Danger Button</Button>
			<Button variant="contained" disabled >Disabled</Button>
            <TextField fullWidth id="outlined-basic" label="Input Text" color="primary"  variant="outlined" />
 <TextField
          error
          id="outlined-error"
         fullWidth
          label="Error"
          
         
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          fullWidth
          multiline
        />
         <TextField
          id="outli"
          label="Disabled"
          placeholder="Placeholder"
          fullWidth
          disabled
        />
      
       <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
    defaultValue={10}
    

  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
<Switch defaultChecked />
        
            </div>
		</div>
	);
};

export default memo(Dashboard);
