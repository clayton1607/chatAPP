import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Signup extends Component {
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
		axios.post('http://localhost:5000/signup',data).then(
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
							<td colpan={2}><center><font size={4}><b>Sign up....</b></font></center></td>
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
									<td><Link to={{
									pathname:'/dashboard'
								}}><input type="submit" onClick={this.logindataHandler} value="Sign up"/></Link></td>
							</tr>
                            <td><Link to={{
									pathname: '/login'
								}}><input type="submit" value="Login"/></Link></td>
		
							</table>
					</div>
			)
	}
	
	
};
export default Signup;
