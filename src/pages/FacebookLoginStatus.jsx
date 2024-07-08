import React, { useEffect, useState } from "react";

function FacebookLoginStatus() {
  const [loginStatus, setLoginStatus] = useState(null);

  useEffect(() => {
    const checkLoginState = () => {
      FB.getLoginStatus((response) => {
        setLoginStatus(response);
      });
    };

    window.fbAsyncInit = () => {
      FB.init({
        appId: "445694131692262",
        cookie: true,
        xfbml: true,
        version: "v14.0",
      });

      FB.AppEvents.logPageView();
      checkLoginState();
    };

    (function (d, s, id) {
      const js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      const fjs = d.getElementsByTagName(s)[0];
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return loginStatus;
}

export default FacebookLoginStatus;
