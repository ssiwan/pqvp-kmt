const baseUrl = 'http://localhost:3003/api/';

const config = {
  wideMenu: false,
  apiUrl: baseUrl,
  registerUrl: `${baseUrl}users/create`,
  loginUrl: `${baseUrl}users/login`,
  editUserUrl: `${baseUrl}users/edit`,
  deleteUserUrl: `${baseUrl}users/delete`,
  allUsersUrl: `${baseUrl}users/all`,
  meUrl: `${baseUrl}users/me`,
  logoutUrl: `${baseUrl}users/logout`,
  newArticleUrl: `${baseUrl}articles/create`,
  editArticleUrl: `${baseUrl}articles/edit`,
  deleteArticleUrl: `${baseUrl}articles/delete`,
  allArticlesUrl: `${baseUrl}articles/all`,
  featuredArticlesUrl: `${baseUrl}articles/featured`,
  topArticlesUrl: `${baseUrl}articles/top`,
  readArticleUrl: `${baseUrl}articles/read`,
  voteArticleUrl: `${baseUrl}articles/vote`,
  searchUrl: `${baseUrl}articles/search`,
};

const app = {
  error: null,
};

const user = null;

export default
{
  config,
  app,
  user,
};
