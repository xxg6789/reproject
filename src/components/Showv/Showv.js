import React,{Component} from 'react';

class Showv extends Component{
    render(){
        return (
            <div>
                <div className="fanhui_cou">
                <div className="fanhui_1"></div>
                <div className="fanhui_ding">顶部</div>
                </div>

                <header className="header">
                <div className="fix_nav">
                    <div style={{maxWidth:"768px",margin:"0 auto",background:"#000",position: "relative"}}>
                    <a className="nav-left back-icon" href="javascript:history.back();">返回</a>
                    <div className="tit">商品详细</div>
                    </div>
                </div>
                </header>
                <input type="hidden" id="prodId" value="663"/>>
                <input id="currSkuId" value type="hidden"/>>
                <div className="container">
                <div className="row white-bg">
                    <div id="slide">
                    <div className="hd">
                        <ul>
                        <li>1</li>
                        </ul>
                    </div>
                    <div className="bd">
                        <div className="tempWrap" style={{overflow:"hidden", position:"relative"}}>
                        <ul
                            style={{width: "3072px", position: "relative", overflow: "hidden", padding: "0px", margin: "0px", transitionDuration: "200ms", transform: "translateX(-768px)"}}
                        >
                            <li style={{display:" table-cell",verticalAlign: "middle", maxWidth: "768px"}}>
                            <a href="#">
                                <img
                                style={{maxWidth:"100vw",maxHeight:"80vw",margin:"auto"}}
                                src="../assets/img/53698282-4ff7-4daa-bb4c-4bcaa14b00fc.jpg"
                                />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row gary-bg">
                    <div className="white-bg p10 details_con">
                    <h1 className="item-name" id="prodName">艾吉贝2015新款多层收纳真皮单肩斜挎包女包头层牛皮斜跨小包包女</h1>
                    <ul>
                        <li>
                        <label>商城价格：</label>
                        <span className="price">¥
                            <span className="price" id="prodCash">179.00</span>
                        </span>
                        </li>
                        <li id="choose_0" index="0">
                        <label id="propName" propname="颜色">颜色：</label>
                        <dl>
                            <dd key="208:635" valid="635">黑色
                            <span></span>
                            </dd>
                            <dd className="check" key="208:636" valid="636">红色
                            <span></span>
                            </dd>
                            <dd key="208:661" valid="661">黄色
                            <span></span>
                            </dd>
                        </dl>
                        </li>
                        <li>
                        <label>数量：</label>
                        <div className="count_div" style={{height: "30px", width: "130px"}}>
                            <a href="javascript:void(0);" className="minus"></a>
                            <input type="text" className="count" value="1" id="prodCount" readOnly="readonly"/>>
                            <a href="javascript:void(0);" className="add"></a>
                        </div>
                        </li>
                    </ul>
                    </div>
                    <div id="goodsContent" className="goods-content white-bg">
                    <div className="hd hd_fav">
                        <ul>
                        <li className="on">图文详情</li>
                        <li className>规格参数</li>
                        <li className>评价(0)</li>
                        </ul>
                    </div>

                    <div className="tempWrap" style={{overflow:"hidden", position:"relative"}}>
                        <div
                        style={{width: "100%", position:" relative", overflow:" hidden", padding: "0px", margin: "0px",transitionDuration: "200ms", transform: "translateX(0px)"}}
                        className="bd"
                        >
                        <ul
                            style={{display: "table-cell", verticalAlign:" top", maxWidth: "768px",width: "100%"}}
                            className="property"
                        >
                            <div className="prop-area" style={{minHeight:"300px",overflow: "hidden"}}>
                            <img src="../assets/img/8a9740c7-7f8e-4f20-ba64-1e90dd596ebe.jpg" alt/>>
                            </div>
                        </ul>
                        <ul
                            className="txt-imgs"
                            style={{display: "table-cell", verticalAlign: "top", maxWidth: "768px",width: "100%"}}
                        >
                            <div className="desc-area" style={{padding:" 0px 10px 0 10px"}}>
                            <li style={{height:"30px"}}>
                                <div id="ajax_loading" style={{margin: "10px  auto 15px",textAlign:"center"}}>
                                <img
                                
                                    style={{width: "auto",display: "block",  margin: "auto"}}
                                />
                                </div>
                            </li>
                            </div>
                        </ul>
                        <ul
                            style={{display:" table-cell", verticalAlign: "top",maxWidth: "768px",width: "100%"}}
                            className="appraise"
                            rel="1"
                            status="1"
                        >
                            <div style={{height:"30px"}}>
                            <div id="ajax_loading" style={{margin: "10px  auto 15px",textAlign:"center"}}>
                                <img
                                style={{width: "auto", display: "block",  margin: "auto"}}
                                />
                            </div>
                            </div>
                            <div className="wap_page" style={{display: "none"}} onclick="next_comments(this)">
                            <span>下一页</span>
                            </div>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="fixed-foot">
                <div className="fixed_inner">
                    <a className="btn-fav" href="javascript:void(0);" onclick="addInterest(this,'663');">
                    <i className="i-fav"></i>
                    <span>收藏</span>
                    </a>
                    <a className="cart-wrap" href="/shopcart">
                    <i className="i-cart"></i>
                    <span>购物车</span>
                    <span className="add-num" id="totalNum">0</span>
                    </a>
                    <div className="buy-btn-fix">
                    <a className="btn btn-info btn-cart" onclick="addShopCart();" href="javascript:void(0);">加入购物车</a>
                    <a className="btn btn-danger btn-buy" onclick="buyNow();" href="javascript:void(0);">立即购买</a>
                    </div>
                </div>
                </div>

                <div className="clear"></div>
            </div>
        )
    }
}

export default Showv;