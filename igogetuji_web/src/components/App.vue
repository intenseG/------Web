<template>
  <div id="app">
    <!-- <div class="header">
      <img src="/img/logo.png" class="header-logo" alt="囲碁月次大会Web">
      <div class="header-menu">
        <input type="checkbox" id="menu_btn_check">
        <label for="menu_btn_check" class="header-menu_btn"><span></span></label>
        <div class="header-menu_content">
          <ul>
            <li>
              <a class="header-link_calendar">開催日程</a>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
    <!-- <router-link to="/">ホーム</router-link>
    <router-link to="/events-calendar">開催日程</router-link> -->
    <!-- <router-link to="/vote">投票</router-link>
    <router-link to="/match">対局</router-link>
    <router-link to="/results">総合成績</router-link>
    <router-link to="/total-results">通算成績</router-link> -->
    <events-calendar></events-calendar>
  </div>
</template>

<script>
import EventsCalendar from "./EventsCalendar.vue"
export default {
  components: {
    EventsCalendar
  }
};
</script>
