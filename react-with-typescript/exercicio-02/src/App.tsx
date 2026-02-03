import React from 'react'

interface IProductList {
  nameValue: string,
  priceValue: number,
  categoryValue: string
}
const App = () => {
  const [nameValue, setNameValue] = React.useState('')
  const [categoryValue, setCategoryValue] = React.useState('')
  const [priceValue, setPriceValue] = React.useState(0)
  const [productList, setProductList] = React.useState<IProductList[]>([])

  return (
    <div>

      <form
        onSubmit={(ev) => {
          ev.preventDefault()
          setProductList([...productList, {nameValue, priceValue, categoryValue}])
        }}
      >
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id='name'
          value={nameValue}
          onChange={({ target }) => setNameValue(target.value)}
        />
        
        <label htmlFor="price">Preço</label>
        <input
          type="number"
          id='price'
          value={priceValue}
          onChange={({ target }) => setPriceValue(+target.value)}
        />
        
        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          id="category"
          onChange={({ target }) => setCategoryValue(target.value)}
        >
          <option selected disabled>--Escolha a opção--</option>
          <option value="Mercearia Doce">Mercearia Doce</option>
          <option value="Mercearia Salgada">Mercearia Salgada</option>
          <option value="Frios">Frios</option>
          <option value="Frigorífico">Frigorífico</option>
        </select>

        <button type="submit">Adicionar item</button>
      </form>

      <div>
        {productList && productList.map(product => {
          return(
            <div key={product.nameValue}>
              <span>{product.nameValue} - R$ {product.priceValue} - Categoria: {product.categoryValue}</span>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default App
