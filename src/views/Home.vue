<template>
  <div  class="container" align="center">
   <br /><br />
 <h2>  Plase Login Now!!</h2>
 <br /><br />
    <b-button variant="dark" @click="login"><img src="https://สอบบรรจุ.com/wp-content/uploads/2020/11/google_logo.png" ima height="70" width="250" > </b-button>
    <br /><br />
    <b-button variant="dark" @click="logout">logout</b-button>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import { auth } from '/plugins/firebaseConfig.js'
export default {
  data(){
    return{
       show1: false,
      user: {
        name: "",
        lastname: "",
        telephone: "",
        password: "",
      },
      // email:"",
      // password:""
    }
  },
  methods: {
    login() {
     const provider = new firebase.auth.GoogleAuthProvider()
      auth 
        .signInWithPopup(provider)
        .then((result) => {
         
          const credential = result.credential
       
          const token = credential.accessToken
          console.log('token=' + token)
         
          const user = result.user
          console.log('user=' + user)
          this.$router.replace('/about')
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          console.log('error=' + errorCode)
        
          //   // ...
        })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log('sign-out successful')
        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        })
    },
  },
}
</script>
<style>
</style>