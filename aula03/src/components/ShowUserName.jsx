import React from 'react'

const ShowUserName = ({nome, idade, profissao}) => {
    return (
        <div>
            <h2>{nome}</h2>
            <ul>
                <li>Idade: {idade}</li>
                <li>Profissao: {profissao}</li>
            </ul>
            {idade>=18 ? (<p>Maior de Idade</p>) : (<p>Menor de Idade</p>)}
        </div>
    )
}

export default ShowUserName