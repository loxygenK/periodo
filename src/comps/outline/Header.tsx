import * as React from "react";

import style from "@style/outline/header.module.scss";
import {Credential} from "@api/auth/authentication";

export const Header = (props: {onCredentialChange: (cred?: Credential) => void}) => (
    <header className={style.header}>
      <h1 className={style.serviceName}>Periodo</h1>
      <p className={style.loginInfo}>
        <span className={style.userName}>Flisan</span><br />
        としてログイン中
      </p>
    </header>
)