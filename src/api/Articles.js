import axios from '../utils/axios';

const prefix = 'api/articles';

export const saveArticle = (article) => {
  return axios().post(`${prefix}/saveArticle`, article);
}

export const updateArticle = (article) => {
  return axios().post(`${prefix}/editArticle`, article);
}

export const getArticleById = (article_id) => {
  return axios().get(`${prefix}/getArticleById/${article_id}`);
}

export const getArticles = () => {
  return axios().get(`${prefix}/articles`);
}