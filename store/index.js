import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    task: []
};
const mutations = { 
    ADD_TASK(state, task) { 
        state.task.push(task);
    },
    REMOVE_TASK(state, task) { 
        const index = state.task.findIndex(t => t === task);
        state.task.splice(index, 1);
    }
};
const actions = {
    addTask({ commit }, task) {
        commit("ADD_TASK", task);
    },
    removeTask({ commit }, task) {
        commit("REMOVE_TASK", task);
    }
};

export default function() {
    const Store = new Vuex.Store({
        state,
        mutations,
        actions,
    });

    return Store;
};
