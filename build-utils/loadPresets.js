const webpackMerge = require("webpack-merge");


const applyPresets = env=>{
    const {presets} = env;
    console.log("present ============ ",presets);
    /**
     * @type {string[]}
     */
   const mergePresets = [].concat(presets);
   const mergedConfigs = mergePresets.map(presetName=>{
       console.log(presetName);
       return require(`./presets/webpack.${presetName}`)(env)
   })

   return webpackMerge.merge({}, ... mergedConfigs);
}

module.exports = applyPresets;