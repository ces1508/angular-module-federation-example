const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const package = require('../../package.json')

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "avaluosMf",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "avaluosMf",
      library: { type: "module" },
      filename: "remoteEntry.js",
      exposes: {
        './CardComponent': './projects/avaluos-mf/src/app/components/card/card.component.ts',
        './AvaluoModule': './projects/avaluos-mf/src/app/containers/avaluo/avaluo.module.ts',
        './SomethingComponent': './projects/avaluos-mf/src/app/components/something/something.component.ts',
        './CharactersModule': './projects/avaluos-mf/src/app/containers/characters/characters.module'
      },
      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: package.dependencies['@angular/core'] },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: package.dependencies['@angular/common'] },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: package.dependencies['@angular/common/http'] },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: package.dependencies['@angular/router'] },
        ...sharedMappings.getDescriptors()
      })
    }),

    sharedMappings.getPlugin()
  ],
};
