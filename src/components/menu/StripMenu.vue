<template>
  <div>
    <ul class="scores">
      <slot>
        <li>
          <a class="main-link" href="#">
            <div class="item item--short">
              <slot name="menu">
                <div class="row row__header">
                  <div class="row__type">Tag</div>
                </div>
              </slot>
            </div>
            <div class="item item--long">
              <slot name="submenu">
                <div class="row row__header">
                  <div class="row__type">Tag details</div>
                </div>
              </slot>
            </div></a
          >
        </li>
      </slot>
      
    </ul>
    <!-- partial -->
  </div>
</template>

<script>
export default {
  name: "SMenu",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
/* * {
  box-sizing: border-box;
} */
h1 {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
  font-weight: 300;
  color: #aaa;
  font-size: 24px;
}
body {
  background: #eee;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: #333;
}
.scores {
  max-width: 900px;
  min-width: 800px;
  list-style: none;
  margin: auto;
  width: auto;
  height: 77px;
  padding: 0;
  box-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1);
}
.scores > li {
  position: relative;
  padding: 8px;
  background: #f7f7f7;
  border-right: solid 1px #ddd;
  border-bottom: solid 2px #666;
  float: left;
  margin: 0;
  width: 16.6666667%;
  font-size: 13px;
  height: 77px;
}
.scores > li .row {
  position: relative;
  height: 20px;
  line-height: 20px;
  margin-bottom: 2px;
}
.scores > li .row.row__header {
  font-size: 12px;
  opacity: 0.6;
  margin-bottom: 3px;
  height: 16px;
  line-height: 16px;
}
.scores > li .row__icon {
  position: absolute;
  background-image: url("https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Australia_Cricket_Cap_Insignia.svg/283px-Australia_Cricket_Cap_Insignia.svg.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.scores > li .row__icon--nz {
  /* background-image: url("https://upload.wikimedia.org/wikipedia/en/thumb/3/35/New_Zealand_Cricket_Cap_Insignia.svg/283px-New_Zealand_Cricket_Cap_Insignia.svg.png"); */
}
.scores > li .row__team,
.scores > li .row__type {
  float: left;
  width: 40%;
  padding-left: 20px;
  height: 100%;
}
.scores > li .row__type {
  padding-left: 0;
}
.scores > li .row__score,
.scores > li .row__when {
  float: right;
  width: 60%;
  text-align: right;
  height: 100%;
}
.scores > li .item--long .row,
.scores > li .item--long .row__team,
.scores > li .item--long .row__score {
  font-size: 15px;
  height: 25px;
  line-height: 25px;
}
.scores > li .item--long .row__team {
  padding-left: 25px;
}
.scores > li .item--long .row__icon {
  height: 20px;
  width: 20px;
}
.scores > li .item--long .row__header {
  height: 20px;
}
.scores > li .item--long .row__type,
.scores > li .item--long .row__when {
  height: 18px;
  line-height: 18px;
  font-size: 13px;
}
.scores > li .item--long .row__score {
  font-weight: bold;
}
.scores > li .item--long .row--summary,
.scores > li .item--long .row--venue {
  height: 16px;
  line-height: 16px;
  margin: 0;
  font-size: 13px;
  padding: 10px 0;
  text-align: center;
}
.scores > li .item--long .row--venue {
  color: #888;
  margin-top: 5px;
}
.scores > li a {
  text-decoration: none;
  color: inherit;
}
.scores > li:hover .main-link:before {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  font-size: 13px;
  line-height: 77px;
  text-align: center;
  color: #1d6bab;
  content: "VIEW DETAILS";
}
.scores > li:hover .item--long {
  display: block;
}
.scores > li:hover .item--short {
  display: none;
}
.scores > li .item--long {
  display: none;
  position: absolute;
  top: 75px;
  left: -9999px;
  right: -9999px;
  margin: auto;
  height: 150px;
  width: 250px;
  background: #fff;
  border-top: solid 3px #bd0000;
  /* border-bottom: solid 2px #BD0000 */
  padding: 10px;
  z-index: 1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
.scores > li .item--long:before {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  border: solid 8px transparent;
  width: 0;
  height: 0;
  border-bottom-color: #bd0000;
  top: -16px;
  content: "";
}
</style>
