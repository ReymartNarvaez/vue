<script setup>
  import { reactive, watch } from "vue";
  import TodaysDisplay from "./TodaysSettings.vue";
  import "@fullcalendar/core/vdom";
  import FullCalendar from "@fullcalendar/vue3";
  import listPlugin from "@fullcalendar/list";
  import userEvents from "../composables/useEvents";

  const { getEvents } = userEvents();

  const options = reactive({
    plugins: [listPlugin],
    initialView: "listDay",
   })

    watch(getEvents, () => {
    options.events = getEvents.value;
  });

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const current = new Date();
const currentMonth = months[`${current.getMonth()}`];
const date = `${current.getDate()}`;
const hour = `${('0' + current.getHours()).slice(-2)}`;
const minute = `${('0' + current.getMinutes()).slice(-2)}`;
</script>

<template>
  <TodaysDisplay>
    <template #date> {{ date }} </template>
    <template #month> {{ currentMonth }} </template>
    <template #time>{{ hour + ":" + minute }}</template>
    <fullCalendar v-bind:options="options" />
  </TodaysDisplay>
  <FullCalendar v-bind:options="options" />
</template>
