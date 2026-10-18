const products = require('../../src/data/products')
const { filterByCategory } = require('../../src/catalog')

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = filterByCategory(products, 'all')
    const filteredCategory = category.map((item) => item.id)
    expect(filteredCategory).toEqual([1, 2, 3, 4, 5, 6])
  })
  test('undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const category = filterByCategory(products, undefined)
    const filteredCategory = category.map((item) => item.id)
    expect(filteredCategory).toEqual([1, 2, 3, 4, 5, 6])
  })
  test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const category = filterByCategory(products, '')
    const filteredCategory = category.map((item) => item.id)
    expect(filteredCategory).toEqual([1, 2, 3, 4, 5, 6])
  })
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const category = filterByCategory(products, 'electronics')
    const filteredCategory = category.map((item) => item.id)
    expect(filteredCategory).toEqual([1, 2])
  })
  test("'books' возвращает товары с ID [3, 6]", () => {
    const category = filterByCategory(products, 'books')
    const filteredCategory = category.map((item) => item.id)
    expect(filteredCategory).toEqual([3, 6])
  })
  test("'home' возвращает товары с ID [4, 5]", () => {
    const category = filterByCategory(products, 'home')
    const filteredCategory = category.map((item) => item.id)
    expect(filteredCategory).toEqual([4, 5])
  })
  test("'clothes' возвращает пустой массив", () => {
    const category = filterByCategory(products, 'clothes')
    const filteredCategory = category.map((item) => item.id)
    expect(filteredCategory).toEqual([])
  })
  test("'toys' возвращает пустой массив", () => {
    const category = filterByCategory(products, 'toys')
    const filteredCategory = category.map((item) => item.id)
    expect(filteredCategory).toEqual([])
  })
  test("'sports' возвращает пустой массив", () => {
    const category = filterByCategory(products, 'sports')
    const filteredCategory = category.map((item) => item.id)
    expect(filteredCategory).toEqual([])
  })
})
