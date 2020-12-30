import React from "react";
import "../styles/tailwind.css";
import "../styles/utilities.css";
import { AppProps } from "next/dist/next-server/lib/router/router";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default MyApp;
