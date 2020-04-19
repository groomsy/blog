const Post = require('./createPost')
const Toot = require('./createToot')

var args = process.argv.slice(2)
if (args.length < 2 || args.length > 3) {
  console.error("Must have a command and an option!")
  return
}

var command = args[0]
var option = args[1]

if (command != "create") {
  console.error("Unknown command " + command)
  return
}

if (option == "post") {
  var title = ""
  if (args.length == 3) {
    title = args[2]
  }
  if (title.length == 0) {
    console.log("Post needs a title!")
    return
  }
  console.log("Generating post front matter and slug…")
  
  const post = new Post(title)

  console.log("Front Matter:")
  const frontMatter = post.frontMatter()
  console.log(frontMatter)

  const slug = post.slug()
  console.log(`Slug: ${slug}`)
  
  const file = `_posts/${slug}.md`
  
  const tools = require('./tools')
  tools.draft("post", file, frontMatter)
}
else if (option == "toot") {
  console.log("Generating toot front matter and slug…")
  
  const toot = new Toot()
  
  console.log("Front Matter:")
  const frontMatter = toot.frontMatter()
  console.log(frontMatter)
  
  const slug = toot.slug()
  console.log(`Slug: ${slug}`)
  
  const file = `_posts/micro/${slug}.md`
  
  const tools = require('./tools')
  tools.draft("post", file, frontMatter)
}
else {
  console.error("Unknown option " + option)
}