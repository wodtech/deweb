<template>
  <v-card elevation="0" class="footer py-16 white">
    <v-container>
      <v-row no-gutters>
        <v-col
          cols="12" md="6" sm="8"
          offset-sm="4" offset-md="0"
          class="d-flex flex-column pb-md-0 pb-12 align-center align-sm-start"
        >
          <img class="logo mb-3" src="~/assets/images/light-logo.png" alt=""></img>
          <div class="body-1 text-center text-sm-left">
            Defish Games - entertainment <br>
            economy that you deserve.
          </div>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-row no-gutters>
            <v-col cols="12" sm="4" class="d-flex flex-column align-center pb-12 align-sm-start pb-sm-0">
              <div class="text-h5">company</div>
              <div class="links mt-3 d-flex flex-column align-center align-sm-start">
                <a
                  v-for="n in links.first"
                  class="body-1 my-2 black--text font-head"
                  :href="n.href"
                >{{ n.title }}</a>
              </div>
            </v-col>
            <v-col cols="12" sm="4" class="d-flex flex-column align-center pb-12 align-sm-start pb-sm-0">
              <div class="text-h5">games</div>
              <div class="links mt-3 d-flex flex-column align-center align-sm-start">
                <a
                  v-for="n in links.second"
                  class="body-1 my-2 black--text font-head"
                  :href="n.href"
                >{{ n.title }}</a>
              </div>
            </v-col>
            <v-col cols="12" sm="4" class="d-flex flex-column align-center pb-12 align-sm-start pb-sm-0">
              <div class="text-h5">community</div>
              <div class="socials mt-4 d-flex flex-wrap">
                <v-btn target="_blank" :href="social_links.twitter" icon>
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn target="_blank" :href="social_links.medium" icon>
                  <svg style="width: 24px;" width="69" height="41" viewBox="0 0 69 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M39.1312 20.732C39.1312 31.8853 30.4832 40.9268 19.8159 40.9268C9.14867 40.9268 0.5 31.8833 0.5 20.732C0.5 9.5808 9.14801 0.536591 19.8159 0.536591C30.4839 0.536591 39.1312 9.57875 39.1312 20.732Z" fill="black"/>
                    <path opacity="0.4" d="M60.3208 20.732C60.3208 31.2305 55.9968 39.7445 50.6628 39.7445C45.3288 39.7445 41.0048 31.2305 41.0048 20.732C41.0048 10.2336 45.3282 1.71959 50.6621 1.71959C55.9961 1.71959 60.3201 10.2309 60.3201 20.732H60.3208Z" fill="black"/>
                    <path opacity="0.4" d="M65.5911 37.7642C67.4673 37.7642 68.9878 30.1361 68.9878 20.732C68.9878 11.3253 67.4666 3.69988 65.5911 3.69988C63.7155 3.69988 62.195 11.326 62.195 20.732C62.195 30.1381 63.7149 37.7642 65.5911 37.7642Z" fill="black"/>
                  </svg>

                </v-btn>
                <v-btn target="_blank" :href="social_links.discord" icon>
                  <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M10.6149 9.025C10.6149 9.6045 10.2034 10.0795 9.68229 10.0795C9.17029 10.0795 8.74971 9.6045 8.74971 9.025C8.74971 8.4455 9.16114 7.9705 9.68229 7.9705C10.2034 7.9705 10.6149 8.4455 10.6149 9.025ZM6.34514 7.9705C5.824 7.9705 5.41257 8.4455 5.41257 9.025C5.41257 9.6045 5.83314 10.0795 6.34514 10.0795C6.86629 10.0795 7.27771 9.6045 7.27771 9.025C7.28686 8.4455 6.86629 7.9705 6.34514 7.9705ZM16 1.957V19C13.6966 16.885 14.4333 17.5851 11.7577 15.0005L12.2423 16.758H1.87429C0.841143 16.758 0 15.884 0 14.801V1.957C0 0.874 0.841143 0 1.87429 0H14.1257C15.1589 0 16 0.874 16 1.957ZM13.3943 10.963C13.3943 7.904 12.0777 5.4245 12.0777 5.4245C10.7611 4.3985 9.50857 4.427 9.50857 4.427L9.38057 4.579C10.9349 5.073 11.6571 5.7855 11.6571 5.7855C9.48532 4.54868 6.93414 4.54846 4.82743 5.51C4.48914 5.6715 4.288 5.7855 4.288 5.7855C4.288 5.7855 5.04686 5.035 6.69257 4.541L6.60114 4.427C6.60114 4.427 5.34857 4.3985 4.032 5.4245C4.032 5.4245 2.71543 7.904 2.71543 10.963C2.71543 10.963 3.48343 12.3405 5.504 12.407C5.504 12.407 5.84229 11.9795 6.11657 11.6185C4.95543 11.2575 4.51657 10.4975 4.51657 10.4975C4.65107 10.5953 4.87286 10.7221 4.89143 10.735C6.43464 11.633 8.62671 11.9272 10.5966 11.0675C10.9166 10.944 11.2731 10.7635 11.648 10.507C11.648 10.507 11.1909 11.286 9.99314 11.6375C10.2674 11.9985 10.5966 12.407 10.5966 12.407C12.6171 12.3405 13.3943 10.963 13.3943 10.963Z" fill="black"/>
                  </svg>
                </v-btn>

                <v-btn target="_blank" :href="social_links.linkedin" icon>
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </div>

              <v-spacer></v-spacer>

              <v-btn href="mailto:hello@worldofdefish.com" target="_blank" class="mt-6 mt-md-0" elevation="0" rounded x-large>
                <v-icon left>mdi-email</v-icon>
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
export default {
  data: () => ({
    social_links: {
      twitter: "https://twitter.com/defishgames",
      discord: "https://discord.com/invite/78EfmhUgNJ",
      medium: "https://worldofdefish.medium.com/",
      linkedin: "https://www.linkedin.com/company/world-of-defish/mycompany/",
    },
    links: {
      first: [
        {
          title: 'careers',
          href: '/careers'
        },
        {
          title: 'privacy & terms',
          href: '/terms'
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
  .socials {
    .v-btn{
      &:hover {
        color: #000000;
        svg{
          path {
            opacity: 1;
          }
        }
      }
    }
  }
}

</style>
