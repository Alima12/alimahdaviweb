<template>
    <footer>
        <div class="container">
            <div class="row" v-if="isReady">
                <div class="col-md-12 wow fadeIn" data-wow-delay="0.9s">
                    <p>Copyright &copy; 2018 Lavish Personal Profile 
                    . Designed by <a rel="nofollow noopener" href="https://templatemo.com">templatemo</a></p>
                    <hr>
                    <ul class="social-icon">
                        <li v-for="item in media">
                            <a :href="item.url" :class="item.icon"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import axios from "axios"
export default {
  name: 'SocialMedia',
  components: {
   
  },
  data(){
    return {
      media:[],
      isReady: false
    }
  },
  mounted(){
	  axios.get("generals/social/").then(response=>{
		this.media = response.data
        this.isReady = true
	  });

  },
}
</script>

<style>

</style>
