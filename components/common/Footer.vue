<template>
  <v-card elevation="0" class="footer py-16 white">
    <v-container>
      <v-row no-gutters>
        <v-col cols="6">
          <img class="logo mb-3" src="~/assets/images/light-logo.png" alt=""></img>
          <div class="body-1">
            Defish Games - entertainment <br>
            economy that you deserve.
          </div>
        </v-col>
        <v-col cols="6">
          <v-row no-gutters>
            <v-col cols="4">
              <div class="text-h5">company</div>
              <div class="links mt-3 d-flex flex-column">
                <a 
                  v-for="n in links.first" 
                  class="body-1 my-2 black--text font-head" 
                  :href="n.href"
                >{{ n.title }}</a>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="text-h5">games</div>
              <div class="links mt-3 d-flex flex-column">
                <a 
                  v-for="n in links.second" 
                  class="body-1 my-2 black--text font-head" 
                  :href="n.href"
                >{{ n.title }}</a>
              </div>
            </v-col>
            <v-col cols="4 d-flex flex-column">
              <div class="text-h5">community</div>
              <div class="socials mt-4 d-flex">
                <v-btn icon>
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-telegram</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-discord</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </div>

              <v-spacer></v-spacer>

              <v-btn elevation="0" rounded x-large>
                <v-icon left>mdi-email</v-icon>
                join discord
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    links: {
      first: [
        {
          title: 'team',
          href: '#'
        },
        {
          title: 'careers',
          href: '#'
        },
        {
          title: 'privacy & terms',
          href: '#'
        }
      ],

      second: [
        {
          title: 'world of defish',
          href: '#'
        },
        {
          title: 'tower defish',
          href: '#'
        },
      ],
    }
  }),
}
</script>

<style lang="scss" scoped>

.footer {
  .logo {
    height: 50px;
  }
}

</style>