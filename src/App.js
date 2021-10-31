import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import NavBar from './components/Navbar'
import Footer from './components/Footer';
import RecentWorks from './components/RecentWorks';
import MainWorks from './components/MainPoster';
import MembersPage from './components/MembersPage'
import Aboutclub from './components/Aboutclub';
function App() {
  
  return (
    <div className="App">
      <NavBar ></NavBar>
      <Router>
        <Switch>
          <Route exact path='/'>
            <MainWorks></MainWorks>
            <Aboutclub></Aboutclub>
            <RecentWorks></RecentWorks>
          </Route>
          <Route path='/members'>
            <MembersPage></MembersPage>
          </Route>
        </Switch>
      </Router>
      <div id="birdsFooter">
                <div className="birds"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
