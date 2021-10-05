<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <van-button type="primary">123</van-button>
    <async-component></async-component>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
// import { Toast } from "vant";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    // HelloWorld,
  },
  setup() {
    onMounted(() => {
      // Toast("asdfadf");
    });
  },
});
</script>
