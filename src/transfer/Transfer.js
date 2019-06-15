import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import transfer from './transfer.css';
import {Link} from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import {Swal} from 'sweetalert2';
import { withTranslation} from 'react-i18next';

class Transfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData:[],
          transferdata: {
            accountnumber : "",
            payeeaccountnumber: "",
            amount:"",
            comments:"",
            date:""
        },
               showModal: false,
                nextModal: false,
                otp:""
        }
      }
      componentDidMount() {
    //     this.getData().then(response => {
    //         this.setState({ loginData: response.data });
    //         Object.assign({}, this.state.loginData);
    //       console.log(this.state.loginData)
    //     });
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
        
  transferHandler = (event)=>{
    const {transferdata}=this.state;
    transferdata[event.target.name]=event.target.value;
    this.setState({transferdata});
    console.log(this.state.transferdata);
  }
  confirm=(event)=>{
      event.preventDefault();
      var random=Math.floor(Math.random() * 100000)
    localStorage.setItem('otp',random);
    this.open();
  }
  close = () => {
    this.setState({ showModal: false });
}

open = () => {
    this.setState({ showModal: true });
}
otp=(event)=>{
    const {otp}=this.state;
    this.setState({otp:event.target.value});
    console.log(this.state.otp, "otp"); 
}
validate=()=>{
    const{otp}=this.state;
    var random = localStorage.getItem('otp');
    console.log(random)
    if(otp==random){   
       alert("transfer successfull");
        this.props.history.push("/product");
    }
    else{
        alert("invalid otp");
    }
}
update=()=>{
    return new Promise((resolve, reject) => {
        axios.put(`http://localhost:4001/products`).then(function (response) {
          resolve(response);
          console.log(response);
        }).catch(function (error) {
          reject(error);
        });
      });
    }

   render() {
    let { t } = this.props;
    return (
      <div className="header">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         <Link className="bt3" to='/product'>-Back</Link>
          <form className='container border'>
          <h1 align="center" className='head'>{t('transfer')}<hr className="hr"/></h1>
              <div className="form-group">
                  <label>self Account number:</label>
                  <input type="number" className="form-control"  placeholder="Self Account number" name="accountnumber" onChange={this.transferHandler}/>
              </div>
              <div className="form-group">
                  <label>Destination Account Number:</label>
                  <input type="number" className="form-control"  placeholder="Payee Account Number" name="payeeaccountnumber" onChange={this.transferHandler}/>
              </div> 
              <div className="form-group">
                  <label>Amount:</label>
                  <input type="number" className="form-control"  placeholder="Amount to send" name="amount" onChange={this.transferHandler}/>
              </div> 
              <div className="form-group">
                  <label>Comments:</label>
                  <input type="text" className="form-control"  placeholder="Comments" name="comments" onChange={this.transferHandler}/>
              </div> 
              <div className="form-group">
                  <label>Date:</label>
                  <input type="date" className="form-control"  placeholder="Date" name="date" onChange={this.transferHandler}/>
              </div> 
              <div>
                  <button onClick={this.confirm}>Confirm</button>
                  
                  <button type='reset'>Reset</button>
              </div>
          </form>
          <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>OTP</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <form className="col-md-12 pb-2">
                                <input className="col-md-12" style={{ height: "47px" }} name="otp" required onChange={this.otp}/>
                            </form>
                            <div className="col-md-12">
                                <button className="btn btn-success" style={{ width: "400px" }} onClick={this.validate}>Submit</button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
      </div>
    )
  }
}
export default withTranslation()(Transfer);

