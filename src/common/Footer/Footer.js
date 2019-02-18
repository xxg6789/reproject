import React from 'react';
import {NavLink} from 'react-router-dom';
// import './Footer.css';

const Footer=()=>(
    <div>
        <footer className="footer">
            <div className="foot-con">
                <div className="foot-con_2">
                    <NavLink to={'/home'} className="active">
                     
                        <i className="navIcon home"></i>
                        <span className="text">首页</span>
                    
                     </NavLink>
                     <NavLink to={'/category'}>
                        <i className="navIcon sort"></i>
                        <span className="text">分类</span>
                    </NavLink>
                   
                    <NavLink to={'/shopcar'}>
                        <i className="navIcon shop"></i>
                        <span className="text">购物车</span>		
                    </NavLink>
                    
                     
                    <NavLink to={'/userhome'}>
                        <i className="navIcon member"></i>
                        <span className="text">我的</span>
                    </NavLink>
                   
                </div>
            </div>
        </footer>
    </div>
);

export default Footer;