# About
This project contain a set of reusable vuejs components for web development using **Bulma** CSS.  
## Demo
A [demo](https://oh-vue-components.vercel.app/) of these components is the best way to explore..
# Animation and CSS
Some of the CSS animation and other class is adapted from codepen authors and from other resources. All I do is the Vue part and Bulma. **Thanks for the awesome animation and design**

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
12. SCard      - Reusable Product Card with Picture on Top
13. OCard      - Picture with more info 
14. Sidebar    - A sidebar with opening pane
15. TextBoxes  - FBox,HBox,LBox
16. CMenu      - Circular Menu  component 
17. LWave      - A wave loader for Vue
18. ColorPicker- A simple Color Pallet
19. CheckGroup - CheckGroup
20. 404
21. CCounter   - Item counter


## How to use
How to use the component in your projects ? Donwload or clone the project and
 drag and drop components to your project. 

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
