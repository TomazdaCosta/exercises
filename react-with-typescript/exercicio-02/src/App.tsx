import React from 'react'
import FormComponent from './components/FormComponent'
import InputComponent from './components/InputComponent'
import SelectComponent from './components/SelectComponent'
import ProductList from './components/ProductList'

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
  const options = ['Mercearia Doce', 'Mercearia Salgada', 'Frios', 'Cereais']

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

  const handleChangeCategory= (value: string) => {
    setProduct({...product, categoryValue: value})
  }

  return (
    <div style={{maxWidth: '800px', margin: '20px auto', backgroundColor: 'rgba(232, 232, 232, 0.5)', padding: '20px', borderRadius: '8px'}}>

      <FormComponent
        onSubmitHandle={handleSubmit}
      >
        <InputComponent labelTitle='Nome' inputId='name' inputType='text' inputValue={product.nameValue} inputChange={handleChangeName} />

        <InputComponent labelTitle='Preço' inputId='price' inputType='number' inputValue={product.priceValue} inputChange={handleChangePrice} />
        
        <SelectComponent labelTitle='Categoria' selectId='category' selectValue={product.categoryValue} selectChange={handleChangeCategory} options={options} />
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
            <ProductList key={product.nameValue} nameValue={product.nameValue} priceValue={product.priceValue} categoryValue={product.categoryValue} />
          )
        }) : <div>Nenhum produto encontrado.</div>}
      </div>

    </div>
  )
}

export default App
