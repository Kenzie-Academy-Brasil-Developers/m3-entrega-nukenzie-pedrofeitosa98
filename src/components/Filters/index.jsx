import "./style.css";
import { FaWallet, FaPlus, FaMinus } from "react-icons/fa";

function Filters({ handleSearch, clearSearch }) {
  return (
    <div className="filters__container">
      <h3>Resumo financeiro</h3>
      <nav>
        <button
          id="filterTodos"
          className="button--nav"
          onClick={() => clearSearch()}
        >
          <FaWallet />
          Todos
        </button>
        <button
          id="filterEntradas"
          className="button--nav"
          onClick={() => handleSearch("entrada")}
        >
          <FaPlus />
          Entradas
        </button>
        <button
          id="filterDespesas"
          className="button--nav"
          onClick={() => handleSearch("despesa")}
        >
          <FaMinus />
          Despesas
        </button>
      </nav>
    </div>
  );
}

export default Filters;
