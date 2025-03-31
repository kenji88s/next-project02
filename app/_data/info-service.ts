type Images = {
  src: string;
  caption: string;
};

type Details = {
  kanji: string;
  msg: string;
};

export const contPrecedent: {
  contents: Images[]
} = {
  contents: [
      {
          src: "/precedent_image01.jpg",
          caption: "演劇・ミュージカル",
      },
      {
          src: "/precedent_image02.jpg",
          caption: "コンサート・ライブ",
      },
      {
          src: "/precedent_image03.jpg",
          caption: "バレエ・ダンス",
      },
      {
          src: "/precedent_image04.jpg",
          caption: "式典・コンベンション",
      },
      {
          src: "/precedent_image05.jpg",
          caption: "その他イベント",
      },
  ]
};


export const contTechnique: {
  contents: Details[]
} = {
  contents: [
      {
          kanji: "彩",
          msg: "鋭さや柔らかさ。温度やスピード。喧噪や静寂。照明の彩りや広がりで、伝えたい想いと魅せたい瞬間を立体的に表現します。",
      },
      {
          kanji: "暗",
          msg: "時間の経過や場面の変化。期待感。不安感。見せないものを隠すだけではない、心を動かす「暗転」も照明技術の一つです。",
      },
      {
          kanji: "躍",
          msg: "もっと見たい。聞きたい。感じたい。刺激的な眩しさや縦横無尽に動く光で、心が躍動する空間を作り上げます。",
      },
      {
          kanji: "影",
          msg: "距離感や情緒。表情や質感。照明で大切なのは光だけではありません。光により生まれる「影」まで操ることで、空間に無限の奥行を与えます。",
      },
      {
          kanji: "染",
          msg: "季節や時間。空や地平線。夢や現実や心の中。景色や感情を観客へ鮮明に伝えるホリゾント幕の染め方も、私たちお任せください。",
      },
      {
          kanji: "融",
          msg: "セット、映像、音楽、そして照明の融合。発信されるメッセージを肌で感じるほど世界観へ没入できる空間が生まれます。",
      },
  ]
};