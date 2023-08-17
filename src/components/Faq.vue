<template>
  <div id="faqSponsor-parent">
    <img src="../assets/custom-images/faq/faqLogo.png" alt="faq" id="faq" />
    <img
      src="../assets/custom-images/faq/green-planet.png"
      alt="pink planet"
      id="pink"
    />
    <img
      src="../assets/custom-images/faq/stars-1.png"
      alt="stars"
      id="stars-1"
    />
    <img
      src="../assets/custom-images/faq/stars-2.png"
      alt="stars"
      id="stars-2"
    />
    <!-- <img src="../assets/custom-images/faq/stars-3.png" alt="stars" id="stars-3"> -->

    <div id="questions">
      <Question
        question="What is a hackathon?"
        answer="A hackathon is an invention marathon where students build software around a central theme. At Hack WashU, you can look forward to amazing prizes, engaging speakers, and tons of skilled mentors!"
      />
      <Question
        question="When is Hack WashU?"
        answer="Hack WashU will start on the evening of October 15, 2022 and end on the morning of the 17th"
      />
      <Question
        question="Who can attend Hack WashU?"
        answer="Any college student in the continental United States can attend Hack WashU!"
      />
      <Question
        question="Is Hack WashU in-person?"
        answer="Hack WashU will primarily be virtual, but there will be an in-person component for WashU students"
      />
      <Question question="Is Hack WashU free?" answer="YES!!!" />
      <Question
        question="If I can't code, should I still come?"
        answer="YES!!! Hack WashU will be an inclusive event for all"
      />
      <Question question="Will there be swag?" answer="YES!!!" />
      <Question
        question="I have more questions!!"
        answer="Feel free to reach out to us at organizer@hackwashu.io!"
      />
    </div>
  </div>
</template>

<script>
import Question from "./Questions.vue";

export default {
  name: "FAQ",
  components: {
    Question,
  },
};
</script>

<style scoped>
/* Screen size for mobile optimization */
@media (max-width: 700px) {
  #questions {
    margin-top: 15vw !important;
  }

  #stars-1,
  #stars-2,
  #pink {
    display: none;
  }
}

#questions {
  position: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 0vw;
  margin-top: 12vw;
  margin-left: 5vw;
  margin-right: 5vw;
  width: 100%;
  z-index: 9999;
}

#stars-3 {
  position: absolute;
  left: 22vw;
  top: 66vw;
  width: 6vw;
  height: 6vw;
}

#stars-2 {
  position: absolute;
  left: 3vw;
  top: -8vw;
  width: 13vw;
  height: 13vw;
}

#stars-1 {
  position: absolute;
  right: 7vw;
  top: -9vw;
  width: 9vw;
  height: 8vw;
}

#pink {
  position: absolute;
  left: 4vw;
  bottom: -2vw;
  width: 16vw;
  height: 16vw;
}

#faq {
  position: absolute;
  right: 32vw;
  top: -9vw;
  width: 36vw;
  height: 26vw;
}

#faqSponsor-parent {
  display: flex;
  position: relative;
  height: 75vw;
}
</style>
