<template>
    <div id="about-parent">
        <img src="../assets/custom-images/about/main.png" alt="main two planets" id="about-main-two-planets">
        <img src="../assets/custom-images/about/mid-right.png" alt="right wavy planet" id="about-right-wavy-planet">
    </div>
</template>

<style scoped>

#about-main-two-planets {
    position: absolute;
    right: 40vw;
    top: -8vw;
    width: 58vw;
    height: 58vw;
}

#about-right-wavy-planet {
    position: absolute;
    right: 10vw;
    top: 20vw;
    width: 17.3vw;
    height: 16vw;
}

#about-parent {
    position: relative;
    height: 40vw; /* take full viewport height */
    display: flex;
}


</style>