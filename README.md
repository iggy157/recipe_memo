# My Recipe Notes

自分用のレシピ管理サイト。GitHub Pages でホスティング。

## ディレクトリ構造

```
recipe_memo/          # ← リポジトリのルート
├── index.html                  # トップページ（最近のレシピ + カテゴリ入口）
├── recipes.html                # レシピ一覧（検索・カテゴリ絞り込み）
├── README.md                   # このファイル
├── assets/
│   ├── css/style.css           # 全ページ共通スタイル
│   └── js/recipes-data.js      # ★ カテゴリ定義とレシピ一覧（唯一の情報源）
└── recipes/
    └── *.html                  # レシピ本体（1レシピ1ファイル）
```

## カテゴリ

`assets/js/recipes-data.js` の `CATEGORIES` が定義。
トップの「カテゴリから探す」ショートカットも、一覧ページの絞り込みボタンも
**ここから自動生成される**ので、HTML側を触る必要はない。

| カテゴリ | アイコン | 中身の目安 |
|---|---|---|
| メインおかず | 🥩 | 唐揚げ、ハンバーグ、餃子、ぶり大根などの主菜（肉・魚どちらも） |
| ご飯もの | 🍛 | オムライス、カレーなどご飯と食べるもの |
| 麺・パスタ | 🍜 | パスタ、焼きそば、ラーメン類 |
| ソース・たれ | 🫙 | 単体では料理にならない調味だれ・ドレッシング |
| お菓子 | 🍰 | マフィン、ケーキ、焼き菓子 |

細かい料理名（`揚げ物` / `焼きそば` / `カレー` など）は `category` ではなく
各レシピの `tag` で表現する。`tag` はカードに表示されるだけで絞り込みには使わないので自由に付けてよい。

### カテゴリを増やす / 変える

`CATEGORIES` に1行足すだけ。既存レシピの `category` も合わせて書き換えること。
`CATEGORIES` にない `category` を書いたレシピは、絞り込みで表示されなくなるので注意。

## 新しいレシピを追加する手順

### 1. レシピHTMLファイルを作成

`recipes/` に `.html` を作る。既存ファイルをコピーして編集すると楽。

```bash
cp recipes/karaage.html recipes/new-recipe.html
```

### 2. `assets/js/recipes-data.js` の `RECIPES` に追加

配列の**先頭**に追加する（トップページの「最近追加したレシピ」は上から3件を表示）。

```js
{
  title:    "レシピ名",
  url:      "recipes/new-recipe.html",
  category: "メインおかず",       // CATEGORIES のいずれか
  tag:      "揚げ物",             // カードに出る細かいラベル
  desc:     "短い説明文。",
  date:     "2026-04-20",
},
```

`index.html` / `recipes.html` は編集不要。カードも絞り込みも自動で増える。

### 3. 確認

```bash
python3 -m http.server 8000
# http://localhost:8000/ をブラウザで開く
```

## GitHub Pages へのデプロイ

リポジトリ: `git@github.com:iggy157/recipe_memo.git`

```bash
git add .
git commit -m "レシピ追加: ○○"
git push
```

初回のみ GitHub → Settings → Pages → Source を `main` ブランチ / `/ (root)` に設定。

## ファイル命名規則

- レシピファイル: `recipes/kebab-case.html`（例: `pain-perdu-muffin.html`）
- 画像を追加する場合は `assets/img/` を作って管理
