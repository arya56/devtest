<template>
  <div class="welcome">
    <h1 class="welcome__title">Welcome</h1>
    <p>Let's ace this assignment. Find it in the README file.</p>
    <v-btn
  depressed
  elevation="2"
  large
  outlined
  text
  @click="goToStart"
>Start Here</v-btn>
  </div>
</template>
<script>
export default {
  methods :{
    goToStart(){
   this.$router.push('/Team'); 
      }
   }
}
</script>
<style lang="scss">
.welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40vh;
}

h1 {
  margin: 0 0 0.5rem;
}

p {
  margin: 0;
}
</style>