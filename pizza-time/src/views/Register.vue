<template>
  <div class="vue-tempalte" id="regForm">
    <form>
      <h3 id="middle">Sign Up</h3>

      <div class="form-group">
        <label>Name</label><br />
        <input type="text" v-model="name" id="username" required />
      </div>

      <div class="form-group">
        <label>Email address</label><br />
        <input type="email" v-model="email" id="email" required />
      </div>

      <div class="form-group">
        <label>Password</label><br />
        <input type="password" v-model="password" id="password" required />
      </div>

      <div class="form-group">
        <label>Retype Password</label><br />
        <input
          type="password"
          v-model="repassword"
          id="reenterpassword"
          required
        />
      </div>

      <div v-if="password != repassword" class="text-danger">
        Passwords dont match!
      </div>

      <button type="submit" @click="register"  class="button is-light" id="btn1">Sign Up</button>

      
    </form>
    <p class="forgot-password text-right" id="middle">
        Already registered
        <router-link to="/login">Log in</router-link>
      </p>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      repassword: "",
    };
  },
  methods: {
    register: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
    console.log(user.user);
    this.$router.push('/');
  })
  
    },
  },
};
</script>


<style scoped>

#regForm{
  
  margin: 0 auto;
  padding:25px;
  margin-top: 150px;
  margin-bottom: 150px;
  border: #00b894;
  background-color: white;
  font-family: sans-serif;
  border-radius: 20px;
  border-width: 5px;
  border-style: solid;
  width: 35%;
  text-align: left;
}

form{
  text-align: left;
}
input, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

#btn1{
    background-color:#2ecc71;
    width: 100%;
    padding-top: 25px;
}

#middle{
  text-align: center;
  padding: 25px;
}

</style>


