import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import NewAppoint from "./pages/NewAppoint";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/newappoint" component={NewAppoint} />
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/doctors" component={Doctors} />
          <Route component={() => <p>react router 404 path not found</p>} />
        </Switch>
      </Container>
    </>
  );
}

export default App;