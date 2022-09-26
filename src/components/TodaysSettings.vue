<template>
  <div class="flex-container">
    <div class="box">
      <h3>D&nbsp; A&nbsp; T&nbsp; E</h3>
      <div>
        <h4><slot name="date"></slot></h4>
        <h5><slot name="month"></slot></h5>
      </div>
    </div>
    <div class="box">
      <h3>T&nbsp; I&nbsp; M&nbsp; E</h3>
      <div>
        <h6><slot name="time"></slot></h6>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h3 {
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
  color: black;
  background: linear-gradient(
    -90deg,
    hsla(16, 88%, 54%, 1),
    hsla(44, 96%, 60%, 1)
  );
}

h4,
h5,
h6 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

h4, h6 {
  font-size: 2.2rem;
}

.box {
  text-align: center;
  margin: 3px;
  padding: 3px;
  border: 2px solid hsla(44, 96%, 60%, 1);
  border-radius: 5px;
}

.schedule {
  text-align: center;
  margin: 3px;
  padding: 3px;
  border: 2px solid hsla(44, 96%, 60%, 1);
  border-radius: 5px;
}

@media (min-width: 480px) {

  .flex-container {
    flex-direction: row;
  }

  .box {
    width: 200px;
  }

  h4,
h5,
h6 {
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

h4, h6 {
  font-size: 4.2rem;
}
}

@media (min-width: 1024px) {
  .flex-container {
    flex-direction: row;
  }
  .box {
    width: 30%;
  }
}
</style>
