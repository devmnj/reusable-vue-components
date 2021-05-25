<template>
  <div>
    <div class="columns">
      <div class="column is-5 section">
        <pro-card />
        <h1 class="title">Profile Card</h1>
        <p class="is-size-4">
          Profile Card is a colorful card with rounded image and it have hover color.
          come with <i>content,details</i> slots
           <i> slots (details)</i> and props <i>img</i>.
        </p>
        <br />
        <p class="is-size-5 has-text-danger">
          <git-footer />
        </p>
      </div>
      <div class="column section is-6">
        <h1 class="title">HSVGCard</h1>
        <p class="is-size-4">
          This is a regular card with SVG image and have some interesting color splash.
        </p>
        <h-card />
        <br />
        <p class="is-size-5 has-text-danger"></p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PCard from "../components/PCard.vue";
import HSVGCard from "../components/HoverCard.vue";

 

export default {
  name: "Profile",

  data() {
    return {
      cardImg: new Object({
        src:
          "https://images.unsplash.com/photo-1607970420862-385a245239a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        alt: "images"
      })
    };
  },
  components: {
    "pro-card": PCard,    
     "h-card": HSVGCard
  }
};
</script>
