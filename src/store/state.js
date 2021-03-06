const baseUrl = process.env.BASE_URL || 'http://localhost:3003/api/';

const config = {
  wideMenu: false,
  apiUrl: baseUrl,
  registerUrl: `${baseUrl}users/create`,
  loginUrl: `${baseUrl}users/login`,
  editUserUrl: `${baseUrl}users/edit`,
  deleteUserUrl: `${baseUrl}users/delete`,
  allUsersUrl: `${baseUrl}users/all`,
  meUrl: `${baseUrl}users/me`,
  authorUrl: `${baseUrl}users/author`,
  logoutUrl: `${baseUrl}users/logout`,
  newArticleUrl: `${baseUrl}articles/create`,
  newArticleWithAttachmentUrl: `${baseUrl}articles/attachment`,
  newSuggestionUrl: `${baseUrl}articles/suggest`,
  editArticleUrl: `${baseUrl}articles/edit`,
  updateArticleUrl: `${baseUrl}articles/update`,
  deleteArticleUrl: `${baseUrl}articles/delete`,
  allArticlesUrl: `${baseUrl}articles/all`,
  featuredArticlesUrl: `${baseUrl}articles/featured`,
  topArticlesUrl: `${baseUrl}articles/top`,
  readArticleUrl: `${baseUrl}articles/read`,
  voteArticleUrl: `${baseUrl}articles/vote`,
  searchUrl: `${baseUrl}articles/search`,
  categoriesUrl: `${baseUrl}articles/categories`,
  uploadUrl: `${baseUrl}public/uploads`,
  settingsUrl: `${baseUrl}settings/all`,
  settingsUpdateUrl: `${baseUrl}settings/update`,
  dashboardArticlesUrl: `${baseUrl}dashboard/articles`,
  dashboardViewsUrl: `${baseUrl}dashboard/views`,
  dashboardVotesUrl: `${baseUrl}dashboard/votes`,
};

const app = {
  error: null,
};

const user = null;

export default {
  config,
  app,
  user,
};
