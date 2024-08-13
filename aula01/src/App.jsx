import img01 from './assets/images/img01.jpeg'
import './App.css'

function App() {

  return (
    <>
      <h1>Laboratório de Desenvolvimento Web</h1>
      <div>
        <img src={img01} alt="Gato Brabo" />
      </div>
      <p className='read-the-docs'>Primeira atividade utilizando React.</p>
    </>
  )
}

export default App
