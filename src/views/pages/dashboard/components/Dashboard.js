import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import './Dashboard.css'
import Scroll from 'react-scroll';
import classNames from 'classnames'
import {connect} from 'react-redux'
import { Input } from 'semantic-ui-react'
import Loading from '../../../components/Loading'
import $ from 'jquery';
import { updateCoins } from '../../../../reducers/crypto'
import { updatePortfolio } from '../../../../reducers/accountinfo'
import DashboardTop from './DashboardTop'
import DashboardPortfolios from './DashboardPortfolios'
import Dashboard404 from './Dashboard404'
import {bindActionCreators} from 'redux'
import 'public/coinrexlogow.svg'
import 'public/coinrexlogoB.svg'
import 'public/coinrexheadlogo.svg'
import 'public/coinrexheadlogo2.svg'
import { Menu, Icon, Button, Card, Select, Tooltip } from 'antd'
import 'antd/dist/antd.css'
import RequireUnauthRoute from '../../../components/require-unauth-route';

const SubMenu = Menu.SubMenu;
const Option = Select.Option;



class Dashboard extends Component {

  constructor( props ){
    super(props)
    this.state = {
      collapsed: false,
      isCoin: {}
    }
  }

  componentWillMount(){
    setInterval(this.getBitcoin(this.props, this), 300000);
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  getBitcoin(thegoods, othergoods) {
    return $.getJSON('https://api.coinmarketcap.com/v1/ticker/?convert=CAD&limit=200')
      .then((data) => {
        let newObject = {}
        data.forEach(function(item, i){
          let tempObj = {[item.symbol]: {
            name: item.name,
            percentChange24h: item.percent_change_24h,
            marketCap: item.market_cap_cad,
            price: item.price_cad,
            rank: i,
            priceUSD: item.price_usd,
            marketCapUSD: item.market_cap_usd,
            lastUpdated: item.last_updated,
            symbol: item.symbol
          }}
          Object.assign(newObject, tempObj);
        })
        thegoods.updateCoins(newObject)
      });
  }

  render () {
    if (this.props.crypto == null) return (
      <div className='loginBody noselect flexx' >
        <Loading />
      </div>
    )
    else {

      let innerContent = classNames({
        'innerContentSmall': !this.state.collapsed,
        'innerContentBig': this.state.collapsed,
        'flexx': true
      })

      return (
        <div className='noselect flexx' >
          <div className='topBar'>
            <div className='headerWrapper flexx headerText'>
              <img className='topHeaderIcon' src='/coinrexheadlogo.svg'></img>
              <Link to="/dashboard/portfolios">
                <h1 className='headerText'>CoinREX</h1>
              </Link>
            </div>
            <div className='iconWrapper flexx accountIcon'>
              <i className="fa fa-user-circle fa-3x iconn" aria-hidden="true"></i>
            </div>
            <div className='iconWrapper flexx tintIcon'>
              <Link to="/dashboard/portfolios">
                <i className="fa fa-tint fa-2x iconn" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className='antSideBar' style={{ width: 240 }}>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="1">
                <Icon type="line-chart" />
                <span>Market</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="inbox" />
                <span>Option 3</span>
              </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                  <SubMenu key="sub2" title={<span><i className="fa fa-rocket faIcon" aria-hidden="true" /><span>Portfolios</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                      <Menu.Item key="13">Option 13</Menu.Item>
                      <Menu.Item key="14">Option 14</Menu.Item>
                    </SubMenu>
                  </SubMenu>
              </Menu>
            </div>
              <div className={innerContent}>
                <Switch>
                  <RequireUnauthRoute exact path="/dashboard/portfolios" component={DashboardPortfolios}/>
                  <RequireUnauthRoute exact path="/dashboard" component={DashboardTop}/>
                  <RequireUnauthRoute path="/dashboard/" component={Dashboard404}/>
                </Switch>
              </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state, ownProps) {
    return {
        crypto: state.crypto,
        account: state.accountinfo['ACT-1']
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
      updateCoins,
      updatePortfolio
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard)
