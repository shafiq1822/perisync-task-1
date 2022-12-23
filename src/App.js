import Navbar from "./components/navbar/Navbar";
import LoginPage from "./components/loginpage/LoginPage";
import Footer from "./components/footer/Footer";
import HomePage from "./components/Homepage/HomePage";
import { Switch, Route } from "react-router-dom";
import {useState} from "react"

function App() {
  // const getData = (data) => {
  //   console.log(data)
  // }
  const [info, setInfo] = useState(null);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <LoginPage setInfo={setInfo} info={info}/>
          <Footer />
        </Route>
        <Route exact path="/home">
          <HomePage setInfo={setInfo} info={info}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
