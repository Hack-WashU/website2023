<script setup lang="ts"></script>

<template>
  <div id="date-parent">
    <h2 id="date-text">October 14-15, 2023</h2>
  </div>
</template>

<style scoped>
/* Screen size for mobile optimization */
@media (max-width: 700px) {
  #date-parent {
    margin-top: 1vw;
    position: static !important;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex !important;
    justify-content: center !important;
    align-items: end;
    color: #faef9a;
    margin-bottom: 3vw;
  }

  #date-text {
    z-index: 2;
    font-size: 5vw;
  }
}

#date-parent {
  display: none;
}
</style>
