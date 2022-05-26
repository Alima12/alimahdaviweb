<template>
	<div id="contact" class="section">
		<div class="container">
			<div class="row" v-if="isReady">
				<div class="col-lg-5 col-lg-offset-1 col-md-5 wow fadeInUp" data-wow-delay="0.6s">
					<address>
						<p class="contact-title">CONTACT ME</p>
						<p><i class="fa fa-phone"></i> {{contacts.phone_number}}</p>
						<p><i class="fa fa-envelope-o"></i> {{contacts.email}}</p>
						<p><i class="fa fa-map-marker"></i> {{contacts.address}}</p>
					</address>
				</div>
				<div class="col-lg-6 col-md-6 col-xs-10 wow fadeInUp" data-wow-delay="0.6s" @submit.prevent="sendMessage">
						<form role="form" method="post" action="#">
							<input v-model="name" name="name" type="text" class="form-control" id="name" placeholder="Your Name">
							<input v-model="email" name="email" type="email" class="form-control" id="email" placeholder="Your Email">
							<textarea v-model="message" name="message" rows="5" class="form-control" id="message" placeholder="Your Message"></textarea>
							<input name="send" type="submit" class="form-control" id="send" value="SEND ME">
						</form>
				</div>
				<div class="col-md-1 col-sm-1"></div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Footer',
  data(){
    return {
      contacts:{},
      isReady: false,
	  name:"",
	  email:"",
	  message:"",

    }
  },
  mounted(){
	  axios.get("generals/contact/").then(response=>{
		  this.contacts = response.data[response.data.length - 1]
      this.isReady = true
	  });

  },
  methods:{
	  sendMessage(){
		if(this.name != "" && this.email != "" && this.message != ""){
			let data = new FormData()
			data.append("name", this.name);
			data.append("email", this.email);
			data.append("message", this.message);
			axios.post("generals/message/", data).then(response=>{
				if (response.status== 201){
					this.$swal({
						title: 'Success',
						text: 'Message Sent Successfully',
						icon: 'success',
						confirmButtonText: 'Cool'
					}).then((result) => {
						if (result.isConfirmed) {
							window.scrollTo({top:0, behavior:"smooth"})
							this.message = "";
							this.name = "";
							this.email = ""
						}
					})
					
				}
			}).catch(err=>{
				this.$swal({
					title: 'Error',
					text: 'We had a problem please try again later',
					icon: 'error',
					confirmButtonText: 'ok'
				});
			})
		}
	  }
  }
}
</script>

<style>

</style>
