import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Usuario = () => {
  const dispatch = useDispatch();

  const { name, username, email } = useSelector((state: any) => state.usuario);

  useEffect(() => {
    axios
      .get("(https://jsonplaceholder.typicode.com/users/1),")
      .then((resposta) =>
        dispatch({ type: "GET_USUARIO", payload: resposta.data })
      );
  }, []);

  return (
    <div className="user">
      <p>Nome do usuario: {name}</p>
      <p>Username do usuario: {username}</p>
      <p>Email do meu usuario: {email}</p>
    </div>
  );
};

export default Usuario;
