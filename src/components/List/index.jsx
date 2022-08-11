import NoCard from './NoCard.svg'
import Card from '../Card/index';
import './style.css'

function List({transactionsList, removeTransaction}) {
  return(
    <div className='transactionsList'>
      {transactionsList.length ?
        transactionsList.map((item, index) => (
        <Card key={index} transaction={item} removeTransaction={removeTransaction}/>))
      :
        <>
        <h2>Você ainda não possui nenhum lançamento</h2>
        <img src={NoCard} className='noCard fadeInLeft' alt="" />
        <img src={NoCard} className='noCard fadeInLeft' alt="" />
        <img src={NoCard} className='noCard fadeInLeft' alt="" />
        </>
      }
    </div>
  )
}

export default List