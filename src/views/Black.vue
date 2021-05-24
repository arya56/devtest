<template>
  <div id="black">
    <h1>BlackList</h1>
    <h1 class="subheading grey--text">List</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in getList" :key="person.name">
          <v-card flat class="text-xs-center ma-3" color="cyan">
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn depressed elevation="2" large outlined text @click="goToBack"
      >Back</v-btn
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      theList: this.$store.state.teamlist,
    };
  },
  computed: {
    blackFinal() {
      return this.$store.getters.myBlackList;
    },
    getList() {
      //return this.$store.state.teamlist.include(item=>item!=this.$store.state.listed)
      return this.$store.state.listed;
    },
  },
  methods: {
    goToBack() {
      this.$router.push('/team');
    },
  },
};
</script>
