<template>
    <b-navbar >
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }" >
                <img
                    src="https://i.ibb.co/h8jrnLf/Logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown >
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" id="btn1">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light"  >
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar> 

  
</template>



<script>
export default {
    data(){
        return {
            carousels: [
                { text: 'Slide 1', color: 'primary' },
                { text: 'Slide 2', color: 'info' },
                { text: 'Slide 3', color: 'success' },
                { text: 'Slide 4', color: 'warning' },
                { text: 'Slide 5', color: 'danger' }
            ]
        }
    }
}
</script>


<style scoped>

#btn1{
    background-color:#2ecc71;
}
</style>
