# My Recipe Notes

自分用のレシピ管理サイト。GitHub Pages でホスティング。

## ディレクトリ構造

```
recipes-site/
├── index.html                      # トップページ（レシピ一覧）
├── README.md                       # このファイル
├── assets/
│   └── css/
│       └── style.css               # 全ページ共通スタイル
└── recipes/
    └── eclair-style-cupcake.html   # エシレ風カップケーキ
```

## 新しいレシピを追加する手順

### 1. レシピHTMLファイルを作成

`recipes/` フォルダに新しい `.html` ファイルを作成する。
既存の `recipes/eclair-style-cupcake.html` をテンプレートとしてコピーして編集すると楽。

```bash
cp recipes/eclair-style-cupcake.html recipes/new-recipe.html
```

### 2. `index.html` にカードを追加

`index.html` の `recipe-grid` 内に以下を追加：

```html
<a class="recipe-card" href="recipes/new-recipe.html">
  <div class="card-tag">カテゴリ名</div>
  <h3 class="card-title">レシピ名</h3>
  <p class="card-desc">短い説明文。</p>
  <span class="card-arrow">→</span>
</a>
```

### 3. 現在のツリー構造を確認

```bash
tree recipes-site/
```

`tree` が入っていない場合：

```bash
# インストール（Ubuntu / WSL）
sudo apt install tree

# 確認
tree recipes-site/
```

または `tree` なしで確認：

```bash
find recipes-site/ | sort
```

## GitHub Pages へのデプロイ

```bash
# 初回：GitHubにリポジトリを作成してからpush
cd recipes-site
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
git push -u origin main
```

その後 GitHub → リポジトリ → Settings → Pages → Source を `main` ブランチ / `/ (root)` に設定。

### 更新時

```bash
git add .
git commit -m "レシピ追加: ○○"
git push
```

## ファイル命名規則

- レシピファイル: `recipes/kebab-case.html`（例: `chocolate-muffin.html`）
- 画像など追加する場合は `assets/img/` フォルダを作成して管理
