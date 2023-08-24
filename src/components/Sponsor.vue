<template>
  <div id="faqSponsor-parent">
    <img
      src="../assets/custom-images/sponsor/sponsors.png"
      alt="sponsors"
      id="sponsors"
    />
    <img
      src="../assets/custom-images/sponsor/green-stripes.png"
      alt="striped planet"
      id="stripes"
    />
    <img
      src="../assets/custom-images/sponsor/funky-planet.png"
      alt="purple planet"
      id="purple"
    />
    <img
      src="../assets/custom-images/sponsor/stars-4.png"
      alt="stars"
      id="stars-4"
    />
    <img
      src="../assets/custom-images/sponsor/stars-5.png"
      alt="stars"
      id="stars-5"
    />
    <img
      src="../assets/custom-images/sponsor/stars-6.png"
      alt="stars"
      id="stars-6"
    />
    <img
      src="../assets/custom-images/sponsor/stars-7.png"
      alt="stars"
      id="stars-7"
    />
  </div>
</template>

<style scoped>
/* Screen size for mobile optimization */
@media (max-width: 700px) {
  #faqSponsor-parent {
    margin-top: 10vw;
    display: flex;
    position: static;
    justify-content: center;
    margin-bottom: 7vw;
    margin-left: 15px;
  }

  #sponsors {
    position: static !important;
    width: 90vw !important;
    height: 70vw !important;
  }

  #stars-4,
  #stars-5,
  #stars-6,
  #stars-7,
  #purple {
    z-index: -2;
  }

  #stripes {
    top: 50vw !important;
  }
}

#stars-7 {
  position: absolute;
  right: 10.5vw;
  top: 68.5vw;
  width: 8vw;
  height: 10vw;
}

#stars-6 {
  position: absolute;
  left: 43vw;
  top: 58vw;
  width: 11vw;
  height: 11vw;
}

#stars-5 {
  position: absolute;
  left: 5vw;
  top: 50vw;
  width: 10vw;
  height: 14vw;
}

#stars-4 {
  position: absolute;
  left: 19vw;
  top: 44vw;
  width: 13vw;
  height: 11vw;
}

#stripes {
  position: absolute;
  right: 7vw;
  top: 37.5vw;
  width: 43vw;
  height: 38vw;
}

#purple {
  position: absolute;
  right: 76vw;
  top: 22vw;
  width: 15vw;
  height: 15vw;
}

#sponsors {
  position: absolute;
  right: 0vw;
  top: 0vw;
  width: 75vw;
  height: 55vw;
}

#faqSponsor-parent {
  display: flex;
  position: relative;
  height: 83vw;
}
</style>
