import { useDispatch, useSelector} from "react-redux";
import  {addToCart} from "../actions/cart";
import '../styles/product.css';

const Product = ({id, name,  description, price, originalPrice, currency, colors, brand, picture, smallImage}) => {
   const dispatch = useDispatch();
   const { cart } = useSelector(state => state.cart);

   const className = () => {
      const foundItem = cart?.find(c => c.id === id);
      return foundItem ? 'add-to-cart-passive' : "add-to-cart"
   }

   const onClick = () => {
      let product = {};
      product.name = name;
      product.id = id;
      product.description = description;
      product.price = price;
      product.colors = colors;
      product.date = new Date();
      product.picture = picture;
      product.smallImage = smallImage;
      dispatch(addToCart(product));
   }
   
   return (<>
        <div className="product">
            <div className="product-item">
                    <div className="product-image">
                        <img src={picture} alt=""/>
                    </div>
                    <div className="product-info">
                        <span className="product-header">{name}</span>
                        <p className="brand-header">Marka:<span>{brand}</span></p>
                        <p className="color-header">Renk: 
                        {
                           colors?.map((color,i) => {
                              return <span key={i}>{color},</span>
                           })
                        }
                        </p>
                        <span className="product-price">{price} TL</span>
                        <p className="discount-wrapper">
                            <span className="discount-price">{originalPrice} {currency}</span>
                            <span className="discount-badge">%{(Math.round(((originalPrice - price)/price)*100))}</span>
                        </p>
                        <button className={className()} onClick={onClick}>
                           {className() === 'add-to-cart' ? 'Sepete Ekle' : 'Bu ürünü sepete ekleyemezsiniz.'}
                        </button>
                    </div>
            </div>
            </div>
   </>)
}

export default Product;