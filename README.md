# typescript-nextjs-redux-material-ui-example

This using typescript, next.js, redux, material-ui is simple, and is a sample corresponding to the server side rendering.

By VSCode and prettier and ESLint, realtime code format and realtime sentence structure check and rearranging of unused import are carried out in real time.

これは、typescript, next.js, redux, material-ui を使った、シンプルでサーバーサイドレンダリングに対応したサンプルです。

VSCode と prettier と ESLint によって、リアルタイムに整形と構文チェックと未使用 import の整理が行われます。

## Live demo

[Live demo](https://typescript-nextjs-redux-material-ui-example.now.sh/)

## Screenshot

### For desktop

![For desktop 1](https://user-images.githubusercontent.com/12574048/46964420-f9fb9180-d0e2-11e8-9c05-e1594c533947.png)
![For desktop 2](https://user-images.githubusercontent.com/12574048/71005010-3337f300-2126-11ea-844c-d113f5d87255.png)

### For mobile

![For mobile](https://user-images.githubusercontent.com/12574048/46964454-126bac00-d0e3-11e8-8bdc-ebf47c907ed1.png)

## Features

- [Google App Engine Node.js Standard Environment](https://cloud.google.com/appengine/docs/standard/nodejs/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Typescript v3](https://www.typescriptlang.org/)
- [Next.js v9](https://nextjs.org/)
- [MATERIAL-UI v4](https://material-ui.com/)
- [Redux](https://redux.js.org/)
- [redux-saga](https://redux-saga.js.org/)
- [typescript-fsa](https://github.com/aikoven/typescript-fsa)
- [typescript-fsa-reducer](https://github.com/dphilipson/typescript-fsa-reducers)
- [ESLint](https://eslint.org/)

## Requirement

- [Google Chrome](https://www.google.com/intl/ja_ALL/chrome/)
- [Visual Studio Code](https://code.visualstudio.com/)
- TypeScript v3.7 or higher( [require Optional Chaining](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining) )

## Install Google Chrome addon

- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja)

## Recommended VSCode addons

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
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

## Related repository

* [typescript-nextjs-redux-toolkit-material-ui-example](https://github.com/treetips/typescript-nextjs-redux-toolkit-material-ui-example)
