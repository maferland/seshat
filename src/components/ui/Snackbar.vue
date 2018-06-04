<template>
<div class="snackbar" v-bind:class="{show: visible}" id="snackbar">
  {{ message }}
</div>
</template>

<script>
import EventBus from '@/events/eventBus';

export default {
  name: 'Snackbar',
  data() {
    return {
      visible: false,
      message: '',
    };
  },
  created() {
    EventBus.$on('onSnackbarDisplayed', this.display);
  },
  methods: {
    display(message) {
      this.message = message;
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
        this.message = '';
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';
/* https://codepen.io/Muhammad_Adil93/pen/rLaLqB?editors=0100 */

#snackbar {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: $primaryDark;
    border-radius: 2px;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
}

.show {
    visibility: visible !important;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}
</style>
