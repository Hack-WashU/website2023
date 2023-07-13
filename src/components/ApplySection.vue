<script setup lang="ts">
</script>

<template>
    <div id="apply-parent">
        <img src="../assets/custom-images/apply/astronaut.png" alt="Bear Astronaut" id="apply-astronaut"/>
        <a href="https://wustl.az1.qualtrics.com/jfe/form/SV_9LAuwqqyOyFqwEm">
            <img src="../assets/custom-images/apply/main.png" alt="Apply to HackWashU planet" id="apply-main-red-ring-planet"/>
        </a>
    </div>
</template>

<style scoped>

#apply-astronaut {
    position: absolute;
    right: 42vw;
    top: 0vw;
    width: 47vw;
    height: 40vw;
}

#apply-main-red-ring-planet {
    position: absolute;
    right: -20vw;
    top:0vw;
    width: 67vw;
    height: 62vw;
}

#apply-parent {
    flex: auto;
    position: relative;
    height: 100vh; /* take full viewport height */
    width: 80vw;
}

</style>