<template>
    <div class-name="parent">
        <img src="../assets/custom-images/privacy-bottom-right-purple-planet.svg" alt="bottom right purple planet" id="privacy-bottom-right-purple-planet">
        <img src="../assets/custom-images/privacy-large-green-planet.svg" alt="large green planet" id="privacy-large-green-planet">
    </div>
</template>

<style scoped>

#privacy-bottom-right-purple-planet {
    position: absolute;
    width: 5; /*TODO: determine viewport width */
    height: 5; /*TODO: determine viewport height */
    left: 0;
    top: 0;
}

#privacy-large-green-planet {
    position: absolute;
    width: 5; /*TODO: determine viewport width */
    height: 5; /*TODO: determine viewport height */
    left: 0;
    top: 0;
}

.parent {
    flex: auto;
    position: relative;
    height: 100vh; /* take full viewport height */
}

</style>