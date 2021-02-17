import React from "react";
import { Provider } from "react-redux";
import Usuario from "./Components/Usuario/usuario";
import Todos from "./Components/Todos/todos";
import "./App.css";
import { store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Usuario />
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
