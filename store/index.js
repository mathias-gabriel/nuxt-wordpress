import api from '../api';
import SETTINGS from "../settings";

import * as types from './mutation-types';

const createPostSlug = post => {
  let slug = post.link.replace(window.location.protocol + '//' + window.location.host, 'post/');
  post.slug = slug;
  return post;
};

export const state = () => ({
  recent: [],
  loaded: false,
})

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  },
  recentPosts: state => limit => {
    if (
      !limit ||
      !Number.isInteger(limit) ||
      typeof limit == 'undefined'
    ) {
      return state.recent;
    }
    let recent = state.recent;
    return recent.slice(0, limit);
  },
  recentPostsLoaded: state => state.loaded,
  allPages: state => state.all,
  allPagesLoaded: state => state.loaded,
  page: state => id => {
    let field = typeof id === 'number' ? 'id' : 'slug';
    let page = state.all.filter(page => page[field] === id);
    return (page[0]) ? page[0] : false;
  },
  pageContent: state => id => {
    let field = typeof id === 'number' ? 'id' : 'slug';
    let page = state.all.filter(page => page[field] === id);

    return (page[0]) ? page[0].content.rendered : false;
  },
  somePages: state => limit => {
    if (state.all.length < 1) {
      return false;
    }
    let all = [...state.all];
    return all.splice(0, Math.min(limit, state.all.length));
  },
  loadingIncrement: state => {
    return 100 / SETTINGS.LOADING_SEGMENTS;
  }
}

export const actions = {
  getPosts(context,limit) {
    api.getPosts(limit.limit, limit.lang,posts => {
      context.commit(types.STORE_FETCHED_POSTS, { posts });
      context.commit(types.POSTS_LOADED, true);
      context.commit(types.INCREMENT_LOADING_PROGRESS);
    });
  },
}

export const mutations = {
  [types.STORE_FETCHED_POSTS](state, { posts }) {
    state.recent = posts;
  },

  [types.POSTS_LOADED](state, val) {
    state.loaded = val;
  },

  [types.INCREMENT_LOADING_PROGRESS](state, val) {
    state.loading_progress = Math.min(
      state.loading_progress + getters.loadingIncrement(),
      100
    );
  },

  [types.RESET_LOADING_PROGRESS](state) {
    state.loading_progress = 0;
  }

};
