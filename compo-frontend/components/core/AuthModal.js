import * as React from "react";
import { useState } from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Signin from "../sections/auth-section/signin";
import Signup from "../sections/auth-section/signup";
import OnBoarding from "../sections/auth-section/onboarding";
import { AuthTypeModal } from "./Enum";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth:"1200px",
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  borderRadius: "12px",
  height: "auto",
};

const AuthModal = (props) => {
  const { open, handleClose, authTypeModal, setauthTypeModal } = props;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {authTypeModal === AuthTypeModal.Signin && (
          <Signin
            changeAuthModalType={setauthTypeModal}
            handleClose={handleClose}
          />
        )}
        {authTypeModal === AuthTypeModal.Signup && (
          <Signup
            changeAuthModalType={setauthTypeModal}
            handleClose={handleClose}
          />
        )}
        {authTypeModal === AuthTypeModal.Onboarding && (
          <OnBoarding handleClose={handleClose} />
        )}
      </Box>
    </Modal>
  );
};

export default AuthModal;
