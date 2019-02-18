import React,{Component} from "react";
import {NavLink} from "react-router-dom";

class Category extends Component{
    render(){
        return (
            <div>
                <header className="header">
                    <div className="fix_nav">
                        <div className="nav_inner">
                            <a className="nav-left back-icon" href="javascript:history.go(-1);">返回</a>
                            <div className="tit">分类</div>
                            <div className="sousuo" id="sousou"><img src="../assets/images/sou.png"/></div>
                        </div>
                    </div>
                </header>
                <div style={{overflow: "hidden",position: "fixed",width: "100%",zIndex: 10000,top:0+"px"}}>
                    <div className="order_top_count" style={{display:"none"}}>
                        <div className="order_top">
                            <div className="order_a_l">
                                <div id="nav-left_ll"><img src="../assets/images/order_top_l.png"/></div>
                            </div>
                            <div className="order_sou">
                                <form action="/m_search/list" method="get" id="searchform" name="searchform">
                                    <input name="keyword" id="keyword" placeholder="搜索商品" type="text" />>
                                    <span className="pro_sou" style={{cursor: "pointer"}} onClick={this.searchproduct}><img src="../assets/images/Search.png"/>></span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row" id="row_5">
                        <div className="sort-arat" style={{marginTop: 10+"px"}}>
                            <ul>
                                <li>
                                    <NavLink to={"/categorylist"}>
                                    
                                        <img alt="图片大小为100*100" style={{width:"initial",height:"100px"}} src="../assets/img/9cb5861c-5ff8-42b8-8c9b-0f6b4a53cde9.jpg"/>>
                                        <div style={{width:"90%",whiteSpace: "nowrap",textOverflow: "ellipsis",overflow:"hidden",textAlign:"center",margin: "auto"}}>礼品箱包</div>
                                     
                                     </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/categorylist"}>
                                     
                                        <img alt="图片大小为100*100" style={{width:"initial",height:"100px"}} src="../assets/img/65bd9fc8-7f5e-4dba-b083-0c05b1bc9b96.jpg"/>>
                                        <div style={{width:"90%",whiteSpace: "nowrap",textOverflow: "ellipsis",overflow:"hidden",textAlign:"center",margin: "auto"}}>家居家装</div>
                                    </NavLink>
                                   
                                </li>
                                <li>
                                
                                    <NavLink to={"/categorylist"}>  
                                        <img alt="图片大小为100*100" style={{width:"initial",height:"100px"}} src="../assets/img/2e7b0a93-2da2-437e-adde-ffba0cfbe218.jpg"/>>
                                        <div style={{width:"90%",whiteSpace: "nowrap",textOverflow: "ellipsis",overflow:"hidden",textAlign:"center",margin: "auto"}}>数码办公</div>
                                    </NavLink>
                                   
                                </li>
                                <li>
                                
                                    <NavLink to={"/categorylist"}> 
                                        <img alt="图片大小为100*100" style={{width:"initial",height:"100px"}} src="../assets/img/f91ac28f-b66c-45e0-9752-41bcfa0302c7.jpg"/>>
                                        <div style={{width:"90%",whiteSpace: "nowrap",textOverflow: "ellipsis",overflow:"hidden",textAlign:"center",margin: "auto"}}>服饰鞋帽</div>
                                    </NavLink> 
                                   
                                </li>
                                <li>
                                
                                    <NavLink to={"/categorylist"}> 
                                        <img alt="图片大小为100*100" style={{width:"initial",height:"100px"}} src="../assets/img/ce94d818-bc17-4028-9c5f-cd22e6661d83.jpg"/>>
                                        <div style={{width:"90%",whiteSpace: "nowrap",textOverflow: "ellipsis",overflow:"hidden",textAlign:"center",margin: "auto"}}>家用电器</div>
                                    </NavLink>
                                   
                                </li>
                                <li>
                                
                                    <NavLink to={"/categorylist"}> 
                                        <img alt="图片大小为100*100" style={{width:"initial",height:"100px"}} src="../assets/img/977a1fc2-0ee7-4f73-a7f6-eea5b73f642b.jpg"/>>
                                        <div style={{width:"90%",whiteSpace:" nowrap",textOverflow: "ellipsis",overflow:"hidden",textAlign:"center",margin: "auto"}}>个护化妆</div>
                                    </NavLink> 
                                   
                                </li>
                                <li>
                                
                                    <NavLink to={"/categorylist"}> 
                                        <img alt="图片大小为100*100" style={{width:"initial",height:"100px"}} src="../assets/img/8d502712-32ed-4301-a4e7-45b1ea4aaa77.jpg"/>>
                                        <div style={{width:"90%",whiteSpace: "nowrap",textOverflow: "ellipsis",overflow:"hidden",textAlign:"center",margin: "auto"}}>厨房餐饮</div>
                                    </NavLink>
                                   
                                </li>
                                <li>
                                
                                    <NavLink to={"/categorylist"}>  
                                        <img alt="图片大小为100*100" style={{width:"initial",height:"100px"}} src="../assets/img/2cf2f1f9-df47-47bc-be52-c5d70af53778.jpg"/>>
                                        <div style={{width:"90%",whiteSpace: "nowrap",textOverflow: "ellipsis",overflow:"hidden",textAlign:"center",margin: "auto"}}>珠宝手表</div>
                                    </NavLink> 
                                   
                                </li>
                                <li>
                                
                                    <NavLink to={"/categorylist"}> 
                                        <img alt="图片大小为100*100" style={{width:"initial",height:"100px"}} src="../assets/img/1613e012-64fa-444a-b4de-83ebd804b0d6.jpg"/>>
                                        <div style={{width:"90%",whiteSpace: "nowrap",textOverflow: "ellipsis",overflow:"hidden",textAlign:"center",margin:" auto"}}>运动健康</div>
                                    </NavLink>  
                                   
                                </li>
                            </ul>
                        </div>

                        <div className="mt10 white-bg">
                            <h4 className="sort-tit">品牌分类</h4>
                            <div className="sort-arat brand-areat">
                                <ul>
                                    <li>
                                    
                                        <NavLink to={"/categorylist"}> 
                                            <img alt="图片大小为200*105" src="../assets/img/886a68b6-f0aa-41cd-ad89-757c427a33c9.jpg" style={{height: "39px"}} />
                                        </NavLink> 
                                       
                                    </li>
                                    <li>
                                    
                                    <NavLink to={"/categorylist"}> 
                                            <img alt="图片大小为200*105" src="../assets/img/899329e3-9ec3-466b-856f-15f2a91b72a4.jpg" style={{height: "39px"}} />
                                            </NavLink>  
                                       
                                    </li>
                                    <li>
                                    
                                    <NavLink to={"/categorylist"}> 
                                            <img alt="图片大小为200*105" src="../assets/img/276aed28-5c4c-4ded-9070-59719e583ee5.jpg" style={{height: "39px"}} />
                                            </NavLink>  
                                       
                                    </li>
                                    <li>
                                    
                                    <NavLink to={"/categorylist"}>  
                                            <img alt="图片大小为200*105" src="../assets/img/01d5dc75-9e5d-405f-bf93-5793fec72e24.jpg" style={{height: "39px"}} />
                                            </NavLink> 
                                       
                                    </li>
                                    <li>
                                    
                                    <NavLink to={"/categorylist"}>  
                                            <img alt="图片大小为200*105" src="../assets/img/a5b3890a-7d78-4bac-be54-45febc984835.jpg" style={{height: "39px"}} />
                                            </NavLink>  
                                       
                                    </li>
                                    <li>
                                    
                                        <NavLink to={"/categorylist"}> 
                                            <img alt="图片大小为200*105" src="../assets/img/e6657ca7-c4c5-43fc-9bd6-29999102fc61.jpg" style={{height: "39px"}} />
                                        </NavLink> 
                                       
                                    </li>
                                    <li>
                                    
                                        <NavLink to={"/categorylist"}> 
                                            <img alt="图片大小为200*105" src="../assets/img/7865e470-0296-4f6b-98aa-30ab9824358d.jpg" style={{height: "39px"}} />
                                        </NavLink>  
                                       
                                    </li>
                                    <li>
                                    
                                         <NavLink to={"/categorylist"}> 
                                            <img alt="图片大小为200*105" src="../assets/img/b5804b78-d14c-4e34-bd39-244183f92997.jpg" style={{height:"39px"}} />
                                        </NavLink>  
                                       
                                    </li>
                                    <li>
                                    
                                    <NavLink to={"/categorylist"}> 
                                            <img alt="图片大小为200*105" src="../assets/img/ee767da6-119b-4463-a376-72eb0f495629.png" style={{height: "39px"}} />
                                            </NavLink> 
                                       
                                    </li>
                                    <li>
                                    
                                    <NavLink to={"/categorylist"}> 
                                            <img alt="图片大小为200*105" src="../assets/img/917b4ded-1980-4602-8ad6-a5fa95a9b3b9.jpg" style={{height: "39px"}} />
                                            </NavLink> 
                                       
                                    </li>
                                    <li>
                                    
                                    <NavLink to={"/categorylist"}> 
                                            <img alt="图片大小为200*105" src="../assets/img/ef8d9883-7711-4142-8533-5d7cf91082e4.png" style={{height: "39px"}} />
                                            </NavLink> 
                                       
                                    </li>
                                    <li>
                                    
                                    <NavLink to={"/categorylist"}> 
                                            <img alt="图片大小为200*105" src="../assets/img/a265b462-4d22-4914-951b-4068d533be6b.png" style={{height: "39px"}} />
                                            </NavLink>  
                                       
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Category;