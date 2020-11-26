<template>
  <div class="home" id="vrtuljak">
    <div class="row">
      <div class="column">
        <img src="@/assets/img1.png" alt="Nature" style="widtht: 100%" />
      </div>
      <div class="column">
        <img src="@/assets/img2.png" alt="Snow" />
      </div>
      <div class="column">
        <img src="@/assets/img3.png" alt="Mountains" />
      </div>
      <div class="column">
        <img src="@/assets/img4.png" alt="Lights" />
      </div>
    </div>

    <div class="container">
      <span onclick="this.parentElement.style.display='none'" class="closebtn"
        >&times;</span
      >
      <img id="expandedImg" style="width: 100%" />
      <div id="imgtext"></div>
    </div>

    <div id="txt">
      <h1>HOW OUR PAGE WORKS</h1>
      <br /><br /><br />

      <p>
        Our page is powered by firebase which saves our customers log in and
        register data, the order process is handled by emailJS which after
        the form is filled sends the order information as an email to the page
        owner. After that it also sends a confirmation email to the user.
      </p>
      <br /><br />
      <p>
        To order go to the Order Here page where after you input your order we
        do everything else.
      </p>
      <br /><br />
      <p>
        All our deliveries are contact-free to keep everyone healthy. All our
        orders are completely fresh out of the oven.
      </p>
      <br /><br />
    </div>
  </div>
</template>






<script>
</script>

<style>
* {
  box-sizing: border-box;
}
#txt {
  width: 50%;
  text-align: center;
  padding: 25px;
  margin: 0 auto;
}
body {
  margin: 0;
  font-family: Arial;
}

.column {
  margin-top: 25px;
  float: left;
  width: 25%;
  padding: 10px;
}

.column img {
  opacity: 0.8;
  cursor: pointer;
}

.column img:hover {
  opacity: 1;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.container {
  position: relative;
  display: none;
}
</style>