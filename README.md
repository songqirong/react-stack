# 环境

node.js v10+
windows 64bit


# 学习目标

1 使用 webpack 构建打包环境
2 使用 webpack 构建开发环境
3 四个核心概念：入口、出口、loaders、plugins
4 手动搭建 react+react-router+mobx+sass+antd 工程架构


# Webpack起步

创建react-stack项目目录
npm init -y 生成 package.json文件

cnpm install webpack -g
cnpm install webpack-cli -g

cnpm install webpack -D
cnpm install webpack-cli -D

创建webpack的配置文件,命名名 xxx.config.js,
建议命名为webpack.config.js, 这是webpack官方推荐的默认配置文件

如何编写配置文件呢?(参见react.config.js文件)
1 设置入口文件:entry选项
2 设置出口:output选项

打包命令: webpack --config xxx.config.js

# 使用plugins

1、html-webpack-plugin
    它的作用是自动生成一个index.html单页面，并且把打包后.js脚本文件插入进去。
    cnpm install html-webpack-plugin -D
    ```
    plugins: [
        new HtmlWebpackPlugin({
            template: 'html模板文件',
            title: '我们'
        })
    ]
    ```
2、clean-webpack-plugin
    它的作用是自动删除目录中的dist文件夹，无需手动操作了


# 搭建devServer

cnpm install webpack-dev-server -g
cnpm install webpack-dev-server -D

```
devServer: {
    port: '8090',
    open: true,
    contentBase: path.resolve(__dirname, 'public')
}
```
如何启动本地服务呢？
    webpack-dev-server --config xxx.config.js

# 开启HMR热更新功能

HMR的作用是：局部代码发生变化时，不用刷新整个页面（重新编译）即可自动更新，速度比较快。

1、在devServer中，添加  `hot:true`
2、引入 webpack 模块，添加两个plugin插件。

# 使用sass/css

cnpm install style-loader -D
cnpm install css-loader -D
cnpm install sass-loader -D
cnpm install node-sass -D
```
module: {
    rules: [
        {test:/\.(css|scss)$/,use:['style-loader','css-loader','style-loader']}
    ]
}
```
温馨提示：如果node-sass安装失败过，建议把node_modules整个目录删掉，重新cnpm install。最好保证node-sass一次性安装成功。

# 使用JS

Babel，JS编译器，把ES6(下一代ECMAScript)转化成浏览器能够兼容的ES5代码

cnpm install babel-loader -D
cnpm install @babel/core -D
```
rules: [
    {test:/\.js$/, use:['babel-loader'], exclude: /node_modules/}
]
```

# 使用ESLint

ESLint,用于规范JS代码，保持特定的风格，便于协同开发。

cnpm install eslint-loader -D
cnpm install eslint -D

```
{test:/\.js$/, use:['eslint-loader'], exclude: /node_modules/, enforce:'pre'}
```

手动新建的一个ESlint的配置文件：.eslintrc.json
```
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": "error"
    }
}
```
在devServer中，添加 overlay: { errors:true } 可让报错信息覆盖在视图上面。

注：任何配置文件修改了，要想生效，必须重启项目。

# 区分开发环境与生产环境

cnpm install cross-env -D
在package.json中配置命令，如下：
```
"scripts": {
  "build": "cross-env NODE_ENV=production webpack --config react.config.js",
  "serve": "cross-env NODE_ENV=development webpack-dev-server --config react.config.js",
  "start": "npm run serve"
},
```
在xxx.config.js中，使用`process.env.NODE_ENV`来分别配置我们的webpack。

# react安装

cnpm install react -S
cnpm install react-dom -S

第一步：封装react根组件
```
import React from 'react'
export default class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello React</h1>
      </div>
    )
  }
}
```
第二步：把组件渲染到真实的DOM节点
```
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
ReactDOM.render(<App />, document.getElementById('root'))
```
第三步：安装Babel插件

cnpm install @babel/preset-react -D  支持jsx语法的babel插件
cnpm install @babel/preset-env -D  支持ES6中较新的语法

第四步：创建一个babel的配置文件，命名为 .babelrc.json
```
{
  "presets": [
    ["@babel/preset-react"],
    ["@babel/preset-env",{"useBuiltIns": "entry"}]
  ]
}
```
注：配置文件修改，项目重启。


# PropTypes类型检查

作用：对组件的props进行类型检查、是否必填检查

安装：cnpm install prop-types -S
```
import PropTypes from 'prop-types'

class XX extends React.Component {}

XX.propTypes = {
  msg: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default XX
```

# Context上下文

作用：解决层级较深的间接父子组件之间的数据传递问题，以避免繁琐的props传递

