import React from "react";
import "./App.css";
import { useRecoilValue } from "recoil";
import { routerState } from "stores";
import { Todos } from "containers/Todos";

function App() {
  const value = useRecoilValue(routerState);

  return <>{value === "Todos" && <Todos />}</>;
}

export default App;
