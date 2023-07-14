<script setup lang="ts"></script>

<template>
    <div class="footnotes">
      <div class="footnote-link" v-for="(link, index) in links" :key="index">
        <a :href="link.url" style="font-size: 3vw;" target="_blank">{{ link.text }}</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        links: [
          { text: 'MLH Website', url: 'https://mlh.io/seasons/2023/events/' },
          { text: 'MLH Code of Conduct', url: 'http://mlh.io/code-of-conduct' },
          { text: 'MLH Privacy Policy', url: 'https://mlh.io/privacy' },
        ],
      };
    },
  };
  </script>
  
  <style>

  .footnotes {
    background-color: #18163D;
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    font-family: Arial;
    margin-top: auto;
  }
  
  .footnote-link {
    display: inline-block;
  }
  
  .footnote-link a {
    color: #FAD19D;
    text-decoration: none;
  }
  
  .footnote-link a:hover {
    text-decoration: underline;
  }

  #footnotes-parent {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  </style>
  