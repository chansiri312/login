<template>
  <div id="app">
  Login Success
  </div>
</template> 

<script>
import firebase from 'firebase/app'
export default {
   methods: {
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
        // ให้แสดงชื่อ email รูป
      } else {
        // No user is signed in.
        // กลับไปหน้า login
        this.$router.replace('/')
      }
    })
    
  },
}
}
</script>