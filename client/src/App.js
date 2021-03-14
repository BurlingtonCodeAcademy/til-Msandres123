// CSS Style Sheet used to style the page
import "./styles/App.css";
// Route and Switch imported to allow transitions between components (appears to be multiple pages, but really only a single react page)
import { Switch, Route } from "react-router-dom";
// Functional Components (Nav-Bar, Home Page, Facts Page, and Dedicated Entry Page)
import Home from "./components/Home";
import Facts from "./components/Facts";
import EntryPage from "./components/EntryPage";
import NavBar from "./components/NavBar";
import SearchResults from "./components/SearchResults"

//App function display the entire webpage which functions as a website
function App(props) {
  //JSX HTML
  return (
    <div>
      {/* Application Header */}
      <h1 id="til-header">Today I Learned: An Online Journal</h1>
      {/* Nav-Bar used to navigate between home page and facts page */}
      <NavBar />
      {/* Switch used to all transitions between each page */}
      <Switch>
        {/* Route that directs user to the Home page */}
        <Route exact path={"/"} component={Home} />
        {/* Route that directs user to the Facts page */}
        <Route exact path={"/facts"} component={Facts} />
        {/* Route that directs user to the specific entry page */}
        <Route path={"/facts/:id"} component={EntryPage} />
        <Route path={"/search/"} component={SearchResults} /> 
      </Switch>
    </div>
  );
}

export default App;
