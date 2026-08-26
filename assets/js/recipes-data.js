/**
 * recipes-data.js
 * ================
 * 全レシピのメタデータ。サイト全体でここが唯一の情報源。
 * 新しいレシピを追加するときはこの配列にオブジェクトを追加するだけ。
 *
 * date     : "YYYY-MM-DD" 形式。新しいものを配列の先頭に書く。
 * category : 下の CATEGORIES のいずれか（絞り込みタブ / ショートカットに対応）
 * tag      : カードに表示される細かい料理名ラベル。自由に付けてよい。
 */

/** カテゴリ定義。index.html / recipes.html はここを読んで一覧を生成する。 */
const CATEGORIES = [
  { name: "メインおかず",   icon: "🥩" },
  { name: "ご飯もの",        icon: "🍛" },
  { name: "麺・パスタ",      icon: "🍜" },
  { name: "ソース・たれ",    icon: "🫙" },
  { name: "お菓子",          icon: "🍰" },
];

const RECIPES = [
  {
    title:    "にんじんケーキ",
    url:      "recipes/carrot-cake.html",
    category: "お菓子",
    tag:      "ケーキ",
    desc:     "にんじんと薄力粉は同量120gずつ。アルミを被せて穴をあけて焼くから、表面が焦げずにしっとり仕上がる。",
    date:     "2026-08-27",
  },
  {
    title:    "カリカリカリーポテト",
    url:      "recipes/curry-potato.html",
    category: "メインおかず",
    tag:      "揚げ焼き",
    desc:     "小麦粉とカレー粉を1:1でまとわせて揚げ焼きに。水気を徹底的に切ることと、仕上げのマーガリンがカリカリの決め手。",
    date:     "2026-08-27",
  },
  {
    title:    "豚バラとじゃがいもの照り甘炒め",
    url:      "recipes/butabara-jagaimo.html",
    category: "メインおかず",
    tag:      "炒め物",
    desc:     "すき焼きのタレと蜂蜜で照り甘に。肉とじゃがいもを別々に焼いてから合流させ、味見しながら調整する。",
    date:     "2026-08-27",
  },
  {
    title:    "ぶり大根",
    url:      "recipes/buri-daikon.html",
    category: "メインおかず",
    tag:      "煮物",
    desc:     "大根だけ30分炊いてから、ぶりを入れて20分。こまめに熱気を逃がすのがぶりを固くしないコツ。",
    date:     "2026-08-27",
  },
  {
    title:    "シーザーソース",
    url:      "recipes/caesar-sauce.html",
    category: "ソース・たれ",
    tag:      "ソース",
    desc:     "にんにく・マヨネーズ・粉チーズを混ぜて牛乳でのばすだけ。塩胡椒はごく少量、ブラックペッパーは直前に。",
    date:     "2026-08-27",
  },
  {
    title:    "甘辛ガーリックダレ",
    url:      "recipes/amakara-garlic-dare.html",
    category: "ソース・たれ",
    tag:      "たれ",
    desc:     "マヨネーズ・食べるラー油・すき焼きのタレを混ぜるだけ。甘辛とガーリックが一度に決まる。",
    date:     "2026-08-27",
  },
  {
    title:    "餃子",
    url:      "recipes/gyoza.html",
    category: "メインおかず",
    tag:      "餃子",
    desc:     "こねるほど肉汁が出る餡と、油多めの揚げ焼きスタート。蒸し焼きは水ではなく鶏がらスープで。",
    date:     "2026-08-27",
  },
  {
    title:    "あんかけ焼きそば",
    url:      "recipes/ankake-yakisoba.html",
    category: "麺・パスタ",
    tag:      "焼きそば",
    desc:     "両面こんがりのかた焼きそばにとろとろあんをたっぷりかける。片栗粉は強火で回し入れるのがダマにならないコツ。",
    date:     "2026-04-10",
  },
  {
    title:    "キムチスパゲッティ",
    url:      "recipes/kimuchi-spaghetti.html",
    category: "麺・パスタ",
    tag:      "パスタ",
    desc:     "マヨネーズで絡めてすき焼きのタレとキムチを合わせる。天かすのザクッとした食感がやみつきに。追い天かすも忘れずに。",
    date:     "2026-04-10",
  },
  {
    title:    "ナポリタン",
    url:      "recipes/napolitan.html",
    category: "麺・パスタ",
    tag:      "パスタ",
    desc:     "デミグラスソースとコンソメでケチャップに深みをプラス。マーガリンとウスターが喫茶店の味に仕上げてくれる。",
    date:     "2026-04-10",
  },
  {
    title:    "アメリカンソースのオムライス",
    url:      "recipes/omelet-rice.html",
    category: "ご飯もの",
    tag:      "オムライス",
    desc:     "甘酸っぱいアメリカンソースとふわとろ卵のコンビ。ケチャップライスはマーガリンを最後に入れるのが塩味を残すコツ。",
    date:     "2026-04-10",
  },
  {
    title:    "パンペルデュ・マフィン",
    url:      "recipes/pain-perdu-muffin.html",
    category: "お菓子",
    tag:      "マフィン",
    desc:     "アーモンドとヨーグルトが生む、しっとりフレンチトーストのような食感。混ぜるだけ、寝かせなくていい気軽な一品。",
    date:     "2026-04-03",
  },
  {
    title:    "じゃがいも・豚バラ・エリンギの炒め物",
    url:      "recipes/itame-jagaimo.html",
    category: "メインおかず",
    tag:      "炒め物",
    desc:     "はちみつ醤油チリをバターで仕上げる。短冊切りのじゃがいもがシャキッと絡む一品。",
    date:     "2025-01-01",
  },
  {
    title:    "唐揚げ & ユーリンチーソース",
    url:      "recipes/karaage.html",
    category: "メインおかず",
    tag:      "揚げ物",
    desc:     "しっとり下味が衣を逃がさない。ユーリンチーは酢：醤油：砂糖＝1:1:1を煮詰めるだけ。",
    date:     "2025-01-01",
  },
  {
    title:    "とろけるチーズの特製ハンバーグ",
    url:      "recipes/hamburg-steak.html",
    category: "メインおかず",
    tag:      "ハンバーグ",
    desc:     "表面をけばだたせて皮膜を作り肉汁を閉じ込める。オーブン・グリル・フライパンの3通りから選べる仕上げ方。",
    date:     "2025-01-01",
  },
  {
    title:    "とろとろジューシー 本格なすカレー",
    url:      "recipes/nasu-curry.html",
    category: "ご飯もの",
    tag:      "カレー",
    desc:     "玉ねぎベースから作る深みのある味わい。なすを揚げてバターで仕上げ、30分休ませることで完成。",
    date:     "2025-01-01",
  },
  {
    title:    "フライのソース・タルタルソース",
    url:      "recipes/fry-sauce.html",
    category: "ソース・たれ",
    tag:      "ソース",
    desc:     "ごまを煎るひと手間で格段に変わるフライソース。タルタルは玉ねぎの水分を絞りきることが全て。",
    date:     "2025-01-01",
  },
];
