import React from "react";

const PWAMeta = () => {
  return (
    <>
      <meta name="application-name" content="Wonjundev tech PWA" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Wonjundev tech PWA" />
      <meta name="description" content="Wonjundevtech blog pwa" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/Icon-152.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/touch-icon-iphone-retina.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/icons/touch-icon-ipad-retina.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://wonjundev.tech" />
      <meta name="twitter:title" content="Wonjundev tech" />
      <meta
        name="twitter:description"
        content="Wonjun dev blog made into PWA"
      />
      <meta
        name="twitter:image"
        content="https://wonjundev.tech/icons/Icon-196x196.png"
      />
      <meta name="twitter:creator" content="@Wonjun" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Wonjundev tech" />
      <meta property="og:description" content="Best PWA App in the world" />
      <meta property="og:site_name" content="Wonjundev tech" />
      <meta property="og:url" content="https://wonjundev.tech" />
      <meta
        property="og:image"
        content="https://wonjundev.tech/icons/Icons-512x512.png"
      />
    </>
  );
};

export default PWAMeta;
