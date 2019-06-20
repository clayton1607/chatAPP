import React,{ Component } from 'react';
import InMssg from '../../components/Chats/InMssg/InMssg';
import OutMssg from '../../components/Chats/OutgoingMssg.js/OutgoingMssg';
import TypeMssg from '../../components/Chats/TypeMssg/TypeMssg';
import '../Dashboard.css';
import '../../dash1.css';
import '../../dash2.css';
import axios from 'axios';
class ChatHistory extends Component{
    componentDidMount(){
        axios.get('').then(
            res=>{
                console.log(res)
            }
        )
    }
    render(){
        return(
            <div class="mesgs">
                <div class="msg_history">
                    <InMssg/>
                    <OutMssg/>
                    <InMssg/>
                    <OutMssg/>
                    <InMssg/>
                    <OutMssg/>
                    <InMssg/>
                    <OutMssg/>
                    <InMssg/>
                    <OutMssg/>
                    <InMssg/>
                    <OutMssg/>
                    <TypeMssg/>
                </div>
            </div>
        )
    }
};
export default ChatHistory;