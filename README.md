# 🎨 Status for Figma Plugin
これはFigmaのプラグイン用に作成した「Status」です。
<img width="1270" alt="スクリーンショット 2024-03-08 15 28 39" src="https://github.com/99letters/Status/assets/75833079/a84f30b7-51bb-48ab-a692-6fb949191134">
どれが開発中なのか実装中なのか？デザイン考案事項なのか？を4段階の進捗状況で揺らぎをレイヤータイトルに簡単に変更してくれます。
ローカルFigmaアプリより開発からプラグインのマニフェストを読み込みし起動させてください。
<img width="421" alt="スクリーンショット 2024-03-08 15 28 57" src="https://github.com/99letters/Status/assets/75833079/c8329327-1edf-4bb4-90e6-4f5bc37693eb">

To never stop building ideas.

Below are the steps to get your plugin running. You can also find instructions at:

  https://www.figma.com/plugin-docs/plugin-quickstart-guide/

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

  https://nodejs.org/en/download/

Next, install TypeScript using the command:

  npm install -g typescript

Finally, in the directory of your plugin, get the latest type definitions for the plugin API by running:

  npm install --save-dev @figma/plugin-typings

If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code
is already valid Typescript code.

TypeScript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using TypeScript requires a compiler to convert TypeScript (code.ts) into JavaScript (code.js)
for the browser to run.

We recommend writing TypeScript code using Visual Studio code:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "npm: watch". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
