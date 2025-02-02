const visit = require('unist-util-visit')
const { electronLatestStableTag } = require('../package.json')

const regex = /(javascript.*|js.*) fiddle='([^']*)'(.*)/

// TODO(deermichel): add test!

// remark transformer for 'code' blocks to
// embed fiddle urls as html attributes
const fiddleUrls = () => tree => {
  visit(tree, 'code', node => {
    if (!node.lang) return

    const matches = node.lang.match(regex)
    if (matches) {
      // retrieve and remove url from language definition
      const url = `electron/${electronLatestStableTag}/${matches[2]}`
      node.lang = matches[1] + matches[3]

      // save url in data-fiddle-url html attribute
      node.data = node.data || {}
      node.data.hProperties = node.data.hProperties || {}
      node.data.hProperties.dataFiddleUrl = url
    }
  })
  return tree
}

module.exports = fiddleUrls
