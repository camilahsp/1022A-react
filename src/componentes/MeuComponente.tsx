// Faça um componente que faça um retÂngulo da largura da tela por 200px

// crie uma variavel com LET no js que contenha o valor "Meu componente"

// crie uma div no componenyte que dentro dela mostre um <p>

//contendo o valor da variável

export default MeuComponente;

import './MeuComponente.css'

function MeuComponente(){
let paragrafo = "Meu Componente"
  return (
    
    <div className="minha-div">
 <p> {paragrafo} </p>
</div>
    )
}


