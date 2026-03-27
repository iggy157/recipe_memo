/**
 * recipes-data.js
 * ================
 * 新しいレシピを追加するときはここにオブジェクトを追加するだけ。
 * date は "YYYY-MM-DD" 形式。新しいものを先頭に書く。
 *
 * カテゴリ一覧（category フィールドに使う）:
 *   "お菓子・ケーキ" / "肉料理" / "カレー" / "ソース・たれ" / "炒め物"
 */
const RECIPES = [
  {
    title:    "じゃがいも・豚バラ・エリンギの炒め物",
    url:      "recipes/itame-jagaimo.html",
    category: "炒め物",
    tag:      "炒め物",
    desc:     "はちみつ醤油チリをバターで仕上げる。短冊切りのじゃがいもがシャキッと絡む一品。",
    date:     "2025-01-01",
  },
  {
    title:    "唐揚げ & ユーリンチーソース",
    url:      "recipes/karaage.html",
    category: "肉料理",
    tag:      "揚げ物",
    desc:     "しっとり下味が衣を逃がさない。ユーリンチーは酢：醤油：砂糖＝1:1:1を煮詰めるだけ。",
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
  {
    title:    "とろとろジューシー 本格なすカレー",
    url:      "recipes/nasu-curry.html",
    category: "カレー",
    tag:      "カレー",
    desc:     "玉ねぎベースから作る深みのある味わい。なすを揚げてバターで仕上げ、30分休ませることで完成。",
    date:     "2025-01-01",
  },
  {
    title:    "とろけるチーズの特製ハンバーグ",
    url:      "recipes/hamburg-steak.html",
    category: "肉料理",
    tag:      "ハンバーグ",
    desc:     "表面をけばだたせて皮膜を作り肉汁を閉じ込める。オーブン・グリル・フライパンの3通りから選べる仕上げ方。",
    date:     "2025-01-01",
  },
  {
    title:    "エシレ風カップケーキ",
    url:      "recipes/eclair-style-cupcake.html",
    category: "お菓子・ケーキ",
    tag:      "カップケーキ",
    desc:     "焦がしバター × アーモンドパウダー × 卵白。外こんがり、中ジューシー。一晩寝かせることで生まれる気泡感。",
    date:     "2025-01-01",
  },
];
