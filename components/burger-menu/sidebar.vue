<template>
  <div class="sidebar">
    <!--    <div class="sidebar-backdrop"  v-if="value"></div>-->
    <transition name="slide">
      <div v-if="value" class="sidebar-panel">
        <nuxt-link
          tag="img"
          class="logo-img"
          :src="require('~/assets/images/full-logo.png')"
          to="/"
        >
        </nuxt-link>
        <burger
          class="menu-btn"
          :value="value"
          @click="$emit('close')"
        ></burger>
        <div class="sidebar-panel-nav">
          <div
            v-for="(tab, i) in menu"
            :class="[`drop-container num-${i}-drop`, { _chosen: chosenTab === tab.title, 'mt-11' : i!==0 }]"
          >
            <v-btn
              @click="chosenTab = tab.title"
              rounded
              text
              :to="tab.href"
              :nuxt="tab.is_nuxt"
            >
              {{ tab.title }}
              <svg
                :class="['arrow ml-1', { rotate: chosenTab === tab.title }]"
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.02034L5.50009 7.66675L11 2.02034L9.28281 0.333415L5.50009 4.21683L1.71719 0.333415L0 2.02034Z"
                  fill="white"
                />
              </svg>
            </v-btn>
            <v-scale-transition>
              <div
                v-if="chosenTab === tab.title"
                :class="['drop-down d-flex flex-column align-center pt-5']"
              >
                <a
                  @click="$emit('close')"
                  v-for="z in tab.links"
                  class="lnk body-1 mb-2 hover-el"
                  :href="z.href"
                  >{{ z.title }}</a
                >
              </div>
            </v-scale-transition>
          </div>
          <v-btn
            @click="$emit('close')"
            to="/arts"
            nuxt
            rounded
            text
            class="mt-11"
          >
            Arts
          </v-btn>
          <hr
            class="mt-10 w-100"
            style="background: #414951; border: none; height: 1px"
          />
          <div class="socials mt-11">
            <v-btn target="_blank" :href="social_links.twitter" icon>
              <v-icon>mdi-twitter</v-icon>
            </v-btn>

            <v-btn target="_blank" :href="social_links.medium" icon>
              <svg
                style="width: 24px"
                width="69"
                height="41"
                viewBox="0 0 69 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M39.1312 20.732C39.1312 31.8853 30.4832 40.9268 19.8159 40.9268C9.14867 40.9268 0.5 31.8833 0.5 20.732C0.5 9.5808 9.14801 0.536591 19.8159 0.536591C30.4839 0.536591 39.1312 9.57875 39.1312 20.732Z"
                  fill="white"
                />
                <path
                  opacity="0.4"
                  d="M60.3208 20.732C60.3208 31.2305 55.9968 39.7445 50.6628 39.7445C45.3288 39.7445 41.0048 31.2305 41.0048 20.732C41.0048 10.2336 45.3282 1.71959 50.6621 1.71959C55.9961 1.71959 60.3201 10.2309 60.3201 20.732H60.3208Z"
                  fill="white"
                />
                <path
                  opacity="0.4"
                  d="M65.5911 37.7642C67.4673 37.7642 68.9878 30.1361 68.9878 20.732C68.9878 11.3253 67.4666 3.69988 65.5911 3.69988C63.7155 3.69988 62.195 11.326 62.195 20.732C62.195 30.1381 63.7149 37.7642 65.5911 37.7642Z"
                  fill="white"
                />
              </svg>
            </v-btn>

            <v-btn target="_blank" :href="social_links.discord" icon>
              <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M15.5764 13.1273C15.5764 13.9702 14.9779 14.6611 14.2199 14.6611C13.4752 14.6611 12.8635 13.9702 12.8635 13.1273C12.8635 12.2844 13.4619 11.5935 14.2199 11.5935C14.9779 11.5935 15.5764 12.2844 15.5764 13.1273ZM9.3659 11.5935C8.60787 11.5935 8.00943 12.2844 8.00943 13.1273C8.00943 13.9702 8.62117 14.6611 9.3659 14.6611C10.1239 14.6611 10.7224 13.9702 10.7224 13.1273C10.7357 12.2844 10.1239 11.5935 9.3659 11.5935ZM23.4093 2.84655V27.6364C20.059 24.56 21.1305 25.5783 17.2387 21.8189L17.9436 24.3753H2.86283C1.36008 24.3753 0.136597 23.104 0.136597 21.5287V2.84655C0.136597 1.27127 1.36008 0 2.86283 0H20.6831C22.1858 0 23.4093 1.27127 23.4093 2.84655ZM19.6192 15.9462C19.6192 11.4967 17.7042 7.89018 17.7042 7.89018C15.7892 6.39782 13.9672 6.43927 13.9672 6.43927L13.7811 6.66036C16.0418 7.37891 17.0924 8.41527 17.0924 8.41527C13.9334 6.61626 10.2226 6.61594 7.15831 8.01455C6.66626 8.24945 6.37369 8.41527 6.37369 8.41527C6.37369 8.41527 7.47748 7.32364 9.87125 6.60509L9.73826 6.43927C9.73826 6.43927 7.91634 6.39782 6.00132 7.89018C6.00132 7.89018 4.08631 11.4967 4.08631 15.9462C4.08631 15.9462 5.2034 17.9498 8.14241 18.0465C8.14241 18.0465 8.63447 17.4247 9.03343 16.8996C7.34449 16.3745 6.70615 15.2691 6.70615 15.2691C6.90179 15.4114 7.22439 15.5958 7.2514 15.6145C9.49608 16.9207 12.6845 17.3486 15.5498 16.0982C16.0152 15.9185 16.5339 15.656 17.0791 15.2829C17.0791 15.2829 16.4142 16.416 14.6721 16.9273C15.071 17.4524 15.5498 18.0465 15.5498 18.0465C18.4888 17.9498 19.6192 15.9462 19.6192 15.9462Z"
                  fill="white"
                />
              </svg>
            </v-btn>

            <v-btn target="_blank" :href="social_links.linkedin" icon>
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  components: {
    Burger: () => import('~/components/burger-menu/burger'),
  },
  props: {
    value: {},
  },
  data: () => ({
    chosenTab: '',
    social_links: {
      twitter: 'https://twitter.com/defishgames',
      discord: 'https://discord.com/invite/78EfmhUgNJ',
      medium: 'https://worldofdefish.medium.com/',
      linkedin: 'https://www.linkedin.com/company/world-of-defish/mycompany/',
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
            title: 'tower of defish',
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
            is_nuxt: true,
          },
          {
            title: 'blog',
            is_nuxt: true,
            href: '/blog',
          },
        ],
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(19, 15, 64, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background: rgb(23, 42, 51);
  background: linear-gradient(
    153deg,
    rgba(23, 42, 51, 1) 49%,
    rgba(15, 23, 34, 1) 91%
  );
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  height: 101vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 101%;
}
.sidebar-panel-nav {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .v-btn {
    font-weight: 700;
    font-size: 29px;
    line-height: 24px;
    color: white;
    text-decoration: none;
  }
}
.menu-btn {
  position: absolute;
  top: 25px;
  right: 12px;
}
.logo-img {
  position: absolute;
  top: 10px;
  left: 12px;
  width: 209px;
}
.rotate {
  transform: rotate(-180deg);
}
.drop-container {
  height: 42px;
  transition: height 0.3s ease-in-out;
  &._chosen {
    height: 136px;
    .v-btn {
      color: #76ffe8;
    }
  }
}
.drop-down {
  .lnk {
    color: #fff;
    font-family: 'Bebas' !important;
    &:hover {
      color: #76ffe8;
    }
  }
}
.socials {
  .v-btn {
    color: rgba(#fff, 0.5) !important;

    &:hover {
      color: rgba(#fff, 1)!important;
      svg {
        path {
          opacity: 1;
        }
      }
    }
  }
}
</style>
