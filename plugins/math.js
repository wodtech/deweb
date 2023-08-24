// import Vue from 'vue';
import Web3 from 'web3';
// import Axios from 'axios';

export default defineNuxtPlugin(() => {
  Number.prototype.map = function(in_min, in_max, out_min, out_max) {
    return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  Math.UUID = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  Math.rad = Math.PI / 180;

  Math.gradientColors = (startColor, endColor, percent) => {
    // strip the leading # if it's there
    startColor = startColor.replace(/^\s*#|\s*$/g, '');
    endColor = endColor.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (startColor.length === 3) {
      startColor = startColor.replace(/(.)/g, '$1$1');
    }

    if (endColor.length === 3) {
      endColor = endColor.replace(/(.)/g, '$1$1');
    }

    // get colors
    const startRed = parseInt(startColor.substr(0, 2), 16),
        startGreen = parseInt(startColor.substr(2, 2), 16),
        startBlue = parseInt(startColor.substr(4, 2), 16);

    const endRed = parseInt(endColor.substr(0, 2), 16),
        endGreen = parseInt(endColor.substr(2, 2), 16),
        endBlue = parseInt(endColor.substr(4, 2), 16);

    // calculate new color
    let diffRed = endRed - startRed;
    let diffGreen = endGreen - startGreen;
    let diffBlue = endBlue - startBlue;

    diffRed = ((diffRed * percent) + startRed);
    diffGreen = ((diffGreen * percent) + startGreen);
    diffBlue = ((diffBlue * percent) + startBlue);

    let diffRedStr = diffRed.toString(16).split('.')[0];
    let diffGreenStr = diffGreen.toString(16).split('.')[0];
    let diffBlueStr = diffBlue.toString(16).split('.')[0];

    // ensure 2 digits by color
    if (diffRedStr.length === 1) diffRedStr = '0' + diffRedStr;
    if (diffGreenStr.length === 1) diffGreenStr = '0' + diffGreenStr;
    if (diffBlueStr.length === 1) diffBlueStr = '0' + diffBlueStr;

    return '#' + diffRedStr + diffGreenStr + diffBlueStr;
  };

  Math.$toWei = function(val) {
    return Web3.utils.toWei(val.toString(), 'ether')
  }

  Math.$fromWei = function(val) {
    return Web3.utils.fromWei(val.toString(), 'ether')
  }
  //
  // Vue.prototype.$gevent = function(name) {
  //   if (process.browser) {
  //     this.$gtag('event', name)
  //   }
  // }
  //
  //
  // Vue.prototype.$gradient = Math.gradientColors;
  //
  // Vue.prototype.$api = Axios.create({
  //   baseURL: process.env['SERVICE_API_URL'],
  // })


})
