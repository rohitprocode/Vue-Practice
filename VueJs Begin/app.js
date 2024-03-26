// const { createApp, ref } = Vue;

// createApp({
//   setup() {
//     const message = ref("Hello Rohit Welcome to Vue");
//     return {
//       message,
//     };
//   },
// }).mount("#app");

const { createApp } = Vue;

createApp({
    data(){
        return{
            message : "Hello Rohit Welcome to Vue"
        }
    }
}).mount('#app')


console.log("Vuejs Hello")