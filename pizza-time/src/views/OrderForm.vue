<template>
  <div id="forma">
    <form class="contact-form" @submit.prevent="sendEmail">
      <div class="field">
        <label for="to_name">Username</label><br />
        <input type="text" name="to_name" id="to_name" required/>
      </div>
      <div class="field">
        <label for="from_name">Adress </label><br />
        <input type="text" name="from_name" id="from_name" required/><br /><br />
      </div>

      <div class="field">
        <label for="from_email">Email </label><br />
        <input type="email" name="from_email" id="from_email" value="" required/><br /><br />
      </div>

      <div class="field">
        <label for="message">Toppings</label><br />

        <input type="checkbox" name="message" id="message" value="Pepperoni" />
        <label> Pepperoni</label><br />
        <input type="checkbox" name="message" id="message" value="Mushrooms" />
        <label> Mushrooms</label><br />
        <input
          type="checkbox"
          name="message"
          id="message"
          value="Double Cheese"
        />
        <label> Extra Cheese</label><br /><br />
      </div>

      <div class="field">
        <label for="reply_to">Drinks</label><br />

        <input type="checkbox" name="reply_to" id="reply_to" value="Coke" />
        <label for="vehicle1"> Coke</label><br />
        <input type="checkbox" name="reply_to" id="reply_to" value="Sprite" />
        <label for="vehicle2"> Sprite</label><br />
        <input type="checkbox" name="reply_to" id="reply_to" value="Pepsi" />
        <label for="vehicle3"> Pepsi</label><br /><br />
      </div>
      <input type="submit" value="Send" class="button is-light" id="btn1"/>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";



export default {
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_rn3youg",
          "template_w8goenf",
          e.target,
          "user_sskM4N9KuUD4PBSJQGcmN"

          
        )
        .then(
          alert("Order completed sucessfully"),
          location.reload()
          
          ,
          (error) => {
            console.log("FAILED...", error);
          }
        );

        
    }
  },

};
</script>

<style scoped>
.contact-form {
  margin: 0 auto;
  padding: 25px;
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
#btn1 {
  background-color: #2ecc71;
}

input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


input[type="email"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>