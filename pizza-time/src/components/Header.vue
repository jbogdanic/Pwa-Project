<template>
<div>
    <b-navbar id="nav">
        <template slot="brand">
            <b-navbar-item  >
                <img
                    src="https://i.ibb.co/h8jrnLf/Logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                 <router-link to="/">Home</router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                 <router-link to="/orderForm">Order Here</router-link>
            </b-navbar-item>
      
        </template>

 <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons" >
                    <a class="button is-primary" id="btn1">
                        <router-link to="/login">Log in</router-link>
                    </a>
                    <a class="button is-light"  >
                       <router-link to="/register">Register</router-link>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar> 
<router-view/>



</div>


  
</template>



<script>

</script>


<style scoped>

#nav{

    background-color: #1abc9c;
}

#btn1{
    background-color:#2ecc71;
}


</style>


