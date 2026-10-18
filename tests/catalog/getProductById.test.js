const products = require('../../src/data/products')
const { getProductById } = require('../../src/catalog')

describe('getProductById', () => {
  test('ID 1 возвращает products[0]', () => {
    const findId = getProductById(products, 1)
    expect(findId).toEqual(products[0])
  })
  test('ID 4 возвращает products[3]', () => {
    const findId = getProductById(products, 4)
    expect(findId).toEqual(products[3])
  })
  test('ID 6 возвращает products[5]', () => {
    const findId = getProductById(products, 6)
    expect(findId).toEqual(products[5])
  })
  test('ID 0 возвращает null', () => {
    const findId = getProductById(products, 0)
    expect(findId).toBeNull()
  })
  test('ID 999 возвращает null', () => {
    const findId = getProductById(products, 999)
    expect(findId).toBeNull()
  })
  test('ID -1 возвращает null', () => {
    const findId = getProductById(products, -1)
    expect(findId).toBeNull()
  })
  test("строковый ID '1' возвращает null", () => {
    const findId = getProductById(products, '1')
    expect(findId).toBeNull()
  })
  test('ID undefined возвращает null', () => {
    const findId = getProductById(products, undefined)
    expect(findId).toBeNull()
  })
  test('ID NaN возвращает null', () => {
    const findId = getProductById(products, NaN)
    expect(findId).toBeNull()
  })
})
