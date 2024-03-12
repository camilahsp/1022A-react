

import './App.css'
function App() {
  let nome =  "tere"
  let sobrenome = "gui"
  return (
    <div>

    <h1 className="meu-nome">Olá, eu sou {nome} {sobrenome} </h1>
    <h1>Olá, eu sou linda</h1> 

    </div> // componente = funçao que devolve jsx, dentro de um unico elemento onde dentro desse elemento eu posso ter html com javascript misturado, sendo que o javascript estara dentro de chaves{} // dentro desse retorno so pode devolver um unico elemento, os outros elemnetos tem que estar dentro desse unico elemento
  ) //JSX - Javascript XML (javascript com html) / componente= função com retorno // jsx mistura javascript com html 
}

export default App
