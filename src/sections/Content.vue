<template>
		<div id="work" class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-12 wow bounce">
						<h2>WHAT I DO</h2>
					</div>
                </div>  
                
                <div class="row">
					<div class="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s" v-for="work in whatIDo">
						<div class="media">
							<div class="media-object media-left">
								<i :class="`fa ${work.icon}`"></i>
							</div>
							<div class="media-body">
								<h3 class="media-heading">{{work.title}}</h3>
								<p>{{work.short_description}}</p>
							</div>
						</div>
					</div>
                    
				</div>
			</div>
		</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Content',
  components: {

  },
  data(){
	  return {
		  whatIDo:[]
	  }
  },
  mounted(){
	  axios.get("ido/").then(response=>{
		  this.whatIDo = response.data;
	  })
  }
}
</script>

<style>

</style>
