<template>
  <div><div class="container right-panel-active">
			<!-- Sign Up -->
			<div class="container__form container--signup">
				<form action="#" class="form" id="form1">
					<h2 class="form__title">Sign Up</h2>
					<input type="text" placeholder="User" class="input" />
					<input type="email" placeholder="Email" class="input" />
					<input type="password" placeholder="Password" class="input" />
					<button class="btn">Sign Up</button>
				</form>
			</div>

			<!-- Sign In -->
			<div class="container__form container--signin">
				<form action="#" class="form" id="form2">
					<h2 class="form__title">Sign In</h2>
					<input type="email" placeholder="Email" class="input" />
					<input type="password" placeholder="Password" class="input" />
					<a href="#" class="link">Forgot your password?</a>
					<button class="btn">Sign In</button>
				</form>
			</div>

			<!-- Overlay -->
			<div class="container__overlay">
				<div class="overlay">
					<div class="overlay__panel overlay--left">
						<button class="btn" id="signIn">Sign In</button>
					</div>
					<div class="overlay__panel overlay--right">
						<button class="btn" id="signUp">Sign Up</button>
					</div>
				</div>
			</div>
		</div></div>
</template>

<script>
export default {
  name: "SLogin",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  mounted() {
        let externalScript = document.createElement('script')
    externalScript.setAttribute('src', './script.js')
    document.head.appendChild(externalScript)
  },
};
</script>

<style lang="css" scoped>
@import url("./style.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css")

</style>