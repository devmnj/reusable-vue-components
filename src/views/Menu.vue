<template>
  <div>
    <div class="columns">
      <div class="column is-5 section">
        <h1 class="title">CMenu</h1>
        <p class="is-size-4">
          CMenu or Circular Menu is a component with pure CSS animation. The 
          menu contains 5 buttons which user can customize.
        </p>
        <br />
        <p class="is-size-5 has-text-danger">
          <git-footer />
        </p>
      </div>
      <div class="column section is-6">
        <c-menu/>
           
        <h1 class="title"></h1>
        <p class="is-size-4">
        </p>
        <br />
        <p class="is-size-5 has-text-danger"></p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {CMenu} from "../components";

 

export default {
  name: "Menu",

  data() {
    return { 
    };
  },
  components: {
   'c-menu':CMenu,
  }
};
</script>
