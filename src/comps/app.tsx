import * as React from "react";
import { Credential } from "@api/auth/authentication";
import {Header} from "@comp/outline/Header";

import style from "@style/app.module.scss";

type AppState = {
  loggedIn: boolean;
  name?: string;
  uid?: string;
};

class App extends React.Component<Record<string, never>, AppState> {
  constructor() {
    super({});
    this.state = {
      loggedIn: false,
      name: undefined,
      uid: undefined,
    };
  }

  handleCredentialChange(credential?: Credential) {
    if (credential == null) {
      this.setState({
        loggedIn: false,
        name: undefined,
        uid: undefined,
      });
      return;
    }
    this.setState({
      loggedIn: true,
      name: credential.displayName || "anonymous",
      uid: credential.uid || "",
    });
  }

  render() {
    return (
      <div className={style.appRoot}>
        <Header onCredentialChange={(cred) => this.handleCredentialChange(cred)} />
      </div>
    );
  }
}

export default App;
