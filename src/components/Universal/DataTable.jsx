import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const Fakecolumns = [
  { field: "id", headerName: "Serial", width: 20 },
  { field: "staffId", headerName: "Staff ID", width: 100 },
  { field: "firstName", headerName: "First name", width: 100 },
  { field: "lastName", headerName: "Last name", width: 100 },
  { field: "gender", headerName: "Gender", width: 80 },
  { field: "phoneNumber", headerName: "Phone Number", width: 150 },
  { field: "email", headerName: "Email", width: 270 },
  { field: "role", headerName: "Role", width: 100 },
  { field: "designation", headerName: "Designation", width: 200 },
];

const rows = [
  {
    id: "1",
    firstName: "Sandra",
    lastName: "Williams",
    gender: "Female",
    staffId: "0246AHR",
    phoneNumber: "08130000000",
    email: "sandra.williams@example.com",
    role: "Admin",
    designation: "Human Resources",
  },
  {
    id: "2",
    firstName: "Abubakar",
    lastName: "Ibrahim",
    gender: "Male",
    staffId: "0251ITO",
    phoneNumber: "07062000033",
    email: "abubakar.ibrahim@example.com",
    role: "I.T",
    designation: "Operations",
  },
  {
    id: "3",
    firstName: "Ikechukwu",
    lastName: "Ugbonna",
    gender: "Male",
    staffId: "0340ITO",
    phoneNumber: "08130000000",
    email: "ikechukwu.ugbonna@example.com",
    role: "I.T",
    designation: "Operations",
  },
  {
    id: "4",
    firstName: "Joshua",
    lastName: "Adewale",
    gender: "Male",
    staffId: "0146APM",
    phoneNumber: "07038126632",
    email: "joshua.adewale@example.com",
    role: "Admin",
    designation: "Project Management",
  },
  {
    id: "5",
    firstName: "Fatimah",
    lastName: "Nasir",
    gender: "Female",
    staffId: "0226ACS",
    phoneNumber: "08130000000",
    email: "fatimah.nasir@example.com",
    role: "Admin",
    designation: "Customer Service",
  },
  {
    id: "6",
    firstName: "Hauwa",
    lastName: "Lateef",
    gender: "Female",
    staffId: "0124HR",
    phoneNumber: "08130000000",
    email: "hauwa.lateef@example.com",
    role: "I.T",
    designation: "Human Resources",
  },
  {
    id: "7",
    firstName: "Sandra",
    lastName: "Williams",
    gender: "Female",
    staffId: "0246AH",
    phoneNumber: "08130000000",
    email: "sandra.williams@example.com",
    role: "Admin",
    designation: "Human Resources",
  },
  {
    id: "8",
    firstName: "Sandra",
    lastName: "Williams",
    gender: "Female",
    staffId: "0246AH",
    phoneNumber: "08130000000",
    email: "sandra.williams@example.com",
    role: "Admin",
    designation: "Cleaning",
  },
  {
    id: "9",
    firstName: "Sandra",
    lastName: "Williams",
    gender: "Female",
    staffId: "0246PMO",
    phoneNumber: "08130000000",
    email: "sandra.williams@example.com",
    role: "P.M",
    designation: "Operations",
  },
  {
    id: "10",
    firstName: "Sunday",
    lastName: "Alison",
    gender: "Male",
    staffId: "0246H",
    phoneNumber: "08130000000",
    email: "sunday.alison@example.com",
    role: "None",
    designation: "Security",
  },
];

export default function DataTable({ staffs, columns }) {
  // console.log({staffs: staffs, columns: })
  return (
    <div style={{ height: 400, width: "100%",padding: "10px" }}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <Typography variant="h4" sx={{margin: "10px 0px"}}>All Staff</Typography>
      <Typography>Showing <span style={{padding: "10px 12px", border: "1px solid #14ADD6", borderRadius: "5px"}}>12</span> Per Page</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              {Fakecolumns.map((head) => (
                <TableCell><span style={{fontWeight: "bold"}}>{head.headerName}</span></TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.staffId}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.phoneNumber}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.designation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
