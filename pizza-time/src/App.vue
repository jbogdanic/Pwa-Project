<template>
  <div id="app">
    <AddPizza/>
    <HelloWorld id="vrtuljak"/>
    <OrderForm id="formula"/>
    <podnozje/>
    
  </div>
</template>

<script>
import AddPizza from './components/AddPizza.vue'
import HelloWorld from './components/HelloWorld.vue'
import OrderForm from './components/OrderForm.vue'
import podnozje from './components/podnzje.vue'

export default {
  name: 'App',
  components: {
    AddPizza,
    HelloWorld,
    OrderForm,
    podnozje
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ecf0f1;
}

#vrtuljak{

  width: 800px;
   margin: auto;

  padding: 10px;
  padding-top: 50px;

}

#formula{

  width: 550px;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 50px;
  padding: 10px;
  padding-top: 250px;
  border: 5px solid #1abc9c;
  padding: 10px;
  border-radius: 25px;

}
</style>
