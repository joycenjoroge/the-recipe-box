import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={RecipeList} />
        <Route exact path="/recipes/new" component={RecipeForm} />
        <Route exact path="/recipes/:id" component={RecipeDetail} />
      </Switch>
    </div>
  );
}

export default App;
