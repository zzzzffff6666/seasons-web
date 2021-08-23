<template>
  <button v-for="item in items" :key="item" @click="menuClick">
    {{ item }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      items: ["home", "register"],
      collapsed: false,
    };
  },
  methods: {
    menuClick(e) {
      // 路由跳转
      this.$router.push(e.key);
    },
  },
};
</script>
