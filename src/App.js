import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./Components/Blog";
import Blogs from "./Components/Blogs";
import CreateBlog from "./Components/CreateBlog";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Blogs} />
            <Route path="/create" component={CreateBlog} />
            <Route path="/:id" exact component={Blog} />
            <Route path="/edit/:id" component={CreateBlog} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
