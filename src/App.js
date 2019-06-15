import React,{Component} from 'react';
import {BrowserRouter,Route,Link,HashRouter,Switch} from 'react-router-dom';
import Login from './Login/Login';
import Product from './Products/Products'
import Accountdetails from './Accountdetails/Accountdetails';
import Transfer from './transfer/Transfer';
import FileNotFound from './filenotfound/FileNotFound';
import Header from './header/Header';
import { withTranslation} from 'react-i18next';

class App extends Component{

  selectedLang=(event)=> {
    console.log(event.target.value);
    const {i18n} = this.props;
    i18n.changeLanguage(event.target.value);
  }
  render(){
    console.log(this.props)
    let { t } = this.props;
  
    return(
      <div>
        <div>{t('title')}</div>
        <select className="drp" onChange={this.selectedLang}>
                <option value="en">English</option>
                <option value="sp">Spanish</option>
                <option value="fr">French</option>
                <option value="da">German</option>
             </select>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<HashRouter>
<Header/>
<div>
  <Switch>
  <Route path='/' component={Login} exact/>
  <Route path='/login' component={Login} exact/>
  <Route path='/product' component={Product}/>
  <Route path='/details' component={Accountdetails}/>
  <Route path='/transfer' component={Transfer}/>
  <Route component={FileNotFound}/>
   </Switch>
</div>
</HashRouter>
      </div>
    )
  }
}
 
export default withTranslation()(App);