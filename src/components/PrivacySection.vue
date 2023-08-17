<template>
  <div id="privacy-parent">
    <img
      src="../assets/custom-images/privacy/top-left.png"
      alt="bottom right purple planet"
      id="privacy-top-left"
    />
    <img
      src="../assets/custom-images/privacy/mid-left.png"
      alt="large green planet"
      id="privacy-large-green-planet"
    />
    <img
      src="../assets/custom-images/privacy/astronaut.png"
      alt="astronaut"
      id="privacy-astronaut"
    />
    <img
      src="../assets/custom-images/privacy/stars-1.png"
      alt="stars"
      id="stars-1"
    />
    <img
      src="../assets/custom-images/privacy/stars-2.png"
      alt="stars"
      id="stars-2"
    />
    <img
      src="../assets/custom-images/privacy/stars-3.png"
      alt="stars"
      id="stars-3"
    />
    <img
      src="../assets/custom-images/privacy/stars-4.png"
      alt="stars"
      id="stars-4"
    />
  </div>
</template>

<style scoped>
/* Screen size for mobile optimization */
@media (max-width: 700px) {
  #privacy-parent {
    display: none !important;
    height: 0vw !important;
  }
}

#stars-4 {
  position: absolute;
  left: 37vw;
  top: 39.5vw;
  width: 6vw;
  height: 6vw;
}

#stars-3 {
  position: absolute;
  right: 20vw;
  top: 21vw;
  width: 8vw;
  height: 10vw;
}

#stars-2 {
  position: absolute;
  right: 7vw;
  top: 0vw;
  width: 4vw;
  height: 4vw;
}

#stars-1 {
  position: absolute;
  left: 7vw;
  top: -4vw;
  width: 7vw;
  height: 5vw;
}

#privacy-top-left {
  position: absolute;
  right: 73vw;
  top: -2vw;
  width: 18vw;
  height: 16vw;
}

#privacy-large-green-planet {
  position: absolute;
  right: 52vw;
  top: 17vw;
  width: 45vw;
  height: 36vw;
}

#privacy-astronaut {
  position: absolute;
  right: -3vw;
  top: 0vw;
  width: 40vw;
  height: 33vw;
}

#privacy-parent {
  display: flex;
  position: relative;
  height: 45vw;
}
</style>
