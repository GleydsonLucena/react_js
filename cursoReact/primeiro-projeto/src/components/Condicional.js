import { useState } from 'react'

const Condicional = () => {

  const [email, setEmail] = useState()
  const [useEmail, setUseEmail] = useState()

  const enviarEmail = (e) => {
    e.preventDefault();
    setUseEmail(email);
    console.log(useEmail);
  };

  const limparEmail = (setUseEmail) => {
    setUseEmail('');
    
  };

  return (
    <>
      <h2>Cadastre o seu email:</h2>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={enviarEmail}>Enviar</button>

        { useEmail && (
          <div>
            <p>O email do usuário é {useEmail}</p>
            <button onClick={limparEmail}>Limpar</button>
          </div>
        )}

      </form>

    </>
  )
}

export default Condicional