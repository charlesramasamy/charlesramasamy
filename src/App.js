import logo from './logo.svg';
import './App.css';
import Home from './home';
import Table from './table';

import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./redux/store"
 import createHistory from "history/createBrowserHistory";


function App() {
   const history = createHistory();
  return (
    <div className="App">
      <Provider store={store}>
     <BrowserRouter  history={history}>
    <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Table />
        </Route>
      
</BrowserRouter>
</Provider>
    </div>
  );
}

export default App;
