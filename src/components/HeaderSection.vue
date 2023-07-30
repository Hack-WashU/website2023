<script setup lang="ts">
</script>

<template>
    <div id="header-parent">
        <a id="mlh-trust-badge"
        style="display:block;position:absolute;left:5vw;top:0;width:7%;z-index:10000"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
        target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
            alt="Major League Hacking 2024 Hackathon Season" style="width:100%"></a>
        <img src="../assets/custom-images/header/mid-right.png" alt="bottom right planet" id="header-bottom-right-planet">
        <img src="../assets/custom-images/header/mid-left.png" alt="left orange medium planet" id="header-left-orange-medium-planet">
        <img src="../assets/custom-images/header/main.png" alt="main planet" id="header-main-planet">
        <img src="../assets/custom-images/header/top-left.png" alt="small left purple planet" id="header-small-left-purple-planet">
        <img src="../assets/custom-images/header/top-right.png" alt="top right small orange planet" id="header-top-right-small-orange-planet">
        <img src="../assets/custom-images/header/stars-1.png" alt="stars" id="stars-1">
        <img src="../assets/custom-images/header/stars-2.png" alt="stars" id="stars-2">
    </div>  
</template>

<style scoped>

#stars-2{
    position: absolute;
    left: 3vw;
    top: 26vw;
    width: 6vw;
    height: 6vw;
}

#stars-1{
    position: absolute;
    right: 2vw;
    top: 3vw;
    width: 8vw;
    height: 8vw;
}

#header-bottom-right-planet {
    position: absolute;
    width: 16vw; 
    height: 16vw; 
    right: 8vw;
    top: 22vw;
}


#header-left-orange-medium-planet {
    position: absolute;
    width: 17vw; 
    height: 17vw; 
    left: 6vw;
    top: 14vw;
}

#header-main-planet {
    position: absolute;
    width: 42vw;
    height: 42vw;
    left: 26vw;
    top: 3vw;
}

#header-small-left-purple-planet {
    position: absolute;
    left: 26vw;
    top: 2vw;
    width: 7vw;
    height: 7vw;
}

#header-top-right-small-orange-planet {
    position: absolute;
    right: 21vw;
    top: 1vw;
    width: 12vw;
    height: 12vw;
}

#header-parent {
    display: flex;
    position: relative;
    height: 43vw;
}
</style>
