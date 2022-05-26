<template>
	<div id="fullpage">
		<!-- start home -->
        <Header />
		<!-- end home -->

		<!-- start work -->
        <Content />
		<!-- end work -->

		<!-- start about -->
        <About />
		<!-- end about -->

		<!-- start portfolio -->
		
		<Portfolio />
	<!-- </div> -->
	<!-- end portfolio -->

		<!-- start contact -->
		<Footer />
		<!-- end contact -->

		<!-- start footer -->
		<Social />

		<!-- end footer -->

	</div>
</template>

<script>
import Header from "./Header.vue"
import Content from "./Content.vue"
import About from "./About.vue"
import Loading from 'vue-loading-overlay';
import Portfolio from "./Portfolio"
import Footer from './Footer';
import SocialMedia from "./SocialMedia"
import 'sweetalert2/dist/sweetalert2.min.css';

export default {
  name: 'Container',
  components: {
	Header,
	Content,
	About,
	Loading,
	Portfolio,
	Footer,
	Social:SocialMedia

  },
  data(){
	  return{
		isLoading: true,
		fullPage: true,
		contacts:{
			phone_number:"",
			email:"",
			address:""
		}
	  }
  },
}
</script>

<style>

</style>



