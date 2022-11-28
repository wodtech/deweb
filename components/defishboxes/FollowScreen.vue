<template>
  <div id="follow-screen" class="container_fish">
    <div class="container_fish__background"></div>
    <div style="height: 190px"></div>
    <div class="follow__content">
      <!-- <img src="~/assets/first_screen/Blur.png" class="blur" alt="" /> -->
      <v-img
        max-width="245"
        class="logotype follow__logotype"
        :src="require('~/assets/images/logo-header.png')"
      >
      </v-img>
      <h2 class="follow__title">follow us</h2>
      <v-card
        min-width="90%"
        max-width="90%"
        elevation="0"
        class="follow__card"
        v-if="follow_items"
      >
        <a
          v-for="(item, key) in follow_items"
          :key="key"
          :href="item.href"
          target="_blank"
          class="d-flex justify-start follow__card_item"
        >
          <v-icon
            v-if="item.icon"
            color="#67E8D3"
            :size="width >= 1366 ? 64 : 41"
            class="follow__card_icon mr-5 mr-lg-0"
          >
            mdi-{{ item.icon }}
          </v-icon>
          <div v-else v-html="item.img" class="mb-4 mr-5 mr-lg-0"></div>
          <div>
            <p class="follow__card_title mb-2">{{ item.title }}</p>
            <p class="follow__card_desc mb-0 text-lg-center">{{ item.desc }}</p>
          </div>
        </a>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: (vm) => ({
    follow_items: null,
    width: 0,
  }),
  computed: {},
  mounted() {
    this.width = window.innerWidth;
    let width_svg = this.width >= 1366 ? 64 : 40;
    this.follow_items = [
      {
        icon: "twitter",
        title: "TWITTER",
        desc: "90k+ FOLLOWERS",
        href: "https://twitter.com/WorldOfDefish",
      },
      {
        img: `<svg width="${width_svg}" height="${width_svg}" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="1">
          <path d="M13.5374 7.00012C13.5374 10.8661 10.5069 14 6.76884 14C3.03073 14 0 10.8653 0 7.00012C0 3.13489 3.0305 0 6.76884 0C10.5072 0 13.5374 3.13418 13.5374 7.00012Z" fill="#67E8D3"/>
          <path d="M20.9628 7.00012C20.9628 10.6391 19.4476 13.5902 17.5784 13.5902C15.7092 13.5902 14.194 10.6391 14.194 7.00012C14.194 3.36117 15.709 0.410049 17.5782 0.410049C19.4474 0.410049 20.9626 3.36023 20.9626 7.00012H20.9628Z" fill="#67E8D3"/>
          <path d="M22.8097 12.9038C23.4672 12.9038 24 10.2597 24 7.00012C24 3.73957 23.4669 1.09646 22.8097 1.09646C22.1524 1.09646 21.6196 3.7398 21.6196 7.00012C21.6196 10.2604 22.1522 12.9038 22.8097 12.9038Z" fill="#67E8D3"/>
          </g>
          </svg>`,
        title: "MEDIUM PAGE",
        desc: "∞ reads",
        href: "https://medium.com/@worldofdefish",
      },
      {
        img: `<svg width="${width_svg}" height="${width_svg}" viewBox="0 0 72 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60.4045 4.89768C55.8792 2.82128 51.0265 1.29148 45.9527 0.415297C45.8603 0.398387 45.768 0.440646 45.7204 0.525166C45.0963 1.63518 44.405 3.08328 43.9209 4.22148C38.4637 3.40448 33.0345 3.40448 27.6892 4.22148C27.205 3.05798 26.4886 1.63518 25.8617 0.525166C25.8141 0.443466 25.7218 0.401207 25.6294 0.415297C20.5584 1.28868 15.7057 2.81848 11.1776 4.89768C11.1384 4.91458 11.1048 4.94278 11.0825 4.97938C1.87794 18.7308 -0.643573 32.1442 0.593396 45.3913C0.598993 45.4561 0.635374 45.5181 0.685749 45.5575C6.75865 50.0173 12.6413 52.7248 18.4147 54.5194C18.5071 54.5476 18.605 54.5138 18.6638 54.4377C20.0295 52.5727 21.2469 50.6062 22.2907 48.5382C22.3523 48.4171 22.2935 48.2734 22.1676 48.2255C20.2366 47.493 18.3979 46.5999 16.6292 45.5857C16.4893 45.504 16.4781 45.3039 16.6068 45.2081C16.979 44.9292 17.3513 44.639 17.7067 44.346C17.771 44.2925 17.8606 44.2812 17.9362 44.315C29.5558 49.6201 42.1354 49.6201 53.6179 44.315C53.6935 44.2784 53.7831 44.2897 53.8502 44.3432C54.2057 44.6362 54.5779 44.9292 54.9529 45.2081C55.0816 45.3039 55.0732 45.504 54.9333 45.5857C53.1646 46.6196 51.3259 47.493 49.3921 48.2227C49.2662 48.2706 49.2102 48.4171 49.2718 48.5382C50.338 50.6033 51.5554 52.5698 52.8959 54.4349C52.9519 54.5138 53.0526 54.5476 53.145 54.5194C58.9464 52.7248 64.829 50.0173 70.9019 45.5575C70.9551 45.5181 70.9887 45.4589 70.9943 45.3941C72.4747 30.079 68.5147 16.7756 60.4968 4.98218C60.4772 4.94278 60.4437 4.91458 60.4045 4.89768ZM24.0259 37.3252C20.5276 37.3252 17.6451 34.1135 17.6451 30.1692C17.6451 26.2249 20.4717 23.0132 24.0259 23.0132C27.608 23.0132 30.4626 26.2531 30.4066 30.1692C30.4066 34.1135 27.58 37.3252 24.0259 37.3252ZM47.6178 37.3252C44.1196 37.3252 41.2371 34.1135 41.2371 30.1692C41.2371 26.2249 44.0636 23.0132 47.6178 23.0132C51.2 23.0132 54.0545 26.2531 53.9986 30.1692C53.9986 34.1135 51.2 37.3252 47.6178 37.3252Z" fill="#67E8D3"/>
              </svg>`,
        title: "DISCORD",
        desc: "59421 USERS",
        href: "https://discord.gg/78EfmhUgNJ",
      },
      {
        icon: "linkedin",
        title: "LINKEDIN",
        desc: "256² LIKES",
        href: "https://www.linkedin.com/company/world-of-defish",
      },
      {
        img: `<svg width="${width_svg}" height="${width_svg}" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="1" fill-rule="evenodd" clip-rule="evenodd" d="M1.16397 6.03809C5.72643 4.06858 8.76373 2.7599 10.2889 2.12499C14.6298 0.323932 15.5422 0.0129573 16.1289 0C16.2592 0 16.546 0.0259147 16.7415 0.181402C16.898 0.310975 16.9371 0.479419 16.9631 0.608992C16.9892 0.738565 17.0153 1.01067 16.9892 1.21798C16.7546 3.67986 15.7378 9.65316 15.2164 12.4001C14.9948 13.5663 14.5646 13.955 14.1474 13.9938C13.2349 14.0716 12.5441 13.3978 11.6707 12.8277C10.2889 11.9336 9.5198 11.3765 8.17713 10.4954C6.62589 9.48472 7.62963 8.92756 8.51605 8.02055C8.75069 7.78732 12.7526 4.15928 12.8308 3.83535C12.8439 3.79648 12.8439 3.64099 12.7526 3.56325C12.6614 3.4855 12.531 3.51142 12.4267 3.53733C12.2833 3.56325 10.0934 5.01446 5.83072 7.87802C5.20501 8.30561 4.64448 8.51292 4.13609 8.49997C3.57556 8.48701 2.50664 8.18899 1.69843 7.92984C0.720757 7.61887 -0.0613799 7.45043 0.0037982 6.90622C0.042905 6.62116 0.433973 6.3361 1.16397 6.03809Z" fill="#67E8D3"/>
            </svg>`,
        title: "TELEGRAM GROUP",
        desc: "110k+ USERS",
        href: "https://t.me/worldofdefish",
      },
    ];
  },
};
</script>

