import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from '@/components/CartContext';
import { Helmet } from 'react-helmet';
import GlobalStyles from '@/components/GlobalStyles';



const theme = {
  // Add your theme properties here
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </ThemeProvider>
    </>
  );
}
