import React from 'react'

const CarDetails = ({marca, km, cor, ano}) => {
    return (
        <div>
            <h2>Carro:</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Km: {km}</li>
                <li>Cor: {cor}</li>
                <li>Ano: {ano}</li>
            </ul>
            {km==0 ? (<p>Carro novo</p>) : (<p>Carro usado</p>)}
        </div>
    )
}

export default CarDetails