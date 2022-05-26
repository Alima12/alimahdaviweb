<template>
		<div id="home" class="section">
			<div class="container">
				<div class="row"  v-if="isReady">
					<div class="col-md-2"></div>
					<div class="col-md-8 wow fadeIn" data-wow-delay="1s">
						<h3>{{titles.web_title}}</h3>
						<h1>{{titles.name}}</h1>
						<h2 id="my_skills" class="rotate">{{skills}}</h2>
						
						<p>{{titles.short_description}}</p>
						<a href="#work" class="btn btn-default smoothScroll wow fadeInUp" data-wow-delay="1s">Let's Go</a>
					</div>
					<div class="col-md-2"></div>
				</div>
			</div>
		</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Header',
  components: {
   
  },
  data(){
	  return{
		titles:{
			web_title:"",
			name:"",
			short_description:"",
			my_skills:[],
		},
		isReady:false,
		skills:"DESIGNER, DEVELOPER, UI UX SPECIALIST, PROJECT LEADER"
	  }
  },
  beforeCreate(){
	axios.get("generals/titles/").then(response=>{
		this.titles = response.data[response.data.length -1]
		this.make_skills(this.titles.my_skill)
		this.setBackground(this.titles.background)
		this.isReady = true;

	})
  },
  methods:{
	//   DESIGNER &AMP; DEVELOPER, UI &AMP; UX SPECIALIST, PROJECT LEADER
	  make_skills(skills){
		let s = ""
		for (let index = skills.length -1 ; index >= 0 ; index--) {
			if(index != 0){

				s += `${skills[index].name}, `;
			}
			else{
				s += `${skills[index].name}`;
			}
			
		}

		this.skills = s.toUpperCase();
		// document.querySelector("#my_skills").className="rotate"
		//   return "DESIGNER  DEVELOPER, UI, UX SPECIALIST, PROJECT LEADER"
	  },
	  setBackground(background){
		document.querySelector("#home").style.backgroundImage = `url(${background})`;
		//   background
	  }
  }
}
</script>

<style>

</style>
