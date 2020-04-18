const tools = require('./tools')

class Post {
  constructor(title) {
    this.title = title
    
    const date = new Date()
    this.publishedDate = tools.publishedDate(date)
    this.slugDate = tools.slugDate(date)
  }
  
  frontMatter() {
    const frontMatter = 
`---
layout:     post
title:      "${this.title}"
subtitle:   
img:        https://s3-us-west-2.amazonaws.com/groomsy-debug/site/
alt:        
date:       ${this.publishedDate}
tags:       personal/development
link:       
---`
    return frontMatter
  }
  
  slug() {
    const slug = require('slug')
    const slugTitle = slug(this.title).toLowerCase()
    return `${this.slugDate}-${slugTitle}`
  }
}

module.exports = Post;