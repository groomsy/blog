---
layout: post
title: I'm Kind of a Big Deal
subtitle: I'm very important. I have many leather-bound books and my apartment smells of rich mahogany.
img: /images/anchorman.jpg
alt: Anchorman: The Legend of Ron Burgundy
comments: true
tags: development
---

Saturday was kind of a special day (as far as software development goes). I opened a pull request for [Shenzhen](https://github.com/nomad/shenzhen). Shenzhen is a gem for building .ipa files from iOS projects (it even has support for distributing files to TestFlight, HockeyApp, FTP, and S3). While testing the gem, I noticed a few problems with building schemes in workspaces. I cloned the project to my local machine, played around with the source, until I fixed the issue. It was a small fix, but I had a few concerns.

## Lizard Brain
I'm a very novice Ruby developer and I feared I was making an ass out of myself. I thought that my change might be considered hackie. Perhaps I was not conforming to Ruby standards. I've written Ruby code in the past, but I rarely let it see the light of day. There are always other, more preferred ways of an implementation (Ruby has methods for everything) and I'm always concerned that I'm doing something wrong or embarrassingly wrong.

I'm also pretty green when it comes to Github. Up until this point, I've only had a few pull requests accepted from [Martin M](https://github.com/MartinMReed) on his Maven CXX Plugin (mainly changes to keep the plugin updated to building iOS projects). I've worked with Martin. He's incredibly gifted and he was incredibly kind to accept my pull requests (especially since I know I did them poorly; Sorry Martin).

On top of that, the author of the project is [mattt](https://github.com/mattt). Yes, that Mattt. Mattt with 3 T's Mattt. [NSHipster](http://nshipster.com) Mattt. (Side Note: I'm loving the [NSHipster: Obscure Topics in Cocoa &amp; Objective-C](https://gumroad.com/l/nshipster) book.) With such an extremely knowledgable and talented developer, it felt daunting to be offering a change to his codebase.

Saturday morning, I decided it was time to stop being scared. I needed to learn how to do this properly. The best way to learn: By doing.

## I Have the Power!!!
First, I found this awesome walkthrough on forking, working, and opening a pull request on Github: [How to GitHub: Fork, Branch, Track, Squash and Pull Request](http://gun.io/blog/how-to-github-fork-branch-and-pull-request/). After about an hour of work, I had successfully opened a pull request. I was thrilled. However, my excitement was tempered a bit. I have heard many stories of pull request purgatory where the author never accepts pull requests and open ones just sit there for all eternity. So I was excited, but I realized that just opening a pull request was half the battle. I had done all I could do: Make the changes, document everything thoroughly in the commit log, open the pull request, and re-emphasize the changes I had made (and why) in the pull request description. Luckily, later that day, I received a Github notification: mattt had accepted my pull request. I was ecstatic. As I read through the full message, I noticed that he cherry picked my changes to avoid the addition to the .gitignore of ignoring BBEdit files (not a big deal, I probably should not have checked that change in anyway; Force of habit really).

## I Learned Something Today
I think the moral of my story is this: Just do it (Nike™). In all seriousness though, my biggest enemy is always that nagging voice in my head, telling me that I shouldn't bother. Or that I'll fail. Or that people will regard my contribution as meaningless to the project. Or that I'm doing it wrong. I'm constantly fighting this. But as I do more, I'm slowly quieting that voice. I'm not sure if I'll contribute more to open source projects on Github, but now that I have this under my belt, I'm going to feel more confident the next time the urge strikes me.