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
        <h3>Hovered SVG</h3>
        <HSVGCard title="Test Ttitle" bgColor="#9bf881" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>Post Card</h3>
        <PCard />
      </b-col>
      <b-col>
        <h3>Read More Card</h3>
        <PostCard />
      </b-col>
      <b-col>
        <h3>Post Card</h3>
        <ImgCards />
      </b-col>
      <b-row>
        <b-col>
          <HBox />
        </b-col>
        <b-col>
          <FBox />
        </b-col>
        <b-col>
          <LBox />
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <Profiler />
        </b-col>
        <b-col>
          <SCard />
        </b-col>
        <b-col>
          <OCard />
        </b-col>
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import FlipCard from "../components/FlipCard.vue";
import FImgCard from "../components/AniFeaturedImage.vue";
import PCard from "../components/PCard.vue";
import HSVGCard from "../components/HoverCard";
import PostCard from "../components/PostCard";
import ImgCards from "../components/ImgCards.vue";
import FBox from "../components/FBox.vue";
import HBox from "../components/HBox.vue";
import LBox from "../components/LBox.vue";
import Profiler from "../components/Profiler.vue";
import SCard from "../components/SCard.vue";
import OCard from "../components/OCard.vue";

export default {
  name: "Gallery",
  components: {
    FlipCard,
    FImgCard,
    PCard,
    HSVGCard,
    PostCard,
    ImgCards,
    SCard,
    OCard,
    HBox,
    LBox,
    FBox,
    Profiler
  }
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
