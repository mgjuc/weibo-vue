<script lang="ts" setup>
import { toggleDark, gotoUrl, openUrl } from "~/composables"; //composables组合式函数，类似uitls
import useUserStore from "~/store/UserInfo";
import router from "~/routers";

const userStore = useUserStore();

const HandlerClick = () => {
  if(userStore.state){
    router.push('/profile')
  }
  else{
    router.push('/login')
  }
}

</script>

<template>
  <el-row justify="center">
    <el-col :span="9">
      <el-menu class="el-menu-demo" mode="horizontal" :ellipsis=false>
        <el-menu-item index="1" @click="$router.push('/')">Home</el-menu-item>
        <!-- unocss -->
        <div class="flex-1" />
        <el-menu-item index="2" @click="HandlerClick">{{ userStore.state ? userStore.state?.username : 'Login' }}</el-menu-item>
        <el-menu-item index="3" @click="gotoUrl('https://blog.ppos.top')">Blog</el-menu-item>
        <el-sub-menu index="4">
          <template #title>Others</template>
          <el-menu-item index="4-1" @click="gotoUrl('https://cn.vuejs.org/guide/introduction.html')">Vue</el-menu-item>
          <el-menu-item index="4-2"
            @click="gotoUrl('https://element-plus.gitee.io/zh-CN/component/button.html')">Element-plus</el-menu-item>
        </el-sub-menu>
        <el-menu-item h="full" @click="toggleDark()">
          <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height)">
            <i inline-flex i="dark:ep-moon ep-sunny" />
          </button>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
