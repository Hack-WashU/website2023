<template>
    <div id="about-parent">
        <img src="../assets/custom-images/about/main.png" alt="main two planets" id="about-main-two-planets">
        <img src="../assets/custom-images/about/mid-right.png" alt="right wavy planet" id="about-right-wavy-planet">
    </div>
</template>

<style scoped>

#about-main-two-planets {
    position: absolute;
    right: 6vw;
    top: -8vw;
    width: 70vw;
    height: 70vw;
}

#about-right-wavy-planet {
    position: absolute;
    right: -16vw;
    top: 26vw;
    width: 17.3vw;
    height: 16vw;
}

#about-parent {
    flex: auto;
    position: relative;
    height: 100vh; /* take full viewport height */
    width: 80vw;
}

</style>