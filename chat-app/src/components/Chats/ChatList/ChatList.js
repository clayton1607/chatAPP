import React, { Component } from 'react';
import '../../Dashboard.css'
import '../../../dash1.css'
import '../../../dash2.css'
class ChatList extends Component {
    render() {
        return (
            <div className="chat_list">
                <div className="chat_people">
                    <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> 
                    </div>
                        <div className="chat_ib">
                            <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have all solutions
                    astrology under one roof.</p>
                        </div>
                </div>
            </div>
            
        )
    }
};

export default ChatList;
