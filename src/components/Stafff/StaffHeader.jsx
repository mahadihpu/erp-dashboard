import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import {
    Box,
    Button,
    Card,
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";

function StaffHeader() {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{color: "#121212", fontSize: "14px", marginBottom: "5px"}}>Quick search a staff</Typography>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <Typography sx={{
            fontSize: "24px",
            fontWeight: 800,
            color: "#272525"
          }}>250</Typography>
          <Typography>Total number of staff</Typography>
        </Box>
        <Box>
          <Typography sx={{color: "#121212", fontSize: "14px",}}>Filter staff</Typography>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Button variant="contained" className='gradient-button'>
            Add New Staff
          </Button>
        </Box>
      </Card>
    )
}

export default StaffHeader
