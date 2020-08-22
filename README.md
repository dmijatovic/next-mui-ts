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
