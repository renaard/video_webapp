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
export default {
    
}
</script>

<style scoped lang="scss">
@media only screen and (max-width: 600px){
    .video-container{
  .video-box{
    border: 1px solid red;
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
}

</style>