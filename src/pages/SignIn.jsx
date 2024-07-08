import { Alert, Button, Label, Modal, TextInput } from "flowbite-react";
import { SignInText } from "../data/data";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { LoginSocialFacebook } from "reactjs-social-login";
import { useCallback, useState } from "react";
import { FacebookLoginButton } from "react-social-login-buttons";

function SignIn({ openModal, setOpenModal }) {
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const [referSuccess, setReferSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  const onLogout = useCallback(() => {}, []);

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
            appId='2260388870971423'
            fieldsProfile={
              "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
            }
            onLoginStart={onLoginStart}
            onLogoutSuccess={onLogoutSuccess}
            // redirect_uri={REDIRECT_URI}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
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
