module.exports = {
  draft: function(type, file, frontMatter) {
    const prompt = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
    prompt.question(`Create the ${type}? `, reply => {
      if (reply == "y" || reply == "Y") {
        console.log(`Creating ${type} at ${file}…`)
      
        const fs = require('fs')
        fs.writeFile(file, frontMatter, function(error) {
          if (error) throw error
        
          console.log("Created!")
        })
      }
      prompt.close()
    })
  },

  publishedDate: function(date) {
    const dateString = formattedDate(date)
    
    var hours = paddedHour(date)
    var minutes = paddedMinute(date)
    var seconds = paddedSecond(date)
    
    var timezoneOffsetSign = date.getTimezoneOffset() < 0 ? "+" : "-"
    var timezoneOffset = timezoneOffsetSign + String("0" + (date.getTimezoneOffset() / 60)).slice(-2) + "00"
    
    var timeString = hours + ":" + minutes + ":" + seconds + " " + timezoneOffset
    
    return dateString + " " + timeString  
  },

  slugDate: function(date) {
    return formattedDate(date)
  },

  slugTime: function(date) {
    return paddedHour(date) + paddedMinute(date) + paddedSecond(date)
  }
};

function formattedDate(date) {
  return date.getFullYear() + "-" + String("0" + (date.getMonth() + 1)).slice(-2) + "-" + String("0" + date.getDate()).slice(-2)
}

function paddedHour(date) {
  return String("0" + date.getHours()).slice(-2)
}

function paddedMinute(date) {
  return String("0" + date.getMinutes()).slice(-2)
}

function paddedSecond(date) {
  return String("0" + date.getSeconds()).slice(-2)
}