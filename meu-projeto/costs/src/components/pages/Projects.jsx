import { useLocation } from 'react-router-dom';
import Message from "../layout/Message";

const Projects = () => {

  const location = useLocation();
  let messages;
  if (location.state) {
    messages = location.state.message
  }
  return (
    <div>
      <h1>Meus Projetos</h1>
      {messages && <Message msg={messages} type="success" />}

    </div>
  )
}

export default Projects