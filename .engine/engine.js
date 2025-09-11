const { Marp } = require('@marp-team/marp-core')

module.exports = function(opts) {
  opts['html'] = true;

  return new Marp(opts).
        use(require('markdown-it-include'))
      //   .use(require('@kazumatu981/markdown-it-kroki'), {
      //     entrypoint: "https://kroki.io",
      //   }
      // );
}
