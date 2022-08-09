import './style.css'

function Filters() {
  return (
    <div className='filters__container'>
      <h3>Resumo financeiro</h3>
      <nav>
        <button id='filterTodos' className="button--nav">Todos</button>
        <button id='filterEntradas' className="button--nav">Entradas</button>
        <button id='filterDespesas' className="button--nav">Despesas</button>
      </nav>
    </div>
  )
}

export default Filters