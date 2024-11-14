const fs = require('node:fs')
const { Rewriter } = require('@datadog/native-iast-rewriter')

const rewriterConfig = {
  csiMethods: [
    {src: 'concat'},
    {src: 'join'},
    {src: 'parse'},
    {src: 'plusOperator', operator: true},
    {src: 'random'},
    {src: 'replace'},
    {src: 'slice'},
    {src: 'substr'},
    {src: 'substring'},
    {src: 'toLowerCase', dst: 'stringCase'},
    {src: 'toUpperCase', dst: 'stringCase'},
    {src: 'tplOperator', operator: true},
    {src: 'trim'},
    {src: 'trimEnd'},
    {src: 'trimStart', dst: 'trim'},
    {src: 'eval', allowedWithoutCallee: true}
  ]
}

const rewriter = new Rewriter(rewriterConfig)
const result = rewriter.rewrite(fs.readFileSync('./input.js', 'utf-8'), '')

fs.writeFileSync('./output.js', result.content)

