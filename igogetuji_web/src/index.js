import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import App from "./components/App.vue";
import EventsCalendar from "./components/EventsCalendar.vue";
import CreateCalendar from "./components/CreateCalendar.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentMonthCalendar: [],
  },
  getters: {
    _currentMonthCalendar: state => state.currentMonthCalendar,
  },
  mutations: {
    setCurrentMonthCalendar(state, calendar) {
      for (let i = 0; i < calendar.length; i++) {
        state.currentMonthCalendar.push(calendar[i]);
      }
    },
    addCalendar(state, calendar) {
      state.currentMonthCalendar.push(calendar);
    },
  },
  actions: {
    async setCurrentMonthCalendarAsync(context) {
      const date = new Date();
      const fileName = date.getFullYear() + "-" + ('00' + (date.getMonth() + 1)).slice(-2);
      const response = await fetch("./resources/calendar/" + fileName + ".json");
      const data = await response.json();
      context.commit("setCurrentMonthCalendar", data);
    },
    addCalendar(context, calendar) {
      context.commit("addCalendar", calendar);
    },
  }
})

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/events-calendar",
    component: EventsCalendar,
  },
  {
    path: "/events-calendar/create",
    component: CreateCalendar,
  },
];

const router = new VueRouter({
  routes
});

// const app = Vue.createApp({
//   created: function() {
//     $('#datepicker').datepicker();
//     Promise.all(
//       [
//         store.dispatch("setCurrentMonthCalendarAsync")
//       ]
//     );
//   },
//   template: `
//   <div id="app">
//     <router-view></router-view>
//   </div>
//   `
// }).component(App).use(store).use(router).mount("#app");

const app = new Vue({
  el: "#app",
  store,
  router,
  created: function() {
    $('#datepicker').datepicker();
    Promise.all(
      [
        store.dispatch("setCurrentMonthCalendarAsync")
      ]
    );
  },
  template: `
    <div id="app">
      <router-view></router-view>
    </div>
  `
}).$mount("#app");
