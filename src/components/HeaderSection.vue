<script setup lang="ts">
</script>

<template>
    <div id="header-parent">
        <img src="../assets/custom-images/header-mid-right.png" alt="bottom right planet" id="header-bottom-right-planet">
        <img src="../assets/custom-images/header-mid-left.png" alt="left orange medium planet" id="header-left-orange-medium-planet">
        <img src="../assets/custom-images/header-main.png" alt="main planet" id="header-main-planet">
        <img src="../assets/custom-images/header-top-left.png" alt="small left purple planet" id="header-small-left-purple-planet">
        <img src="../assets/custom-images/header-top-right.png" alt="top right small orange planet" id="header-top-right-small-orange-planet">
    </div>  
</template>

<style scoped>

#header-bottom-right-planet {
    position: absolute;
    width: 14vw; /*TODO: determine viewport width */
    height: 14vw; /*TODO: determine viewport height */
    right: 10vw;
    top: 42vw;
}

#header-left-orange-medium-planet {
    position: absolute;
    width: 17vw; /*TODO: determine viewport width */
    height: 17vw; /*TODO: determine viewport height */
    left: 3vw;
    top: 28vw;
}

#header-main-planet {
    position: absolute;
    width: 50vw;
    height: 50vw;
    left: 22vw;
    top: 12vh;
}

#header-small-left-purple-planet {
    position: absolute;
    left: 20vw;
    top: 3vw;
    width: 10vw;
    height: 10vw;
}

#header-top-right-small-orange-planet {
    position: absolute;
    right: 13vw;
    top: 10vw;
    width: 12vw;
    height: 12vw;
}

#header-parent {
    flex: auto;
    position: relative;
    height: 100vh; 
    width: 100vw;
}

</style>
