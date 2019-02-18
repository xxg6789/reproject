import React,{Component} from 'react';
import pubsub from 'pubsub-js';


import List from '../../common/List/List.js';
import ReactSwipe from 'react-swipe';

import './Home.css';

import * as types from "../../store/types";
import {connect} from "react-redux";
import asynList from "../../store/actions/asynList";


class Home extends Component{
    constructor(props){
        super();
        props.get();
    }
    // state={
    //     list:[]
    // };
    // componentDidMount(){
    //     pubsub.publish('view_loading',true);
    //
    //     fetch(
    //         `/data/index.data`
    //       ).then(
    //         res=>res.json()
    //       ).then(
    //         data=>{
    //           setTimeout(()=>{
    //
    //             pubsub.publish('view_loading',false);
    //
    //             this.setState({list:data});
    //           },1000)
    //           console.log("shuju",data)
    //         }
    //       )
    // }
    render(){
        let {home}=this.props;
        return (
            <div>
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        continuous: true,
                        auto: 1000,

                    }}
                    >
                    <div className="slide1" style={{height:"200px",color:"#fff",fontSize: "30px",textAlign:"center"}}></div>
                    <div className="slide2" style={{height:"200px",color:"#fff",fontSize: "30px",textAlign:"center"}}></div>
                    <div className="slide3" style={{height:"200px",color:"#fff",fontSize: "30px",textAlign:"center"}}></div>
                </ReactSwipe>
               <List></List>
            </div>
        )
    }
}

const initMapStateToProps=state=>({
    home:state.home
});
const initMapDispatchToProps=dispatch=>({
    get:()=>dispatch(asynList({
        url:"https://jsonplaceholder.typicode.com/posts",
        type:types.UPDATE_HOME
    }))
});


export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Home);