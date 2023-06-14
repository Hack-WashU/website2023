<script setup lang="ts">
</script>

<template>
    <div class-name="apply-parent">
        <img src="../assets/custom-images/apply-astronaut.svg" alt="Bear Astronaut" />
        <a href="https://example.com" class="svg-link">
            <img src="../assets/custom-images/apply-main-red-ring-planet.svg" alt="Apply to HackWashU planet">
            Link Text
        </a>
    </div>
</template>

<style scoped>

#apply-astronaut {
    position: absolute;
    width: 5; /*TODO: determine viewport width */
    height: 5; /*TODO: determine viewport height */
    left: 0;
    top: 0;
}

#apply-main-red-ring-planet {
    position: absolute;
    width: 5; /*TODO: determine viewport width */
    height: 5; /*TODO: determine viewport height */
    left: 0;
    top: 0;
}

.apply-parent {
    position: relative;
    height: 100vh; /* take full viewport height */
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