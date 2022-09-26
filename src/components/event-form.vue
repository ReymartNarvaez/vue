<script setup>
defineProps({
  data() {
    return {
      newEvent: "",
    };
  },
  methods: {
    onsubmit() {
      let eventList = {
        newEvent: this.newEvent,
      };
      this.$emit("event-submitted", eventList);

      this.newEvent = "";
    },
  },
});
</script>

<template>
  <div>
    <form class="event-form" @submit.prevent="onSubmit">
      <textarea id="newEvent" v-model="newEvent"></textarea>
    </form>
    <input class="button" type="submit" value="Save">
  </div>
</template>
