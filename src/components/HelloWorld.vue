<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 class="green">P&nbsp; L&nbsp; A&nbsp; N &nbsp;&nbsp;&nbsp;&nbsp; Y &nbsp;O &nbsp;U &nbsp;R &nbsp;&nbsp;&nbsp;&nbsp; D &nbsp;A &nbsp;Y</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 3.6rem;
  top: -10px;
  text-decoration: overline;
  text-decoration-thickness: 27px;
}

h3 {
  text-align: center;
  font-size: 1.2rem;
  background-color: hsla(44, 96%, 60%, 1);
  color: black;
}

@media (min-width: 1024px) {
  .greetings h1 {
    font-size: 5.6rem;
  }
  .greetings h3 {
    font-size: 1.4rem;
  }
}
</style>
