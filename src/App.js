import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/globalStyles.css';
import Routers from "./Routers";

function App() {
  return (
    <Fragment>
      <Header/>
      <Routers />
      <Footer/>
    </Fragment>
  );
}

export default App;
