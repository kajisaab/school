import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Contactus from "./components/pages/Contactus";
import Gallery from "./components/pages/Gallery";
import Events from "./components/pages/Events";
import Signin from "./components/pages/Signin";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/events" exact component={Events} />
          <Route path="/contactus" exact component={Contactus} />
          <Route path="/signin" exact component={Signin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
