import './App.css';
import { Container } from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header';
import HomScreen from './screens/HomScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserLIstScreen from './screens/UserLIstScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';


const App=()=> {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route  path="/order/:id" component={OrderScreen} />
          <Route  path="/cart/:id?" component={CartScreen} />
          <Route  path="/shipping" component={ShippingScreen} />
          <Route  path="/placeorder" component={PlaceOrderScreen} />
          <Route  path="/payment" component={PaymentScreen} />
          <Route  path="/login" component={LoginScreen} />
          <Route  path="/profile" component={ProfileScreen} />
          <Route  path="/register" component={RegisterScreen} />
          <Route  path='/product/:id'  component={ProductScreen}/>
          <Route  path='/admin/userlist'  component={UserLIstScreen}/>
          <Route  path='/admin/productlist'  component={ProductListScreen}/>
          <Route  path='/admin/orderlist'  component={OrderListScreen}/>
          <Route  path='/admin/user/:id/edit'  component={UserEditScreen}/>
          <Route  path='/admin/product/:id/edit'  component={ProductEditScreen}/>
          <Route exact path='/search/:keyword'  component={HomScreen}/>
          <Route exact path='/'  component={HomScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
