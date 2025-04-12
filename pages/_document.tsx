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
      <html lang="en">
        <head>
          <title>Code Convertor</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.svg" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          {/* Apple Touch Icon */}
          <link rel="apple-touch-icon" href="/favicon.svg" />
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"/>
            <meta name="color-scheme" content="dark" />

            <meta name="description" content="Convert code between programming languages like Python, JavaScript, Java, C++, and more with this fast and accurate code translation tool." />
            <meta name="keywords" content="Code Translator, Code Converter, Programming Language Converter, Python to JavaScript, JavaScript to Python, Java, C++, Web Tool, Arun Tiwari" />
            <meta name="author" content="Arun Tiwari" />
            <meta name="creator" content="Arun Tiwari" />
            <meta name="generator" content="Next.js" />
            <meta name="application-name" content="Code Translator" />
            <meta name="referrer" content="origin-when-cross-origin" />
            <meta name="robots" content="index, follow" />
            <link rel="shortcut icon" href="/favicon.svg" />
            <link rel="icon" href="/favicon.svg" />
            <link rel="apple-touch-icon" href="/favicon.svg" />
            <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
            <meta property="og:title" content="Code Translator | Convert Code Instantly" />
            <meta property="og:description" content="Translate code from one language to another with ease. Built by Arun Tiwari using React, Next.js, and OpenAI." />
            <meta property="og:url" content="https://ai-program-translator.vercel.app/" />
            <meta property="og:site_name" content="Code Translator by Arun Tiwari" />
            <meta property="og:image" content="/videoframe_0.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Code Translator Preview" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            <link rel="canonical" href="https://ai-program-translator.vercel.app/" />
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
