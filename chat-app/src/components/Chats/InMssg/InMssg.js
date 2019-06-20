import React,{ Component } from 'react';
import '../../Dashboard.css'
import '../../../dash1.css'
import '../../../dash2.css'
class InMssg extends Component{
    render(){
        return(
            <div class="incoming_msg">
              <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>Test, which is a new approach to have</p>
                  <span class="time_date"> 11:01 AM    |    Yesterday</span></div>
              </div>
            </div>
          
        )
    }
};
export default InMssg;