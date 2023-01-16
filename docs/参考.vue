<template>
  <div id="app">
    <router-link to="/">顧客</router-link>
    <router-link to="/organizations">組織</router-link>
    <search-field></search-field>
    <customer-table></customer-table>
  </div>
</template>

<script>
import SearchField from "./SearchField.vue"
import CustomerTable from "./CustomerTable.vue"
export default {
  components: {
    SearchField, CustomerTable
  },
  computed: {
    organizations: function() {
      return this.$store.getters._organizations;
    },
    customers: function() {
      return this.$store.getters._customers;
    }
  }
};
</script>
