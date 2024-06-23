import { React, useState } from 'react'

const Form = () => {

  const [name, setName] = useState();
  const [password, setPassword] = useState();



  const cadastrarUsuario = e => {
    e.preventDefault();
    console.log(`Usuário ${name}`);
    console.log(`Senha ${password}`);
  }

  return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="password"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="name" name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  )
}

export default Form