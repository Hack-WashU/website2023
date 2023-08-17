<template>
  <div id="about-parent">
    <img
      src="../assets/custom-images/about/main.png"
      alt="main two planets"
      id="about-main-two-planets"
    />
    <img
      src="../assets/custom-images/about/mid-right.png"
      alt="right wavy planet"
      id="about-right-wavy-planet"
    />
    <img
      src="../assets/custom-images/about/stars-1.png"
      alt="stars"
      id="stars-1"
    />
    <img
      src="../assets/custom-images/about/stars-2.png"
      alt="stars"
      id="stars-2"
    />
  </div>
</template>

<style scoped>
/* Screen size for mobile optimization */
@media (max-width: 700px) {
  #about-parent {
    display: flex;
    position: static;
    justify-content: center;
    margin-bottom: 35vw;
  }

  #about-main-two-planets {
    margin-top: 30px;
    position: static !important;
    width: 70vw !important;
    height: 70vw !important;
  }

  #stars-1,
  #stars-2,
  #about-right-wavy-planet {
    display: none;
  }
}

#stars-2 {
  position: absolute;
  right: 30vw;
  top: 12vw;
  width: 10vw;
  height: 10vw;
}

#stars-1 {
  position: absolute;
  left: 35vw;
  top: 4vw;
  width: 7vw;
  height: 10vw;
}

#about-main-two-planets {
  position: absolute;
  right: 43vw;
  top: -2vw;
  width: 50vw;
  height: 50vw;
}

#about-right-wavy-planet {
  position: absolute;
  right: 6vw;
  top: 11vw;
  width: 17.3vw;
  height: 16vw;
}

#about-parent {
  position: relative;
  height: 40vw;
  display: flex;
}
</style>
