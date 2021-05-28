<template>
  <div class="columns section">
    <div class="column">
      <c-menu/>
    </div>

    <div class="column">
      <SMenu>
        <template slot="stripe1">
          <template slot="menu">
            <div>Menu1</div>
          </template>
          <template slot="submenu">
            <div>SubMenu Item</div>
          </template>
        </template>
        
      </SMenu>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { SMenu, LWave } from "../components";

export default {
  name: "Gallery",
  components: {
    SMenu,
    "c-menu": LWave,
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
