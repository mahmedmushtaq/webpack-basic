const UrlLoader = require("url-loader");

module.exports = () => ({

    module:{

        rules:[
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },{
                test: /\.jpg/,
                use: ["url-loader"],
            }
        ]
    }
});
