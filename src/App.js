
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/globalStyles.css';
import Home from './pages/Home';
import { Fragment } from "react";

function App() {
 
  return (
    <Fragment>
      <Header/>
      <Home />
      <Footer/>
    </Fragment>
  );
}

export default App;
