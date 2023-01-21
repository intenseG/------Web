<template>
  <div id="createCalendar">
    <router-link to="/">ホーム</router-link>
    <router-link to="/events-calendar">開催日程</router-link>
    <!-- <router-link to="/vote">投票</router-link>
    <router-link to="/match">対局</router-link>
    <router-link to="/results">総合成績</router-link>
    <router-link to="/total-results">通算成績</router-link> -->
    <div class="createCalendarMessage">{{ message }}</div>
    <h1>開催日の追加</h1>
    <span>日時</span>
    <input type="date" v-model="date" required>
    <span>種別</span>
    <select v-model="mode" required>
      <option value="通常">通常</option>
      <option value="特別">特別</option>
      <option value="最終日">最終日</option>
      <option value="2局目">2局目</option>
    </select>
    <span>開催者</span>
    <select v-model="organizer" required>
      <option value="欧米か">欧米か</option>
      <option value="その他">その他</option>
    </select>
    <button class="addCalendarButton" v-on:click="addCalendar">追加</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      date: null,
      mode: "",
      organizer: "",
      message: ""
    }
  },
  methods: {
    initForm() {
      this.date = null;
      this.mode = "";
      this.organizer = null;
      this.message = "";
    },
    addCalendar() {
      this.$store.dispatch("addCalendar",
      {
        date: this.date,
        mode: this.mode,
        organizer: this.organizer
      }).then(() => {
        this.initForm();
        this.message = "登録が完了しました。";
      });
    }
  }
};
</script>