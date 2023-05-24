import "./App.css";
import './style.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./soldier/screens/Home";
import Tasks from "./soldier/screens/Tasks";
import Operations from "./soldier/screens/Operations";
import Squad from "./soldier/screens/Squad";
import Announcements from "./soldier/screens/Announcements";
import GroupChat from "./soldier/screens/GroupChat";
import ArmyForum from "./soldier/screens/ArmyForum";
import ClaimRewards from "./soldier/screens/ClaimRewards";
import { useEffect, useState } from "react";
import Login from "./login/Login";
import Requestinvitation from "./login/Requestinvitation";
import Dcsquad from "./login/Dcsquad";
import Sidebar from "./soldier/components/sidebar/Sidebar";
import Settings from "./soldier/screens/Settings";
import GeneralSidebar from "./General/components/Sidebar/GeneralSidebar";

function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/" component={Login} />
          <Route exact path="/requestinvitation" component={Requestinvitation} />
          <Route exact path="/dcsquad" component={Dcsquad} />
          {/* soldier + leader all routes here........................... */}
          <Route exact path="/soldier" component={Sidebar} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/operations" component={Operations} />
          <Route exact path="/squad" component={Squad} />
          <Route exact path="/announcements" component={Announcements} />
          <Route exact path="/chat" component={GroupChat} />
          <Route exact path="/forum" component={ArmyForum} />
          <Route exact path="/claim" component={ClaimRewards} />
          <Route exact path="/setting" component={Settings} />


          {/* General + Major all routes here......................... */}
          <Route exact path="/general" component={GeneralSidebar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
