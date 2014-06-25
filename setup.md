---
layout: default
title: Environment Setup
---

# Environment Setup
I have been setting up my development environment for years. Every time I buy a new machine (or perform a clean install of a new operating system) I go through the same setup. The issue is that my setup has yet to be documented and I spend a few weeks remembering things I have not installed or setup. This guide is meant to act as an evolving environment setup guide. This also will shed light on my setup and may give you ideas on what you can do to refine your setup.

I have thought about automating this, but I do not really see a need for automation at this time. This is a personal process that I usually take joy in performing.

_Note: This article was triggered by the arrival of my new MacBook Air._


## Initial Boot
Boot the machine and setup your account. Log into iCloud and setup _Find my Mac_ and _iCloud Keychain_. Update any and all system software. Clean up your dock and set any color preferences you may have. Mine is pretty basic:

### Finder
* Set `New Finder windows show` to your user's home folder.
* Set view options to arrange by Name and click `Use as Defaults`.
* On the desktop, set view options to arrange by kind.

## Install Apple Software / Software from the Mac App Store

### [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
This is a no-brainer. I spend the overwhelming majority of my development time working on iOS projects or piddling with Mac projects. A few things to remember when setting up Xcode:
* Login to your Apple developer account under `Preferences` > `Accounts`.
* Enable line numbers for your editor by ticking the `Line numbers` option under `Preferences` > `Text Editing`.

### [Gitbox](https://itunes.apple.com/us/app/gitbox/id403388357?mt=12)
I can use Git on the command line, but I would prefer not to. This is my favorite, no-frills Git GUI client.

### [NoteAway](https://itunes.apple.com/us/app/noteaway-your-thoughts-in/id559541463?mt=12)
A local Nashville developer wrote this software. It has quickly earned a spot in my menubar. The idea is dead simple: A notebook that sites in your menubar that is a keyboard shortcut away. Quickly paste in copied text or jot down ideas. I use it to track my line of thinking throughout my day so that I do not lose my place.

## Install Other Software / Tool Setup
### [Dropbox](https://www.dropbox.com)
In addition to using Dropbox for easy cloud storage, I also use it to sync most of my settings / preferences between machines. It's usually one of the first things I install as it holds the "key" for me (see the next section).

### [1Password](https://agilebits.com/onepassword)
* Ensure 1Password is pointing to the vault being synced by Dropbox.
* Enable Watchtower.
* Install Safari extension.

### [BBEdit](http://www.barebones.com/products/bbedit/)
* Install command line tools.
* Under the Appearance preferences, uncheck `Page guide at X characters`.
* Under the Editor Defaults preferences, check `Soft wrap text to:` and select `Window width`.
* Download [Gruber Dark](https://daringfireball.net/projects/bbcolors/schemes/Gruber%20Dark.bbcolors.zip) color scheme and save it to `~/Library/Application\ Support/BBEdit/Color\ Schemes/`; Change the color scheme under the Text Colors preferences.
* BBEdit now supports syncing the items within Application Support over Dropbox! Just quit BBEdit and copy the `BBEdit` folder from `~/Library/Application\ Support` to `~/Dropbox/Application\ Support`. It should automatically pick up the copy in your Dropbox folder the next time you launch BBEdit.

### Git / Bitbucket / Github
* Generate an SSH Key using `ssh-keygen`; Default save location/name, no password.
* Add public SSH Key to Bitbucket and Github.
* Set Git Username: `git config --global user.name "Todd Grooms"`
* Set Git Email: `git config --global user.email "name@domain.com"`
* Set BBEdit as default git difftool by adding the following to your `.gitconfig` (_Note: Must have BBEdit command line tools installed_):

```
[diff]
    tool = "bbdiff"
[difftool]
    prompt = false
[difftool "bbdiff"]
  cmd = bbdiff --wait --resume --ignore-spaces "$LOCAL" "$REMOTE"
```

* Setup git autocomplete script (downloaded to Dropbox from `https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash`) by adding the following to your `.bash_profile`:

```
if [ -f ~/Dropbox/.git-completion.bash ]; then
  . ~/Dropbox/.git-completion.bash
fi
```

### Update Ruby; Install RVM
* Run the following command in Terminal: `\curl -sSL https://get.rvm.io | bash -s stable`
* Install the latest version of Ruby: `rvm install ruby`
* Agree to allow Homebrew to be installed.

### Cocoapods
* `gem install cocoapods`

There are other pieces of software that I install, but these are the most important and the ones that I cannot function without.