import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import {Home} from '../HomePage/HomePage.jsx';
import {About} from '../AboutPage/AboutPage.jsx';
import {Shop} from '../ShopPage/ShopPage.jsx';
import {Contact} from '../ContactPage/ContactPage.jsx';
import {Header} from '../Header/Header.jsx';
import {Footer} from '../Footer/Footer.jsx';
import {MessageBox} from '../MessageBox/MessageBox.jsx';
import {BackToTopBtn} from '../BackToTop/BackToTopBtn.jsx';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
        <MessageBox />
        <BackToTopBtn />
    </Router>
  );
}

export default App;
