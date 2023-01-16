import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import App from "./components/App.vue";
import OrganizationList from "./components/OrganizationList.vue";
import CreateOrganization from "./components/CreateOrganization.vue";
import CustomerTable from "./components/CustomerTable.vue";
import CreateCustomer from "./components/CreateCustomer.vue";
import EditOrganization from "./components/EditOrganization.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    organizations: [],
    customers: [],
    searchedCustomers: []
  },
  getters: {
    _organizations: state => state.organizations,
    _customers: state => state.customers,
    _searchedCustomers: state => state.searchedCustomers
  },
  mutations: {
    setOrganizations(state, organizations) {
      state.organizations = organizations;
    },
    setCustomers(state, customers) {
      state.customers = customers;
      state.searchedCustomers = customers;
    },
    setSearchedCustomers(state, searchedCustomers) {
      state.searchedCustomers = searchedCustomers;
    },
    createOrganization(state, organization) {
      state.organizations.push(organization);
    },
    createCustomer(state, customer) {
      state.customers.push(customer);
    },
    updateOrganizationName(state, organization) {
      state.organizations[organization.id - 1].name = organization.name;
    }
  },
  actions: {
    async setOrganizationsAsync(context) {
      const response = await fetch("./resources/organizations.json");
      const data = await response.json();
      context.commit("setOrganizations", data);
    },
    async setCustomersAsync(context) {
      const response = await fetch("./resources/customers.json");
      const data = await response.json();
      context.commit("setCustomers", data);
    },
    addCustomer(context, customer) {
      context.commit("addCustomer", customer);
    }
  }
})

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/organizations",
    component: OrganizationList,
  },
  {
    path: "/organizations/create",
    component: CreateOrganization,
  },
  {
    path: "/organizations/:id",
    name: "editOrganization",
    component: EditOrganization,
  },
  {
    path: "/customers",
    component: CustomerTable,
  },
  {
    path: "/customers/create",
    component: CreateCustomer,
  }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  el: "#app",
  store,
  router,
  created: function() {
    Promise.all(
      [
        store.dispatch("setOrganizationsAsync"),
        store.dispatch("setCustomersAsync")
      ]
    );
  },
  template: `
    <div id="app">
      <router-view></router-view>
    </div>
  `
}).$mount("#app");