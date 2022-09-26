<script setup>
  import { ref, reactive, watch } from "vue";
  import "@fullcalendar/core/vdom";
  import FullCalendar from "@fullcalendar/vue3";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import timeGridPlugin from "@fullcalendar/timegrid";
  import listPlugin from "@fullcalendar/list";
  import interactionPlugin from "@fullcalendar/interaction";
  import userEvents from "../composables/useEvents";
  
  const id = ref(10);
  const msg = ref("Enter event here");

  const { getEvents , createEvent, updateEvent, deleteEvent } = userEvents();
  
  const options = reactive({
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "prev, next today",
      center: "title",
      right: "dayGridMonth, dayGridWeek",
    },
    editable: true,
    selectable: true,
    weekends: true,
    select: (arg) => {
      id.value = id.value + 1;
      const cal = arg.view.calendar;
      cal.unselect();
      cal.addEvent({
        id: `${id.value}`,
        title: `${(id.value, msg.value)}`,
        start: arg.start,
        end: arg.end,
        allDay: true,
      });
    },
    eventClick: (arg) => {
      if (arg.event) {
        arg.event.remove();
      }
    },
    events: [],
    eventAdd: (arg) => {
      createEvent({
        id: arg.event.id,
        title: arg.event.title,
        start: arg.event.start,
        end: arg.event.end,
        allDay: arg.event.allDay,
      });
    },
    eventChange: (arg) => {
      updateEvent(
        {
          id: arg.event.id,
          title: arg.event.title,
          start: arg.event.start,
          end: arg.event.end,
          allDay: arg.event.allDay,
        },
        arg.event.id
      );
    },
    eventRemove: (arg) => {
      deleteEvent(arg.event.id);
    },
  });
  
  watch(getEvents, () => {
    options.events = getEvents.value;
  });
  </script>
  
  <template>
    <div>
      <label> New Event </label>
      <input type="text" v-model="msg" />
      <br /><br /><br />
    </div>
  
    <FullCalendar v-bind:options="options" />
  </template>
