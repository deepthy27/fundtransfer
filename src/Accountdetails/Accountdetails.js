import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import accountdetails from './accountdetails.css';


class Accountdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductsDetails:[]
        }
      }
      componentDidMount() {
        this.getData().then(response => {
            this.setState({ ProductsDetails: response.data });
          console.log(this.state.ProductsDetails)
        });
      }
      getData = () => {
        return new Promise((resolve, reject) => {
          axios.get('http://localhost:4002/details').then(function (response) {
            resolve(response);
          }).catch(function (error) {
            reject(error);
          });
        });
      }
      details=()=>{
          this.props.history.push('./details')
      }
  
   render() {
    return (
      <div className="container border">
         <Link className="bt" to='/product'className="bt">-Back</Link>
          <h3> Product details and list of statements</h3><hr className="h"/>
          {
          this.state.ProductsDetails.map((item, i) => {
                                return (
                                    <div class="row" key={i}>
                        <div class="col-sm-4 product">ProductNumber:{item.ProductNumber}</div>
                        <div class="col-sm-12 product">Balance:{item.balance}</div>
                        <div class="col-lg-12 product">creationDate:{item.creationDate}</div>
                        <h4>Last 3 Transactions History</h4>
                        <hr className="hr"/>
                        {
    item.history.map((item1, i) => {
                                return (
                                    <div class="row card-body" key={i}>
                        <div class="col-sm-4 product card-title">{item1.comment}</div>
                        <div class="col-sm-12 product1 card-title">{item1.date}</div>
                        <div class="col-lg-12 product2 card-title">{item1.ammount}</div>
                                </div> );
        }                            
    )
                                }
                                </div> );
        }                            
    )
                                }

          </div> 
          ) }
                            }

export default Accountdetails;

