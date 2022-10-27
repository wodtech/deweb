<template>
  <v-card id="headerId" :color="bg ? bg : 'transparent'" dark elevation="0" class="header d-flex">

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
              <svg :class="['arrow ml-1',{ rotate: hover }]" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.65017L4.00007 5.5L8 1.65017L6.75113 0.5L4.00007 3.14778L1.24887 0.5L0 1.65017Z" fill="white"/>
              </svg>
            </v-btn>

            <div
              class="drop-down d-flex flex-column align-center pt-5"
            >
              <a v-for="z in n.links" :class="['lnk body-1 mb-2 hover-el', {_disabled : z.disabled}]"  :href="z.href">{{ z.title }}</a>
            </div>
          </div>
        </v-hover>

        <v-btn to="/arts" nuxt rounded class="d-md-flex d-none hover-el" text>
          Arts
        </v-btn>
      </div>

      <DefishLinks variant="transparent" />
      <slot></slot>
    </v-container>

  </v-card>
</template>

<script>
import Anime from 'animejs'
import DefishLinks from "~/components/common/DefishLinks";
export default {
  components: {
    DefishLinks
  },
  data: () => ({
    social_links: {
      twitter: "https://twitter.com/defishgames",
      discord: "https://discord.com/invite/78EfmhUgNJ",
      tg: "https://t.me/worldofdefish",
      linkedin: "https://www.linkedin.com/company/world-of-defish/mycompany/",
    },
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
        title: 'product',
        links: [
          {
            title: 'launcher',
            href: '/defish-launcher',
            is_nuxt: true,
          },
          {
            title: 'for developers',
            href: '/for-developers',
            is_nuxt: true,
          },
        ],
      },
      {
        title: 'about us',
        links: [
          {
            title: 'careers',
            href: '/careers',
            disabled: true,
            is_nuxt: true,
          },
          {
            title: 'blog',
            is_nuxt: true,
            href: '/blog',
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
  mounted () {
    window.addEventListener('scroll', this.handleSCroll);

  },
  destroyed () {
    window.removeEventListener('scroll', this.handleSCroll);
  },
  methods: {
    handleSCroll (event) {
      let header = document.getElementById("headerId");
      if (window.scrollY > 20 && !header.className.includes('dark-bg')) {
        header.classList.add('dark-bg');
      } else if (window.scrollY < 20) {
        header.classList.remove('dark-bg');
      }
    },
    getHeight(target) {

      const bb = target.getBoundingClientRect();
      const y = target.offsetTop + bb.height + (4 * 5) + 15;

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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  &:before {
    width: 100%;
    height: 0;
    position: absolute;
    content: '';
    transition: all 0.3s ease-in-out;
    background: linear-gradient(90deg, #14172D 26.28%, rgba(20, 23, 45, 0) 118.51%);
  }
  &.dark-bg{
    &:before {
      height: 100%;
    }
  }

  .hover-el{
    &:hover{
      color: #76FFE8;
    }
  }
  .drop-container {
    position: relative;
    .v-btn {
      transition: color 0.3s ease-in-out;
    }
    svg {
      transition: all 0.2s ease-in-out;
    }
    &:hover{
      .v-btn {
        color: #76FFE8;
      }
      svg {
        path {
          fill: #76FFE8;
        }
      }
    }

    .drop-down {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 130%;

      .lnk {
        color: #fff;
        font-family: 'Bebas' !important;
        &:hover {
          color: #76FFE8;
        }
      }
      &:not(.hovered) {
        display: none !important;
      }
    }
    .rotate {
      transform: rotate(-180deg);
    }
  }

  .logo {
    cursor: pointer;
    height: 100%;
    width: auto;
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
