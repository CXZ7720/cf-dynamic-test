const path = require('path')

module.exports = {
    plugins: [
      ["relay", {
        eagerEsModules: true,
        artifactDirectory: './src/__generated__'
      }],
      [
        'babel-plugin-module-resolver',
        {
          extensions: ['.js', '.ts', '.jsx', '.tsx'],
          resolvePath(sourcePath) {
            const pattern = /\/__generated__\/(?<name>.+)/
            const match = sourcePath.match(pattern)
            if (!match?.groups?.name) {
              return sourcePath
            }
            const targetPath = path.join(__dirname, 'src', '__generated__', match.groups.name)
            return targetPath
          },
          alias: {
            '@src': path.join(__dirname, 'src'),
          },
        },
      ],
    ]
  }
