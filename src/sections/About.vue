<template>
	<div id="about" class="section">
			<div class="container">
				<div class="row" v-if="isReady">
					<div class="col-md-6 col-xs-11 wow fadeInLeft" data-wow-delay="0.9s">
						<h2>{{about_me.title}}</h2>
						<h4>{{about_me.short_description}}</h4>
						<p>{{about_me.text}}</p>
						
					</div>
					<div class="col-md-6 col-xs-11 wow fadeInRight" data-wow-delay="0.9s">
						<span v-for="skill in skills" class="mt-0">
							<span class="text-top">{{skill.name}} <small>{{skill.percent}}%</small></span>
							<div class="progress">
								<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="`width: ${skill.percent}%;`"></div>
							</div>
						</span>

					
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'About',
  components: {
   
  },
  data(){
	return{
		about_me:{
			title:"",
			short_description:"",
			text:"",
		},
		skills:[],
		isReady: false

	}
  },
  created(){
	axios.get("skills/").then(response=>{
		this.skills = response.data
		axios.get("generals/about/").then(response=>{
			this.about_me = response.data[response.data.length -1];
			this.isReady  = true
		})
	})

  }
}
</script>

<style>

</style>
