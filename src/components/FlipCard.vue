<template>
  <div
    :style="{ width: width, height: height }"
    :class="[  flipCardClass]"
                   
  >
    <div :class="[  flipCardInnerClass]">
      <div :style="{ background: frontCardColor }" class="flip-card-front">
        <slot name="front">
          <img src="img_avatar.png" alt="Avatar" style="width: 300px; height: 300px" />
        </slot>
      </div>
      <div class="flip-card-back" :style="{ background: backCardColor }">
        <slot name="back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @author Manoj AP <manojap@outlook.com>
 */
export default {
  name: "FlipCard",
  created() {
    console.log();
    console.log("Focused : " + this.isFocused);
  },
  data() {
    return {
      isFocused: false,
      flipClass: "flip",
      flipCardClass: "flip-card",
      flipCardInnerClass: "flip-card-inner",
    };
  },
  props: {
    frontCardColor: {
      type: String,
      default: "#ff80c0",
    },
    backCardColor: {
      type: String,
      default: "#9cbd57",
    },
    width: {
      type: String,
      default: "300px",
    },
    height: {
      type: String,
      default: "300px",
    },
  },
  watch: {
    isFocused() {
      console.log("Focused : " + this.isFocused);
    },
  },
  methods: {},
};
</script>

<style scoped>
.flip-card {
  border-radius: 115px;
  background-color: transparent;
  border: 1px solid #f1f1f1;
  perspective: 500px;
 
  /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;

  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner
 
/* Do an horizontal flip when you move the mouse over the flip box container */ {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>
