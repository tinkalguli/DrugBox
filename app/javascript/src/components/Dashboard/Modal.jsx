import React from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import usersApi from "apis/users";
import Toastr from "components/Common/Toastr";
import { INITIAL_VALUES, VALIDATION_SCHEMA } from "./constants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const InvitationModal = ({ open, handleClose }) => {
  const handleSubmit = async ({ email }) => {
    try {
      await usersApi.invite({ invitation: { receiver: email }});
      handleClose();
    } catch (error) {
      Toastr.error(error);
    }
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: values => handleSubmit(values),
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <Box component="form" onSubmit={formik.handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button color="primary" variant="contained" type="submit">
            Invite
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default InvitationModal;