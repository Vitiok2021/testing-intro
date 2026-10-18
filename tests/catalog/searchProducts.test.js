const products = require('../../src/data/products')
const { searchProducts } = require('../../src/catalog')

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const searchProduct = searchProducts(products, 'Наушники')
    const productId = searchProduct.map((item) => item.id)
    expect(productId).toEqual([1])
  })
  test("'Чистый код' возвращает товар с ID 6", () => {
    const searchProduct = searchProducts(products, 'Чистый код')
    const productId = searchProduct.map((item) => item.id)
    expect(productId).toEqual([6])
  })
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const searchProduct = searchProducts(products, 'Настольная лампа')
    const productId = searchProduct.map((item) => item.id)
    expect(productId).toEqual([4])
  })
  test("'javascript' возвращает товар с ID 3", () => {
    const searchProduct = searchProducts(products, 'javascript')
    const productId = searchProduct.map((item) => item.id)
    expect(productId).toEqual([3])
  })
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const searchProduct = searchProducts(products, 'ЧЕХОЛ')
    const productId = searchProduct.map((item) => item.id)
    expect(productId).toEqual([5])
  })
  test("'наушники' возвращает товар с ID 1", () => {
    const searchProduct = searchProducts(products, 'наушники')
    const productId = searchProduct.map((item) => item.id)
    expect(productId).toEqual([1])
  })
  test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const searchProduct = searchProducts(products, '')
    const productId = searchProduct.map((item) => item.id)
    expect(productId).toEqual([1, 2, 3, 4, 5, 6])
  })
  test('строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const searchProduct = searchProducts(products, ' ')
    const productId = searchProduct.map((item) => item.id)
    expect(productId).toEqual([1, 2, 3, 4, 5, 6])
  })
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const searchProduct = searchProducts(products, '\t\n')
    const productId = searchProduct.map((item) => item.id)
    expect(productId).toEqual([1, 2, 3, 4, 5, 6])
  })
})
