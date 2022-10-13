<template>
  <v-card :color="bg ? bg : 'transparent'" dark elevation="0" class="header d-flex">

    <div class="back" ref="back"></div>

    <v-container class="py-4 d-flex align-center --posr">
      <nuxt-link
        tag="img"
        class="logo"
        :src="require('~/assets/images/full-logo.png')"
        to="/">
      </nuxt-link>


      <div class="menu-btns d-flex flex-grow-1 px-10">

        <v-hover
          @input="onHoverChange($event, i)"
          v-for="(n, i) in menu"
          :key="n.title"
          v-slot="{ hover }"
        >
          <div class="drop-container d-md-flex d-none mr-1 mr-lg-10" :class="`num-${i}-drop`">
            <v-btn rounded text :to="n.href" :nuxt="n.is_nuxt">
              {{ n.title }}
              <v-icon v-if="hover" right>mdi-menu-down</v-icon>
              <v-icon v-else right>mdi-menu-up</v-icon>
            </v-btn>

            <div
              class="drop-down d-flex flex-column align-center pt-5"
            >
              <a v-for="z in n.links" class="lnk body-1 mb-2" :href="z.href">{{ z.title }}</a>
            </div>
          </div>
        </v-hover>

        <v-btn to="/for-developers" nuxt rounded class="d-md-flex d-none" text>
          for developers
        </v-btn>
      </div>

      <div class="socials d-none d-sm-flex">
        <v-btn icon>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>

        <v-btn icon>
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M14.8763 0.0946312L0.390353 7.92704C-0.175333 8.23167 -0.10345 8.9698 0.45911 9.19241L3.78134 10.4988L12.7604 3.08231C12.9323 2.93879 13.1761 3.15847 13.0292 3.32543L5.50027 11.9223V14.2803C5.50027 14.9715 6.391 15.2439 6.82854 14.7431L8.81313 12.4789L12.7073 14.0079C13.1511 14.1836 13.6574 13.9229 13.7387 13.4748L15.9889 0.821048C16.0952 0.22937 15.417 -0.198279 14.8763 0.0946312Z" fill="white"/>
          </svg>
        </v-btn>

        <v-btn icon>
          <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M10.6149 9.025C10.6149 9.6045 10.2034 10.0795 9.68229 10.0795C9.17029 10.0795 8.74971 9.6045 8.74971 9.025C8.74971 8.4455 9.16114 7.9705 9.68229 7.9705C10.2034 7.9705 10.6149 8.4455 10.6149 9.025ZM6.34514 7.9705C5.824 7.9705 5.41257 8.4455 5.41257 9.025C5.41257 9.6045 5.83314 10.0795 6.34514 10.0795C6.86629 10.0795 7.27771 9.6045 7.27771 9.025C7.28686 8.4455 6.86629 7.9705 6.34514 7.9705ZM16 1.957V19C13.6966 16.885 14.4333 17.5851 11.7577 15.0005L12.2423 16.758H1.87429C0.841143 16.758 0 15.884 0 14.801V1.957C0 0.874 0.841143 0 1.87429 0H14.1257C15.1589 0 16 0.874 16 1.957ZM13.3943 10.963C13.3943 7.904 12.0777 5.4245 12.0777 5.4245C10.7611 4.3985 9.50857 4.427 9.50857 4.427L9.38057 4.579C10.9349 5.073 11.6571 5.7855 11.6571 5.7855C9.48532 4.54868 6.93414 4.54846 4.82743 5.51C4.48914 5.6715 4.288 5.7855 4.288 5.7855C4.288 5.7855 5.04686 5.035 6.69257 4.541L6.60114 4.427C6.60114 4.427 5.34857 4.3985 4.032 5.4245C4.032 5.4245 2.71543 7.904 2.71543 10.963C2.71543 10.963 3.48343 12.3405 5.504 12.407C5.504 12.407 5.84229 11.9795 6.11657 11.6185C4.95543 11.2575 4.51657 10.4975 4.51657 10.4975C4.65107 10.5953 4.87286 10.7221 4.89143 10.735C6.43464 11.633 8.62671 11.9272 10.5966 11.0675C10.9166 10.944 11.2731 10.7635 11.648 10.507C11.648 10.507 11.1909 11.286 9.99314 11.6375C10.2674 11.9985 10.5966 12.407 10.5966 12.407C12.6171 12.3405 13.3943 10.963 13.3943 10.963Z" fill="white"/>
          </svg>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </div>
      <slot></slot>
    </v-container>

  </v-card>
</template>

<script>
import Anime from 'animejs'
export default {
  data: () => ({
    menu: [
      {
        title: 'games',
        links: [
          {
            title: 'world of defish',
            href: '/game-wod',
            is_nuxt: true,
          },
          {
            title: 'tower defish',
            href: '/game-td',
            is_nuxt: true,
          },
        ],
      },
      {
        title: 'products',
        links: [
          {
            title: 'launcher',
            href: '/defish-launcher',
            is_nuxt: true,
          },
          {
            title: 'connect',
            href: '#',
            is_nuxt: true,
          },
        ],
      },
      {
        title: 'about us',
        links: [
          {
            title: 'team',
            href: '/careers',
            is_nuxt: true,
          },
          {
            title: 'careers',
            is_nuxt: true,
            href: '/careers',
          },
        ],
      },
    ]
  }),
  props: {
    bg: {
      default: ''
    }
  },
  methods: {

    getHeight(target) {

      const bb = target.getBoundingClientRect();
      const y = target.offsetTop + bb.height + (4 * 5);

      return y
    },

    onHoverChange(hover, title) {

      const pop = async () => {
        const target = document.querySelector('.drop-container.' + `num-${title}-drop .drop-down`);
        if(hover) {

          target.classList.add('hovered');

          [ target, this.$refs.back ].forEach(n => {
            Anime.remove(n);
          })

          setTimeout(() => {
            const y = this.getHeight(target);
            console.log(y);

            target.style.opacity = 0;

            Anime({
              targets: this.$refs.back,
              height: y,
              duration: 300,
              easing: 'easeInOutQuad',
            })

            Anime({
              targets: target,
              duration: 300,
              easing: 'easeOutQuad',
              delay: 200,
              opacity: 1,
            })
          }, 1);

        } else {
          // const y = this.getHeight(target);

          [ target, this.$refs.back ].forEach(n => {
            Anime.remove(n);
          })

          Anime({
            targets: target,
            duration: 300,
            easing: 'easeOutQuad',
            opacity: 0,
          }).finished.then(() => {
            target.classList.remove('hovered');
          })

          Anime({
            targets: this.$refs.back,
            duration: 300,
            easing: 'easeInOutQuad',
            delay: 200,
            height: 0,
          });
        }
      }

      this.$nextTick(pop)
    },
  }
}
</script>

<style lang="scss" scoped>

.header {
  height: 80px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .drop-container {
    position: relative;

    .drop-down {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 130%;

      .lnk {
        color: #fff;
        font-family: 'Bebas' !important;
      }

      &:not(.hovered) {
        display: none !important;
      }
    }
  }

  .logo {
    cursor: pointer;
    height: 100%;
    width: auto;
  }

  .menu-btns {

    .v-btn {

    }
  }

  .socials {
    .v-btn {
      color: rgba(#fff, 0.5);

      &:hover {
        color: rgba(#fff, 1);
        svg{
          path {
            opacity: 1;
          }
        }
      }
    }
  }

  .back {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: rgba(26, 38, 57, 0.4);
    backdrop-filter: blur(30px);
  }
}

</style>
