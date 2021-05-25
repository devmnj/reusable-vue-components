<template>
  <div>
    <nav
      class="is-fixed-top navbar has-background-success-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/cards">Cards</router-link>
          <router-link class="navbar-item" to="/posts">Featured</router-link>
          <!-- <router-link class="navbar-item" to="/gallery">Gallery</router-link> -->

          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div> -->
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Contact</strong>
              </a>
              <a class="button is-light" href="http://github.com/manojap/reusable-vue-components"> GitHub </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="columns">
      <div class="column has-background-inf1o is-1 is-flex">
        <sidebar bgColor="has-background-dark" style="top: 50px">
          <slot>
            <div class="sidebar-position" @click="snackbar">
              <v-icon fill="grey" name="fc-about" scale="1.8" />
              <span>Position 2</span>
            </div>
          </slot>
        </sidebar>
      </div>
      <div class="has-background-success1 section column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar.vue";
import OhVueIcon from "oh-vue-icons";
import { FcAbout } from "oh-vue-icons/icons";
OhVueIcon.add(FcAbout);

export default {
  components: {
    sidebar,
    "v-icon": OhVueIcon,
  },
  methods: {
    snackbar() {
      this.$buefy.snackbar.open(`Thank you, join me on github`);
    },
  },
};
</script>
