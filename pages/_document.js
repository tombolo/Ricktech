import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            {/* Inline critical styles */}
            <style>
              {`
                body {
                  margin-top: 0px; 
                }
                .grid-container {
                  padding-top: 150px; 
                }
              `}
            </style>
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preload the main CSS file */}
          <link rel="preload" href="/path/to/main.css" as="style" />
          <link rel="stylesheet" href="/path/to/main.css" media="print" onLoad="this.media='all'" />

          {/* Preload the font stylesheet */}
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            media="print"
            onLoad="this.media='all'"
          />
          {/* Any other custom <link> or <meta> tags */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
