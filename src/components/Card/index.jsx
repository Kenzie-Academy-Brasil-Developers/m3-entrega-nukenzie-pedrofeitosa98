import './style.css'

function Card({transaction}) {
  if (transaction.type === 'entrada'){
    return (
      <div className='cardEntrada fadeInLeft'>
        <div>
          <h3>{transaction.description}</h3>
          <p>R$ {transaction.value}</p>
          <button className='button--remove'>X</button>
        </div>
        <span className='helperText'>Entrada</span>
      </div>
    )
  }
  if (transaction.type === 'despesa'){
    return (
      <div className='cardSaida fadeInLeft'>
        <div>
          <h3>{transaction.description}</h3>
          <p>R$ {transaction.value}</p>
          <button className='button--remove'>X</button>
        </div>
        <span className='helperText'>Despesa</span>
      </div>
    )
  }
}

export default Card