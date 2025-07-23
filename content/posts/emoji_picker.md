+++
title = 'Wayland Emoji Picker'
date = '2025-03-25T23:25:45+05:45'
draft = true
description = 'Write your own simple emoji picker for wayland'
author = "Inogen Limbu"
tags = ["code", "tools"]
keywords = ["code", "emoji picker", "scripts"]
commentsec = true
+++

Today, I was porting my emoji script from X.org(dwm) to Wayland. The script main goal is to show some sort of menu in which the user can search emoji by name or it's Unicode (I don't know you you need emoji picker if you know it's Unicode but whatever). In X.org my script used `xdotool` like `echo "🤩" | xdotool type --clearmodifiers --file -` to paste the emoji to focused window. However in Wayland you can get same behaviour using `wtype` which seems to have eligent source code. I used `wtype` it worked on native Wayland windows but I was unable to make it work with xWayland windows. IDK why xWayland windows auto looses focus when `wtype` is used (IK it usages wayland protocol still.). Then my solution, don't bother just use `wl-clipboard` to copy text and use our old `Ctrl+V`.

## Script
```bash
#!/bin/sh

EMOJI_FILE="$XDG_CONFIG_HOME/emoji.list"
SELECTED_EMOJI=$(cat "$EMOJI_FILE" | wofi -W 800 --dmenu --prompt "Pick an emoji" --insensitive)

[ -z "$SELECTED_EMOJI" ] && exit
EMOJI=$(echo "$SELECTED_EMOJI" | awk -F'|' '{print $1}' | xargs)
wtype "$EMOJI"
echo -n "$EMOJI" | wl-copy
```

Above I extracted `emoji.list` from [Unicode website](https://unicode.org/emoji/charts/full-emoji-list.html) using basic python script. If you don't want to extract yourself you can use already extracted table [here](https://gist.github.com/kouosi/3a990dc8e43e05501709d5133e20cb83). If you want to use `dmenu` use `dmenu -l 10 -p "Pick an emoji"` instead. I hope it helps you.
