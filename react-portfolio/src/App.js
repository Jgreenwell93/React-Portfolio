import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div style={{ backgroundImage: "url(/Background.jpg)", }}>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Route exact path="/" component={About} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/discover" component={Discover} />
//           <Route exact path="/search" component={Search} />
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//   );
// }