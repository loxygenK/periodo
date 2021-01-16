import * as React from "react";
import style from "@style/test.module.scss";

const App: React.FC = () => (
  <div className={style.test}>
    <span className={style.test}>123</span>
    <h1 className={style.insideTheTest}>Hello, world!</h1>
  </div>
);

export default App;
