<template>
  <div id="divTracks-parent">
    <div id="divisions-parent">
      <img
        src="../assets/custom-images/divTracks/divisions.png"
        alt="divisions"
        id="divisions"
      />
    </div>
    <img
      src="../assets/custom-images/divTracks/purple-planet.png"
      alt="purple planet"
      id="purple-planet"
    />
    <img
      src="../assets/custom-images/divTracks/mid-right.png"
      alt="orange planet"
      id="orange-planet"
    />
    <div id="tracks-parent">
      <img
        src="../assets/custom-images/divTracks/tracks.png"
        alt="tracks"
        id="tracks"
      />
    </div>
    <img
      src="../assets/custom-images/divTracks/bot-right.png"
      alt="shiny orange planet"
      id="shiny-orange-planet"
    />
    <img
      src="../assets/custom-images/divTracks/stars-1.png"
      alt="stars"
      id="stars-1"
    />
    <img
      src="../assets/custom-images/divTracks/stars-2.png"
      alt="stars"
      id="stars-2"
    />
    <img
      src="../assets/custom-images/divTracks/stars-3.png"
      alt="stars"
      id="stars-3"
    />
  </div>
</template>

<style scoped>
/* Screen size for mobile optimization */
@media (max-width: 700px) {
  #divTracks-parent {
    display: block !important;
    margin-bottom: 38vw;
  }

  #divisions-parent {
    display: flex;
    justify-content: center;
    margin-bottom: 0vw;
  }

  #tracks-parent {
    display: flex;
    justify-content: center;
  }

  #divisions {
    margin-top: 20px;
    margin-left: 10px;
    position: static !important;
    width: 80vw !important;
    height: 60vw !important;
  }

  #tracks {
    margin-top: 20px;
    margin-left: 10px;
    position: static !important;
    width: 80vw !important;
    height: 60vw !important;
  }

  #stars-1,
  #stars-2,
  #stars-3,
  #purple-planet,
  #orange-planet,
  #shiny-orange-planet {
    display: none;
  }
}

#stars-3 {
  position: absolute;
  left: 4vw;
  top: 62vw;
  width: 9vw;
  height: 9vw;
}

#stars-2 {
  position: absolute;
  left: 28vw;
  top: 47vw;
  width: 12vw;
  height: 13vw;
}

#stars-1 {
  position: absolute;
  right: 18vw;
  top: 32vw;
  width: 8vw;
  height: 8vw;
}

#orange-planet {
  position: absolute;
  right: 26.5vw;
  top: 33vw;
  width: 17vw;
  height: 17vw;
}

#purple-planet {
  position: absolute;
  right: 8vw;
  top: -1vw;
  width: 22vw;
  height: 22vw;
}

#divisions {
  position: absolute;
  right: 33vw;
  top: 3vw;
  width: 64vw;
  height: 40vw;
}

#tracks {
  position: absolute;
  right: 0vw;
  top: 49vw;
  width: 66vw;
  height: 45vw;
}

#shiny-orange-planet {
  position: absolute;
  right: 60vw;
  top: 63vw;
  width: 29vw;
  height: 29vw;
}

#divTracks-parent {
  display: flex;
  position: relative;
  height: 102vw;
}
</style>
