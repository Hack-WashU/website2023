<template>
    <div id="privacy-parent">
        <img src="../assets/custom-images/privacy-bottom-right.png" alt="bottom right purple planet" id="privacy-bottom-right-purple-planet">
        <img src="../assets/custom-images/privacy-mid-left.png" alt="large green planet" id="privacy-large-green-planet">
        <img src="../assets/custom-images/privacy-astronaut.png" alt="astronaut" id="privacy-astronaut">
    </div>
</template>

<style scoped>

#privacy-bottom-right-purple-planet {
    position: absolute;
    right: 17vw;
    top: 40vw;
    width: 18vw;
    height: 16vw;
}

#privacy-large-green-planet {
    position: absolute;
    right: 37vw;
    top: 12vw;
    width: 40vw;
    height: 32vw;
}

#privacy-astronaut {
    position: absolute;
    right: -20vw;
    top: 10vw;
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