<template>
  <div class="page">全局组件</div>
</template>
<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
export default defineComponent({
  name: "Trend",
  setup() {
    const data = reactive({
      val: "",
    });
    const methods = {};
    watch(
      () => {
        return data.val;
      },
      (newValue, oldValue) => {
        console.warn(newValue, oldValue);
      },
    );
    return { ...methods };
  },
});
</script>
<style lang="scss" scoped></style>
