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
        answer="A hackathon is an invention marathon where students build software that fits in to event chosen categories. At Hack WashU, you can look forward to amazing prizes, engaging speakers, and tons of skilled mentors!"
        clicked="false"
      />
      <Question
        question="When is Hack WashU?"
        answer="Hack WashU will start on the morning of October 14, 2022 and end on the evening of the 15th. Early check in will be in the afternoon on Friday October 13th. Please plan on attending for the whole weekend"
      />
      <!-- <Question
        question="Who can attend Hack WashU?"
        answer=
      /> -->
      <Question
        question="Is Hack WashU in-person?"
        answer="Hack WashU will be in person. Please plan to be in St. Louis, MO for the whole weekend"
      />
      <Question
        question="Is Hack WashU free?"
        answer="YES!!! It's not just free, it rewards you! You will be able to collect swag, partake in workshops and speaker sessions, work with mentors, network with our sponsors, and more!"
      />
      <Question
        question="If I can't code, should I still come?"
        answer="YES!!! Hack WashU will be an inclusive event for all. There will be plenty of other introductory hackers just like you and it's a great opportunity to learn"
      />
      <Question question="Will there be swag?" answer="YES!!! (It's free)" />
      <Question
        question="How do teams work?"
        answer="Each team consists of a maximum of four members. Teams will be determined at the start of the hackathon. If you do not have a team coming into the event, don't worry-we will be able to match you with a team"
      />
      <Question
        question="What are tracks?"
        answer="Tracks are areas of focus that you may choose to hack in. If you submit your project to a track, you are eligible to win the track-specific prize. The three tracks we currently have are A.I., Social Connections, and Interactive Media. More tracks may be announced soon"
      />
      <Question
        question="Is there a code of conduct?"
        answer="All participants in Hack WashU will have to abide by the MLH code of conduct (linked below)"
      />
      <Question
        question="I have more questions!!"
        answer="Feel free to reach out to us at organizer@hackwashu.com!"
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
  props: ["clicked"],
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
    z-index: -2;
  }
}

#questions {
  height: fit-content !important;
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
  height: fit-content !important;
  margin-bottom: 8vw;
}
</style>
