import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Section from "./components/Section";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Section />

        

        {/*<!-- Create/Edit Form component  -->*/}
       

        {/*<!-- Delete user component  -->*/}
        {/**/}
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
