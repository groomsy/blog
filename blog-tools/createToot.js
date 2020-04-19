const tools = require('./tools')

class Toot {
  constructor() {
    const date = new Date()
    this.publishedDate = tools.publishedDate(date)
    this.slugDate = tools.slugDate(date)
    this.slugTime = tools.slugTime(date)
  }
  
  frontMatter() {
    const frontMatter = 
`---
layout:     post
title:      null
date:       ${this.publishedDate}
categories: [micro]
hidden:     true
---`
    return frontMatter
  }
  
  slug() {
    return `${this.slugDate}-${this.slugTime}`
  }
}

Toot.type = "toot"

module.exports = Toot;