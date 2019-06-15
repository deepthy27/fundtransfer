import React, { Component } from 'react';
import { withTranslation} from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import login from './login.css';
var _ =require('lodash');


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData:[],
          formdata: {
            customerid : "",
            password: ""
        }
        }
      }
 
      componentDidMount() {
        this.getData().then(response => {
            this.setState({ loginData: response.data });
            Object.assign({}, this.state.loginData);
          console.log(this.state.loginData)
        });
      }
      getData = () => {
        return new Promise((resolve, reject) => {
          axios.get('http://localhost:4000/login').then(function (response) {
            resolve(response);
          }).catch(function (error) {
            reject(error);
          });
        });
      }
  loginHandler = (event)=>{
    const {formdata}=this.state;
    formdata[event.target.name]=event.target.value;
    this.setState({formdata});
    console.log(this.state.formdata, "name");
  }
  login =(event)=>{
    const{loginData,formdata}=this.state;
    event.preventDefault();
    let result =this.state.loginData.map((list,i)=>{
      return _.isEqual(list,this.state.formdata);
   })
   console.log(result)
     if(result[0]||result[1] || result[2]){
      alert("login success");
      this.props.history.push("/product");
    }
    else{
      alert("please enter valid crendentials");
    }
    
   var sucess=_.isEqual(this.state.formdata, loginData)
  }
   render() {
    console.log(this.props)
    let { t } = this.props;
    return (
      <div className="header  ">
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <form className='container bord'>
          <h1 align="center" className='head'>{t('head')}<hr className="hr"/></h1>
              <div className="form-group">
                  <label>Customer Id:</label>
                  <input type="text" className="form-control"  placeholder="Customer Id" name="customerid" onChange={this.loginHandler}/>
              </div>
              <div className="form-group">
                  <label>Password:</label>
                  <input type="password" className="form-control"  placeholder="Password" name="password" onChange={this.loginHandler}/>
              </div> 
              <div>
                  <button onClick={this.login}>Login</button>
                  <button type='reset'>Reset</button>
              </div>
          </form>
      </div>
    )
  }
}
export default withTranslation()(Login);

