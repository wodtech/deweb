<template>
  <v-card elevation="0" class="footer py-16 white">
    <v-container>
      <v-row no-gutters>
        <v-col
          cols="12" md="4" sm="8"
          offset-sm="4" offset-md="0"
          class="d-flex flex-column pb-md-0 pb-12 align-center align-sm-start"
        >
          <img class="logo mb-3" src="~/assets/images/light-logo.png" alt=""/>
          <div style="font-size: 18px" class="body-1 text-center text-sm-left">
            Defish Games - entertainment <br/>
            economy that you deserve.
          </div>
        </v-col>
        <v-col cols="12" md="8" sm="12">
          <v-row no-gutters>
            <v-col cols="12" sm="3" class="d-flex flex-column align-center pb-12 align-md-start pb-sm-0">
              <div class="text-h5">company</div>
              <div class="links mt-3 d-flex flex-column align-center align-sm-start">
                <router-link
                  v-for="n in links.terms"
                  :class="['body-1 my-2 footer-link black--text font-head', {_disabled : n.disabled}]"
                  :to="n.href"
                >{{ n.title }}</router-link>
              </div>
            </v-col>
            <v-col cols="12" sm="3" class="d-flex flex-column align-center pb-12 align-md-start pb-sm-0">
              <div class="text-h5">about us</div>
              <div class="links mt-3 d-flex flex-column align-center align-sm-start">
                <router-link
                  v-for="n in links.first"
                  :class="['body-1 my-2 footer-link black--text font-head', {_disabled : n.disabled}]"
                  :to="n.href"
                >{{ n.title }}</router-link>
              </div>
            </v-col>
            <v-col cols="12" sm="3" class="d-flex flex-column align-center pb-12 align-md-start pb-sm-0">
              <div class="text-h5">games</div>
              <div class="links mt-3 d-flex flex-column align-center align-sm-start">
                <router-link
                  v-for="n in links.second"
                  :class="['body-1 my-2 footer-link black--text font-head', {_disabled : n.disabled}]"
                  :to="n.href"
                >{{ n.title }}</router-link>
              </div>
            </v-col>
            <v-col cols="12" sm="3" class="d-flex flex-column align-center pb-12 align-md-start pb-sm-0">
              <div class="text-h5">community</div>
              <DefishLinks class="mt-4" />
              <v-spacer></v-spacer>
              <v-btn href="mailto:hello@worldofdefish.com" target="_blank" class="mt-6 mt-md-0" elevation="0" rounded x-large>
                <v-icon class="mr-1" left>mdi-email</v-icon>
                send email
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import DefishLinks from "../common/DefishLinks";

export default {
  components: {
    DefishLinks
  },
  data: () => ({
    links: {
      terms: [
        {
          title: 'terms of use',
          href: '/terms',
        },
        {
          title: 'privacy',
          href: '/privacy'
        }
      ],
      first: [
        {
          title: 'careers',
          href: '/careers',
          disabled: true
        },
        {
          title: 'blog',
          href: '/blog'
        }
      ],

      second: [
        {
          title: 'world of defish',
          href: '/game-wod',
        },
        {
          title: 'tower defish',
          href: '/game-td'
        },
      ],
    }
  }),
}
</script>

<style lang="scss" scoped>

.footer {
  .logo {
    height: auto;
    width: 200px;
  }
  .footer-link{
    font-size: 18px;
    color: black;
    text-decoration: none;
  }
}

</style>
