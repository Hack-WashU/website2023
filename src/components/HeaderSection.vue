<script setup lang="ts">
</script>

<template>
    <div class-name="parent">
        <img src="../assets/custom-images/header-bottom-right-planet.svg" alt="bottom right planet" id="header-bottom-right-planet">
        <img src="../assets/custom-images/header-left-orange-medium-planet.svg" alt="left orange medium planet" id="header-left-orange-medium-planet">
        <img src="../assets/custom-images/header-main-planet.svg" alt="main planet" id="header-main-planet">
        <img src="../assets/custom-images/header-small-left-purple-planet.svg" alt="small left purple planet" id="header-small-left-purple-planet">
        <img src="../assets/custom-images/header-top-right-small-orange-planet.svg" alt="top right small orange planet" id="header-top-right-small-orange-planet">
    </div>  
</template>

<style scoped>

#header-bottom-right-planet {
    position: absolute;
    width: 5; /*TODO: determine viewport width */
    height: 5; /*TODO: determine viewport height */
    left: 0;
    top: 0;
}

#header-left-orange-medium-planet {
    position: absolute;
    width: 5; /*TODO: determine viewport width */
    height: 5; /*TODO: determine viewport height */
    left: 0;
    top: 0;
}

#header-main-planet {
    position: absolute;
    width: 50vw;
    height: 50vw;
    left: 25vw;
    top: 11vh;
}

#header-small-left-purple-planet {
    position: absolute;
    left: 0;
    top: 0;
}

#header-top-right-small-orange-planet {
    position: absolute;
    left: 0;
    top: 0;
}

.parent {
    flex: auto;
    position: relative;
    height: 100vh; /* take full viewport height */
}

</style>
