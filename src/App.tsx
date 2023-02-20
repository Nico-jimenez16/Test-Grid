import './App.css';
import { Footer, Navbar } from './components';
import { Home } from './pages';
import { LayoutContainer } from '@/styles-components';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
      <Provider store={store} >
        <Navbar />
        <LayoutContainer>
          <Home />
        </LayoutContainer>
        <Footer />
      </Provider>
  )
}

export default App;
