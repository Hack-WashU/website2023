<script setup lang="ts">
import TitleCircle from './TitleCircle.vue'
</script>

<template>
<div class="header-section">    
    <img id="planet13" src="../assets/custom-images/planet13.svg" alt="Bright yellow planet"/>
    <TitleCircle/>
    <img id="planet3" src="../assets/custom-images/planet3.svg" alt="Small blue planet"/>
    <img id="planet8" src="../assets/custom-images/planet8.svg" alt="Orange planet"/>
    <img id="planet2" src="../assets/custom-images/planet2.svg" alt="Pink and orange planet"/>
</div>
</template>

<style scoped>
#planet2 {
    position: absolute;
    width: 199px;
    height: 187px;
    left: 1300px;
    top: 533px;
}

#planet8 {
    position: absolute;
    width: 247px;
    height: 237px;
    left: 250px;
    top: 291px;
}

#planet3 {
    position: absolute;
    width: 99px;
    height: 93px;
    left: 365px;
    top: 157px;
}

#planet13 {
    /* box-sizing: border-box; */
    position: absolute;
    width: 146px;
    height: 146px;
    left: 1350px;
    top: 50;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>