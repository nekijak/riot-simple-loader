# riot-simple-loader
riot.js を webpack でプリコンパイルするためのシンプルな riot-loader です。

## インストール方法
```bash
npm install -D riot-simple-loader
```

## 使用方法(例)

### webpack.config.babel.js
```javascript
import webpack from 'webpack';

export default {
  entry: './src/scripts/index.js',
  output: {
    path: __dirname + '/app/scripts',
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  module: {
    rules: [{
        enforce: "pre",
        test: /\.tag$/,
        exclude: /node_modules/,
        use: [{
          loader: 'riot-simple-loader',
          options: {}
        }],
      },
      {
        test: /\.(tag|js)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {}
        }]
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.tag']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ProvidePlugin({ riot: 'riot' })
  ]
};
```

## サンプルプロジェクト
[https://github.com/nekijak/riot-simple-loader-sample]()

## ライセンス

MIT License

Copyright (c) 2017 Kentaro Kajino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
