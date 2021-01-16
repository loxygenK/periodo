import * as React from "react";
import style from "./style/test.scss";

const App: React.FC = () => (
  <div className={style.test}>
    <h1 className={style.insideTheTest}>Hello, world!</h1>
  </div>
);

export default App;
