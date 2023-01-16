<template>
  <div id="eventsCalendar">
    <router-link to="/">ホーム</router-link>
    <router-link to="/events-calendar">開催日程</router-link>
    <router-link to="/vote">投票</router-link>
    <router-link to="/match">対局</router-link>
    <router-link to="/results">総合成績</router-link>
    <router-link to="/total-results">通算成績</router-link>
    <h1>開催日程</h1>
    <router-link to="/events-calendar/create">開催日の追加</router-link>
    <table rules="rows">
      <tr>
        <th>日時</th><th>種別</th><th>開催者</th>
      </tr>
      <calendar
      v-for="calendar in currentMonthCalendar"
      v-bind:calendar="calendar"
      v-bind:key="calendar.date">
      </calendar>
    </table>
  </div>
</template>

<script>
import Calendar from './Calendar.vue';
export default {
  components: {
    Calendar
  },
  computed: {
    calendar: function() {
      return this.$store.getters._calendar
    },
    currentMonthCalendar: function() {
      return this.$store.getters._currentMonthCalendar
    }
  }
};
</script>