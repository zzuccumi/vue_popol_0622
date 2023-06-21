import { createStore } from "vuex";
import axios from "axios";

axios.defaults.baseURL = "https://vmsahpyntz.eu10.qoddiapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const store = createStore({
  state: {
    posts: [],
  },
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async onLoad(context) {
      const res = await axios.get("/");
      const post = res.data;
      // console.log(res);

      context.commit("updateState", {
        posts: [...context.state.posts, ...post],
      });
    },
  },
});
