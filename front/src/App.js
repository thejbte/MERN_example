//import logo from './logo.svg';
//import './App.css';
// using ES6 modules
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Vendedores from "./pages/Vendedores";
import Layout from "./componentes/Layout";
import Usuario from "./componentes/Usuario";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Layout>
        <Switch>
        <Route path="/src/pages/user">
            <Usuario/>
        </Route>
        <Route path="/src/pages/ingreso">
            <Login/>
        </Route>
        <Route path="/src/pages/ventas">
            <Vendedores/>
        </Route>
        
        
        </Switch>
     </Layout>
     </BrowserRouter>
    </div>
  );
}

export default App;
