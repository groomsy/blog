---
layout: post
title: Relying On Experience
date: 2015-05-30 15:39
comments: true
tags: development
---

I've recently been pushing for use of pull requests in our workflow at LunarLincoln. I believe code review to be an important aspect of development and I feel that pull requests promote code review with every feature added. This kind of attention to detail isn't just for open source projects on Github.

## My Bad
There is an issue to opening an, ideally, small pull request for every new feature: inevitably, a new feature will rely on a feature that exists in an open pull request that has not been approved yet. What do we do in this situation? Normally, I would just create my new feature branch from the open pull request branch and work away. I did not do that this time. I had not thought that far ahead. After a few commits on my new feature branch, I realized I needed the work from an open pull request branch. So I did the logical thing and merged. I did not include the `--no-commit --no-ff`. I unintentionally merged code from an open pull request onto my new feature branch. To make matters worse, I edited the merge commit and royally screwed up my feature branch. So much so that later, I was testing my new feature branch after having merged in the approved pull request, the changes from the approved pull request was missing. Yikes.

## My Experience
What was I to do? I had never run into this situation before. My first thought was to create a new branch and manually copy over my changes, then open a pull request for this copied branch. This would surely work, but there were a few commits worth of work (about 8) and that seemed tedious.

After pondering for a bit, I did create a new branch. I then used git's `cherry-pick` command to bring over the commits from my fubar'd branch and save face. I had never used the `cherry-pick` function, but I was aware of its existence from the docs and from previous developer given talks at meet ups. While I didn't have direct experience with it, I was able to use my indirect experience and solve my problem.