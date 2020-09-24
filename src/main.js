import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import Helloworld from "./components/HelloWorld.vue";
import tasks from "./components/tasks.vue";
import video from "./components/video.vue";
import responsive from "./components/responsive.vue";
import {store} from "./store/index.js";
// import VueVideoPlayer from 'vue-video-player'
 
// // require videojs style
// import 'video.js/dist/video-js.css'



Vue.use(VueRouter);
// Vue.use(VueVideoPlayer);

Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {path:'/', component:tasks},
    // {path:'/video/:name',component:Helloworld},
    {path:'/video/:id',component:video,name:"video-watch",params:true}

  ],
});

new Vue({
  router,
  store,
  responsive,
  render: h => h(App),
}).$mount('#app') 
