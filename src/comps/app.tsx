import * as React from "react";
import TestAuthStuff from "@comp/test_auth_stuff";
import { UserCredential } from "@api/auth/authentication";

type AppState = {
  loggedIn: boolean;
  name?: string;
  uid?: string;
};

class App extends React.Component<{}, AppState> {

  constructor() {
    super({});
    this.state = {
      loggedIn: false,
      name: undefined,
      uid: undefined
    }
  }

  handleCredentialChange(credential?: UserCredential) {
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
    const cred = (
        this.state.loggedIn ?
            (<div>{this.state.name} / {this.state.uid}</div>) :
            (<div>Please login.</div>)
    )
    return (
      <div>
        <h1>Hello, world!</h1>
        {cred}
        <TestAuthStuff onLogin={(e) => this.handleCredentialChange(e)} onError={alert} />
      </div>
    );
  }
}

export default App;
