<template>
  <tr>
    <td>{{ calendar.date }}</td>
    <td>{{ calendar.mode }}</td>
    <td>{{ calendar.organizer }}</td>
  </tr>
</template>

<script>
export default {
  props: ["calendar"],
};
</script>