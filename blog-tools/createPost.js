const tools = require('./tools')

class Post {
  constructor(title, tag) {
    this.title = title
    this.tag = tag
    
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
tags:       ${this.tag}
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

Post.type = "post"

module.exports = Post;