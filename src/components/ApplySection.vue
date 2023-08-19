<script setup lang="ts"></script>

<template>
  <div id="apply-parent">
    <img
      src="../assets/custom-images/apply/astronaut.png"
      alt="Bear Astronaut"
      id="apply-astronaut"
    />
    <a href="https://wustl.az1.qualtrics.com/jfe/form/SV_9LAuwqqyOyFqwEm">
      <img
        src="../assets/custom-images/apply/main.png"
        alt="Apply to HackWashU planet"
        id="apply-main-red-ring-planet"
      />
    </a>
    <img
      src="../assets/custom-images/apply/stars-1.png"
      alt="stars"
      id="stars-1"
    />
    <img
      src="../assets/custom-images/apply/stars-2.png"
      alt="stars"
      id="stars-2"
    />
    <img
      src="../assets/custom-images/apply/stars-3.png"
      alt="stars"
      id="stars-3"
    />
  </div>
</template>

<style scoped>
/* Screen size for mobile optimization */
@media (max-width: 700px) {
  #apply-parent {
    display: flex;
    position: static;
    justify-content: center;
    margin-bottom: 35vw;
  }

  #apply-main-red-ring-planet {
    margin-top: 30px;
    position: static !important;
    width: 70vw !important;
    height: 70vw !important;
  }

  #stars-2,
  #stars-1,
  #stars-3 {
    z-index: -2;
  }
}

#stars-3 {
  position: absolute;
  left: 1.5vw;
  top: 9vw;
  width: 4vw;
  height: 4vw;
}

#stars-2 {
  position: absolute;
  left: 12vw;
  top: -2vw;
  width: 6vw;
  height: 9vw;
}

#stars-1 {
  position: absolute;
  right: 12vw;
  top: -3vw;
  width: 10vw;
  height: 12vw;
}

#apply-astronaut {
  position: absolute;
  right: 65vw;
  top: -3vw;
  width: 38vw;
  height: 32vw;
}

#apply-main-red-ring-planet {
  position: absolute;
  right: 5vw;
  top: -8vw;
  width: 50vw;
  height: 50vw;
}

#apply-parent {
  display: flex;
  position: relative;
  height: 37vw;
}
</style>
