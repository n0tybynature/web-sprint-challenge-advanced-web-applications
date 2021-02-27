import React, { useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from "./../helpers/axiosWithAuth"



class Login extends React.Component{
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username:"",
      password:"",
    }
  }
  // useEffect(()=>{
  //   axios
  //     .delete(`http://localhost:5000/api/colors/1`, {
  //       headers:{
  //         'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
  //       }
  //     })
  //     .then(res=>{
  //       axios.get(`http://localhost:5000/api/colors`, {
  //         headers:{
  //           'authorization': ""
  //         }
  //       })
  //       .then(res=> {
  //         console.log(res);
  //       });
  //       console.log(res);
  //     })
  // });

  handleChange = e => {
    this.setState({
      credentials:{
        ...this.state.credentials,
        [e.target.name]:e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then( res => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.props.history.push("/bubblepage");
      })
      .catch( err => {
        console.log(err)
      });
  }


  render(){
    return (
      <div>
        <h1>
          Welcome to the Bubble App!
          <form onSubmit={this.login}>
            <input type="text" name="username" value={this.state.credentials.username} onChange={this.handleChange}/>
            <input type="text" name="password" value={this.state.credentials.password} onChange={this.handleChange}/>
            <button>Submit</button>
        
        </form>
        
        </h1>
      </div>
    );
  }
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.