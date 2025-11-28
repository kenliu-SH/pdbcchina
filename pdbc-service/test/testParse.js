const { cifParser } = require('cif-to-json')
const axios = require('axios')
const fs = require('fs')
const _ = require('lodash')
const { parseCIF } = require('../src/library/parse/parse')

const main = async () => {
  let NAME = ['2M5M', '2XKM', '2OU8', '6R8N', '2KKW', '6RSA', '2M5M', '2XKX', '2XKM', '6GUA', '4NY6', '7S0Y', '3J07'][0]
  //   let res = await fs.readFileSync('./test/4NY6.cif')
  //   let res = await fs.readFileSync('./test/7S0Y.cif')
  // let res = await fs.readFileSync(`./test/${NAME}.cif`)
  // let content = res.toString()
  let res = await axios.get(`https://files.rcsb.org/header/${NAME}.cif`)
  let content = res.data

  let result = parseCIF(content)

  console.log(NAME)
  console.log(JSON.stringify(result, null, 2))
}
//
main()