使用步骤：
1、创建上下文对象
```
import React from 'react'
export default const Ctx = React.createContext({})
```
2、在App组件中
```
import Ctx from '@/utils/ctx'

return(
  <Ctx.Provider value={}>
  </Ctx.Provider>
)
```
3、在业务组件中
```
import Ctx from '@/utils/ctx'

return(
  <Ctx.Consumer>
  {
    (ctx)=>(
      <div></div>
    )
  }
  </Ctx.Consumer>
)
```

# Hooks

1、useState
```
import { useState } from 'react'
let [msg, setMsg] = useState('')
// msg是声明式变量
// setMsg()是函数，相当于 this.setState({msg}) 用于改变msg
// useState('') 设置声明式变量的初始值
```

2、useEffect(副作用)
作用：让函数式组件拥有生命周期的特性。相当于以下三个生命周期的结合。
componentDidMount  是useEffect第一个函数参数中的语句代码
componentDidUpdate  是useEffect的第二个数组参数
componentWillUnmount  是useEffect第一个函数参数中的return语句

```
import React, { useState, useEffect } from 'react'

let [count, setCount] = useState(20)

useEffect(()=>{
  // componentDidMount
  // 调接口，开启长连接、开启定时
  // 做其它初始化的业务逻辑
  timer = setInterval(()=>{
    count++
    setCount(count)
  }, 1000)

  // componentWillUnmount
  return ()=>{
    // 清除长连接、清除定时器
    clearInterval(timer)
  }
  }, [count])  // componentDidUpdate
```

# react路由

特点：组件化，也就是说react-router-dom提供大量的组件

cnpm install react-router-dom -S

HashRouter / BrowserRouter
Route 视图容器
Link / NavLink 相当于是超链接

Redirect  用于实现重定向
Switch  用于包裹所有的Route


只有被Route容器包裹过的组件中，才能以下API：
this.props.history.push() / replace() / go() / goBack()
this.props.match.params  动态路由取参

那些未被Route进行直接包裹的组件中，是没有 this.props.history等API的。
也想拥有这些API，怎么办？
```
import { withRouter } from 'react-router-dom'

class XXX extends React.Component {}

export default withRouter(XXX)
```


# 代码拆分（分割）

1、安装loadable，实现代码拆分
cnpm install @loadable/component -S
```
import loadable from '@loadable/component'
const TestJsx = loadable(()=>import('./study/TestJsx'))
```
2、安装动态import的Babel插件

cnpm install @babel/plugin-syntax-dynamic-import -D

配置 .babelrc.json：
```
{
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
}
```

3、添加ESLint解析器
cnpm install babel-eslint -D

配置 .eslintrc.json：
```
{
  "parser": "babel-eslint"
}
```
4、重启项目


# antd的使用

cnpm install antd -S

在App.js中引入样式文件：
```
import 'antd/dist/antd.css'
```

# mobx的使用

1、安装

cnpm install mobx -S

2、创建store

新建 store/modules目录、 store/index.js
```
// store/index.js
class Store {
  constructor() {
    this.ChildStore = new ChildStore()
  }
}
export default new Store()
```
```
// store/modules/ChildStore.js

import { observable } from 'mobx'
export default class ChildStore {
  @observable count = 1
}
```

3、解决环境中不支持 @ 装饰器语法的问题
cnpm install @babel/plugin-proposal-decorators -D
cnpm install @babel/plugin-proposal-class-properties -D

配置 .babelrc.json
```
"plugins": [
  ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ["@babel/plugin-proposal-class-properties", { "loose" : true }]
]
```

4、把store与整个应用程序关联起来（基于上下文）

cnpm install mobx-react -S
```
// App.js
import { Provider } from 'mobx-react'
import store from '@/store'

render() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}
```

5、在组件中使用store数据
```
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Home extends React.Component {}
export default Home
```

6、如何操作store（数据更新）？
```
// store/modules/ChildStore.js

import { abservable, action } from 'mobx'
export default class ChildStore {
  @abservable msg = ''
  @action changeMsg(payload) {
    this.msg = payload
  }
}
```
然后在页面组件中，就可以使用 this.props.store.ChildStore.changeMsg() 来操作store了。

7、mobx中如何与后端接口交互？
```
import { observable, action } from 'mobx'
import { fetchUsers } from '@/utils/api'
export default class UserStore {
  @observable list = []
  @action getUsers(params) {
    fetchUsers(params).then(res=>{
      console.log('users', res)
      this.list = res
    })
  }
}
```
注意处理跨域问题。
思考：业务入参是怎么一步一步到达后端的？
思考：后端响应数据是怎么一步一步被过滤到达组件中的？
