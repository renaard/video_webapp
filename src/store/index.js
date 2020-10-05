import Vue from 'vue';
import Vuex from 'vuex';
// import tasks from '@/components/tasks.vue';
// import Api from "@/services/api";

Vue.use(Vuex);
// Vue.use(tasks);

export const store = new Vuex.Store({
    state:{
        videos: [
            {
              id: 1,
              name: "Video1",
              description: `hellodanish`,
              name1:"Javascript",
               thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Arrow+Function.png',
               videoUrl: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
              // sources : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" ],
             
            },
            {
              id: 2,
              name: "Video2",
              description: `<p>Template strings are an incredibly useful new feature in ES2015... and you can use them in your Ember apps today!</p>
                            <p>Here are 3 cool things that template strings enable.</p>`,
                            name1:"Kotlin",
                            thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Template+Strings.png',
                            videoUrl: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/42-+ES2015+template+strings.mp4',
              
            },
            {
              id: 3,
              name: "Video3",
              description: `<p>Before modules, javascript code loading was a mess. Now it's pretty amazing.</p>
                            <p>Learn about ES2015 modules and how they work together with ember-cli.</p>`,
                            name1:"Java",
                             thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+ES2015+Modules.png',
                             videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/EmberScreencast+62+-+ES2015+Modules+-+Import%2C+Export.mp4",
              
            },
            {
              id: 4,
              name: "Video4",
              description: `<p>Promises are a tool for handling asynchronous communication, and they are commonly used in Ember applications. They’re even built in to Ember Data, route handling, and other parts of the Ember source.</p>
                            <p>This episode introduces the then, catch, and finally blocks, how to chain them together, and how to use them with either named or anonymous functions.</p>`,
                            name1:"JavaScript",
                            thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Promise+Basics.png',
                            videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/EmberScreencast+92+-+Promises+Basics.mp4",
              
            },
            {
              id: 5,
              name: "Video5",
              description: `<p>Sometimes you want to start a new promise chain or have greater control over the timing of events. By manually creating a promise, you can do that.</p>
                            <p>In this video we cover creating a new promise and resolving or rejecting the promise. We use two examples- a custom AJAX login and an Ember Data findAll request.</p>`,
                            name1:"React",
                            thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Creating+New+Promises.png',
                            videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/EmberScreencast+93+-+Creating+New+Promises.mp4",
              
            },
            {
              id: 6,
              name: "Video6",
              description: `<p>Sometimes promises have to happen in an exact order, but often there will be several calls that can be made concurrently. RSVP’s Promise implementation allows that.</p>
                            <p>In this video we show how to use the hash method, one of several methods available to do concurrent promises.</p>`,
                            name1:"Vue",
                            thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Multiple+Concurrent+Promises.png',
                            videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/EmberScreencast+95+-+Multiple+Concurrent+Promises.mp4",
             
            },
            {
              id: 7,
              name: "Video7",
              description: `<p>Destructuring is really cool, can save you code, and you’re probably already using a small portion of its power.</p>
                            <p>Learn more about this cool new ES2015/ES6 feature, including how to destructure deeply nested objects, how to use it with Ember’s import statement, and how to use it with arrays.</p>`,
                            name1:"Python",
                            thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Decorators.png',
                            videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/EmberScreencast+114+-+ES2015+Destructuring.mp4",
              
            },
            {
              id: 8,
              name: "Video8",
              description: `<p>Decorators let you easily and repeatedly add functionality to existing functions.</p>
                            <p>In this episode we go over how to use and create decorators, creating two useful decorators that demonstrate different parts of the API.</p>`,
                            name1:"Ruby",
                            thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Destructuring.png',
                            videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/EmberScreencast+115+-+ES2016+Decorators.mp4",
             
            },
            {
              id: 9,
              name: "Video9",
              description: `<p>Decorators let you easily and repeatedly add functionality to existing functions.</p>
                            <p>In this episode we go over how to use and create decorators, creating two useful decorators that demonstrate different parts of the API.</p>`,
                            name1:"C#",
                            thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                            videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/EmberScreencast+115+-+ES2016+Decorators.mp4",
             
            },
            {
              id: 10,
              name: "Video10",
              description: `<p>Decorators let you easily and repeatedly add functionality to existing functions.</p>
                            <p>In this episode we go over how to use and create decorators, creating two useful decorators that demonstrate different parts of the API.</p>`,
                            name1:"AI",
                            thumbnail: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg',
                            videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/EmberScreencast+115+-+ES2016+Decorators.mp4",
             
            }
          ],
    },
    mutations:{},
    actions:{},
    modules:{}
});