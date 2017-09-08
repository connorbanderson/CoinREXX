import React from 'react'
import { Menu, Icon, Button, Card, Select, Input } from 'antd';


export const portfolioGenerator = (props) => {
  let keys = Object.keys(props.portfolios)
  let cardList = []
  if (keys.length < 1){
    return(
      <div>
        <h1> Create your portfolio </h1>
      </div>
    )
  }
  else {
    keys.forEach(function(key, i){
      let portfolio = props.portfolios[key]
      let card = (
        <div key={i} className='PortfolioCard'>
          <div className='PortfolioCardHeader flexx'>
            <h1> Header { console.log('header speaking', portfolio) } </h1>
          </div>
          <div className='PortfolioCardBody flexx'>
            {console.log('props are....', props)}
            <Select
              className='portfolioSelector'
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={portfolio.coins}
              onChange={(value, kappa)=>{props.updatePortfolioCoins(key, value)}}
            >
            {selectorOptions(props.crypto)}
            </Select>
            {valueSelector(portfolio.coins)}
          </div>
        </div>
      )
      cardList.push(card)
    })
  }
  return cardList
}

const valueSelector = (coins) => {
  console.log('value Selector coins are...', coins)
  let inputList = []
  coins.forEach(function(key, i){
    console.log('coins are', coins)
    console.log('key is', key)
    let input = (
      <Input key={key} addonBefore='d' defaultValue="0" />
    )
    inputList.push(input)
  })
  return inputList
}


const selectorOptions = (coins) => {
  console.log('here are the coins', coins)
  let optionList = []
  let keys = Object.keys(coins)
  keys.forEach(function(key, i){
    let option = (
      <Select.Option key={i}>
        {keys[i]}
      </Select.Option>
    )
    optionList.push(option)
  })
  return optionList
}
