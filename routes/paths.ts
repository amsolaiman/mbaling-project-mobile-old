export const paths = {
  newPassword: "/new-password",
  forgotPassword: "/forgot-password",
  home: "/home",
  search: "/search",
  manage: "/manage",
  account: "/account",
  post: {
    root: "/post",
    details: (id: string) => `/post/${id}`,
  },
  profile: {
    root: "/profile",
    details: (id: string) => `/profile/${id}`,
  },
  setting: {
    root: "/setting",
    profile: "/setting/profile",
    account: "/setting/account",
    privacy: "/setting/privacy",
    feedback: "https://www.moizsolaiman.com",
    term: "https://www.moizsolaiman.com",
    about: "/setting/about",
  },
};
