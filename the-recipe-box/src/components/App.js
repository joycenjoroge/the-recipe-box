//import logo from "../logo.svg"
import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import RecipeDetail from './RecipeDetail';

function App() {
  return (
    <Router>
      <div className="App">

      <Route exact path="/recipes" component={RecipeList} />
      <Route exact path="/recipes/new" component={RecipeForm} />
      <Route exact path="/recipes/:id" component={RecipeDetail} />
      </div>
    </Router>
  );
}

export default App;
