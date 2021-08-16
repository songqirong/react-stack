const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// console.log("环境变量-------",process.env.NODE_ENV);
const env = process.env.NODE_ENV;
const config = {
     // 提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。
     mode:'production',
     // 入口:指定webpack打包或本地服务运行时的程序入口文件
     entry:path.resolve(__dirname,'./src/main.js'),//默认是src路径下的index.js
     // 出口:打包之后,打包的结果放在哪里 dist
     output:{
         filename:'[name].[hash].js',//打包后默认是dist目录下的main.js
         path:path.resolve(__dirname,'dist')
     },
     
     // plugins:用于扩展功能
     plugins:[
         // 简单创建 HTML 文件，用于服务器访问
         new HtmlWebpackPlugin({
             template:path.resolve(__dirname,'./public/index.html'),
             // filename:'demo.html',//改名，默认index.js
             title:'首页',
         }),
         // 清除dist文件
         new CleanWebpackPlugin(),
         // 从 bundle 中提取文本（CSS）到单独的文件
        //  new MiniCssExtractPlugin()
     ],
     resolve:{
        extensions: [".js", ".jsx", ".json"],
        alias: {
            // 模块别名列表
            "@": path.resolve(__dirname, "./src"),
            // 模块别名相对于当前上下文导入
          },
     },
     // loaders:用于对代码中各种文件进行编译转换,目标是转换浏览器能够识别的代码
     module:{
         //匹配规则和应用相应的loader插件来处理匹配到的文件
         rules:[
            //  为普通的样式表启用模块化（?modules）
             {test:/\.(css|scss)/,use:["style-loader","css-loader","sass-loader"]},
            //  {
            //      test: /\.css$/i,
            //      use: [MiniCssExtractPlugin.loader, 'css-loader']
            //  },
             // ES6转ES5
             {
                 test: /\.(js|jsx)$/,
                 exclude: /(node_modules)/,
                 use: ['babel-loader']      
             } 
         ]
     },
     
};
if(env=="development"){
    config.mode="development";
    // 当代码报错时，定位到代码源码位置
    config.devtool="inline-source-map";
    // 启用热替换（HMR属于内置）
    config.plugins.push(new HotModuleReplacementPlugin());
    // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
    config.plugins.push(new NamedModulesPlugin());
    // 配置js代码检测工具eslint
    config.module.rules.push(
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['eslint-loader'],
            enforce: 'pre',
        }
    );
    config.devServer={
        port:"9100",//配置端口
        open:true,//启动自动在浏览器中打开
        hot:true,//自动更新
        contentBase:path.resolve(__dirname,'public'),//指定静态文件
        // 报错呈现在页面上（视图遮罩）
        overlay: {
            errors: true
        },
        // proxy: {
        //     "/api": {
        //       target: "http://localhost:3000",
        //       secure: false
        //     }
        // }
    };
};
module.exports= config;