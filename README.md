# About
This project contain a set of reusable vuejs components for web development using **Bulma** CSS.  

# Animation and CSS
The CSS animation and other class is adapted from codepen and from other resources. All I do is the Vue part. **Thanks for the awesome animation and design**

# Components

1.  FlipCard
2.  FImgCard   - Animated Featured Image Card
3.  PCard      - Colorfull Profile Card
4.  HSVGCard   - Hover SVG Card
5.  ImgCards   - Picture Stack Card
6.  PostCard   - Blog post Card
7.  HBox       - Boxed Animation
8.  LBox       - Line Animation
9.  FBox       - Fading Animation
10. Clash Card - Clash of the Clan style
11. Profiler   - Tween Profile picture
12  SCard      - Reusable Product Card with Picture on Top
13. OCard      - Picture with more info 

## How to use
How to use the component in your projects ? drag and drop components to your project. 

Install Bulma
````
npm i -s bulma
or
yarn add bulma
````
And enable bulma support by importing the css module in **main.js**
```
import Vue from "vue";
import App from "./App.vue";
import "bulma/css/bulma.css";
```

then you can use the components as follows

```
<template>
<div>
 <b-img  class="pt-5">
                <template slot="details">
                  <h1 class="is-size-5">Web Developer</h1>
                  <span class="icon  ">
                <i>
                 <a  href="#"> <v-icon name="md-facebook" scale="1.5" /></a>
                </i>
                <i>
                  <a  href="#"> <v-icon name="oi-octoface" scale="1.5" /></a>
                </i>
                 </span>
                </template>
  </b-img>
  </div>
</template>
  <script>
import ImgCards from '@/components/ImgCards'
 
export default {
  name: "ACards",
  ... 
  components: {
    'b-img':ImgCards,
  },
};
</script>

```

 



### More giudes and docs avaibale @ developer site
See [JavaScript Superuser](https://javascriptsu.wordpress.com).
