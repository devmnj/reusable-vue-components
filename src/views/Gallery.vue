<template>
  <b-container fluid="sm">
    <b-row>
      <b-col>
        <h3>FlipCard</h3>
        <FlipCard width="200px" height="200px"> </FlipCard>
      </b-col>
      <b-col>
        <h3>FlipCard</h3>
        <FlipCard width="200px" height="200px"> </FlipCard>
      </b-col>

      <b-col>
        <h3>Animated Card</h3>
        <FImgCard />
      </b-col>
      <b-col>
        <h3>Animated Card</h3>
        <FImgCard />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>Post Card</h3>
        <PCard />
      </b-col>
       <b-col>
        <h3>Post Card</h3>
        <PCard />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import FlipCard from "../components/FlipCard.vue";
import FImgCard from "../components/AniFeaturedImage.vue";
import PCard from "../components/PCard.vue";

export default {
  name: "Gallery",
  components: {
    FlipCard,
    FImgCard,
    PCard,
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
