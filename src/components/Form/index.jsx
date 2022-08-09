import './style.css';

function Form({handleSubmit, setFormData, formData}) {
  return (
    <div className='form__container fadeInUp'>
      <form onSubmit={handleSubmit}>
        <section className='description__section'>
          <label htmlFor="description">Descrição</label>
          <input 
            name='description' 
            type='text' 
            placeholder='Digite aqui sua descrição'
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
          <span className='helperText'>Ex: Compra de roupas</span>
        </section>
        <section className='value__section'>
          <div className='value__input'>
            <label htmlFor="value">Valor</label>
            <input 
              name='value' 
              type='number'
              placeholder='Valor'
              value={formData.value}
              onChange={(e) => setFormData({...formData, value: Number(e.target.value)})}
            />
          </div>
          <div className='value__select'>
            <label htmlFor="type">Tipo de valor</label>
            <select 
              name="type" 
              id="valueTypes" 
              placeholder='Selecione'
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value.toLowerCase()})}
            >
              <option value="entrada">Entrada</option>
              <option value="despesa">Despesa</option>
            </select>
          </div>
        </section>
        <button className="button--big">Inserir valor</button>
      </form>
    </div>
  )
}

export default Form