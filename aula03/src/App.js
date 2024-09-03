import './App.css';
import CarDetails from './components/CarDetails';
import ShowUserName from './components/ShowUserName';

function App() {

  const users = [
    {id: 1001, nome: "Hideaki", idade: 28, profissao: "Desenvolvedor"},
    {id: 1002, nome: "Henrique", idade: 26, profissao: "Desenvolvedor"},
    {id: 1003, nome: "Lucas", idade: 24, profissao: "Desenvolvedor"},
    {id: 1004, nome: "Felipe", idade: 27, profissao: "Desenvolvedor"},
    {id: 1005, nome: "Junior", idade: 35, profissao: "Desenvolvedor"}
  ]

  const carros = [
    {id: 2001, marca: "Toyota", km: 0, cor: "Preto", ano: 2022},
    {id: 2002, marca: "Honda", km: 30000, cor: "Branco", ano: 2021},
    {id: 2003, marca: "Ford", km: 0, cor: "Prata", ano: 2023},
    {id: 2004, marca: "Chevrolet", km: 18000, cor: "Vermelho", ano: 2020},
    {id: 2005, marca: "Volkswagen", km: 22000, cor: "Azul", ano: 2022}
]

  return (
    
    <div className='App'>
      {carros.map((carro) => (
        <CarDetails key={carro.id} marca={carro.marca} km={carro.km} cor={carro.cor} ano={carro.ano}/>
      ))}
    </div>
    
  );
}

export default App;
