<template>
<div id="home">
  <h1>BlackList</h1>
  <h1 class="subheading grey--text">List</h1>
    <v-container class="my-5">
      <v-layout row wrap >
          <v-flex xs12 sm6 md4 lg3 v-for="person in blackFinal" :key="person.name" >
              <v-card flat class="text-xs-center ma-3" color="cyan">
                  <v-card-text>
                    <div class="subheading">{{person.name}}</div>
                    <div class="grey--text">{{person.role}}</div>
                  </v-card-text>    
              </v-card>
          </v-flex>
      </v-layout>
    </v-container> 

</div>
</template>

<script>
export default {
   computed:{
blackFinal() {
      return this.$store.getters.myBlackList
    }
  },
  data(){
    console.log('listed',this.$store.getters.myBlackList);
    return { 
      }
      }  
 }
</script>