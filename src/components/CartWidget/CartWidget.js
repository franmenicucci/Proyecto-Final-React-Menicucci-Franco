
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css'



const CartWidget = () => {
  const { totalQuantity } = useContext (CartContext)

  return (
    <Link to='/cart' className='CartWidget' style= {{ display: totalQuantity () > 0 ? 'block' : 'none'}}>
      <FaShoppingCart className='cart-img'/>
      {totalQuantity}
    </Link>
  )

}


export default CartWidget;



