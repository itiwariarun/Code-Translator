import { Html, Head, Main, NextScript } from "next/document";
import Document, { DocumentContext, DocumentInitialProps } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Code Convertor</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.svg" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          {/* Apple Touch Icon */}
          <link rel="apple-touch-icon" href="/favicon.svg" />
          {/* Theme color for mobile browsers */}
          <meta name="theme-color" content="#ffffff" />
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
