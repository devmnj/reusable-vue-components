<template>
  <div
    id="sidebar"
    :class="['sidebar', 'sidebar', bgColor, { 'sidebar--open': isOpened }]"
  >
    <div
      v-if="isClosed == true"
      id="trigger"
      @click="(isOpened = true), (isClosed = false)"
      :class="['mt-3', 'trigger', 'has-text-centered']"
    >
      <v-icon fill="grey" name="gi-hamburger-menu" scale="1.5" />
    </div>

    <div
      v-if="isOpened == true"
      id="trigger"
      @click="(isClosed = true), (isOpened = false)"
      :class="['mt-3', 'trigger', 'has-text-centered']"
    >
      <v-icon fill="grey" name="fa-window-close" scale="1.5" />
    </div>

    <slot>
      <div class="sidebar-position">
        <v-icon fill="grey" name="fa-address-card" scale="1.8" />
        <span>Position 2</span>
      </div>
      <div class="sidebar-position">
        <v-icon fill="grey" name="fa-address-card" scale="1.8" />
      </div>
    </slot>
  </div>
</template>

<script>
import OhVueIcon from "oh-vue-icons";
import {
  FaWindowClose,
  FaAddressCard,
  BiBasket3,
  BiBatteryFull,
  GiHamburgerMenu,
  IoHome,
  FaHamburger
} from "oh-vue-icons/icons";
OhVueIcon.add(
  FaWindowClose,
  FaAddressCard,
  GiHamburgerMenu,
  BiBatteryFull,
  BiBasket3,
  IoHome,
  FaHamburger
);

export default {
  props: {
    bgColor: {
      type: String,
      default: "has-background-white"
    }
  },
  name: "sidebar",
  created() {},
  data() {
    return {
      isOpened: false,
      isClosed: true
    };
  },

  components: {
    "v-icon": OhVueIcon
  }
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  width: 50px;
  height: 100%;
  /* background-color: #2a363b; */
  transition: all 0.5s ease;
  border-right: 1px #f9fafb solid;
}
.sidebar .sidebar-position {
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 4px;
}
.sidebar .sidebar-position:hover {
  background-color: #a7b1fa;
  border-right: 5px #e84a5f solid;
}

.sidebar i {
  color: #e84a5f;
  min-width: 25px;
  text-align: center;
}

.sidebar span {
  width: 0;
  height: 0;
  opacity: 0;
  padding: 0 15px;
  transition: width 0.5s ease;
  color: #c9c9c9;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sidebar--open {
  width: 250px;
}
.sidebar--close {
  width: 25px;
}
.sidebar--open .sidebar-position span {
  display: block;
  width: 100%;
  height: auto;
  opacity: 1%;
  transition: all 0.5s ease, opacity 0.5s ease 0.5s;
}

.trigger {
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 12px 15px;
}
</style>
