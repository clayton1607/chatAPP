import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class login extends Component {
	state = {
		username:'abc',
		password:'abc'
	};
	logindataHandler= ()=>{
		let data={
			username:this.state.username,
			password:this.state.password
		}
		console.log(this.state)
		axios.post('http://localhost:5000/login',data).then(
			response=>{
				console.log(response);	
			}
		);
	}
	render(){
		return (
			<div>
					<table width="20%" bgcolor="0099CC" align="center">
		
						<tr>
							<td colpan={2}><center><font size={4}><b>Welcome Lets Chat</b></font></center></td>
						</tr>
		
						<tr>
							<td>Username:</td>
							<td><input type="text" size={25} name="userid" onChange = {(event) => this.setState({username:event.target.value})}/></td>
							</tr>
				
		
						<tr>
							<td>Password:</td>
							<td><input type="Password" size={25} name="pwd" onChange = {(event) => this.setState({password:event.target.value})}/></td>
						</tr>
		
						<tr>
								<td ><input type="Reset"/></td>
								<td><input type="submit" onClick={this.logindataHandler} value="Login"/></td>
								<td><Link to={{
									pathname: '/signup'
								}}><input type="submit" value="New? Signup"/></Link></td>
						</tr>
		
							</table>
					</div>
			)
	}
	
	
};
export default login;
