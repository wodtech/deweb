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
                <v-btn icon>
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>

                <v-btn icon>
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M14.8763 0.0946312L0.390353 7.92704C-0.175333 8.23167 -0.10345 8.9698 0.45911 9.19241L3.78134 10.4988L12.7604 3.08231C12.9323 2.93879 13.1761 3.15847 13.0292 3.32543L5.50027 11.9223V14.2803C5.50027 14.9715 6.391 15.2439 6.82854 14.7431L8.81313 12.4789L12.7073 14.0079C13.1511 14.1836 13.6574 13.9229 13.7387 13.4748L15.9889 0.821048C16.0952 0.22937 15.417 -0.198279 14.8763 0.0946312Z" fill="black"/>
                  </svg>
                </v-btn>

                <v-btn icon>
                  <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M10.6149 9.025C10.6149 9.6045 10.2034 10.0795 9.68229 10.0795C9.17029 10.0795 8.74971 9.6045 8.74971 9.025C8.74971 8.4455 9.16114 7.9705 9.68229 7.9705C10.2034 7.9705 10.6149 8.4455 10.6149 9.025ZM6.34514 7.9705C5.824 7.9705 5.41257 8.4455 5.41257 9.025C5.41257 9.6045 5.83314 10.0795 6.34514 10.0795C6.86629 10.0795 7.27771 9.6045 7.27771 9.025C7.28686 8.4455 6.86629 7.9705 6.34514 7.9705ZM16 1.957V19C13.6966 16.885 14.4333 17.5851 11.7577 15.0005L12.2423 16.758H1.87429C0.841143 16.758 0 15.884 0 14.801V1.957C0 0.874 0.841143 0 1.87429 0H14.1257C15.1589 0 16 0.874 16 1.957ZM13.3943 10.963C13.3943 7.904 12.0777 5.4245 12.0777 5.4245C10.7611 4.3985 9.50857 4.427 9.50857 4.427L9.38057 4.579C10.9349 5.073 11.6571 5.7855 11.6571 5.7855C9.48532 4.54868 6.93414 4.54846 4.82743 5.51C4.48914 5.6715 4.288 5.7855 4.288 5.7855C4.288 5.7855 5.04686 5.035 6.69257 4.541L6.60114 4.427C6.60114 4.427 5.34857 4.3985 4.032 5.4245C4.032 5.4245 2.71543 7.904 2.71543 10.963C2.71543 10.963 3.48343 12.3405 5.504 12.407C5.504 12.407 5.84229 11.9795 6.11657 11.6185C4.95543 11.2575 4.51657 10.4975 4.51657 10.4975C4.65107 10.5953 4.87286 10.7221 4.89143 10.735C6.43464 11.633 8.62671 11.9272 10.5966 11.0675C10.9166 10.944 11.2731 10.7635 11.648 10.507C11.648 10.507 11.1909 11.286 9.99314 11.6375C10.2674 11.9985 10.5966 12.407 10.5966 12.407C12.6171 12.3405 13.3943 10.963 13.3943 10.963Z" fill="black"/>
                  </svg>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </div>

              <v-spacer></v-spacer>

              <v-btn class="mt-6 mt-md-0" elevation="0" rounded x-large>
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
