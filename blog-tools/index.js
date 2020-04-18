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
  console.log("Creating post…")
  
  const post = new Post(title)
  console.log("Front Matter:")
  console.log(post.frontMatter())
  if (title.length > 0) {
    console.log("Slug: " + post.slug())
  }
}
else if (option == "toot") {
  console.log("Creating toot…")
  
  const toot = new Toot()
  console.log("Front Matter:")
  console.log(toot.frontMatter())
  console.log("Slug: " + toot.slug())
}
else {
  console.error("Unknown option " + option)
}