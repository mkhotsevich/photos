// const products = require('./output')
const fs = require('fs')

// const now = new Date()

// const output = products.map(p => {
//   p.photos = p.photos.replace(/\s/g, '').split(',')
//   p.price = parseInt(p.price.replace(',', ''))
//   p.sizes = p.sizes.replace(/ us/gi, '')
//   p.sizes = p.sizes.replace(/ eu/gi, '')
//   p.sizes = p.sizes.split(',')
//   p.createdAt = now
//   p.updateAt = now
//   return p
// })

// fs.writeFileSync('./products.json', JSON.stringify(output), 'utf8')

const filenames = fs.readdirSync('./photos')
filenames.forEach(n => {
  fs.renameSync(`./photos/${n}`, `./newP/${n.replace(/\s/g, '')}`)
})
