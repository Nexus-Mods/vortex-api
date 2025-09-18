---
layout: article
author: Pickysaurus
created: Wed, 18 May 2022 15:43:57 GMT
updated: Wed, 18 May 2022 15:45:23 GMT
wip: true
title: Creating a theme
order: 1000
tags:
  - General
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/32
---
Vortex comes with the ability to customise its appearance to suit you. Whether you want to improve the contrast of colours or just go for something whacky, you have the tools to make Vortex as unique as you like. You view all community submitted themes on [Nexus Mods](https://www.nexusmods.com/site/mods/categories/13/).  

# Getting Started
To get started, navigate to the “settings” section and select the “theme” tab.

![themes1](https://user-images.githubusercontent.com/31670524/169085551-b9f2234d-384d-4d94-ab0e-c2439bc9d8b5.jpg)

To make your first theme you want to clone the default, so you can start editing it. You will be asked for a name, this can be whatever you like.

Now you will have unlocked the options to change the text and colours of Vortex for your new theme. The options presented to you will have the following effect on the style.

# Font Options
![themes2](https://user-images.githubusercontent.com/31670524/169085575-2983108a-5adb-4056-9cb3-4ab5d2abb12b.jpg)

| Option Name |	Elements changed |
| --- | --- |
| Font Size	| This is the global font size of Vortex. Think of it as a minimum size. Headings will always be slightly larger than the size set here (if possible).
| Margins	| This alters the spacing to the left and right of the text. A smaller number will put the borders closer to the text.
| Font Family |	This option allows you to change the main font of vortex used in the text and side menu.
| Font Family (Headings) |	This option changes the heading font, used mainly in tab headings.


# Colour Options
![1200px-themes3](https://user-images.githubusercontent.com/31670524/169085609-af32b1ec-2b75-4b8a-9f5e-a2c24ba18c01.jpg)

| Option Name	| Elements changed 
| --- | --- |
| brand-primary	| Buttons on theme page<br>Number bubble for downloads/notifications<br>Text on notification buttons<br>“Get more mods” button<br>Expand/Collapse arrows on the dropzone<br>Close button in error popup
| brand-info	| Background of informational notifications<br>Header icon in informational popup<br>Background of certain dashlets
| brand-bg	| Background of main Vortex window<br>Background of the notification area<br>Text area in error dialogues<br>Background of drop-down menus
| brand-clickable	| Buttons around the UI<br>Menu active section label<br>Menu collapse/expand button<br>Download graph line<br>Toolbar background<br>Log out button on Nexus Mods account dashlet.
| link-color	| Text-based links<br>Unresolved conflicts icon
| brand-highlight |	*Not currently used*.
| brand-warning	| Background of warning notifications (e.g. "There are unsolved file conflicts.")<br>Missing masters icon on the plugins page.
| brand-menu	| Background of the content area.<br>Background of the side menu.<br>Background of pop-up windows (such as when managing conflicts).
| text-color	| Primary text colour.<br>Header text in inactive tabs.<br>Switch for "dark theme" on themes page.
| brand-success	| Background of success notifications (check for mod updates complete).<br>Enabled button on mods and plugins pages.<br>On/Off settings toggles (when on)<br>File conflict rules set icon (lightning bolt).
| brand-danger	| Background of error notifications.<br>Uninstall button.<br>Header icon in error pop-up boxes.
| brand-secondary |	*Not currently used.*
| text-color-disabled	| Text in tabs that have no content to display ("Nothing to configure" in workarounds). <br>Arrow lines in the Manage Groups editor


## Dark Theme
Vortex has 6 different shades of grey used on its master stylesheet. These can by default set to improve visibility on a light theme. Checking this box will reverse the way the grey colours are used (making the lightest grey the darkest and vice versa). If you are making a dark theme, turning this on will improve contrast and readability of the UI elements.

# Elements not changed by colour selection
As of Vortex 0.16.8, the following elements are not styled and will not obey theme colours above.

- Header of the currently active tab.
- Right-click menu mouse-over colour
- Folder icon in the dropzone.
- Font size sliders on themes page.
- Download graph gradient fill.

# Edit CSS Manually
Vortex also has an option for you to insert your own CSS manually. When using this option, it is recommended to use the [developer tools](https://www.nexusmods.com/site/mods/12) which enable the console. You can add custom styles for any pre-determined classes in Vortex.

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/32)