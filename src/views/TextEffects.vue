<template>
  <div>
    <div class="columns">
      <div class="column is-3 section">
        <h-box />
        <h1 class="title">HBox</h1>
        <p class="is-size-4">
          HBox can be used to  details of a card. It comes with two slots , content and hcontent.
        </p>
        <br />
        <p class="is-size-5 has-text-danger">
          <git-footer />
        </p>
      </div>
      <div class="column section is-3">
        <h1 class="title">FBox</h1>
        <p class="is-size-4">
          FBox shows a hidden content with fade out animation.
        </p>
        <f-box />
        <br />
        <p class="is-size-5 has-text-danger"></p>
      </div>
       <div class="column section is-3">
        <h1 class="title">LBox</h1>
        <p class="is-size-4">
          This component reveals hidden content with line animation
        </p>
        <l-box />
        <br />
        <p class="is-size-5 has-text-danger"></p>
      </div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HBox from "../components/HBox.vue";
import FBox from "../components/FBox.vue";
import LBox from "../components/LBox.vue";

 

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
    "h-box": HBox,    
     "f-box":FBox ,
     "l-box":LBox
  }
};
</script>
