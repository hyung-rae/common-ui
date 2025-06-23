import fs from 'fs'

const filePath = 'tokens.json'

let content = fs.readFileSync(filePath, 'utf-8')

console.log(content.split(''))

// const outputPath = './tokens/clean-tokens.json'

// fs.writeFileSync(outputPath, content)

// console.log('✅ Cleaned JSON saved to:', outputPath)
