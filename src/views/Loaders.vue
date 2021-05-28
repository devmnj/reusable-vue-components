<template>
  <div>
    <div class="columns">
      <div class="column is-5 section">
        
        <h1 class="title">Wave Loader</h1>
        

        <p class="is-size-4">
          This is a experimental wave loader with one prop, <i>text</i>. Users can use
          v-if clause to disbale the loader.
        </p>
        <br />
        
        <p class="is-size-5 has-text-danger">
          <git-footer />
        </p>
      </div>
      <div class="column section is-6">
        <h1 class="title"></h1>
        <div class="section">
        <w-loader class=""/>

        </div>
        <br />
        <p class="is-size-5 has-text-danger"></p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {LWave} from "../components";

 

export default {
  name: "Loaders",

  data() {
    return {
       
    };
  },
  components: {
    "w-loader": LWave,    
  }
};
</script>
