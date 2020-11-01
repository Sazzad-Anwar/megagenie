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


const App=()=> {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route  path="/cart/:id?" component={CartScreen} />
          <Route  path="/login" component={LoginScreen} />
          <Route  path="/register" component={RegisterScreen} />
          <Route  path='/product/:id'  component={ProductScreen}/>
          <Route exact path='/'  component={HomScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
