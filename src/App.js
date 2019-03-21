import React, { Component } from "react";
import { Provider } from "react-redux";
import NavBar from "./NavBar/NavBar";
import SideNav from "./SideNav/SideNav";
import MainContent from "./MainContent/MainContent";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <NavBar />
          <div className="container">
            <div className="columns">
              <SideNav />
              <MainContent />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
