import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DNJN1PF3CS"
      ></Script>
      <Script id="abc">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XXXXXXX');`}
      </Script>{" "}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DNJN1PF3CS"
      ></Script>
      <Script id="abc">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XXXXXXX');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
