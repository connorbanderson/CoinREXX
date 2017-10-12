import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import Scroll from 'react-scroll';
import classNames from 'classnames'
import {connect} from 'react-redux'
import { Input } from 'semantic-ui-react'
import Loading from '../../../components/Loading'
import $ from 'jquery';
import { updateCoins } from '../../../../reducers/crypto'
import { updatePortfolio } from '../../../../reducers/accountinfo'

import {bindActionCreators} from 'redux'
import 'public/coinrexlogow.svg'
import 'public/coinrexlogoB.svg'
import 'public/coinrexheadlogo.svg'
import 'public/coinrexheadlogo2.svg'
import { Menu, Icon, Button, Card, Select, Tooltip } from 'antd';
import 'antd/dist/antd.css'
const SubMenu = Menu.SubMenu;
const Option = Select.Option;



class DashboardTop extends Component {

  constructor( props ){
    super(props)
    this.state = {
    }
  }

  getBitcoin(thegoods, othergoods) {
    return $.getJSON('https://api.coinmarketcap.com/v1/ticker/?convert=CAD&limit=300')
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
          Object.assign(newObject, tempObj)
        })
        thegoods.updateCoins(newObject)
      })
  }

 round(value, decimals) {return Number(Math.round(value+'e'+decimals)+'e-'+decimals)}

  render () {
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
        console.log(`selected ${value}`);
        let kappa = 'kappa'
        this.props.updatePortfolio(['value'])
      }
      function printTop(props) {
        let cryptoKeys = Object.keys(props.crypto)
        let topCrypto = []
        cryptoKeys.forEach(function(key, i){
          let coin = props.crypto[`${key}`]
          let up, doubleUp, down, doubleDown, rocket, boxShip = false
          if (coin.percentChange24h >= 25) (rocket = true)
          else if (coin.percentChange24h > 10 && coin.percentChange24h < 25) (doubleUp = true)
          else if (coin.percentChange24h > 0 && coin.percentChange24h <= 10) (up = true)
          else if (coin.percentChange24h <= 0 && coin.percentChange24h > -10) (down = true)
          else if (coin.percentChange24h <= -10 && coin.percentChange24h > -25) (doubleDown = true)
          else (boxShip = true)
          let arrowStyle = classNames({
            'fa-angle-up': up,
            'fa-angle-double-up': doubleUp,
            'fa-angle-down': down,
            'fa-angle-double-down': doubleDown,
            'fa-rocket': rocket,
            'fas-ship': boxShip,
            'fa': true,
            'fa-2x': true
          })
          let iconBoxStyle = classNames({
            'boxUp': up,
            'boxDoubleUp': doubleUp,
            'boxDown': down,
            'boxDoubleDown': doubleDown,
            'boxRocket': rocket,
            'boxShip': boxShip,
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

      return (
        <div className='noselect flexx' >
          {printTop(this.props)}
        </div>
      )
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

export default connect(mapStateToProps, matchDispatchToProps)(DashboardTop)
