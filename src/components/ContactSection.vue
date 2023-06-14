<template>
    <div class-name="parent">
        <img src="../assets/custom-images/contact-left-big-pink-planet.svg" alt="left big pink planet" id="contact-left-big-pink-planet">
        <img src="../assets/custom-images/contact-main-orange-bear-planet.svg" alt="main orange bear planet" id="contact-main-orange-bear-planet">
    </div>
</template>

<style scoped>

#contact-left-big-pink-planet {
    position: absolute;
    width: 5; /*TODO: determine viewport width */
    height: 5; /*TODO: determine viewport height */
    left: 0;
    top: 0;
}

#contact-main-orange-bear-planet {
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