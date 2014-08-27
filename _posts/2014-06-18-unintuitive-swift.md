---
layout: post
title: Unintuitive Swift
comments: true
tags: development
---

In case you have been living under a rock, Apple announced a new language at this year's WWDC: Swift. I have been anxious to work with the new language beyond reading the Apple supplied [The Swift Programming Language](https://itunes.apple.com/us/book/swift-programming-language/id881256329?mt=11) and the new Playground Xcode feature (which is a new way to experiment with Swift without using it in a project). I have recently been working on a new personal project (I am not ready to talk in great detail at this time, but it is a Mac application) and since the project is still in it's early stages, I decided to convert the project over and start using Swift in this project. Converting the project went smoothly and developers have the benefit of mixing and matching between Swift and Objective-C. I currently have a couple of classes written in Swift that play along nicely with the rest of my Objective-C code. I was skeptical when this capability was announced, but so far it has been working as Apple advertised.

This morning, I was writing some Swift code to validate the input in an `NSTextField` as it is typed by the user. I am attempting to validate the input as what I perceive to be a valid time format: `"s"`, `"ss"`, `"m:ss"`, `"mm:ss"`, `"h:mm:ss"`, or `"hh:mm:ss"`. In my initial implementation, I wanted to validate that only numbers and colons were input, to break apart the given string into components (with the token being the colon), and to assess each time component to ensure each component was an acceptable length. I am going to step through each one of these tasks and show what it would look like in Objective-C and what the equivalent looks like in Swift (or at least, to what it looks like in Swift to the best of my knowledge at this time; There may be more efficient ways of doing these tasks in Swift that I am not aware of yet). I'm also going to rant a bit about some things that I found confusing in my Swift implementation.

### Validating a String's CharacterSet
Given a string, I want to know whether or not the given string contains any forbidden characters. Given `"07:07"`, the result would be `false` (does not contain forbidden characters); Given `"07.07"`, the result would be `true` (does contain forbidden characters).

#### Objective-C

    NSString *timeString = @"07:07";

    NSCharacterSet *validTimeCharacterSet = [NSCharacterSet characterSetWithCharactersInString:@"0123456789:"];
    NSCharacterSet *invalidTimeCharacterSet = [validTimeCharacterSet invertedSet];
    NSRange rangeOfInvalidTimeCharacters = [timeString rangeOfCharacterFromSet:invalidTimeCharacterSet];
    BOOL invalidTime = rangeOfInvalidTimeCharacters.location != NSNotFound;

#### Swift
So there are a few caveats with this solution in Swift. Swift has a `Range` class that does not directly map to the `NSRange` structure. I, for the life of me, could not figure out how `Range` actually works. Furthermore, Swift's String class does not have a simple `rangeOfCharacterFromSet:` function (or it's equivalent); Instead, it has a `rangeOfCharacterFromSet(aSet: NSCharacterSet, options: NSStringCompareOptions, range: Range)` function. I tried many things, but could not get `Range` to behave as I thought it would. I realize this has to do with how I think of `NSRange` and I am trying to just use `NSRange` in Swift, but I found it very confusing. After hunting through the developer forums, this is the solution I came up with:

    let timeString = "07:07" as NSString
    
    let validTimeCharacterSet = NSCharacterSet(charactersInString: "0123456789:")
    let invalidTimeCharacterSet = validTimeCharacterSet.invertedSet
    let rangeOfInvalidCharacters = timeString.rangeOfCharacterFromSet(invalidTimeCharacterSet)
    let invalidTime = rangeOfInvalidCharacters.location != NSNotFound

or

    let timeString = "07:07"
    
    let validTimeCharacterSet = NSCharacterSet(charactersInString: "0123456789:")
    let invalidTimeCharacterSet = validTimeCharacterSet.invertedSet
    let rangeOfInvalidCharacters = timeString.bridgeToObjectiveC().rangeOfCharacterFromSet(invalidTimeCharacterSet)
    let invalidTime = rangeOfInvalidCharacters.location != NSNotFound

### Breaking a String into Components
Given a delimited string, I want an array of strings for each component. Given `"mm:ss"`, the result would be `["mm", "ss"]`.

#### Objective-C

    NSString *timeString = @"07:07";
    NSArray *timeComponents = [timeString componentsSeparatedByString:@":"];
    
#### Swift

    let timeString = "07:07"
    let timeComponents = timeString.componentsSeparatedByString(":")
    
### Iterating Over an Array Backwards
I will not bore you with the details on how to iterate over an array backwards in Objective-C. That really is not important in this observation. The real quirk is how you iterate over an array backwards in Swift. In Swift, you can iterate with a `for-in` loop:

    for index in 0...3 {
      println(index)
    }
    
The above code will loop four times (the `...` in this case indicates inclusive, meaning `<= 3`; If you wanted to be exclusive, meaning `< 3`, use `..` instead). I assumed that performing this loop in a reverse order would look like:

    for index in 3...0 {
      println(index)
    }
  
After watching the loop run for a few seconds, I realized how my assumption was false. My code was iterating many, many times. Have you seen the issue yet? Well, Swift is iterating from 3 to 0, incrementing. The loop starts at 3, then moves to 4, then to 5, 6, 7, and so on. Given enough time, `index` (which is an `Int64` on my 64-bit Mac) will overflow into negative numbers, then slowly work it's way to zero. I found this to be fascinating. I am not going to say this is a defect, but I will say that I believe this is misleading behavior, given prior experience with other languages. I would have expected the above code to start at 3 and work it's way down to 0.

I could have used my time here to complain about this, but I will not. This has been talked about on the developer forums, so I will not add to it here. After some digging, I did find a way of accomplishing this task:

    for index in reverse(0...3) {
      println(index)
    }
    
Ah, of course: The intuitive `reverse()` function. How could I have missed that?

### What I Learned
I have much to learn when it comes to Swift. It does not help that the language will be evolving while learning, but it makes sense to learn it early (in my opinion) so that I understand what my platform is moving toward. I am coming up on nearly five years of iOS experience and the code I am writing in Swift now makes me cringe. It makes me feel like I am in college again, writing terrible code. Have you ever looked back at code you have wrote while in college? Welcome to learning Swift.