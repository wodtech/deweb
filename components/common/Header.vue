<template>
  <v-card color="transparent" dark elevation="0" class="header d-flex">

    <div class="back" ref="back"></div>

    <v-container class="py-4 d-flex align-center --posr">
      <img class="logo" src="~/assets/images/full-logo.png" alt=""></img>
      
      <div class="menu-btns d-flex flex-grow-1 px-10">
        
        <v-hover 
          @input="onHoverChange($event, i)" 
          v-for="(n, i) in menu" 
          :key="n.title" 
          v-slot="{ hover }"
        >
          <div class="drop-container d-md-flex d-none mr-1 mr-lg-10" :class="`num-${i}-drop`">
            <v-btn rounded text>
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

        <v-btn rounded class="d-md-flex d-none" text>
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
          <v-icon>mdi-telegram</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-discord</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </div>
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
            href: '#',
          },
          {
            title: 'tower defish',
            href: '#',
          },
        ],
      },
      {
        title: 'products',
        links: [
          //{
          //  title: 'launcher',
          //  href: '#',
          //},
          {
            title: 'connect',
            href: '#',
          },
        ],
      },
      {
        title: 'about us',
        links: [
          {
            title: 'team',
            href: '#',
          },
          {
            title: 'careers',
            href: '#',
          },
        ],
      },
    ]
  }),

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