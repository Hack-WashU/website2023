<template>
    <div id="privacy-parent">
        <img src="../assets/custom-images/privacy-bottom-right-purple-planet.svg" alt="bottom right purple planet" id="privacy-bottom-right-purple-planet">
        <img src="../assets/custom-images/privacy-large-green-planet.svg" alt="large green planet" id="privacy-large-green-planet">
        <img src="../assets/custom-images/privacy-astronaut.svg" alt="astronaut" id="privacy-astronaut">
    </div>
</template>

<style scoped>

#privacy-bottom-right-purple-planet {
    position: absolute;
    right: 9vw;
    top: 34vw;
    width: 18vw;
    height: 16vw;
}

#privacy-large-green-planet {
    position: absolute;
    right: 40vw;
    top: -5vw;
    width: 36vw;
    height: 26vw;
}

#privacy-astronaut {
    position: absolute;
    right: -22vw;
    top: 8vw;
    width: 40vw;
    height: 33vw;
}


#privacy-parent {
    flex: auto;
    position: relative;
    height: 100vh; /* take full viewport height */
    width: 80vw;
}

</style>