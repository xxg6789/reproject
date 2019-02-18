import React,{Component} from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import pubsub from 'pubsub-js';

import Header from '../common/Header/Header';
import Home from './Home/Home.js';
import Footer from '../common/Footer/Footer';
import Category from '../components/Category/Category';
import Categorylist from '../components/Categorylist/Categorylist';
import Shopcar from '../components/Shopcar/Shopcar';
import Login from '../components/Login/Login';
import Reg from '../components/Reg/Reg';
import Userhome from '../components/Userhome/Userhome';
import Showv from '../components/Showv/Showv';
import Error from '../common/Error/Error';

import Auth from '../guard/Auth';
import Loading from '../common/Loading/Loading';

import {connect} from "react-redux";
import * as types from "../store/types";


class App extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         bNav:true,
    //         bFoot:true,
    //         bLoading:false
    //     };
    //
    //     pubsub.subscribe('view_loading',(mess,bl)=>{
    //         this.setState({bLoading:bl})
    //     })
    // }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.location.pathname);
        let path=nextProps.location.pathname;
        this.watchRouter(path);
    }
    watchRouter(path){
        let {viewNav,viewFoot} = this.props;
        if (/home/.test(path)){
            // this.setState({bNav:true,bFoot:true})
            viewNav(true);viewFoot(true)
        }
        if (/category|userhome|categorylist/.test(path)){
            // this.setState({bNav:false,bFoot:true})
            viewNav(false);viewFoot(true)
        }
        if (/shopcar/.test(path)){
            // this.setState({bNav:false,bFoot:false})
            viewNav(false);viewFoot(false)
        }
    }
    componentDidMount() {
        let path=this.props.location.pathname;
        this.watchRouter(path);
    }

    render(){
        let {bNav,bFoot,bLoading} = this.props;
        return (
            <>
            {bLoading && <Loading/>}
            {bNav&&<Header/>}
            <Switch>
                <Route path='/home' component={Home}></Route>
                <Route path='/category' component={Category}></Route>
                <Route path='/categorylist' component={Categorylist}></Route>
                <Route path='/shopcar' component={Shopcar}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/reg' component={Reg}></Route>
                {/* <Route path='/userhome' component={Userhome}></Route> */}
                <Auth path="/userhome" component={Userhome} />
                <Route path='/showv' component={Showv}></Route>
                <Redirect exact from="/" to="/home" />
                <Route component={Error} />
            </Switch>
            {bFoot && <Footer/>}
            </>
        )
    }
}

const mapStateToProps=(state)=>({
    bNav:state.bNav,
    bFoot:state.bFoot,
    bLoading:state.bLoading
});
const mapDispatchToProps=(dispatch)=>({
    viewNav:(bl)=>dispatch({type:types.VIEW_NAV,payload:bl}),
    viewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload: bl})
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
