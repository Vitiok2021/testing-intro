const products = require('../../src/data/products')
const { sortProductsByPrice } = require('../../src/catalog')

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const sortProduct = sortProductsByPrice(products, 'asc')
    const productId = sortProduct.map((item) => item.id)
    expect(productId).toEqual([3, 6, 5, 4, 2, 1])
  })
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const sortProduct = sortProductsByPrice(products)
    const productId = sortProduct.map((item) => item.id)
    expect(productId).toEqual([3, 6, 5, 4, 2, 1])
  })
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const customProducts = products.filter(({ id }) => [1, 3, 4].includes(id))
    const sortProduct = sortProductsByPrice(customProducts, 'asc')
    const productId = sortProduct.map((item) => item.id)
    expect(productId).toEqual([3, 4, 1])
  })
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const sortProduct = sortProductsByPrice(products, 'desc')
    const productId = sortProduct.map((item) => item.id)
    expect(productId).toEqual([1, 2, 4, 5, 6, 3])
  })
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const customProducts = products.filter(({ id }) => [3, 1, 4].includes(id))
    const sortProduct = sortProductsByPrice(customProducts, 'desc')
    const productId = sortProduct.map((item) => item.id)
    expect(productId).toEqual([1, 4, 3])
  })
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const customProducts = products.filter(({ id }) => [5, 2, 6].includes(id))
    const sortProduct = sortProductsByPrice(customProducts, 'desc')
    const productId = sortProduct.map((item) => item.id)
    expect(productId).toEqual([2, 5, 6])
  })
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const filteredProducts = products.filter(({ id }) => [1, 3, 4].includes(id))
    sortProductsByPrice(filteredProducts, 'asc')
    const productId = filteredProducts.map((item) => item.id)
    expect(productId).toEqual([1, 3, 4])
  })
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const filteredProducts = products.filter(({ id }) => [1, 3, 4].includes(id))
    sortProductsByPrice(filteredProducts, 'desc')
    const productId = filteredProducts.map((item) => item.id)
    expect(productId).toEqual([1, 3, 4])
  })
  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    sortProductsByPrice(products)
    const productId = products.map((item) => item.id)
    expect(productId).toEqual([1, 2, 3, 4, 5, 6])
  })
})
