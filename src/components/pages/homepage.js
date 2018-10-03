import React, { Component } from 'react';
import Productivity from './productivity';
import MyTaskStatus from './my-task-status';
import SubscribedPool from './subscribed-pool';
import RoyalTat from './royal-tat';
import KeyClients from './key-clients';
import NormalTat from './normal-tat';

class Homepage extends Component {
  render() {
    return (
      
        <div className="wraper">
            
            <div className="dash-board-lists margin-btm">

              <Productivity/>

              <MyTaskStatus/>

              <SubscribedPool/>

            </div>

            <div className="dash-board-lists">

              <RoyalTat/>

              <KeyClients/>

              <NormalTat/>

            </div>

        </div>

    );
  }
}

export default Homepage;
