# Next material-ui setup with typescript

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
