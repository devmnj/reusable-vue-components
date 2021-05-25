<template>
  <div>
    <div class="columns">
      <div class="column is-5 section">
       <p-card/>
        <h1 class="title">PostCard</h1>
        <p class="is-size-4">
          As the name indicate it can be used to show a read more.  The component come with <i>img prop</i> and a slot for content area.
          <i> slots (details)</i> and props <i>img</i>.
        </p>
        <br />
        <p class="is-size-5 has-text-danger">
          <git-footer />
        </p>
      </div>
      <div class="column section is-6">
        <h1 class="title">FImgCard</h1>
        <p class="is-size-4">
          Featured Image Card is come up with caption,image and a content section which exapnded when the user hover the mouse.
          It can be configurable using props, namely headling,content,link,caption etc.
        </p>
         <f-card/>
        <br />
        <p class="is-size-5 has-text-danger"></p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FImgCard from "@/components/AniFeaturedImage";
import PostCard from "@/components/PostCard";

// import OhVueIcon from "oh-vue-icons";

// import {
//   FaFlag,
//   RiZhihuFill,
//   MdFacebook,
//   OiOctoface,
//   BiTwitter,
//   FaWordpress,
// } from "oh-vue-icons/icons";

// OhVueIcon.add(FaFlag, RiZhihuFill, MdFacebook, OiOctoface, BiTwitter, FaWordpress);

export default {
  name: "PCard",

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
    "p-card": PostCard,
    // "v-icon": OhVueIcon,
    "f-card": FImgCard,
  },
};
</script>
