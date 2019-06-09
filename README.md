# typescript-nextjs-redux-material-ui-example

This using typescript, next.js, redux, material-ui is simple, and is a sample corresponding to the server side rendering.

By VSCode and prettier and TSLint, realtime code format and realtime sentence structure check and rearranging of unused import are carried out in real time.

これは、typescript, next.js, redux, material-ui を使った、シンプルでサーバーサイドレンダリングに対応したサンプルです。

VSCode と prettier と TSLint によって、リアルタイムに整形と構文チェックと未使用 import の整理が行われます。

## Screenshot

### For desktop

![For desktop](https://user-images.githubusercontent.com/12574048/46964420-f9fb9180-d0e2-11e8-9c05-e1594c533947.png)

### For mobile

![For mobile](https://user-images.githubusercontent.com/12574048/46964454-126bac00-d0e3-11e8-8bdc-ebf47c907ed1.png)

## Features

- [Google App Engine Node.js Standard Environment](https://cloud.google.com/appengine/docs/standard/nodejs/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Typescript v3](https://www.typescriptlang.org/)
- [Next.js v8](https://nextjs.org/)
- [MATERIAL-UI v4](https://material-ui.com/)
- [Redux](https://redux.js.org/)
- [TSLint](https://palantir.github.io/tslint/)

## Requirement

- [Google Chrome](https://www.google.com/intl/ja_ALL/chrome/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [yarn](https://yarnpkg.com/lang/ja/)

## Install Google Chrome addon

- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja)

## Recommended VSCode addons

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

## Usage

### Download and install

```bash
git clone https://github.com/treetips/typescript-nextjs-redux-material-ui-example.git
cd typescript-nextjs-redux-material-ui-example
npm i
```

### Start local

```bash
npm run dev
```

### Build and start production express server

```bash
npm run build
npm start
```

## For google appengine

### [Optional] appengine deploy Settings

```bash
vi ./deploy-appengine.sh
```

### Deploy appengine

```bash
./deploy-appengine.sh
```
