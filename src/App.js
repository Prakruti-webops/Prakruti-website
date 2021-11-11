import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NavBar from './components/Navbar'
import Footer from './components/Footer';
import RecentWorks from './components/RecentWorks';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route path='/'>
            {/* Home page components */}

            <RecentWorks></RecentWorks>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
