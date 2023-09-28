// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Somos capazes de fazer muito mais do que imaginamos!',
        'A palavra “impossível” foi inventada para ser desafiada.',
        'Nós somos como o clima: feitos de dias de chuva e de sol!',
        'Há ainda tanta coisa linda na vida para se descobrir.',
        'Que todos os nossos passos nos levem para o que nos faz feliz de verdade.',
        'Abra os olhos e aventure-se nessa jornada chamada vida!',
        'Há tantas pessoas que torcem por você na vida.'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!',
        'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!',
        'Por onde você for, seja seu próprio sol. Bom dia!',
        'Escreva em seu coração: todo dia é o melhor dia do ano.',
        'Bom dia a todos! Está na hora de acordar, respirar fundo e aproveitar a beleza das pequenas coisas.',
        'Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.',
        'Não deixe que um dia nublado acabe com o seu espírito de alegria. Floresça como um girassol, que nasceu para buscar a luz do sol. Bom dia!'
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)

    setTextoFrase(allFrases[categoriaSelecionada].frases[numeroAleatorio])
  }

  return (
    <div className='container'>
      <img src={logoImg} alt="logo frases" className='logo'/>

      <h2 className='title'>Categorias</h2>

      <section className='category-area'>
        {allFrases.map( (item, index) => (
          <button 
            className="category-button" 
            key={item.id} 
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}
            onClick={ () => handleSwitchCategory(index) }
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== "" && <h2 className="texto-frase">"{textoFrase}"</h2> }
    </div>
  )
}

export default App
