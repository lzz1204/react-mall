const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
  // do stuff with the webpack config...
   config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
	  config = rewireLess.withLoaderOptions({

	    modifyVars: { "@primary-color": "black" ,"@font-size-base": "16px",
	    	"@input-height-lg": "40px",
				},
	  })(config, env);
  return config;
};
 
