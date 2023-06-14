<template>
    <div id="about-parent">
        <img src="../assets/custom-images/about-main-two-planets.svg" alt="main two planets" id="about-main-two-planets">
        <img src="../assets/custom-images/about-right-wavy-planet.svg" alt="right wavy planet" id="about-right-wavy-planet">
    </div>
</template>

<style scoped>

#about-main-two-planets {
    position: absolute;
    right: 48vw;
    top: 3vw;
    width: 25vw;
    height: 25vw;
}

#about-right-wavy-planet {
    position: absolute;
    right: -16vw;
    top: 25vw;
    width: 14vw;
    height: 12vw;
}

#about-parent {
    flex: auto;
    position: relative;
    height: 100vh; /* take full viewport height */
    width: 80vw;
}

</style>