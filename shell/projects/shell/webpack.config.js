const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      watch: true,
      output: {
        publicPath: "http://localhost:5000/",
        uniqueName: "shell"
      },
      optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
      },
      plugins: [
        new ModuleFederationPlugin({

            // For remotes (please adjust)
            /*
            name: "shell",
            library: { type: "var", name: "shell" },
            filename: "remoteEntry.js",
            exposes: {
                './Component': './projects/shell/src/app/app.component.ts',
            },
            */

            // For hosts (please adjust)

            remotes: {
              'mfe1': "mfe1@http://localhost:4201/remoteEntry.js",
              'mfe2': "mfe2@http://localhost:4202/remoteEntry.js",
              'mfe3': "mfe3@http://localhost:4203/remoteEntry.js",
              'mfe4': "mfe4@http://localhost:4204/remoteEntry.js",
            },

            shared: ["@angular/core", "@angular/common", "@angular/router", "useless-lib"]
        })
      ],
    };
