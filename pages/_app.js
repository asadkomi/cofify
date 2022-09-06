import "../styles/globals.css";
import Layout from "../components/layout/Layout.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "../pages/theme/theme.js";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
