<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>Videos</h1>
    <div class="video-container">
      <div v-for="video in videos" :key="video.name">
          <router-link :to="`/video/${video.id}`">
          <!-- <router-link :to="{name:'video-watch',params :{id:video.id}}"> -->
        <div class="video-box">
          <img :src="video.thumbnail" />
          <div>
            <h3>{{ video.name }}</h3>
            <div v-html="video.description"></div>
          </div>
        </div>
        </router-link>
      </div>
      
    </div>
  </div>
</template>


<script>
// import api from '@/services/api' ;

 export default {
    name:"tasks" ,
//     mounted() {
// //       api().get('/videos').then((response)=>{
// //       this.videos = response.data;
      
//        this.loadvideos();
// //   })
//     },
//     methods: {
//         async loadvideos(){
//             let response=await api().get('/videos');
//             this.videos=response.data;
//         }
    //  },
    data() {
    return {
    //  videos: []
    // to load the videos
    videos:this.$store.state.videos
    
    }
    } 
}
</script>

<style scoped lang="scss">
.video-container{
  .video-box{
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;

    text-align: left;
      display: flex;
      justify-content: flex-start;
      img {
        width: 200px;
        padding: 10px;
      }
  }
}
</style>