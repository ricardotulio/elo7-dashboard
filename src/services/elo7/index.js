const orders = () => fetch('https://salty-bastion-18794.herokuapp.com/order/')
  .then(response => response.json())

export default {
  orders,
}
