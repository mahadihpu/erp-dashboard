import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import StaffHeader from "../../components/Stafff/StaffHeader";
import axios from "axios";
import StaffTable from "../../components/Universal/DataTable";
import DataTable from "../../components/Universal/DataTable";

function Staff() {
  const [staffs, setStaffs] = useState([]);
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const staffData = await axios.get(
        "https://erp-dashboard.free.beeceptor.com/staffs"
      );
      if (staffData.data.length > 0) {
        setStaffs(staffData.data);
        const tempColumn = {};
        Object.keys(staffData.data[0]).map((item) => {
          (tempColumn["field"] = item), (tempColumn["headerName"] = item);
        });
        setColumns([tempColumn]);
      }
    };
    fetchData();
  }, [staffs]);

  console.log({ columns });

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container>
        <Grid xs={2}></Grid>
        <Grid xs={10}>
          <StaffHeader />
          <DataTable staffs={staffs} columns={columns} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Staff;
