import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NavBar from './components/Navbar'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route path='/'>
            {/* Home page components */}
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
