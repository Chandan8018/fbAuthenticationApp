import React from "react";
import FacebookLoginStatus from "./FacebookLoginStatus";

function FacebookLogin() {
  const loginStatus = FacebookLoginStatus();

  const handleLogin = () => {
    FB.login((response) => {
      if (response.authResponse) {
        console.log("Welcome! Fetching your information.... ");
        FB.api("/me", function (response) {
          console.log("Good to see you, " + response.name + ".");
        });
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    });
  };

  const handleLogout = () => {
    FB.logout((response) => {
      console.log("User logged out.");
    });
  };

  return (
    <div>
      {loginStatus && loginStatus.status === "connected" ? (
        <button onClick={handleLogout}>Logout from Facebook</button>
      ) : (
        <button onClick={handleLogin}>Login with Facebook</button>
      )}
    </div>
  );
}

export default FacebookLogin;
