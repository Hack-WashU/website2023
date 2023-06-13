<template>
    <div class-name="parent">
        <img src="../assets/custom-images/about-main-two-planets.svg" alt="main two planets" id="about-main-two-planets">
        <img src="../assets/custom-images/about-right-wavy-planet.svg" alt="right wavy planet" id="about-right-wavy-planet">
    </div>
</template>

<style scoped>

#about-main-two-planets {
    position: absolute;
    width: 5; /*TODO: determine viewport width */
    height: 5; /*TODO: determine viewport height */
    left: 0;
    top: 0;
}

#about-right-wavy-planet {
    position: absolute;
    width: 5; /*TODO: determine viewport width */
    height: 5; /*TODO: determine viewport height */
    left: 0;
    top: 0;
}

.parent {
    position: relative;
    width: 100vw; /* take full viewport width */
    height: 100vh; /* take full viewport height */
    overflow: hidden; /* hide overflowing content */
}

</style>