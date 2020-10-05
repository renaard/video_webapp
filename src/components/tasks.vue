<template>
  <v-card width="1510px" hover>
    <h2>Videos</h2>
    <div class="home">
      <div class="video-container">
        <div v-for="video in videos" :key="video.name">
          <router-link :to="`/video/${video.id}`">
            <v-card-actions>
              <div class="video-box">
                <v-card class=" mx-auto" max-width="400">
                  <v-img
                    :src="video.thumbnail"
                    height="125"
                    width="230px"
                  ></v-img>
                  <div>
                    <br />
                    <v-card-title>{{ video.name }}</v-card-title>
                    <br />

                    <br />
                    <v-btn
                      color="#81C784"
                      small
                      @mousedown.stop
                      style="    margin-left: 10px;
    margin-bottom: 10px;"
                      >{{ video.name1 }}
                    </v-btn>
                  </div>
                </v-card>
              </div>
            </v-card-actions>
          </router-link>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "tasks",
  data() {
    return {
      videos: this.$store.state.videos,
    };
  },
};
</script>

<style lang="scss">
.video-container {
  margin-left: 32px;
  display: flex;
  flex-wrap: wrap;
  .video-box {
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    @media only screen and (max-width: 500px) {
      margin-left: 34px;
    }

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
