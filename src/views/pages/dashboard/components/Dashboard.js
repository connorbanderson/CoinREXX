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
        console.log('this is new object', newObject);
        thegoods.updateCoins(newObject)
      });
  }

 round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  render () {
    if (this.props.crypto == null) return (
      <div className='loginBody noselect flexx' >
        <Loading />
      </div>
    )
    else {
      let portfolio1 = this.round(
        (
          this.props.crypto['BTC'].price*17.2 +
          this.props.crypto['ETH'].price*99.9 +
          this.props.crypto['BCH'].price*17.2 +
          this.props.crypto['XRP'].price*5750.1 +
          this.props.crypto['XEM'].price*5496.8 +
          this.props.crypto['ETC'].price*59.9 +
          this.props.crypto['ZEC'].price*1.9 +
          this.props.crypto['GNT'].price*1317.9 +
          this.props.crypto['LTC'].price*58.56 +
          this.props.crypto['GNO'].price*1.3 +
          this.props.crypto['SC'].price*25545.73 +
          this.props.crypto['MAID'].price*586.4 +
          this.props.crypto['XLM'].price*9954.8 +
          this.props.crypto['XMR'].price*4.9+
          this.props.crypto['NEO'].price*26.2 +
          this.props.crypto['REP'].price*10 +
          this.props.crypto['DOGE'].price*109953.7 +
          this.props.crypto['SNT'].price*3016.377 +
          this.props.crypto['GAME'].price*90 +
          this.props.crypto['WAVES'].price*61.5 +
          this.props.crypto['BTS'].price*1288.1 +
          this.props.crypto['DASH'].price*1.043 +
          this.props.crypto['FCT'].price*9.7 +
          this.props.crypto['GBYTE'].price*0.4 +
          this.props.crypto['BAT'].price*1435.8 +
          this.props.crypto['STRAT'].price*38.2 +
          this.props.crypto['ICN'].price*56 +
          this.props.crypto['EOS'].price*116 +
          this.props.crypto['STEEM'].price*140.9 +
          this.props.crypto['LSK'].price*86.7 +
          this.props.crypto['NMC'].price*70 +
          this.props.crypto['QTUM'].price*14.9 +
          this.props.crypto['DCR'].price*3.8 +
          this.props.crypto['DGB'].price*4979.1 +
          this.props.crypto['POT'].price*877.4 +
          this.props.crypto['AMP'].price*213.5
        ), 0
      )
      let portfolio2 = this.round(
        (
          this.props.crypto['BTC'].price*0.65244715 +
          this.props.crypto['ETH'].price*10.9 +
          this.props.crypto['BCH'].price*0.65244715 +
          this.props.crypto['SNGLS'].price*535.8 +
          this.props.crypto['BAT'].price*467.0 +
          this.props.crypto['WAVES'].price*19.7 +
          this.props.crypto['BTS'].price*412.4 +
          this.props.crypto['SC'].price*6398.3 +
          this.props.crypto['DGB'].price*3218.1 +
          this.props.crypto['SNT'].price*945.1 +
          this.props.crypto['LSK'].price*27.98081642 +
          this.props.crypto['AMP'].price*233.6 +
          this.props.crypto['REP'].price*3.02660141 +
          this.props.crypto['FCT'].price*2.95104344 +
          this.props.crypto['POT'].price*546.5 +
          this.props.crypto['QTUM'].price*8.93334814 +
          this.props.crypto['XLM'].price*2935.1 +
          this.props.crypto['GNT'].price*216.9 +
          this.props.crypto['NEO'].price*7.60791627 +
          this.props.crypto['GBYTE'].price*0.11548333 +
          this.props.crypto['STEEM'].price*41.63180283 +
          this.props.crypto['GAME'].price*25.84439777 +
          this.props.crypto['STRAT'].price*10.45813369 +
          this.props.crypto['ZEC'].price*0.29516474 +
          this.props.crypto['GNO'].price*0.27296667 +
          this.props.crypto['ETC'].price*3.81198054 +
          this.props.crypto['DOGE'].price*30549.534 +
          this.props.crypto['MAID'].price*160.56087996 +
          this.props.crypto['DCR'].price*2.14797111 +
          this.props.crypto['LTC'].price*1.31731249 +
          this.props.crypto['DASH'].price*0.281705 +
          this.props.crypto['XRP'].price*316.69103918 +
          this.props.crypto['XMR'].price*1.19576613
        ), 0
      )
      let portfolio3 = this.round(
        (
          this.props.crypto['BTC'].price*0.60540599 +
          this.props.crypto['ETH'].price*8.3 +
          this.props.crypto['BCH'].price*0.60540599
        ), 0
      )
      const altdata2 = [
        {label: `BTC $${this.round(this.props.crypto['BTC'].price*17.2,0)}`, value: this.props.crypto['BTC'].price*17.2}, {label: `ETH $${this.round(this.props.crypto['ETH'].price*99.9,0)}`, value: this.props.crypto['ETH'].price*99.9},
        {label: `BCH $${this.round(this.props.crypto['BCH'].price*17.2,0)}`, value: this.props.crypto['BCH'].price*17.2}
      ]
      const altdata = [
        {label:  `XRP $${this.round(this.props.crypto['XRP'].price*5750.1,0)}`, value: this.props.crypto['XRP'].price*5750.1},
        {label: `XEM $${this.round(this.props.crypto['XEM'].price*5496.8,0)}`, value: this.props.crypto['XEM'].price*5496.8}, {label: `ETC $${this.round(this.props.crypto['ETC'].price*59.9,0)}`, value: this.props.crypto['ETC'].price*59.9},
        {label: `ZEC $${this.round(this.props.crypto['ZEC'].price*1.9,0)}`, value: this.props.crypto['ZEC'].price*1.9}, {label: `GNT $${this.round(this.props.crypto['GNT'].price*1317.9,0)}`, value: this.props.crypto['GNT'].price*1317.9},
        {label: `LTC $${this.round(this.props.crypto['LTC'].price*58.56,0)}`, value: this.props.crypto['LTC'].price*58.56}, {label: `GNO $${this.round(this.props.crypto['GNO'].price*1.3,0)}`, value: this.props.crypto['GNO'].price*1.3},
        {label: `SC $${this.round(this.props.crypto['SC'].price*25545.73,0)}`, value: this.props.crypto['SC'].price*25545.73}, {label: `MAID $${this.round(this.props.crypto['MAID'].price*586.4,0)}`, value: this.props.crypto['MAID'].price*586.4},
        {label: `XLM $${this.round(this.props.crypto['XLM'].price*9954.8,0)}`, value: this.props.crypto['XLM'].price*9954.8}, {label: `XMR $${this.round(this.props.crypto['XMR'].price*4.9,0)}`, value: this.props.crypto['XMR'].price*4.9},
        {label: `NEO $${this.round(this.props.crypto['NEO'].price*26.2,0)}`, value: this.props.crypto['NEO'].price*26.2}, {label: `REP $${this.round(this.props.crypto['REP'].price*10,0)}`, value: this.props.crypto['REP'].price*10},
        {label: `DOGE $${this.round(this.props.crypto['DOGE'].price*109953.7,0)}`, value: this.props.crypto['DOGE'].price*109953.7}, {label: `SNT $${this.round(this.props.crypto['SNT'].price*3016.377,0)}`, value: this.props.crypto['SNT'].price*3016.377},
        {label: `GAME $${this.round(this.props.crypto['GAME'].price*90,0)}`, value: this.props.crypto['GAME'].price*90}, {label: `WAVES $${this.round(this.props.crypto['WAVES'].price*61.5,0)}`, value: this.props.crypto['WAVES'].price*61.5},
        {label: `BTS $${this.round(this.props.crypto['BTS'].price*1288.1,0)}`, value: this.props.crypto['BTS'].price*1288.1}, {label: `DASH $${this.round(this.props.crypto['DASH'].price*1.043,0)}`, value: this.props.crypto['DASH'].price*1.043 },
        {label: `FCT $${this.round(this.props.crypto['FCT'].price*9.7,0)}`, value: this.props.crypto['FCT'].price*9.7}, {label: `GBYTE $${this.round(this.props.crypto['GBYTE'].price*0.4,0)}`, value: this.props.crypto['GBYTE'].price*0.4},
        {label: `BAT $${this.round(this.props.crypto['BAT'].price*1435.8,0)}`, value: this.props.crypto['BAT'].price*1435.8}, {label: `STRAT $${this.round(this.props.crypto['STRAT'].price*38.2,0)}`, value: this.props.crypto['STRAT'].price*38.2},
        {label: `ICN $${this.round(this.props.crypto['ICN'].price*56,0)}`, value: this.props.crypto['ICN'].price*56}, {label: `EOS $${this.round(this.props.crypto['EOS'].price*116,0)}`, value: this.props.crypto['EOS'].price*116},
        {label: `STEEM $${this.round(this.props.crypto['STEEM'].price*140.9,0)}`, value: this.props.crypto['STEEM'].price*140.9}, {label: `LSK $${this.round(this.props.crypto['LSK'].price*86.7,0)}`, value: this.props.crypto['LSK'].price*86.7},
        {label: `NMC $${this.round(this.props.crypto['NMC'].price*70,0)}`, value: this.props.crypto['NMC'].price*70}, {label: `QTUM $${this.round(this.props.crypto['QTUM'].price*14.9,0)}`, value: this.props.crypto['QTUM'].price*14.9},
        {label: `DCR $${this.round(this.props.crypto['DCR'].price*3.8,0)}`, value: this.props.crypto['DCR'].price*3.8}, {label: `DGB $${this.round(this.props.crypto['DGB'].price*4979.1,0)}`, value: this.props.crypto['DGB'].price*4979.1},
        {label: `POT $${this.round(this.props.crypto['POT'].price*877.4,0)}`, value: this.props.crypto['POT'].price*877.4}, {label: `AMP $${this.round(this.props.crypto['AMP'].price*213.5,0)}`, value: this.props.crypto['AMP'].price*213.5}
      ]
      const altdatavalue =
      (this.props.crypto['XRP'].price*5750.1
        + this.props.crypto['XEM'].price*5496.8
        + this.props.crypto['ETC'].price*59.9
        + this.props.crypto['ZEC'].price*1.9
        + this.props.crypto['GNT'].price*1317.9
        + this.props.crypto['LTC'].price*58.56
        + this.props.crypto['GNO'].price*1.3
        + this.props.crypto['SC'].price*25545.73
        + this.props.crypto['MAID'].price*586.4
        + this.props.crypto['XLM'].price*9954.8
        + this.props.crypto['XMR'].price*4.9
        + this.props.crypto['NEO'].price*26.2
        + this.props.crypto['REP'].price*10
        + this.props.crypto['DOGE'].price*109953.7
        + this.props.crypto['SNT'].price*3016.377
        + this.props.crypto['GAME'].price*90
        + this.props.crypto['WAVES'].price*61.5
        + this.props.crypto['DASH'].price*1.043
        + this.props.crypto['FCT'].price*9.7
        + this.props.crypto['GBYTE'].price*0.4
        + this.props.crypto['BAT'].price*1435.8
        + this.props.crypto['STRAT'].price*38.2
        + this.props.crypto['ICN'].price*56
        + this.props.crypto['EOS'].price*116
        + this.props.crypto['STEEM'].price*140.9
        + this.props.crypto['LSK'].price*86.7
        + this.props.crypto['NMC'].price*70
        + this.props.crypto['QTUM'].price*14.9
        + this.props.crypto['DCR'].price*3.8
        + this.props.crypto['DGB'].price*4979.1
        + this.props.crypto['POT'].price*877.4
        + this.props.crypto['AMP'].price*213.5)
      const data01 = [
        {label: `BTC \n $${this.round(this.props.crypto['BTC'].price*17.2,0)}`, value: this.props.crypto['BTC'].price*17.2}, {label: 'ETH', value: this.props.crypto['ETH'].price*99.9 },
        {label: 'BCH', value: this.props.crypto['BCH'].price*17.2}, {label: 'ALTS', value: altdatavalue}
      ]
      let innerContent = classNames({
        'innerContentSmall': !this.state.collapsed,
        'innerContentBig': this.state.collapsed,
        'flexx': true
      })
      let cryptoList = Object.keys(this.props.crypto)
      let cryptoListO = cryptoList.map((key, i) => {
        let coin = this.props.crypto[key]
        return(
          <Option key={key}> {coin.name} </Option>
        )
      })
      function handleChange(value) {
        let kappa = 'kappa'
        this.props.updatePortfolio(['value'])
      }
      function printTop(props) {
        let cryptoKeys = Object.keys(props.crypto)
        console.log('here are they keys', cryptoKeys)
        let topCrypto = []
        cryptoKeys.forEach(function(key, i){
          let coin = props.crypto[`${key}`]
          let up, doubleUp, down, doubleDown, rocket, ship = false
          if (coin.percentChange24h >= 25) (rocket = true)
          else if (coin.percentChange24h > 10 && coin.percentChange24h < 25) (doubleUp = true)
          else if (coin.percentChange24h > 0 && coin.percentChange24h <= 10) (up = true)
          else if (coin.percentChange24h <= 0 && coin.percentChange24h > -10) (down = true)
          else if (coin.percentChange24h <= -10 && coin.percentChange24h > -25) (doubleDown = true)
          else (ship = true)

          let arrowStyle = classNames({
            'fa-angle-up': up,
            'fa-angle-double-up': doubleUp,
            'fa-angle-down': down,
            'fa-angle-double-down': doubleDown,
            'fa-rocket': rocket,
            'fas-ship': ship,
            'fa': true,
            'fa-2x': true
          })
          let iconBoxStyle = classNames({
            'boxUp': up,
            'boxDoubleUp': doubleUp,
            'boxDown': down,
            'boxDoubleDown': doubleDown,
            'boxRocket': rocket,
            'boxShip': ship,
            'flexx': true,
            'iconBox': true
          })
          let percentChangeHeader = classNames({
            'boxUpHeader': up,
            'boxDoubleUpHeader': doubleUp,
            'boxDownHeader': down,
            'boxDoubleDownHeader': doubleDown,
            'boxRocketHeader': rocket,
            'card24H': true
          })
          let roundd = (value, decimals) =>  {
            Number(Math.round(value+'e'+decimals)+'e-'+decimals)
           }

           let chop = (price) => {
             if (price > 1000 ){price = price.slice(0, 7)}
             else if (price > 100) {price = price.slice(0, 6)}
             else if (price > 10) {price = price.slice(0, 5)}
             else if (price > 1) {price = price.slice(0, 4)}
             else if (price > .1) {price = price.slice(0, 4)}
             else if (price > .01) {price = price.slice(0, 5)}
             else if (price > .001) {price = price.slice(0, 6)}
             let newPrice = '$' + price
             return (
               newPrice
             )
           }

            topCrypto.push(
              <div key={key} className='cryptoCard'>
              <div className='cardNameWrapper flexx'>
                <Tooltip placement="top" title={coin.name}>
                  <h1 className='cardName'> {coin.symbol} </h1>
                </Tooltip>
              </div>
              <div className='cardPriceWrapper flexx'>
                <h1 className='cardPrice'>{chop(coin.price)} </h1>
              </div>
                <h1 className={percentChangeHeader}> {`${coin.percentChange24h}%`} </h1>
                <div className={iconBoxStyle}>
                  <i className={arrowStyle} aria-hidden="true"></i>
                </div>
                <div className='rank'>
                  <h1>{coin.rank + 1}</h1>
                </div>
              </div>
              )
            })
        console.log('finishing')
        return (
          topCrypto
        )
      }



      console.log('PoG ChAmP', this.props);
      return (
        <div className='noselect flexx' >
          <div className='topBar'>
            <div className='headerWrapper flexx headerText'>
              <img className='topHeaderIcon' src='./coinrexheadlogo.svg'></img>
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
                    <Menu.Item key="9">Main ${portfolio1}</Menu.Item>
                    <Menu.Item key="10">Connor ${portfolio2}</Menu.Item>
                    <Menu.Item key="11">Suji ${portfolio3}</Menu.Item>
                    <Menu.Item key="12">Total ${portfolio1 + portfolio2 + portfolio3}</Menu.Item>
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
