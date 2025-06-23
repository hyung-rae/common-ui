import StyleDictionary from 'style-dictionary'

const sd = new StyleDictionary('style-dictionary.config.js')
await sd.buildAllPlatforms()
