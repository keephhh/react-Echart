import React, { Component } from 'react';
import asyncComponent from './AsyncComponent'
import { pieOption, lineOption } from './optionConfig/options'
const PieReact = asyncComponent(() => import(/* webpackChunkName: "PieReact" */'./EchartsDemo/PieReact'))  //饼图组件

const LineReact = asyncComponent(() => import(/* webpackChunkName: "LineReact" */'./EchartsDemo/LineReact'))  //折线图组件

class App extends Component {
  render() {
    return (
      <div>
        <h2>饼图react组件实现</h2>
        <PieReact option={pieOption} />
        <hr/>
        
        <h2>折线图react组件实现</h2>
        <LineReact option={lineOption} />
        <hr/>
      </div>
    );
  }
}

export default App;
