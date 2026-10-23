function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.')
}

function addToCart(cart, product, quantity) {
  if (quantity === 0) {
    throw new RangeError()
  }
  if (quantity > product.stock) {
    throw new RangeError()
  }
  const existingItem = cart.find((item) => item.id === product.id)
  if (existingItem) {
    return cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item))
  }
  return [...cart, { ...product, quantity: quantity }]
}
function changeQuantity(cart, id, quantity) {
  if (quantity === 0) {
    throw new RangeError()
  }
  const existingItem = cart.find((item) => item.id === id)
  if (!existingItem) return cart
  if (quantity > existingItem.stock) {
    throw new RangeError()
  }
  return cart.map((item) => (item.id === id ? { ...item, quantity: quantity } : item))
}
function removeFromCart(cart, id) {
  return cart.filter((item) => item.id !== id)
}
function calculateCartSubtotal(cart) {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
}
function calculateOrderTotal(cart, promoCode) {
  const calculateSubtotal = calculateCartSubtotal(cart)
  let discount = 0
  let delivery = 30000
  let total = 0
  if (promoCode === 'SAVE10' && calculateSubtotal >= 20000) {
    discount = calculateSubtotal / 10
  } else {
    discount = 0
  }
  if (calculateSubtotal >= 50000) {
    delivery = 0
  }
  total = calculateSubtotal - discount + delivery
  return { subtotal: calculateSubtotal, discount, delivery, total }
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal }

if (typeof module !== 'undefined') module.exports = cartApi
if (typeof window !== 'undefined') window.cartApi = cartApi
