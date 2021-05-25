<template>
  <div>
    <div class="columns">
      <div class="column is-5 section">
        <b-img :img="cardImg" class="pt-5">
          <template slot="details">
            <h1 class="is-size-5">Web Developer</h1>
            <span class="icon">
              <i>
                <a href="#"> <v-icon name="md-facebook" scale="1.5" /></a>
              </i>
              <i>
                <a href="#"> <v-icon name="oi-octoface" scale="1.5" /></a>
              </i>
              <i>
                <a href="#"> <v-icon name="bi-twitter" scale="1.5" /></a>
              </i>
              <i>
                <a href="#"> <v-icon name="fa-wordpress" scale="1.5" /></a> </i
            ></span>
          </template>
        </b-img>
        <h1 class="title">ImgCards</h1>
        <p class="is-size-4">
          This is a Image Card for showing contacts links. The component have stack card effect. 
          ImgCards come with
          <i> slots (details)</i> and props <i>img</i>.
        </p>
        <br />
        <p class="is-size-5 has-text-danger">
          <git-footer />
        </p>
      </div>
      <div class="column section is-5">
        <h1 class="title">OCard</h1>
        <p class="is-size-4">
          This a image Card with opening action, the component built with
          <i>two slots (details,img)</i>. Users can manually set the template for image and details
          detail section.
        </p>
        <o-card class="pt-3">
          <template slot="img">
            <div class="image is-rounded">
              <img
                src="https://images.unsplash.com/flagged/photo-1576076873449-f9530e1c50f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              />
            </div>
          </template>

          <template slot="details">
            <h1>Architect</h1>
            <p>
              Lorem ipsum is simple dummy text on the printing and typesetting industry.
            </p>
            <ul>
              <i>
                <a href="#"> <v-icon name="md-facebook" scale="1.5" /></a>
              </i>
              <i>
                <a href="#"> <v-icon name="oi-octoface" scale="1.5" /></a>
              </i>
              <i>
                <a href="#"> <v-icon name="bi-twitter" scale="1.5" /></a>
              </i>
            </ul>
          </template>
        </o-card>
        <br />
        <p class="is-size-5 has-text-danger"></p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImgCards from "@/components/ImgCards";
import OCard from "@/components/OCard";

import OhVueIcon from "oh-vue-icons";

import {
  FaFlag,
  RiZhihuFill,
  MdFacebook,
  OiOctoface,
  BiTwitter,
  FaWordpress,
} from "oh-vue-icons/icons";

OhVueIcon.add(FaFlag, RiZhihuFill, MdFacebook, OiOctoface, BiTwitter, FaWordpress);

export default {
  name: "ACards",

  data() {
    return {
      cardImg: new Object({
        src:
          "https://images.unsplash.com/photo-1607970420862-385a245239a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        alt: "images",
      }),
    };
  },
  components: {
    "b-img": ImgCards,
    "v-icon": OhVueIcon,
    "o-card": OCard,
  },
};
</script>
