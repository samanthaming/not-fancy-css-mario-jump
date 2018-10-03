new Vue({
  el: '#app',
  data: {
    isJump: false,
    isBounce: false,
    isAppear: false,
    count: 0
  },
  created() {
    window.addEventListener('keyup', this.key);
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
   		this.PlaySound('sounds/coin.mp3');
    },
		PlaySound (sound) {
			if(sound) {
				var audio = new Audio(sound);
				audio.play();
			}
		}
  }
})
