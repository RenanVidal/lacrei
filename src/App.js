import { Fragment } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/globalStyles.css';

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
