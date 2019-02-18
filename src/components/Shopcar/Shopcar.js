import React,{Component} from 'react';

class Shopcar extends Component{
    render(){
        return (
            <div>
                <div className="fanhui_cou">
                <div className="fanhui_1"></div>
                <div className="fanhui_ding">顶部</div>
                </div>
                <header className="header header_1">
                <div className="fix_nav">
                    <div className="nav_inner">
                    <a className="nav-left back-icon" href="javascript:history.back();">返回</a>
                    <div className="tit">购物车</div>
                    </div>
                </div>
                </header>
                <div className="container">
                <div className="row rowcar">
                    <ul className="list-group">
                    <li className="list-group-item text-primary">
                        <div className="icheck pull-left mr5">
                        <input type="checkbox" checked="checked" className="ids" prodStatus="1" itemkey/>
                        <label className="checkLabel">
                            <span></span>
                        </label>
                        </div>朗尊软件
                    </li>
                    <li className="list-group-item hproduct clearfix">
                        <div className="p-pic">
                        <a href="/views/663">
                            <img className="img-responsive" src="../assets/img/1787bd1d-9381-402b-b98e-97ceeddf7692.jpg"/>
                        </a>
                        </div>
                        <div className="p-info">
                        <a href="/views/663">
                            <p className="p-title">艾吉贝2015新款多层收纳真皮单肩斜挎包女包头层牛皮斜跨小包包女</p>
                        </a>
                        <p className="p-attr">
                            <span>颜色：红色；</span>
                        </p>
                        <p className="p-origin">
                            <a
                            className="close p-close"
                            onclick="deleteShopCart('','艾吉贝2015新款多层收纳真皮单肩斜挎包女包头层牛皮斜跨小包包女','663','1358')"
                            href="javascript:void(0);"
                            >×</a>
                            <em className="price">¥179.00</em>
                        </p>
                        </div>
                    </li>
                    <li className="list-group-item clearfix">
                        <div className="pull-left mt5">
                        <span className="gary">小计：</span>
                        <em className="red productTotalPrice">¥179.00</em>
                        </div>
                        <div className="btn-group btn-group-sm control-num">
                        <a onclick="disDe(this)" href="javascript:void(0);" className="btn btn-default">
                            <span className="glyphicon glyphicon-minus gary"></span>
                        </a>
                        <input
                            type="tel"
                            className="btn gary2 Amount"
                            readonly="readonly"
                            value="1"
                            maxlength="4"
                            itemkey
                            prodId="663"
                            skuId="1358"
                        />
                        <a onclick="increase(this)" href="javascript:void(0);" className="btn btn-default">
                            <span className="glyphicon glyphicon-plus gary"></span>
                        </a>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="fixed-foot">
                <div className="fixed_inner">
                    <div className="pay-point">
                    <div className="icheck pull-left mr10">
                        <input type="checkbox" checked="checked" id="buy-sele-all" value="1"/>
                        <label for="buy-sele-all">
                        <span className="mt10"></span>全选
                        </label>
                    </div>
                    <p>合计：
                        <em className="red f22">¥
                        <span id="totalPrice">179.00</span>
                        </em>
                    </p>
                    </div>
                    <div className="buy-btn-fix">
                    <a href="javascript:submitShopCart();" className="btn btn-danger btn-buy">去结算</a>
                    </div>
                </div>
                </div>
                <div className="clear"></div>
            
                <footer className="footer">
                <div className="foot-con">
                    <div className="foot-con_2">
                    <a href="index.html">
                        <i className="navIcon home"></i>
                        <span className="text">首页</span>
                    </a>
                    <a href="category.html">
                        <i className="navIcon sort"></i>
                        <span className="text">分类</span>
                    </a>
                    <a href="shopcart.html">
                        <i className="navIcon shop"></i>
                        <span className="text">购物车</span>
                    </a>
                    <a href="userhome.html">
                        <i className="navIcon member"></i>
                        <span className="text">我的</span>
                    </a>
                    </div>
                </div>
                </footer>
            </div>
        )
    }
}

export default Shopcar;