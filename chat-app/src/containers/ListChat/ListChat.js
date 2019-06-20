import React,{ Component } from 'react';
import Chatlist from '../../components/Chats/ChatList/ChatList';
import '../Dashboard.css';
import '../../dash1.css';
import '../../dash2.css';
import axios from 'axios';


class ListChat extends Component{
    componentDidMount(){
        axios.get('').then(
            res=>{
                console.log(res)
            }
        )
    }
    render(){
        return(
            
            <div className="inbox_people">
            <div class="inbox_chat">
                <Chatlist/>
                <Chatlist/>
                <Chatlist/>
                <Chatlist/>
                <Chatlist/>
                <Chatlist/>

            </div>
            </div>
        )
    }
};
export default ListChat;
