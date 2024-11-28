# auto-json-faker

[English](https://github.com/EchoAPI-Team/auto-json-faker/blob/main/README.md)｜[日本語](https://github.com/EchoAPI-Team/auto-json-faker/blob/main/README_ja.md)

**auto-json-faker**は、JSONおよびXMLデータをモックデータに変換するための強力なライブラリで、スキーマ生成を使用してプロセスを自動化します。テストや開発に最適です。

## 機能

- JSON5およびXML入力を自動的に解析します。
- 現実的なモックデータを生成します。
- 開発ワークフローへの簡単な統合。

## インストール

npmを使用してライブラリをインストールします：

```bash
npm install auto-json-faker
```

## 使い方

プロジェクトで**auto-json-faker**を使用する方法は次のとおりです：

```javascript
const autoJsonFaker = require('auto-json-faker');

// JSONの例入力
const jsonString = `
{
    "name": "ジョン・ドゥ",
    "age": 30,
    "email": "john.doe@example.com"
}
`;

// XMLの例入力
const xmlString = `
<person>
    <name>ジョン・ドゥ</name>
    <age>30</age>
    <email>john.doe@example.com</email>
</person>
`;

// JSONからモックデータを生成
autoJsonFaker(jsonString).then(mockData => {
    console.log('生成されたモックJSON:', mockData);
}).catch(error => {
    console.error('エラー:', error);
});

// XMLからモックデータを生成
autoJsonFaker(xmlString).then(mockData => {
    console.log('生成されたモックXML:', mockData);
}).catch(error => {
    console.error('エラー:', error);
});
```

## API

### autoJsonFaker(input, ai = false)

- `input` (String): モックデータに変換するJSON5またはXML文字列。
- `ai` (Boolean): オプション。AI機能に利用するために将来の使用に予約されています。

入力形式に応じて、生成されたモックデータをJSONまたはXML文字列として返すPromiseを返します。

## ライセンス

このプロジェクトはMITライセンスのもとでライセンスされています。

## 貢献

貢献を歓迎します！GitHubでイシューを開くか、プルリクエストを提出してください。

## サポート

ご質問や問題がある場合は、support@example.comまでお問い合わせください。

## 謝辞

- スキーマ変換のための [json2json-schema](https://www.npmjs.com/package/json2json-schema)。
- XML解析および変換のための [xml2js](https://www.npmjs.com/package/xml2js) と [xml-js](https://www.npmjs.com/package/xml-js)。

---

**auto-json-faker**でのコーディングを楽しんでください！モックデータ生成がこれほど簡単になったことはありません。
