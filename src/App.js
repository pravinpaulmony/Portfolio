import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import "./index.css";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <About />
  },
  {
    path: "/About",
    main: () => <About />
  },
  {
    path: "/Contact",
    main: () => <Contact />
  }
];

export default function SidebarExample() {
  return (
    <Router>
        <Header />
        <div>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
        <Footer />
    </Router>
  );
}
