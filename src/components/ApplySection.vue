<script setup lang="ts">
</script>

<template>
    <div class-name="parent">
        <img src="../assets/Astronaut.svg" alt="Bear Astronaut" />
        <a href="https://example.com" class="svg-link">
            <img src="../assets/custom-images/planet9.svg" alt="Link Image">
            Link Text
        </a>
    </div>
</template>

<style scoped>
.parent {
    position: relative;
    width: 100vw; /* take full viewport width */
    height: 100vh; /* take full viewport height */
    overflow: hidden; /* hide overflowing content */
}

#apply_circle {
    /* position: relative;
    width: 700px;
    height: 700px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;  */
    /*Make the background planet9.svg*/
    background-image: url("../assets/custom-images/planet9.svg");
    background-repeat: no-repeat;
  background-size: cover;
}
</style>