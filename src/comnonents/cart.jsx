const Cart = (props) => {
  
    return (
    <div className="cart-item" id={props.ID}>
      <div className={props.className}>

        <img className='vector-left' src="./image/cart-img.svg" alt="" />
        <img className='vector-right' src="./image/cart-img.svg" alt="" />
        <img className='cart-logo' src="../image/logo.svg" alt="" />
        <p className='cart-id'>{props.id}</p>
        <p className='price'>{props.price}</p>
 
      </div>

      <h3>Порадуйте своих близких подарочной картой на {props.price} рублей</h3>
      <img className='pep' src="./image/cart-pep.png" alt="" />
      <button className='cart-btn'>ЗАКАЗАТЬ</button>
    </div>


  )
}
export default Cart