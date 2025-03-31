type Links = {
  href: string;
  title: string;
  ja: string;
  setup: string;
};

type Data = {
  contents: Record<string, Links>;
};

const data: Data = {
  contents: {
    home: {
      href: "/",
      title: "HOME",
      ja: "ホーム",
      setup: "header, footer",
    },
    service: {
      href: "/contents1",
      title: "SERVICE",
      ja: "サービス",
      setup: "header, footer",
    },
    company: {
      href: "/greeting",
      title: "COMPANY",
      ja: "会社概要",
      setup: "header, footer",
    },
    access: {
      href: "/access",
      title: "ACCESS",
      ja: "アクセス",
      setup: "header, footer",
    },
    contact: {
      href: "/inquiry",
      title: "CONTACT",
      ja: "お問い合わせ",
      setup: "header, footer",
    },
    privacy: {
      href: "/privacy",
      title: "PRIVACY POLICY",
      ja: "個人情報保護方針",
      setup: "footer",
    },
  },
};

export default data;