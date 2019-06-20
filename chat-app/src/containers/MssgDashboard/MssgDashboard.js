
import React, { Component } from 'react';
import ListChat from '../ListChat/ListChat';
import ChatHistory from '../ChatHistory/ChatHistory'
import '../Dashboard.css'
  import '../../dash1.css'
  import '../../dash2.css'
class MssgDashboard extends Component {
  render() {
    return (
      
      <div className="container">
        <h3 className="text-center">Messaging</h3>
        <div className="messaging">
                <div className="recent_heading">
                  <h4>Recent</h4>
                </div>
          <div className="inbox_msg">
          <ListChat/>
          <ChatHistory/>
          </div>      
            
        </div>
        </div>
    )
  }
};
export default MssgDashboard;




