new Vue({
  el: '#app',
  data: {
    isJump: false,
    isBounce: false,
    isAppear: false,
    count: 0
  },
  created() {
    window.addEventListener('keydown', this.key);
  },
  methods: {
    key(e) {
      const code = e.keyCode;
      if(code === 32) {
        this.jump();
      }
    },
    jump() {
      this.isJump = true;
      this.isBounce = true;
      this.isAppear = true;

    },
    removeAnimation() {
      this.isAppear = false;
      this.isBounce = false;
      this.count++;
    }
  }
})
