import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import product from './product.css';
import { withTranslation} from 'react-i18next';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductsData:[]
        }
      }
      componentDidMount() {
        this.getData().then(response => {
            this.setState({ ProductsData: response.data });
          console.log(this.state.ProductsData[0].balance)
          
        });
      }
      getData = () => {
        return new Promise((resolve, reject) => {
          axios.get('http://localhost:4001/products').then(function (response) {
            resolve(response);
          }).catch(function (error) {
            reject(error);
          });
        });
      }
      details=()=>{
          this.props.history.push('./details')
      }
      transfer=()=>{
        this.props.history.push('./transfer')
    }
  
   render() {
    console.log(this.props)
    let { t } = this.props;
    return (
      <div className="container border">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <h3>{t('product')}</h3><hr className="h" />
{
          this.state.ProductsData.map((item, i) => {
                                return (
                                    <div class="row" key={i}>
                        <div class="col-sm-4 product">{item.acctype}:</div>
                        <div class="col-sm-12 product1">Balance:{item.balance}</div>
                        <div class="col-lg-12 product2">Account Number:{item.accno}</div>
                        <button className="btn1" onClick={this.details}>Account Details</button>
                        <button className="btn2" onClick={this.transfer}>Fund Transfer</button>
                        <hr className="hr"/>
                                </div> );
        }                            
    )
                                }
          </div> 
          ) }
                            }

export default withTranslation() (Product);

