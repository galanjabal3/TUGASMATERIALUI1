import './App.css';
import { BrowserRouter, Switch, Link } from'react-router-dom';
import Home from'./component/Home';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Link path='/' exact component={Home}/>
   </Switch>
   </BrowserRouter>
  );
}

export default App;
