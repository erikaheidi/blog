---
title: 'How to Install and Set Up Terminator + Oh My ZSH! on Ubuntu'
published: 2023-05-23
description: 'In this step-by-step guide, learn how to install and set up Terminator and Oh My ZSH! on Ubuntu for a pretty and handy terminal.'
tags: [ 'linux', 'productivity', 'tools' ]
coverImage: 
  src: 'https://onlinux.erikaheidi.com/ubuntu2304/setup/terminator.png'
  alt: 'Banner with post title and a bacgkround showing a screenshot of Terminator'
---

I've been a fan and loyal user of [Oh-my-Zsh!](https://ohmyz.sh/) for many years; it makes my shell more useful with little things such as git branch information and smart autocomplete.

For terminal software, I really enjoy using [Terminator](https://gnome-terminator.org/), because it allows me to spawn several tiled terminals in a single window, with a custom arrangement that can expand and shrink easily.

The combination of Terminator + Oh My ZSH for me is perfect to improve my productivity since it allows me to see more information instantly and organize terminal windows into tiles with a couple clicks.

In this guide, I'll share in detail how I set up my Terminator with Oh My ZSH and the Powerlevel10k theme.

## Step 1: Install Terminator

To get started, install Terminator with:

```shell
sudo apt install terminator
```

When the installation is finished, hit the window key and type `terminator` to open Terminator from the Ubuntu desktop. It will look like this:

![Terminator before customization](https://onlinux.erikaheidi.com/ubuntu2304/setup/05.png)

Let's configure it so it looks nicer. Right-click on the terminal window and open "Preferences" on the menu. Go to the "Profiles" tab to customize the default profile.
Later on you can create multiple profiles changing terminal font size and colors, so for instance you can have a "screen" profile for when you need to present content in your terminal.

On the "General" tab, **uncheck** "Show titlebar":

![Terminator disable title bar](https://onlinux.erikaheidi.com/ubuntu2304/setup/06.png)

Then, go to the "Background" tab and set transparent background with a shade of 0.80:

![Terminator background color](https://onlinux.erikaheidi.com/ubuntu2304/setup/07.png)

After the change, close the preferences window. Your Terminator should now look similar to this:

![Terminator with transparent background](https://onlinux.erikaheidi.com/ubuntu2304/setup/08.png)

To create tiled windows, right-click on the terminal window and select "split horizontally" or "split vertically":

![Terminator split](https://onlinux.erikaheidi.com/ubuntu2304/setup/09.png)

Each new window can be split again, so you have infinite ways to customize the tiles:

![Terminator split with 3 tiles](https://onlinux.erikaheidi.com/ubuntu2304/setup/10.png)

For quick access, pin it to your Dock:

- hover the mouse to the bottom of the screen to open Dock;
- right-click the Terminator icon;
- select "Pin to Dash" to pin it to the Dock.


![Terminator pin to Dash / Dock](https://onlinux.erikaheidi.com/ubuntu2304/setup/11.png)

## Step 2: Install Oh-My-Zsh!

First install the dependencies `zsh` and `fonts-powerline` to support icons in your terminal:

```shell
sudo apt install zsh fonts-powerline
```

Now you can run download and execute the Oh-my-Zsh [installation script](https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh).

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
The installation will prompt you to confirm that you want to use `zsh` as default bash. Confirm to continue. When it finishes, you should get a screen similar to this:

![Oh my Zsh installed](https://onlinux.erikaheidi.com/ubuntu2304/setup/12.png)

You'll need to restart Terminator in order to load the ZSH shell with OMZ.

## Step 3: Customize Oh-my-ZSH!

OMZ has several themes that you can install to better customize your terminal, showing useful information based on plugins. Some themes may need additional steps to run properly, such as setting special fonts that support icons or installing dependencies.

To choose a theme, you can have a look at OMZ [Themes Section](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) and also the [external themes](https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes) section from their Wiki to choose a theme that you like.

Here are some nice themes to give a try:

- [Agnoster](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#agnoster) - A real nice theme that comes built-in, so you don't need to install any extras.
- [Jonathan](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#jonathan) - Another built-in theme that adds useful information to the prompt, with a more minimalist look and feel.
- [AgnosterZak](https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes#agnosterzak) - Based on Agnoster, this theme packs more info into your prompt such as battery life and date/time.
- [Powerlevel10k](https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes#powerlevel10k) - Useful theme that shows lots of info in the terminal and has different color themes. This is the theme that I am currently using.

I personally have been using the Agnoster theme for years, but decided to try something a bit more resourceful and the Powerlevel10k theme offers a lot of extras, and it's super easy to configure with their built-in wizard. This is how my terminal looks like now:

![Oh my Zsh with Powerlevel10k theme installed](https://onlinux.erikaheidi.com/ubuntu2304/setup/13.png)

For the built-in themes, you just need to edit your `.zshrc` and change the `ZSH_THEME` env var to the name of the theme you want to use. Check the wiki page to see if the theme has special configuration options.

### Installing the Powerlevel10k Theme (Optional)

The theme I chose for my new setup is the [Powerlevel10k Theme](https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes#powerlevel10k) - it's an external theme that requires installation and setup via a friendly CLI wizard tool. Follow these instructions if you want to try it out.

First, install their recommended font. Download the following font files:

- [MesloLGS NF Regular.ttf](
  https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
- [MesloLGS NF Bold.ttf](
  https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf)
- [MesloLGS NF Italic.ttf](
  https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf)
- [MesloLGS NF Bold Italic.ttf](
  https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)

Then, go to your `Downloads` folder, double-click each font and click on the "Install" button to get the font installed to your system.

With the fonts installed, you'll need to update your Terminator profile to use the new font. Right-click on the Terminator window, then access "Preferences" on the menu, and access the "Profiles" tab. With the `default` profile selected, **uncheck** the option that says "Use the system fixed width font". Then click on the font select box and choose **MesloLGS NF Regular** font. You may want to increase the font size, while you're at it. Close the window when you're finished and Terminator should now be using the recommended font for Powerlevel10k.

![Changing Terminator font](https://onlinux.erikaheidi.com/ubuntu2304/setup/terminator-font.png)

Next, install Powerlevel10k by cloning it into your OMZ themes folder:

```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Finally, edit your `~/.zshrc` and change your `ZSH_THEME` to `powerlevel10k/powerlevel10k`:

```ini
#~/.zshrc

ZSH_THEME="powerlevel10k/powerlevel10k"

```

After that, close and open again Terminator to load the new theme. The first time you run OMZ with the Powerlevel10k theme, a CLI wizard script will guide you through the prompt configuration. You can choose from a wide variety of options and styles, it's very intuitive.

![Setting up the Powerlevel10k theme with p10k script](https://onlinux.erikaheidi.com/ubuntu2304/setup/15.png)

It's worth noting that you can run this configuration wizard again at any time to reconfigure your prompt:

```shell
p10k configure
```

After you're satisfied with your initial prompt setup, there's a few more settings you can change by editing your `~/.p10k.zsh` file. This config file has a long list of prompt elements that you can enable and disable, so make sure to check it out and uncomment what you'd like to test.

For instance, I enabled the PHP-related elements, so when I open a git-based PHP project I see the PHP version currently set up within the system:

![Prompt elements](https://onlinux.erikaheidi.com/ubuntu2304/setup/prompt_elements.png)

Don't forget to close and re-open Terminator to source the changes you made to the `~/.p10k.zsh` file.

I hope you have enjoyed this guide - let me know [on Twitter](https://twitter.com/erikaheidi) which Oh My ZSH! theme is your favorite!

_Update: the fine folks from Oh My ZSH shared a coupon for 10% discount at their [merch store](https://t.co/giYPX5C2ss), if you love the project consider getting some stickers for support ☺️ Here's the code: **10viaERIKA**_
