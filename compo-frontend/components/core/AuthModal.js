import Modal from '@mui/material/Modal';
import * as React from 'react';
import { useState } from "react";

import Box from '@mui/material/Box';
import Signin from '../sections/auth-section/signin';
import Signup from '../sections/auth-section/signup';
import OnBoarding from '../sections/auth-section/onboarding';

import { AuthType } from "./Enum";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    borderRadius: "12px"

};

const AuthModal = (props) => {
    const { open, handleClose, authType } = props;
    const [authModalType, setAuthModalType] = useState();

    React.useEffect(() => {
        console.log("first::", authType)

        setAuthModalType(authType)
    }, [authType])


    const signInType = () => {
        setAuthModalType(AuthType[1])
    };
    const signUpType = () => {
        setAuthModalType(AuthType[0])
    };
    const onBoardingType = () => {
        setAuthModalType(AuthType[2])
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                {

                    authModalType === AuthType[0] && <Signin signInType={signInType} onBoardingType={onBoardingType} handleClose={handleClose} />
                }

                {
                    authModalType === AuthType[1] && <Signup signUpType={signUpType} onBoardingType={onBoardingType} handleClose={handleClose} />
                }
                {
                    authModalType === AuthType[2] && <OnBoarding />
                }
            </Box>
        </Modal>
    );
};

export default AuthModal;
