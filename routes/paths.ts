export const paths = {
  newPassword: "new-password",
  forgotPassword: "forgot-password",
  home: "home",
  account: "account",
  search: "search",
  manage: "manage",
  post: {
    root: "post",
    new: "post/new",
    edit: (id: string) => `post/${id}/edit`,
    details: (id: string) => `post/${id}`,
  },
  profile: {
    root: "profile",
    details: (id: string) => `profile/${id}`,
  },
  settings: {
    root: "settings",
    profile: "settings/profile",
    account: "settings/account",
    privacy: "settings/privacy",
    feedback: "https://www.moizsolaiman.com",
    term: "https://www.moizsolaiman.com",
    about: "settings/about",
  },
};
