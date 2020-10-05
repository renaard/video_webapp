<template>
<!-- <div> -->
 
  <v-container>
    <v-row>
<v-col md="9" cols="12">
  <video-player 
 ref="videoPlayer"
:options="playerOptions">
</video-player>
</v-col>
<v-col md="3" cols="12">
<h1>{{video.name}}</h1>
<br>
<div v-html="video.description"></div>
<br>
<v-btn color=#81C784 small @mousedown.stop
>{{ video.name1 }}
          </v-btn>


</v-col>
</v-row>
    </v-container>
   
</template>

<script>
import 'video.js/dist/video-js.css'

import {videoPlayer} from 'vue-video-player'

export default {
    components: {
    videoPlayer

  },
  
    computed: {
        video(){
            return this.$store.state.videos.find(vid => vid.id == this.$route.params.id)
        },
         playerOptions(){
        return{
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0, 2.5, 3.0,3.5,4.0],
          sources: [{
            type: "video/mp4",
          src:this.video. videoUrl
          }],
          poster:this.video.thumbnail,
          fluid:true
        }
    }
    }
  

}
</script>

<style>
  .video-js{
      margin: auto;
  }
</style>