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
    calendar: [],
    currentMonthCalendar: []
  },
  getters: {
    _calendar: state => state.calendar,
    _currentMonthCalendar: state => state.currentMonthCalendar
  },
  mutations: {
    setCurrentMonthCalendar(state, calendar) {
      state.currentMonthCalendar.push(calendar);
      state.calendar.push(calendar);
    },
    createCalendar(state, calendar) {
      state.calendar.push(calendar);
    }
  },
  actions: {
    async setCurrentMonthCalendarAsync(context) {
      const date = new Date();
      const fileName = date.getFullYear() + "-" + ('00' + date.getMonth()).slice(-2);
      const response = await fetch("./resources/calendar/" + fileName + ".json");
      const data = await response.json();
      context.commit("setCurrentMonthCalendar", data);
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