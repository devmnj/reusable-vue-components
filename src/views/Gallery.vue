<template>
  <div class="columns section">
    <div class="column">
      <c-menu :selColor="col" @colPicked="changeColor"> </c-menu>
      {{ col }}
    </div>

    <div class="column" :style="{ background: col }">
    <CheckGroup/>
    <p>
    <whale-animation/>
    </p>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import { ColPicker ,CheckGroup,AWhale } from "../components";

export default {
  name: "Gallery",
  data() {
    return {
      col: "",
      counter: 0,
    };
  },
  methods: {
    changeColor(value) {
      this.col = value;
    },
    getqt(value) {
      this.counter = value;
    },
  },
  components: {
    "c-menu": ColPicker,
    'whale-animation':AWhale,
    CheckGroup
     
  },

};
</script>

<style scoped>
.cardContainer {
  position: absolute;
  left: 30px;
  top: 20px;
  text-align: center;
}
.front,
.back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #ff962d;
  /* line-height: 300px; */
  color: #03446a;
  /* text-align: center; */
  font-size: 18px;
  border-radius: 5px;
  backface-visibility: hidden;
}
.back {
  background: #d90000;
  color: white;
  transform: rotateY(180deg);
}
</style>
