<template>
  <div class="container" :class="{ active_container: showAnswer }">
    <button
      @click="showAnswer = !showAnswer"
      :class="{ active_button: showAnswer, initial_button: !showAnswer }"
    >
      <img
        src="../assets/custom-images/faq/faq-stars-2.png"
        alt="faq"
        id="faq"
      />
      <h2>{{ this.question }}</h2>
    </button>
    <br />
  </div>
  <div class="ans" v-show="showAnswer">
    <p>{{ this.answer }}</p>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ["question", "answer"],
  data() {
    return {
      showAnswer: false,
    };
  },
};
</script>

<style scoped>
/* Screen size for mobile optimization */
@media (max-width: 700px) {
  h2 {
    font-size: 4vw !important;
  }
  p {
    font-size: 3vw !important;
    line-height: 10px;
  }
}
.ans {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
}

.ans > p {
  width: 60%;
  text-align: center;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: 4vw;
  width: 4vw;
  padding-right: 1vw;
}

button {
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  border-radius: 1vw;
  cursor: pointer;
  margin: 0.4vw;
}

h2 {
  color: yellow;
  text-align: center;
  font-size: 2.2vw;
  margin-right: 1vw;
}

p {
  text-align: left;
  color: white;
  font-size: 1.5vw;
}
</style>
