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
    <p 
    id="text">
    at HackWashU, you'll meet fellow hackers from around the country, learn new skills, and work alongside seasoned mentors.<br>
    <br>
    we'll have free workshops, lecture series, mentorship, prizes, games, and more.<br>
    <br>
    don't have a team, or even an idea? don't worry! we'll give you the tools to build something incredible.
    </p>

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

#text{
  position: absolute;
  right: 47vw;
  top: 17vw;
  width: 34vw;
  font-size: 2vw;
	font-family: 'Montserrat Alternates', sans-serif;
  color: #547AA5;
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
