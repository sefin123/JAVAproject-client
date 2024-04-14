import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { createBrowserHistory } from "history";
import AddProductForm from "./components/AddProductForm";
import UpdateProductForm from "./components/UpdateProductForm";
import DeleteProductForm from "./components/DeleteProductForm";
const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Switch>
          <Route exact strict path="/add-product">
            <div><AddProductForm/></div>
          </Route>
          <Route exact strict path="/products">
            <div><ProductList/></div>,
          </Route>
          <Route exact strict path="/put-product">
            <div><UpdateProductForm/></div>,
          </Route>
          <Route exact strict path="/delete-product">
            <div><DeleteProductForm/></div>,
          </Route>
          <Route exact strict path="/">
            <div className="column-container">
              <a href="/products">List of products</a>
              <a href="/add-product">Add product</a>
              <a href="/put-product">Put product</a>
              <a href="/delete-product">Delete product</a>
            </div>
          </Route>
          <Switch>
            <Route exact strict path="/food/:name">
              <ProductDetail />
            </Route>
          </Switch>
        </Switch> 
        </Router>
    </div>
  );
}

export default App;
