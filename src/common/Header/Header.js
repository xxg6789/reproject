import React,{Component} from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return (
            <div>
                <header className="header">
                    <div className="fix_nav">
                    <div style={{"maxWidth":"768px","margin":"0 auto","height": "44px","position":" relative","background":"#000000"}}>
                        <form action="/m_search/list" method="get" id="searchform" name="searchform">
                            <div className="navbar-search left-search">
                                    <input type="text" id="keyword" name="keyword"  placeholder="搜索商品" className="form-control"/>>
                            </div>
                            <div className="nav-right">
                                <input type="button" value="搜索" className="img-responsive" style={{"textAlign":"center","background":"#ccc","borderRadius":" 5px","border":"none","height":"34px","verticalAlign":"middle","clear":"both","padding":"0px","width":"42px"}}/>
                            </div>
                        </form>
                    </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;