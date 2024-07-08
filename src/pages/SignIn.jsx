import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { SignInText } from "../data/data";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";

function SignIn({ openModal, setOpenModal }) {
  return (
    <>
      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        size='2xl'
      >
        <Modal.Header>
          {<TypewriterEffectSmooth words={SignInText} />}
        </Modal.Header>
        <Modal.Body className='p-0'>
          <LoginSocialFacebook
            appId='2430523247145827'
            onResolve={(response) => {
              console.log(response);
            }}
            onReject={(error) => {
              console.log(error);
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignIn;
