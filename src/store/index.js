import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listed: [],
    teamList: [
      { name: 'Gorgeous', role: 'Web developer', id: 1, blacklist: false },
      { name: 'Ryu', role: 'Graphic designer', id: 2, blacklist: false },
      { name: 'Chun Li', role: 'Web developer', id: 3, blacklist: false },
      {
        name: 'Gouken',
        role: 'Social media maverick',
        id: 4,
        blacklist: false,
      },
      { name: 'Yoshi', role: 'Sales guru', id: 5, blacklist: false },
    ],
  },

  mutations: {
    blacked(state) {
      state.blacklist = true;
    },
    setBlacklist(state, teamId) {
      const teamMember = state.teamList.find(team => {
        return team.id == teamId;
      });
      teamMember.blacklist = true;
      state.teamList.splice(state.teamList.indexOf(teamMember), 1);
    },
  },
  getters: {
    myBlackList(state) {
      return state.listed;
    },
  },
  actions: {
    setBlack(context, t_id) {
      context.commit('setBlacklist', t_id);
    },
  },
});
