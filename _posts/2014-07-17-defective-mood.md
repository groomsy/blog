---
layout: post
title: Defective Mood
comments: true
tags: development
---

As I age, I am perturbed that my mood is directly tied to what I feel that I am either accomplishing or not accomplishing at work or, rather, in software development. I have recently found that I can be quite foul if I encounter a problem in software that I am writing. I encounter many problems that do not affect me, but I have found that the ones that do affect me tend to have the same earmarks: an unfamiliarity with a framework or an API, a misunderstanding of how a framework or API is intended to function, or, my biggest fear, unexplained behavior of a framework or API. I was recently plagued many hours on an issue at work that I feared fell into the latter category.

I have worked with Core Data on many occasions now. We are using it in our project at work. However, I started noticing odd behavior in some of our tests. There were `NSManagedObjects` that were not updating as expected when importing example server responses. The tests were passing and unexpectedly not passing later. This was bothersome. I ended up stepping backward through our commit history until I narrowed it down to a particular commit (actually, a particular pull request being closed). My first inclination was to expect an issue with our `.xcdatamodeld` file (the backing of our Core Data model). All of the changes in this commit seemed innocuous enough. We were adding relationships and parameters to objects, but none of them should affect our import logic. After introducing these changes one by one into a detached HEAD state in our repo, I came to a startling conclusion: None of the data model changes actually broke our data import. This was terrifying. I was stumped. My mood was quite foul.

When you're stymied by a problem, everything is stupid. Your computer is stupid. Your tools are stupid. The language is stupid. The framework causing you grief is stupid. Stackoverflow is stupid. Everything.

With the recommendation of a coworker, I took an early lunch. He rightly pointed out that I needed to step away from the problem. Once you've had your head down on a problem for an extended period of time with little progress, you become stuck. I was most definitely stuck. During our lunch break, we actually spit-balled ideas on what the issue might be. We came up with a few theories. I was reenergized. After being back in the office for a bit, my energy was zapped again. All of our theories were bunk.

I went back to the drawing board. Something finally caught my eye. It was a category for one of our `NSManagedObject`s that was overriding `willChangeValueForKey:`. I just happened to notice that this method was not calling `super`. Someone had forgotten to call `super`. I was vaguely aware that Core Data and MagicalRecord (a library to simplify the Core Data layer that we are using) use these methods for updating relationships. I am much more aware of that now. I added the `super` call. BOOM. I was back in business.

I believe the frustrating piece of this episode is the concern that something is now broken that had been working and there is no clear stressor at what triggered the issue. After making this fix and verifying the fix, I was elated. Not only had I fixed a particularly nasty defect, but I learned more about Core Data in the process.