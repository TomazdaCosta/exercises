interface IProductListProps {
  nameValue: string,
  priceValue: string,
  categoryValue: string
}
const ProductList = ({ nameValue, priceValue, categoryValue }: IProductListProps) => {
  return (
    <div>
      <span>{nameValue} - R$ {priceValue} - Categoria: {categoryValue}</span>
    </div>
  )
}

export default ProductList
