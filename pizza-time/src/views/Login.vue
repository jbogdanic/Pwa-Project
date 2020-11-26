<template>
  <div class="vue-tempalte" id="regForm">
    <form>
      <h1 id="middle">Sign In</h1>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit" @click="login" class="button is-light" id="btn1">Sign In</button>
    </form>
  </div>
</template>

<style scoped>
</style>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function(e){
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(
        () =>{
          alert('You are logged in as ' + this.email);
          this.$router.push('/');
        },
        err => {
          alert(err.message);
        }
      );
      e.preventDefault();
    }
  }
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
    margin-top: 25px;
}

#middle{
  text-align: center;
  padding: 25px;
}

</style>