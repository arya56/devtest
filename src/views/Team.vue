<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <div class="card">
      Search:
      <input
        type="text"
        v-model="search"
        placeholder="Search title or description.."
      />
    </div>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          v-for="person in filteredList"
          :key="person.name"
        >
          <v-card flat class="text-xs-center ma-3" color="cyan">
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-responsive class="pt-4">
              balcklist
              <input
                type="checkbox"
                id="person.id"
                :value="person"
                v-model="listed"
              />
            </v-responsive>
          </v-card>
        </v-flex>
      </v-layout>
      <v-btn depressed elevation="2" large outlined text @click="goToBlack"
        >Remove</v-btn
      >
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
  computed: {
    filteredList() {
      return this.$store.state.teamList.filter(team => {
        return (
          team.name.toLowerCase().match(this.search.toLowerCase()) ||
          team.role.toLowerCase().match(this.search.toLowerCase())
        );
      });
    },
    listed: {
      set(val) {
        this.$store.state.listed = val;
      },
      get() {
        return this.$store.state.listed;
      },
    },
  },

  methods: {
    goToBlack() {
      this.$router.push('/black');
    },
  },
};
</script>
