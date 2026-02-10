import React from 'react'
import FormComponent from './components/FormComponent'
import InputComponent from './components/InputComponent'

interface IProductList {
  nameValue: string,
  priceValue: string,
  categoryValue: string
}
const App = () => {
  const [product, setProduct] = React.useState<IProductList>({
    nameValue: '',
    priceValue: '0',
    categoryValue: ''
  })
  const [productList, setProductList] = React.useState<IProductList[]>([])
  const [searchList, setSearchList] = React.useState<IProductList[]>([])

  const handleSubmit = (ev: React.SubmitEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if(product.nameValue && +product.priceValue > 0 && product.priceValue) {
      setProductList([...productList, {...product}])
      setSearchList([...productList, {...product}])
      setProduct({
        nameValue: '',
        priceValue: '0',
        categoryValue: ''
      })
    }
  }

  const handleSearch = (value: string) => {
    setSearchList(productList.filter(product => product.nameValue.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().includes(value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase())))
  }

  const handleChangeName = (value: string) => {
    setProduct({...product, nameValue: value})
  }

  const handleChangePrice = (value: string) => {
    setProduct({...product, priceValue: value})
  }

  return (
    <div style={{maxWidth: '800px', margin: '20px auto', backgroundColor: 'rgba(232, 232, 232, 0.5)', padding: '20px', borderRadius: '8px'}}>

      <FormComponent
        onSubmitHandle={handleSubmit}
      >
        <InputComponent labelTitle='Nome' inputId='name' inputType='text' inputValue={product.nameValue} inputChange={handleChangeName} />

        <InputComponent labelTitle='Preço' inputId='price' inputType='number' inputValue={product.priceValue} inputChange={handleChangePrice} />
        
        <div style={{display: 'grid', maxWidth: '300px', gap: '5px'}}>
          <label htmlFor="category">Categoria</label>
          <select
            name="category"
            id="category"
            value={product.categoryValue}
            onChange={({ target }) => setProduct({...product, categoryValue: target.value})}
            style={{padding: '3px'}}
          >
            <option value='' disabled>--Escolha a opção--</option>
            <option value="Mercearia Doce">Mercearia Doce</option>
            <option value="Mercearia Salgada">Mercearia Salgada</option>
            <option value="Frios">Frios</option>
            <option value="Frigorífico">Frigorífico</option>
          </select>
        </div>
        

        <button
          type="submit"
          style={{width: 'max-content', textTransform: 'uppercase', marginTop: '15px', backgroundColor: 'rgba(0, 99, 199, 1)', color: 'white', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer'}}
        >Adicionar item</button>
      </FormComponent>

      <div style={{marginTop: '20px', width: '100%'}}>
        <input
          type="text"
          placeholder='🔍 buscar item'
          style={{width: '600px', padding: '3px'}}
          onChange={({target}) => handleSearch(target.value)}
        />
      </div>

      <div style={{display: 'grid', gap: '10px', marginTop: '40px'}}>
        {searchList.length ? searchList.map(product => {
          return(
            <div key={product.nameValue}>
              <span>{product.nameValue} - R$ {product.priceValue} - Categoria: {product.categoryValue}</span>
            </div>
          )
        }) : <div>Nenhum produto encontrado.</div>}
      </div>

    </div>
  )
}

export default App
