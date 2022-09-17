import "../styles/globals.css";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Layout from "../components/layout/Layout.jsx";
import { theme } from "../pages/theme/theme.js";

import store from "../StateManagement/store.js";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
