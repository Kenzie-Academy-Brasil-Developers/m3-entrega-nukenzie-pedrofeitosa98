import "./style.css";

function TotalMoney({ transactionsList }) {
  if (transactionsList) {
    const valorTotal = transactionsList.reduce((acumulador, valorAtual) => {
      return valorAtual.value + acumulador;
    }, 0);
    return (
      <div className="total__container fadeInUp">
        <div>
          <h3>Valor total:</h3>
          <span id="valorTotal">$ {valorTotal}</span>
        </div>
        <span className="helpText">O valor se refere ao saldo.</span>
      </div>
    );
  }
}

export default TotalMoney;
