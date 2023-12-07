import React, { useEffect } from "react";

const TidioChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/dqc1jotukkeouj53w1m5qet5uz99ohe7.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return <div></div>; // You can return an empty div or any other content you want
};

export default TidioChat;