import { BrowserRouter } from 'react-router-dom';
// importing css
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes/AppRoutes';
import { PageContext } from './contexts/PageContext';
import { CartContext } from './contexts/CartContext';
import { useEffect, useReducer } from 'react';
import cartReducer from './reducers/cartReducer';
import ErrorBoundary from './containers/shared/ErrorBoundary/ErrorBoundary';

// Component
function App() {
  const userStatus = {
    isLoggedIn: true,
    lastLogin: '11/Mar/2023'
  };

  const [cartState, cartDispatch] = useReducer(cartReducer);
  console.log(cartState);
  const cart = {
    cartState,
    cartDispatch
  };

  useEffect(() => {
    cart.cartDispatch({
      type: 'FETCH_CART'
    });
  }, []);

  // must return JSX
  return (
    // Here comes JSX
    // Ideal place for you to build the layout
    <ErrorBoundary>
      <BrowserRouter>
        <CartContext.Provider value={cart}>
          <Header />
          <main className='container mt-5 pt-3'>
            <PageContext.Provider value={userStatus}>
              <AppRoutes />
            </PageContext.Provider>
          </main>
          <Footer />
        </CartContext.Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
