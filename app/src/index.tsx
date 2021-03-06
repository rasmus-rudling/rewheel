import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import "../build/build.css";
import App from "./App";
import "./style/tailwind.css";
// Redux
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import ApolloWrapper from "./components/common/ApolloWrapper";

const auth0_domain: string = process.env.AUTH0_DOMAIN ?? "undefined";
const auth0_clientId: string = process.env.AUTH0_CLIENT_ID ?? "undefined";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0_domain}
      clientId={auth0_clientId}
      redirectUri={window.location.origin}
      audience="rewheel-api-identifier"
      scope="openid profile email"
    >
      <ApolloWrapper>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </ApolloWrapper>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
