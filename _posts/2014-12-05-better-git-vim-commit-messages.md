---
layout: post
title: Better Git/Vim Commit Messages
date: 2014-12-05 15:00:00
comments: true
tags: development
---

About six months ago, I started using Git through the CLI rather than through a GUI. I did not really have a reason for doing this other than the desire to know more about the tools I use day to day. My Git-fu is still weak, but it is getting better.

I recently decided that my Git CLI experience would be greatly approved with the aid of spellcheck. Luckily, I stumbled across a [post detailing how one can enable spellcheck in Vim](http://robots.thoughtbot.com/vim-spell-checking) (my default editor). Unluckily, it did not work for me with Yosemite's default version of Vim in Terminal. After struggling with this for a bit, I finally decided to upgrade to the latest version of Vim via [Homebrew](http://brew.sh):

```
$ brew install vim
```

After installing the latest version of Vim, I created my `~/.vimrc` (I am guessing this is not created by default as I did not see it on my machine) with the following content:

```
set backspace=2
syntax on
autocmd Filetype gitcommit setlocal spell textwidth=72
```

The first line enables what I believe to be the correct behavior of the Backspace (Delete on Mac) key: while in insert mode, the character immediately to the left of the cursor is removed and the cursor moves to that position (along with the text shifting to the left). I stumbled across a post indicating that this is not the default behavior in Vim, but it is the behavior *I* expect.

The second line turns on syntax highlighting. What I found to be unique about this feature is that it will actually highlight your Git commit message in such a way that the "title" of your message is highlighted to indicate when your title is too long (the recommended length, [according to Github](https://github.com/blog/926-shiny-new-commit-styles), is 50 characters). It also helps highlight comments in your commit messages.

The third line is the "money" line. This line enables spellcheck for `gitcommit` files. This line also includes a nice little extra to wrap our commit message bodies at 72 characters per line, which is the recommended length [according to Github](https://github.com/blog/926-shiny-new-commit-styles).

One other little tidbit I came across is you can use the following to ensure that Git uses your preferred editor (meaning the version of Vim I have installed via Homebrew):

```
$ git config --global --replace-all core.editor $(which vim) -f
```

I am not sure if this change is strictly necessary; it may just be belts and suspenders, but I would rather be safe than sorry.

If you want to know more about my setup, be sure to follow along under my [Environment section](http://toddgrooms.com/setup/).
