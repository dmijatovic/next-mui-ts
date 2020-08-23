# Next material-ui setup with typescript

This repo is used to experiment with Material-UI with NextJS. The branches hold different experiments:

- basic: this is basic setup of NextJS and material-ui
- custom-theme: this is basic setup extended with custom theme
- master: will follow dev but having completed experiment (stage of testing)
- dev: extending setup with more material-ui components, it is experimenting branch with non-completed stages
- other branches: in case I think the stage is usefull I will save it to a branch so it can be easily accessed

## Install dependencies

```bash
# install types and material-ui
npm i -D typescript @types/react @types/node
npm i -s @material-ui/core @material-ui/icons
```

## Run NextJS in dev mode

```bash
# run nextjs to create default config file
npm run dev
```

## Add baseUrl to tsconfig

To be able to use relative paths from root of your project

## Change _document and_app templates

Based on [official mui example with next](https://github.com/mui-org/material-ui/tree/next/examples/nextjs-with-typescript) change the templates accordingly.
This will enable proper serverside rendering and injection of the styles.

## Customizing theme

There is a number of options to customize default material ui theme. Based on [official documentation](https://material-ui.com/customization/theming/) I mention few changes here.

### Colors

The colors can be customized using [palette section](https://material-ui.com/customization/palette/) of the theme. Note! If you provide only main color the lighter, darker and contrastText will be calculated automatically (or you can provide these values too).

For [collor palette ideas](https://coolors.co/palettes/trending) use colors.io for example.

### Typography

Fonts can be customized based on typography section of the theme. See [official documentation](https://material-ui.com/customization/typography/) for more info.

I have changed the font sizes for the headers (made smaller) and added scaling based on the html font-size set to 100%. Other font-sizes use `rem` which will scale them when html font size (percentage) is changed.

I used Google Fonts here. I noticed with custom fonts that there is a fouc effect on intial load. After removing swap flag the problem is solved, thoug it will take more time to first paint. The similair case is [noted on stackoverflow](https://stackoverflow.com/questions/56537360/google-font-display-swap-strange-behaviour).

All [font display options can be viewed here](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display).
