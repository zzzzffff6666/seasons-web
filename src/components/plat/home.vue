<template>
  <button v-for="item in items" :key="item" @click="menuClick(item)">
    {{ item }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      items: ["login", "register"],
      collapsed: false,
    };
  },
  methods: {
    menuClick(item) {
      // 路由跳转
      this.$router.push({name: item});
    },
  },
};
</script>