import './styles/global.css';
import './styles/animations.css'
import './App.css';
import Login from './components/Login';
import  {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TotalMoney from './components/TotalMoney';
import Filters from './components/Filters';
import List from './components/List';


function App() {
  const [isLogin, setLogin] = useState(false)

  const [listTransactions, setListTransactions] = useState([])

  const [formData, setFormData] = useState({
    description: "",
    type: "entrada",
    value: ""
  })
  
  function removeTransaction(transactionTarget) {
    const listFiltered = listTransactions.filter((transaction) => transaction !== transactionTarget)
    setListTransactions(listFiltered)
  }

  function handleSubmit(e) {
    e.preventDefault()
  
    if(formData.description === ""){
      alert("Adicione uma descrição na transação")
    } else if (formData.type === "despesa" && formData.value >= 0) {
      alert("Valor da DESPESA está POSITIVO")
    } else if (formData.type === "entrada" && formData.value <= 0) {
      alert("Valor da ENTRADA está NEGATIVO")
    } else {
      const newTransaction = {
        description: formData.description,
        type: formData.type,
        value: formData.value
      }

      setListTransactions([...listTransactions, newTransaction])

      setFormData({
        description: "",
        type: "entrada",
        value: ""
      })
    }
  }
  
  return (<>
    {isLogin ?
      (<>
      <Header setLogin={setLogin}/>
      <main className='fadeIn'>
        <aside>
          <Form 
          handleSubmit={handleSubmit}
          setFormData={setFormData}
          formData={formData}
          />
          <TotalMoney transactionsList={listTransactions}/>
        </aside>
        <section className='transactionsSection'>
          <Filters/>
          <List 
          transactionsList={listTransactions}
          removeTransaction={removeTransaction}/>
        </section>
      </main>
      </>)
    :
    (<Login setLogin={setLogin}/>)
    }
  </>
    
  )
}

export default App;
