
import { useSelector } from 'react-redux';
import { CartTable } from '../components/CartTable';
import Container from 'react-bootstrap/Container';
import './ViewCart.css';

export const ViewCart = () => {
    const items = useSelector(state => state.cart.items);
    return (<>
        <Container className="d-flex justify-content-center">
            <h2>Your Cart</h2>
        </Container>
        <Container className="d-flex justify-content-center">
            {items.length>0?<CartTable/>:<h4>your cart is currently empty</h4>}
        </Container>
    </>);
}