<template>
<div id="portfolio" class="section">
		<div class="container">
			<div class="row" v-if="isReady">
				<div class="col-md-12">
					<h2 class="wow bounce">PORTFOLIO</h2>
				</div>
				<div class="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="1s" v-for="sample in samples">
					<div class="portfolio-thumb">
						<img :src="sample.thumb_nail" class="img-responsive" alt="portfolio img">
							<div class="portfolio-overlay">
								<h4>{{sample.title}}</h4>
								<h5>
                                    <a :href="sample.url" style="text_decoration:none; color:white">
                                        {{sample.description}}
                                    </a>
                                </h5>
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
  name: 'Portfolio',
  components: {
      samples:[]
  },
  async beforeCreate(){
    await axios.get("").then(response=>{
		this.samples = response.data;
		this.isReady = true
	});


  },
  data(){
	  return {
		  isReady: false
	  }
  }

}
</script>

<style>

</style>