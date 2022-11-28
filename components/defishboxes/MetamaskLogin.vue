<template>
    <v-btn
            x-large
            color="#F6851B"
            rounded
            text
            :loading="loading"
            @click="$emit('click')"
            class="metamask-login"
    >
        <div class="d-flex align-center caption" style="font-weight: bold">
            <svg
                    class="mr-4"
                    width="32"
                    height="30"
                    viewBox="0 0 32 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
            >
                <path
                        d="M29.5068 1L17.8008 9.694L19.9658 4.564L29.5068 1Z"
                        fill="#E2761B"
                        stroke="#E2761B"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
                <path
                        d="M2.48209 1L14.0941 9.777L12.0351 4.565L2.48209 1ZM25.2931 21.153L22.1761 25.929L28.8461 27.765L30.7641 21.259L25.2941 21.153H25.2931ZM1.24609 21.259L3.15209 27.765L9.82209 25.929L6.70509 21.153L1.24609 21.259V21.259Z"
                        fill="#E4761B"
                        stroke="#E4761B"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
                <path
                        d="M9.44784 13.082L7.58984 15.893L14.2138 16.188L13.9788 9.07001L9.44884 13.082H9.44784ZM22.5428 13.083L17.9548 8.98901L17.8018 16.189L24.4128 15.895L22.5428 13.083ZM9.82284 25.93L13.7998 23.988L10.3638 21.306L9.82384 25.929L9.82284 25.93ZM18.1888 23.988L22.1768 25.929L21.6238 21.306L18.1888 23.988V23.988Z"
                        fill="#E4761B"
                        stroke="#E4761B"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
                <path
                        d="M22.1753 25.9281L18.1863 23.9881L18.5043 26.5881L18.4693 27.6811L22.1753 25.9281ZM9.82131 25.9281L13.5273 27.6811L13.5043 26.5871L13.7983 23.9871L9.82031 25.9301L9.82131 25.9281Z"
                        fill="#D7C1B3"
                        stroke="#D7C1B3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
                <path
                        d="M13.5885 19.59L10.2715 18.613L12.6125 17.542L13.5885 19.589V19.59ZM18.4005 19.59L19.3775 17.542L21.7305 18.612L18.4005 19.589V19.59Z"
                        fill="#233447"
                        stroke="#233447"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
                <path
                        d="M9.82308 25.929L10.3871 21.152L6.70508 21.258L9.82308 25.928V25.929ZM21.6111 21.152L22.1761 25.929L25.2941 21.259L21.6111 21.152ZM24.4121 15.894L17.8001 16.188L18.4121 19.588L19.3881 17.541L21.7411 18.611L24.4111 15.894H24.4121ZM10.2701 18.611L12.6231 17.541L13.5881 19.588L14.2111 16.188L7.58808 15.894L10.2701 18.611V18.611Z"
                        fill="#CD6116"
                        stroke="#CD6116"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
                <path
                        d="M7.58789 15.894L10.3649 21.305L10.2709 18.611L7.58789 15.894V15.894ZM21.7409 18.611L21.6239 21.305L24.4119 15.894L21.7419 18.611H21.7409ZM14.2119 16.188L13.5889 19.588L14.3649 23.6L14.5419 18.317L14.2119 16.188V16.188ZM17.7989 16.188L17.4819 18.306L17.6219 23.6L18.4109 19.588L17.7989 16.188V16.188Z"
                        fill="#E4751F"
                        stroke="#E4751F"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
                <path
                        d="M18.4125 19.5891L17.6245 23.6011L18.1885 23.9891L21.6245 21.3061L21.7415 18.6121L18.4115 19.5891H18.4125ZM10.2695 18.6121L10.3645 21.3071L13.7995 23.9891L14.3645 23.6011L13.5875 19.5891L10.2705 18.6121H10.2695Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
                <path
                        d="M18.4693 27.6829L18.5043 26.5879L18.2103 26.3299H13.7753L13.5043 26.5889L13.5273 27.6829L9.82227 25.9299L11.1163 26.9879L13.7393 28.8119H18.2453L20.8813 26.9879L22.1753 25.9299L18.4693 27.6829V27.6829Z"
                        fill="#C0AD9E"
                        stroke="#C0AD9E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
                <path
                        d="M18.1908 23.9891L17.6258 23.6011H14.3668L13.8018 23.9891L13.5078 26.5891L13.7778 26.3301H18.2138L18.5078 26.5891L18.1908 23.9891Z"
                        fill="#161616"
                        stroke="#161616"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
                <path
                        d="M30 10.259L31 5.459L29.506 1L18.188 9.4L22.541 13.082L28.694 14.882L30.059 13.294L29.471 12.871L30.411 12.011L29.682 11.447L30.624 10.73L30 10.259V10.259ZM1 5.459L2 10.259L1.365 10.729L2.305 11.447L1.588 12.012L2.529 12.871L1.941 13.294L3.294 14.883L9.447 13.083L13.8 9.4L2.482 1L1 5.459Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
                <path
                        d="M28.6941 14.8829L22.5401 13.0829L24.4111 15.8949L21.6231 21.3069L25.2931 21.2599H30.7641L28.6941 14.8829V14.8829ZM9.44609 13.0829L3.29309 14.8829L1.24609 21.2599H6.70509L10.3641 21.3069L7.58709 15.8949L9.44609 13.0829V13.0829ZM17.7991 16.1889L18.1891 9.39994L19.9761 4.56494H12.0361L13.7991 9.39994L14.2111 16.1889L14.3511 18.3289L14.3641 23.5999H17.6231L17.6461 18.3299L17.7991 16.1889Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
            </svg>
            Login with MetaMask
        </div>
    </v-btn>
</template>

<script>
    export default {
        props: {
            loading: {
                type: Boolean,
                default: false,
            },
        },
        components: {
        },
    };
</script>

<style scoped lang="scss">
    .metamask-login {
        svg {
            height: 24px;
            width: 24px;
        }
    }
</style>
