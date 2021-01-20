import * as React from "react";
import * as Auth from "@api/auth/authentication";
import { UserCredential } from "@api/auth/authentication";

type TestAuthProps = {
  onLogin: (credential?: UserCredential) => void;
  onError: (reason: string) => void;
};
class TestAuthStuff extends React.Component<TestAuthProps> {
  handleLogin() {
    Auth.login().then(
      (value) => {
        this.props.onLogin({
          displayName: value.user?.displayName,
          uid: value.user?.uid,
        });
      },
      (reason) => {
        this.props.onError(reason);
      }
    );
  }

  handleLogout() {
    Auth.logout().then(() => {
      this.props.onLogin();
    });
  }

  render() {
    return (
      <>
        <button onClick={(e) => this.handleLogin()}>[Log in]</button>
        <button onClick={(e) => this.handleLogout()}>[Log out]</button>
      </>
    );
  }
}

export default TestAuthStuff;
