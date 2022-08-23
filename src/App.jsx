import "./styles/global.css";
import "./styles/animations.css";
import "./App.css";
import Login from "./components/Login";
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import Filters from "./components/Filters";
import List from "./components/List";
import PedrinhoFooter from "./components/PedrinhoFooter";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [transactionsSearch, setTransactionsSearch] = useState([]);
  const [buttonFilter, setButtonFilter] = useState("todos");

  const [formData, setFormData] = useState({
    description: "",
    type: "entrada",
    value: "",
  });

  function removeTransaction(transactionTarget) {
    const listRefreshed = listTransactions.filter(
      (transaction) => transaction !== transactionTarget
    );
    setListTransactions(listRefreshed);
    if (transactionsSearch.length > 0) {
      const listRefreshedOnFilter = transactionsSearch.filter(
        (transaction) => transaction !== transactionTarget
      );
      setTransactionsSearch(listRefreshedOnFilter);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.description === "") {
      alert("Adicione uma descrição na transação");
    } else if (formData.type === "despesa" && formData.value >= 0) {
      alert("Valor da DESPESA está POSITIVO");
    } else if (formData.type === "entrada" && formData.value <= 0) {
      alert("Valor da ENTRADA está NEGATIVO");
    } else {
      const newTransaction = {
        description: formData.description,
        type: formData.type,
        value: formData.value,
      };

      setListTransactions([...listTransactions, newTransaction]);

      setFormData({
        description: "",
        type: "entrada",
        value: "",
      });
    }
  }

  function handleSearch(filter) {
    const newFilter = listTransactions.filter(
      (transaction) => transaction.type === filter
    );
    setTransactionsSearch(newFilter);
    setButtonFilter(filter);
  }

  function clearSearch() {
    setTransactionsSearch([]);
    setButtonFilter("todos");
  }

  return (
    <>
      {isLogin ? (
        <>
          <Header setLogin={setLogin} />
          <main className="fadeIn">
            <aside>
              <Form
                handleSubmit={handleSubmit}
                setFormData={setFormData}
                formData={formData}
              />
              <TotalMoney transactionsList={listTransactions} />
            </aside>
            <section className="transactionsSection">
              <Filters
                handleSearch={handleSearch}
                clearSearch={clearSearch}
                buttonFilter={buttonFilter}
              />
              <List
                transactionsList={listTransactions}
                removeTransaction={removeTransaction}
                transactionsSearch={transactionsSearch}
                buttonFilter={buttonFilter}
              />
            </section>
          </main>
        </>
      ) : (
        <Login setLogin={setLogin} />
      )}
      <PedrinhoFooter />
    </>
  );
}

export default App;
