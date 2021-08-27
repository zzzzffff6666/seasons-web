<template>
<<<<<<< HEAD
  <button v-for="item in items" :key="item" @click="menuClick(item)">
=======
  <button v-for="item in items" :key="item" @click="menuClick">
>>>>>>> a83de56ccdab832ea1ea396a1f2685efc4000196
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
<<<<<<< HEAD
    menuClick(item) {
      // 路由跳转
      this.$router.push({name: item});
=======
    menuClick(e) {
      // 路由跳转
      this.$router.push(e.key);
>>>>>>> a83de56ccdab832ea1ea396a1f2685efc4000196
    },
  },
};
</script>