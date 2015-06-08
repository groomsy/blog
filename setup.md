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
* Setup CodeSnippet sync through Dropbox (after installation) by running the following command (assumes Xcode CodeSnippet directory lives in Dropbox):

{% highlight sh %}
$ ln -s ~/Dropbox/Xcode/CodeSnippets CodeSnippets
{% endhighlight %}

I also like to setup a few keyboard shortcuts for Xcode (and the iOS Simulator) in `System Preferences` > `Keyboard` > `Shortcuts` > `App Shortcuts`

**Xcode** (Note: Add Xcode if it does not exist):

* Menu Title: `Rename…`  
Keyboard Shortcut: `^R`

**iOS Simulator** (Note: [Add iOS Simulator if it does not exist](http://stackoverflow.com/a/8352242/349179)):

* Menu Title: `Reset Content and Settings…`  
Keyboard Shortcut: `^R`


## Install Other Software / Tool Setup

### [Dropbox](https://www.dropbox.com)
In addition to using Dropbox for easy cloud storage, I also use it to sync most of my settings / preferences between machines. It's usually one of the first things I install as it holds the "key" for me (see the next section).

### [1Password](https://agilebits.com/onepassword)
* Ensure 1Password is pointing to the vault being synced by Dropbox.
* Enable Watchtower.
* Install Safari extension.

### [Alfred](http://www.alfredapp.com)
I was a big Quicksilver fan, but moved to this about 6 - 8 months ago. It's been a smooth transition and it definitely seems more updated than Quicksilver. I sync my workflows in Dropbox so that all my machines have the same workflows. Buy the Powerpack, you won't regret it. The workflows I cannot live without:

* [Alfred Cocoapods Search](https://github.com/alladinian/Alfred-CocoaPods-Search)
* [Alfred NSC - Number System Converter](https://github.com/hzlzh/AlfredWorkflow.com/tree/master/Sources/Workflows/nsc)

### [BBEdit](http://www.barebones.com/products/bbedit/)
* Install command line tools.
* Under the Appearance preferences, uncheck `Page guide at X characters`.
* Under the Editor Defaults preferences, check `Soft wrap text to:` and select `Window width`.
* Download [Gruber Dark](https://daringfireball.net/projects/bbcolors/schemes/Gruber%20Dark.bbcolors.zip) color scheme and save it to `~/Library/Application\ Support/BBEdit/Color\ Schemes/`; Change the color scheme under the Text Colors preferences.
* BBEdit now supports syncing the items within Application Support over Dropbox! Just quit BBEdit and copy the `BBEdit` folder from `~/Library/Application\ Support` to `~/Dropbox/Application\ Support`. It should automatically pick up the copy in your Dropbox folder the next time you launch BBEdit.
* Setup BBEdit as the default `BUNDLER_EDITOR`:

{% highlight sh %}
$ export BUNDLER_EDITOR=bbedit
{% endhighlight %}

### [TextExpander](http://smilesoftware.com/TextExpander/index.html)
I don't rely heavily on TextExpander, but there are a few snippets that I cannot live without. I even include some Xcode snippets in here because I don't find the Xcode Snippets feature reliable for certain snippets (such as pragma blocks). I also set this to sync via Dropbox so that my snippets are on each my computers.

### Terminal
* Install [Solarized Dark](https://github.com/tomislav/osx-terminal.app-colors-solarized) theme for Terminal.
* Enable Option as Meta Key (Under Preferences > Profiles > Keyboard and tick "Use Option as Meta key) for [bash commands](http://cmd.club)

### Vim
Install the latest version of Vim (the one shipping with Yosemite is outdated and it's nice to keep up-to-date):

{% highlight sh %}
$ brew install vim
{% endhighlight %}

Now you can enable a better backspace function, syntax highlighting, and Git commit spellcheck and body wrapping by adding the following to your `~/.vimrc` (create one if this file does not exist):

{% highlight sh linenos %}
set backspace=2
syntax on
autocmd Filetype gitcommit setlocal spell textwidth=72
{% endhighlight %}

### Git / Bitbucket / Github
* Generate an SSH Key; Default save location/name, no password.

{% highlight sh %}
$ ssh-keygen
{% endhighlight %}

* Add public SSH Key to Bitbucket and Github.
* Set Git Username:

{% highlight sh %}
$ git config --global user.name "FirstName LastName"`
{% endhighlight %}

* Set Git Email:

{% highlight sh %}
$ git config --global user.email "name@domain.com"`
{% endhighlight %}

* Set BBEdit as default git difftool by adding the following to your `.gitconfig` (_Note: Must have BBEdit command line tools installed_):

{% highlight sh linenos %}
[diff]
    tool = "bbdiff"
[difftool]
    prompt = false
[difftool "bbdiff"]
  cmd = bbdiff --wait --resume --ignore-spaces "$LOCAL" "$REMOTE"
{% endhighlight %}

* Setup git autocomplete script (downloaded to Dropbox from `https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash`) by adding the following to your `.bash_profile`:

{% highlight sh linenos %}
if [ -f ~/Dropbox/.git-completion.bash ]; then
  . ~/Dropbox/.git-completion.bash
fi
{% endhighlight %}

* Setup [git aware prompt](https://github.com/jimeh/git-aware-prompt) for displaying your active git branch in the Terminal prompt

### Update Ruby; Install RBEnv
* Run the following command in Terminal: `brew install rbenv ruby-build`
* Add `eval "$(rbenv init -)"` to your `.bash_profile`
* List the currently available Ruby versions: `rbenv install -l`
* Install the version of Ruby you want: `rbenv install VERSION`

### Cocoapods
{% highlight sh %}
$ gem install cocoapods
{% endhighlight %}

### xctool
[xctool](https://github.com/facebook/xctool) is a great cli for building Xcode projects developed by Facebook. Where the rubber meets the road for this tool is its ability to run a project's test target. You can run all of a project's tests, a single test class, or even specific test cases. It even spits out nicely formatted results and for you CI enthusiasts out there, it even supports outputting the results in a JUnit format so you can publish test results. You can install xctool through Homebrew.
{% highlight sh %}
$ brew install xctool
{% endhighlight %}

### karn
I use my personal Macs for work and personal projects. This means I use Git for work and personal projects. For my work commits, I like for my work email to be tied to the commit. Likewise for my personal commits. I really dislike having to configure my Git options when cloning or starting a new project. Enter [karn](https://github.com/prydonius/karn). karn is a great little Go utility that helps manage Git user configuration for me. With a little setup, I now can freely commit without having to worry about which email is associated with which project.

Install Go through Homebrew:
{% highlight sh %}
$ brew install go
{% endhighlight %}

Setup GOPATH variables in your `~/.bash_profile`:

  export GOPATH=$HOME/Developer/go
  export GOROOT=/usr/local/opt/go/libexec
  export PATH=$GOPATH/bin:$GOROOT/bin:$PATH

Then run:
{% highlight sh %}
$ go get github.com/prydonius/karn/cmd/karn
{% endhighlight %}

### PathPicker
When I switched to using Git in Terminal about a year ago, I became fairly efficient at quickly typing file paths with help of the tab autocomplete shortcut. However, this is quite cumbersome and not very fast. You can also highlight file paths with your mouse and copy and paste them like an animal, but this goes against my desire to keep my hands off of my mouse. Enter [PatchPicker](https://github.com/facebook/PathPicker). PathPicker allows you to pipe commands through the utility so that you can arrow and select files.

Install PathPicker:
{% highlight sh %}
$ brew install fpp
{% endhighlight %}
  
Then to select files to stage for a commit:
{% highlight sh %}
$ git status | fpp
{% endhighlight %}
  
To keep it more shorthand and faster to type, you can use a [Git alias for the status command](http://stackoverflow.com/a/28824653/349179):
{% highlight sh %}
$ git config --global alias.st status
{% endhighlight %}
  
Now we can bring up files to stage for a commit with this:
{% highlight sh %}
$ git st | fpp
{% endhighlight %}

There are other pieces of software that I install, but these are the most important and the ones that I cannot function without.