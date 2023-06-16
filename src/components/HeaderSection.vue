<script setup lang="ts">
</script>

<template>
    <a id="mlh-trust-badge"
        style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
        target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
            alt="Major League Hacking 2024 Hackathon Season" style="width:100%"></a>
    <div id="header-parent">
        <img src="../assets/custom-images/header-bottom-right-planet.svg" alt="bottom right planet"
            id="header-bottom-right-planet">
        <img src="../assets/custom-images/header-left-orange-medium-planet.svg" alt="left orange medium planet"
            id="header-left-orange-medium-planet">
        <img src="../assets/custom-images/header-main-planet.svg" alt="main planet" id="header-main-planet">
        <img src="../assets/custom-images/header-small-left-purple-planet.svg" alt="small left purple planet"
            id="header-small-left-purple-planet">
        <img src="../assets/custom-images/header-top-right-small-orange-planet.svg" alt="top right small orange planet"
            id="header-top-right-small-orange-planet">
        <img src="../assets/custom-images/header-hack-washu.svg" alt="Hack WashU" id="header-hack-washu">
    </div>
</template>

<style scoped>
#header-bottom-right-planet {
    position: absolute;
    width: 13vw;
    /*TODO: determine viewport width */
    height: 13vw;
    /*TODO: determine viewport height */
    right: 8vw;
    top: 37vw;
}

#header-hack-washu {
    position: absolute;
    width: 20vw;
    height: 20vw;
    left: 49vw;
    top: 43vh;
}

#header-left-orange-medium-planet {
    position: absolute;
    width: 17vw;
    /*TODO: determine viewport width */
    height: 17vw;
    /*TODO: determine viewport height */
    left: 6vw;
    top: 20vw;
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
    left: 25vw;
    top: 10vw;
    width: 6.5vw;
    height: 6.5vw;
}

#header-top-right-small-orange-planet {
    position: absolute;
    right: 22.5vw;
    top: 9.3vw;
    width: 10vw;
    height: 10vw;
}

#header-parent {
    flex: auto;
    position: relative;
    height: 100vh;
    width: 100vw;
}</style>
