import React,{Component} from "react";

class Reg extends Component{
    render(){
        return (
            <div>
                <header className="header">
                <div className="fix_nav">
                    <div style={{maxWidth:"768px",margin:"0 auto",background:"#000000",position: "relative"}}>
                    <a className="nav-left back-icon" href="javascript:history.back();">返回</a>
                    <div className="tit" style={{fontSize:"18px"}}>会员注册</div>
                    </div>
                </div>
                </header>
                <div className="maincontainer">
                <div className="container itemdetail mini-innner">
                    <div className="row">
                    <div className="col-md-12 tal mt20">
                        <form
                        id="theForm"
                        name="theForm"
                        className="form-signin"
                        action="/p/j_spring_security_check"
                        method="POST"
                        >
                        <input
                            type="hidden"
                            id="returnUrl"
                            name="returnUrl"
                            value="http://m.legendshop.cn/p/orderDetails"
                        />
                        
                        <input
                           
                            name="j_username"
                            id="username"
                            type="text"
                            style={{marginBottom: "-2px"}}
                            className="form-control"
                            placeholder="帐户名/手机号码"
                            message="账号"

                            autoFocus
                            tabIndex="1"
                        />
                        <br/>>
                        <input
                       
                            id="pwd"
                            name="j_password"
                            type="password"
                            className="form-control"
                            placeholder="请输入密码"
                            message="密码"

                         
                            autoComplete="off"
                            tabIndex="2"
                        />
                        <label className="checkbox">
                            <input
                            id="_spring_security_remember_me"
                            name="_spring_security_remember_me"
                            type="checkbox"
                            tabIndex="4"
                            /> 记住我
                            <a href="/forget" style={{float:"right"}}>忘记密码</a>
                        </label>
                        <div className="clear"></div>
                        
                        <div className="col-xs-5 p0" style={{marginLeft:"10px"}}>
                            <button
                            type="button"
                            className="btn btn-default btn-block"
                            
                            tabIndex="6"
                            >注 册</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Reg;