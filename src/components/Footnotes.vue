<script setup lang="ts"></script>

<template>
  <div class="footnotes">
    <div class="footnote-link" v-for="(link, index) in links" :key="index">
      <a :href="link.url" style="font-size: 2vw" target="_blank">{{
        link.text
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: "MLH Website", url: "https://mlh.io/seasons/2023/events/" },
        { text: "MLH Code of Conduct", url: "http://mlh.io/code-of-conduct" },
        { text: "MLH Privacy Policy", url: "https://mlh.io/privacy" },
      ],
    };
  },
};
</script>

<style>
/* Screen size for mobile optimization */
@media (max-width: 700px) {
  /* .footnotes {
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 5px !important;
    margin-top: 10px !important;
    width: 100%;
  }

  .footnote-link {
    margin-top: 0;
    padding-top: 0;
  } */

  .footnotes {
    margin-top: 35px !important;
  }
}

.footnotes {
  background-color: #18163d;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  font-family: Arial;
  margin-top: auto;
}

.footnote-link {
  display: inline-block;
}

.footnote-link a {
  color: #fad19d;
  text-decoration: none;
}

.footnote-link a:hover {
  text-decoration: underline;
}

#footnotes-parent {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
