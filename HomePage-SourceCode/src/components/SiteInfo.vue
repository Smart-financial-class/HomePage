<template>
  <v-container>
    <!--:color 设置卡片背景颜色-->
    <!--:elevation 设置光标悬浮时卡片海拔(shadow)宽度-->
    <v-card dark
            width="100%"
            :color="info.color"
            :elevation="hover ? 24 : 6"
            @mouseover="hover = true"
            @mouseleave="hover = false">
      <div class="d-flex flex-no-wrap justify-space-between"
           :style="{display: 'flex', flexDirection: 'row' + reverse, alignItems: 'center'}">
        <v-img :src="info.image" width="50%"></v-img>

        <div style="width: 50%; display: flex; align-items: center; flex-direction: column">
          <v-card-title class="text-h5">{{ info.title }}</v-card-title>
          <v-card-text class="mt-5 mb-3" style="text-align: center">{{ info.detail }}</v-card-text>
          <v-card-actions>
            <v-btn class="mt-5" outlined rounded small :href="info.href">前往</v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'SiteInfo',
  props: ['info'],
  data () {
    return {
      hover: false
    }
  },
  computed: {
    // 控制图片显示位置
    reverse () {
      return this.info.reverse === true ? '-reverse' : ''
    }
  }
}
</script>
