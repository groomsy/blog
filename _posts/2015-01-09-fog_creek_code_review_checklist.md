---
layout: post
title: Increase Defect Detection with Our Code Review Checklist
date: 2015-01-09 14:00:00
comments: true
tags: development
link: http://blog.fogcreek.com/increase-defect-detection-with-our-code-review-checklist-example
---

An interesting piece from Fog Creek regarding their review process.

I found this link on HackerNews and one of the comments on the story caught my eye:
> I don't believe a code reviewer should even have to know about the requirements of the feature/bug, and should focus more on the design/quality vs. whether it works.

I believe this is a fallacy. This is like saying an editor does not have to understand what he or she is reading as long as he or she is focusing on grammar. Should the editor not be able to ensure that the author is getting his or her point across? Should the reviewer not be able to ensure that the code should functions as intended? If the reviewer does not understand what the code is meant to do, how can he or she understand whether or not something such as a conditional is behaving correctly? That a loop ends at the proper step? While the reviewer may not need to know every implementation detail, the reviewer should have at least a working knowledge of what is expected of the product. I can write nonsensical code that does not cover the requirements for a product that is syntactically valid and even clean. Should the reviewer focus more on the design/quality of code? Sure. I just believe the reviewer should know at least what he or she is reviewing.