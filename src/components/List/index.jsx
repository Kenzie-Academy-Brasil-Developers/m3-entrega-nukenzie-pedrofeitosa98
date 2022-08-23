import NoCard from "./NoCard.svg";
import Card from "../Card/index";
import "./style.css";

function List({
  transactionsList,
  removeTransaction,
  transactionsSearch,
  buttonFilter,
}) {
  const listRender =
    buttonFilter !== "todos" ? transactionsSearch : transactionsList;

  return (
    <div className="transactionsList">
      {listRender.length ? (
        listRender.map((item, index) => (
          <Card
            key={index}
            transaction={item}
            removeTransaction={removeTransaction}
          />
        ))
      ) : (
        <>
          <h2>
            Ainda não há transações em{" "}
            <strong>{buttonFilter.toUpperCase()}</strong>
          </h2>
          <img src={NoCard} className="noCard fadeInLeft" alt="" />
          <img src={NoCard} className="noCard fadeInLeft" alt="" />
          <img src={NoCard} className="noCard fadeInLeft" alt="" />
        </>
      )}
    </div>
  );
}

export default List;
