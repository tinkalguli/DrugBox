import React, { useState } from "react";
import Navbar from "./Navbar";
import { Grid, Typography } from "@mui/material";
import InvitationModal from "./Modal";
import Button from "@mui/material/Button";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Typography variant="h3" component="h2">
            Get you medicines at home from DrugBox
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => setIsModalOpen(true)} className="p-4" color="primary" variant="contained">
            Invite friend
          </Button>
        </Grid>
      </Grid>
      <InvitationModal open={isModalOpen} handleClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Dashboard;