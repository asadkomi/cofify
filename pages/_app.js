import "../styles/globals.css";
import Layout from "../components/layout/Layout.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "../pages/theme/theme.js";

import store from "../StateManagement/store.js";
import { Provider } from "react-redux";

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
