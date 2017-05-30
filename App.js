import React, {Component} from 'react'
import {render} from 'react-dom'
//
// let App = React.createClass({
//   render(){
//     return(
//       <div>
//         <button>
//          old way of doing react classes
//         </button>
//         <img src = "http://a.abcnews.com/images/Business/GTY_stock_cash_pile_money_dollar_bills-thg-130726_33x16_1600.jpg" />
//       </div>
//     )
//   }
// })

const App = (props) =>{
  return (
    <div>
      <button>
        stateless component way
        making components using plain javascript
        no lifecylce methods can be added this way
      </button>
      <img width = {{width: 100}} src = "http://a.abcnews.com/images/Business/GTY_stock_cash_pile_money_dollar_bills-thg-130726_33x16.jpg" />

    </div>
  )
}
//
// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state ={
//       name: ''
//     }
//   }
//   render(){
//     return(
//       <div>
//         <button>
//           new react es6 classes
              // allows you to add lifecycle methods
//         </button>
            // <img src = "http://a.abcnews.com/images/Business/GTY_stock_cash_pile_money_dollar_bills-thg-130726_33x16_1600.jpg" />

//       </div>
//     )
//   }
// }

render(
  <App />, document.getElementById('root')
)