<style lang="scss" scoped>
.follow {
  &__title {
    font-family: Druk;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 90%;
    text-transform: uppercase;
    color: #ffffff;
    text-align: center;
    margin-bottom: 35px;

    @media (min-width: 1365px) {
      font-size: 86.2898px;
      z-index: 1;
      position: relative;
    }
  }
  &__content {
    width: 100%;
    top: 210px;
    left: 50%;
    @media (min-width: 1365px) {
      position: relative;
      z-index: 2;
      top: inherit;
      left: inherit;
    }
    // .blur {
    //   position: absolute;
    //   left: 50%;
    //   width: 100%;
    //   transform: translate(-50%, 0px);
    //   margin-bottom: 58px;
    //   @media (min-width: 1365px) {
    //     margin-bottom: 85px;
    //   }
    // }
  }
  &__logotype {
    left: 50%;
    transform: translate(-50%, 0px);
    margin-bottom: 58px;
    @media (min-width: 1365px) {
      margin-bottom: 85px;
    }
  }
  &__card {
    background: linear-gradient(#294d57, #2a515a);
    margin: 0 auto;
    padding: 32px 31px 25px 28px;
    border-radius: 13px !important;
    margin-bottom: 47px;
    @media (min-width: 1365px) {
      background: transparent;
      display: flex;
      justify-content: center;
    }
    &_item {
      padding-bottom: 28px;
      border-bottom: 1px solid #497582;
      padding-top: 24px;
      max-height: calc(36px + 24px + 28px);
      @media (min-width: 1365px) {
        white-space: nowrap;
        max-height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: none;
        padding-bottom: 0;
        padding-top: 0;
        background: linear-gradient(
          44.55deg,
          #294d57 4.99%,
          rgba(42, 81, 90, 0.46) 97.38%
        );
        // backdrop-filter: blur(24px);
        border-radius: 20px !important;
        margin-right: 10px;
        padding: 40px 61px 48px 61px;
        width: 223px;
      }
      &:first-child {
        padding-top: 0;
        @media (min-width: 1365px) {
          padding-top: 40px;
        }
      }
      &:last-child {
        padding-bottom: 0px;
        border-bottom: none;
      }
    }
    &_icon {
      align-self: flex-start;
      margin-top: -5px;
      margin-right: 20px;
      @media (min-width: 1365px) {
        align-self: center;
        margin-right: 0;
        margin-bottom: 28px;
      }
    }
    &_title {
      font-family: Colfax;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #67e8d3;
      @media (min-width: 1365px) {
        text-align: center;
      }
    }
    &_desc {
      font-family: Colfax;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #67e8d3;
      opacity: 0.4;
    }
  }
}

.container_fish {
  position: relative;
  // min-height: 100vh;
  width: 100%;
  &__wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__background {
    background-image: url("~/assets/images/Fishes.png");
    background-repeat: no-repeat;
    background-position: 64% -28px;
    z-index: 0;
    height: 100vh;
    width: 100%;
    position: absolute;
    mix-blend-mode: multiply;
    @media (min-width: 1365px) {
      background-position: 49% -28px;
      z-index: 1;
    }
  }
  &__img {
    margin-top: 35px;
  }
  &__wrapperText {
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__title {
    font-family: Druk;
    font-style: normal;
    font-weight: bold;
    font-size: 2.4em;
    line-height: 90%;
    text-transform: uppercase;
    color: #ffffff;
    display: flex;
    align-items: center;
    z-index: 2;
    margin-bottom: 10px;
  }
  &__decription {
    font-family: Colfax;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    width: 98%;
  }
}
@media (max-width: 768px) {
  .follow__card {
    .follow__card_item {
      div,
      i {
        text-align: left;
        margin-right: 20px !important;
      }
      .follow__card_desc {
        text-align: left;
      }
    }
  }
}
</style>
