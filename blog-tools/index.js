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
  
  var date = new Date()
  
  var frontMatter =
  `
--
title: "${title}"
--
  `
  console.log("Front Matter:")
  console.log(frontMatter)
  if (title.length > 0) {
    var slug = require('slug')
    var postSlug = date.getFullYear() + "-" + String("0" + date.getMonth()).slice(-2) + "-" + String("0" + date.getDay()).slice(-2) + "-" + slug(title).toLowerCase()
    console.log("Slug: " + postSlug)
  }
}
else if (option == "toot") {
  console.log("Creating toot…")
}
else {
  console.error("Unknown option " + option)
}