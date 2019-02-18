import React,{Component} from "react";
import {NavLink} from "react-router-dom";

import "./List.css";

class List extends Component{
    render(){
        return (
           <div>
                <div className="row category">
                    <a href="/m_search/list?param.hot='Y'" className="col-xs-3">
                        <img className="img-responsive" src="../../assets/img/icon_rm.png"/>>
                        <h4>热门</h4>
                    </a>
                    <a href="/m_search/list?param.commend='Y'" className="col-xs-3">
                        <img className="img-responsive" src="../../assets/img/icon_tm.png"/>>
                        <h4>精品</h4>
                    </a>
                    <a href="/theme/allThemes" className="col-xs-3">
                        <img className="img-responsive" src="../../assets/img/theme.png"/>>
                        <h4>专题列表</h4>
                    </a>
                    <a href="/brand" className="col-xs-3">
                        <img className="img-responsive" src="../../assets/img/icon_pp.png"/>>
                        <h4>品牌</h4>
                    </a>
                </div>

                <div className="row">

                 
                    <div className="tb_box">
                        <h2 className="tab_tit">
                            <a className="more" href="http://m.legendshop.cn/m_search/list?categoryId=36">更多</a>
                            礼品箱包</h2>

                        <div className="tb_type tb_type_even clearfix">
                            <NavLink to={"/showv"} className="tb_floor">
                                <img src="../../assets/img/c2abb958-aca8-42f2-be52-ee1c072caec0.jpg" style={{width:"100%"}}/>>
                            </NavLink>
                           
                            <NavLink to={"/showv"} className="th_link">
                            
                                <img className="tb_pic" src="../../assets/img/e71099af-8a08-45f5-af16-4e8edf2f1bff.jpg" style={{width:"100%"}}/>>
                           
                            </NavLink>
                            <NavLink to={"/showv"} className="th_link tb_last">
                            
                                <img className="tb_pic" src="../../assets/img/33c256a8-7bff-4c6b-8686-f209bbad1301.jpg" style={{width:"100%"}}/>>
                            </NavLink>
                            
                        </div>
                    </div>
                   
                    <div className="tb_box">
                        <h2 className="tab_tit">
                            <a className="more" href="http://m.legendshop.cn/m_search/list?categoryId=38">更多</a>
                            服饰鞋帽</h2>

                        <div className="tb_type clearfix"><a className="tb_floor" href="views.html">
                                <img src="../../assets/img/0bbbb6bf-0d00-45c0-92f7-347377f2edb5.jpg" style={{width:"100%"}}/>>
                            </a>
                            <a className="th_link" href="views.html">
                                <img className="tb_pic" src="../../assets/img/0d86960d-20b5-4dd3-afee-8453b5ea5e95.jpg" style={{width:"100%"}}/>>
                            </a>
                            <a className="th_link tb_last" href="views.html">
                                <img className="tb_pic" src="../../assets/img/1e13498f-419d-4ebd-a3b2-d0ad95ceaa39.jpg" style={{width:"100%"}}/>>
                            </a>
                        </div>
                    </div>
                   
                    <div className="tb_box">
                        <h2 className="tab_tit">
                            <a className="more" href="http://m.legendshop.cn/m_search/list?categoryId=35">更多</a>
                            数码办公</h2>

                        <div className="tb_type tb_type_even clearfix"><a className="tb_floor" href="views.html">
                                <img src="../../assets/img/bd6771d9-f220-454d-83b2-d58d2046d23a.jpg" style={{width:"100%"}}/>>
                            </a>
                            <a className="th_link" href="views.html">
                                <img className="tb_pic" src="../../assets/img/04ef50d9-97f0-4fea-8359-ee21376df392.jpg" style={{width:"100%"}}/>>
                            </a>
                            <a className="th_link tb_last" href="views.html">
                                <img className="tb_pic" src="../../assets/img/d07a93ef-cdff-4b21-a12b-d817890aa6d6.jpg" style={{width:"100%"}}/>>
                            </a>
                        </div>
                    </div>
                </div>

           </div>
        )
    }
}


export default List;