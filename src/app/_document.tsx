import Document, { Html, Head, Main, NextScript } from "next/document";
import PWAMeta from "../components/pwa/PWAMeta";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <PWAMeta />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
