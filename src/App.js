import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NavBar from './components/Navbar'
import Footer from './components/Footer';
import RecentWorks from './components/RecentWorks';
import MainWorks from './components/MainPoster';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route exact path='/'>
            {/* Home page components */}
            <MainWorks></MainWorks>
            <RecentWorks></RecentWorks>
          </Route>
          <Route exact path='/members'>
            {/* Home page components */}
            {/* <RecentWorks></RecentWorks> */}
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
