<script setup lang="ts">
</script>

<template>
    <div id="apply-parent">
        <img src="../assets/custom-images/apply-astronaut.svg" alt="Bear Astronaut" id="apply-astronaut"/>
        <a href="https://wustl.az1.qualtrics.com/jfe/form/SV_9LAuwqqyOyFqwEm">
            <img src="../assets/custom-images/apply-main-red-ring-planet.svg" alt="Apply to HackWashU planet" id="apply-main-red-ring-planet"/>
            <img src="../assets/custom-images/apply-apply.svg" alt="apply" id="apply-apply"/>
        </a>
        <img src="../assets/custom-images/apply-heart-box.svg" alt="heart box" id="apply-heart-box"/>
    </div>
</template>

<style scoped>

#apply-astronaut {
    position: absolute;
    right: 46vw;
    top: 8vw;
    width: 40vw;
    height: 40vw;
}

#apply-main-red-ring-planet {
    position: absolute;
    right: -27vw;
    top: 4vw;
    width: 67vw;
    height: 62vw;
}

#apply-heart-box {
    position: absolute;
    right: 43vw;
    top: 5vw;
    width: 15vw;
    height: 15vw;
}

#apply-apply{
    position: absolute;
    right: -6vw;
    top: 16vw;
    width: 25vw;
    height: 25vw;
}

#apply-parent {
    flex: auto;
    position: relative;
    height: 100vh; /* take full viewport height */
    width: 80vw;
}

</style>