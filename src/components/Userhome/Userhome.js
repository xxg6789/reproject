import React,{Component} from 'react';

class Userhome extends Component{
    render(){
        return (
            <div>
                <div className="maincontainer">
                <div className="container" style={{maxWidth:'768px',margin:'0 auto'}}>
                    <div className="row">
                    <a href="/p/userInfo">
                        <div className="member_top member_top_1">
                        <div className="member_top_bg">
                            <img src="../assets/images/member_bg.png"/>
                        </div>
                        <div className="member_m_pic member_m_pic_1">
                            <img className="img-circle" src="../assets/images/noavatar.png"/>
                        </div>
                        <div className="member_m_z member_m_z_1">
                            <div className="member_m_x">萧雅哲</div>
                        </div>
                        <div className="member_m_r">账户管理、收货地址&gt;</div>
                        </div>
                    </a>
                    <div
                        className="member_mp_img"
                        data-toggle="modal"
                        data-target="#myModalmin"
                        data-title="我的名片"
                        data-tpl="mp"
                    >
                        <img src="../assets/images/member_mp_img.png"/>
                    </div>
                    <div className="list-group mb10">
                        <a href="/p/userOrder" className="list-group-item tip">
                        <div className="list_group_img">
                            <img src="../assets/images/member_img16.png"/>
                        </div>我的订单
                        <span className="gary pull-right">查看全部</span>
                        </a>
                        <div className="list-group-item p0 clearfix">
                        <div className="col-xs-3 p0">
                            <a className="order_tab_link" href="/p/userOrder?state_type=1">
                            <em className="order_img">
                                <img src="../assets/images/order_bg_3.png"/>
                            </em>
                            待付款
                            </a>
                        </div>
                        <div className="col-xs-3 p0">
                            <a className="order_tab_link" href="/p/userOrder?state_type=2">
                            <em className="order_img">
                                <img src="../assets/images/order_bg_2.png"/>
                            </em>待发货
                            </a>
                        </div>
                        <div className="col-xs-3 p0">
                            <a className="order_tab_link" href="/p/userOrder?state_type=3">
                            <em className="order_img">
                                <img src="../assets/images/order_bg_1.png"/>
                            </em>待收货
                            </a>
                        </div>
                        <div className="col-xs-3 p0">
                            <a className="order_tab_link" href="/p/userOrder?state_type=4">
                            <em className="order_img">
                                <img src="../assets/images/order_bg.png"/>
                            </em>已完成
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="list-group mb10 member_list_group clearfix">
                        <a href="/p/collect" className="list-group-item col-xs-4">
                        <div className="m_img">
                            <img src="../assets/images/order_bg_5.png"/>
                        </div>
                        <p className="m_name">我的收藏</p>
                        <span className="red">0</span>
                        </a>
                        <a href="/p/userComments" className="list-group-item col-xs-4">
                        <div className="m_img">
                            <img src="../assets/images/order_bg_8.png"/>
                        </div>
                        <p className="m_name">我的评论</p>
                        <span className="red">&nbsp;&nbsp;</span>
                        </a>
                        <a href="/p/inbox" className="list-group-item col-xs-4">
                        <div className="m_img">
                            <img src="../assets/images/order_bg_4.png"/>
                        </div>
                        <p className="m_name">收件箱</p>
                        <span className="red">&nbsp;&nbsp;</span>
                        </a>
                        
                        <a href="/p/systemMessages" className="list-group-item col-xs-4">
                        <div className="m_img">
                            <img src="../assets/images/order_bg_7.png"/>
                        </div>
                        <p className="m_name">系统消息</p>
                        <span className="red">&nbsp;&nbsp;</span>
                        </a>
                    </div>

                    <div className="list-group mb10">
                        <a href="/p/help" className="list-group-item tip">
                        <div className="list_group_img">
                            <img src="../assets/images/order_bg_10.png"/>
                        </div>常见问题
                        </a>
                        <a href="/p/feedbacks" className="list-group-item tip">
                        <div className="list_group_img">
                            <img src="../assets/images/order_bg_9.png"/>
                        </div>意见反馈
                        </a>
                    </div>
                    </div>
                </div>
                <div
                    style={{display: 'none'}}
                    className="modal fade"
                    id="myModalmin"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <form className="form-horizontal" role="form" data-method="formAjax">
                        <div className="modal-header member_tc_top">
                            <button
                            type="button"
                            className="close member_tc_xx"
                            data-dismiss="modal"
                            aria-hidden="true"
                            >×</button>
                            <h4 className="modal-title" id="myModalLabel">&nbsp;&nbsp;</h4>
                        </div>
                        <div style={{overflow:'hidden',width: '100%',paddingTop: '20px'}}>
                            <div>
                            <div className="member_mp_t_img">
                                <img src="../assets/images/noavatar.png"/>
                            </div>
                            <div className="member_mp_t_m">萧雅哲</div>
                            <div className="member_mp_t_m_m">
                                <img src="../assets/img/a909bfc1-cada-4008-81c0-556ff86aace1.jpg"/>
                            </div>
                            <div className="member_mp_t_tit">用微信扫一扫二维码，成为我的粉丝</div>
                            </div>
                        </div>
                        <div style={{height:'60px'}}></div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Userhome;