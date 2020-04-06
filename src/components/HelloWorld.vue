<template>
  <div id="root">
    <el-card class="one" shadow="never">
      <div class="body">
        <h1>
          <el-link type="primary">主持人</el-link>
        </h1>
        <el-card :shadow="shadow" class="card">{{staffList[cindex].name}}</el-card>
      </div>
      <div class="footer">
        <el-button type="primary" @click="start">开始</el-button>
        <el-button type="danger" @click="end">结束</el-button>
      </div>
    </el-card>
  </div>
</template>
<style scope>
.one{
  width: 300px;
  height: 300px;
  margin: 40px auto;
}
.body,
.footer {
  width: 200px;
  margin: 30px auto;
  text-align: center;
}

/* .footer {
} */
.card {
  text-align: center;
}
</style>
<script>
//生成从minNum到maxNum的随机数
import { randomNum } from "../utils/utils.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "1231",
      staffList: [
        {
          id: 0,
          name: "廉晓跃"
        },
        {
          id: 1,
          name: "王红丽"
        },
        {
          id: 2,
          name: "张雯婷"
        },
        {
          id: 3,
          name: "邰勇铮"
        },
        {
          id: 4,
          name: "张铭燕"
        },
        {
          id: 5,
          name: "李建宝"
        },
        {
          id: 6,
          name: "卢俊彤"
        },
        {
          id: 7,
          name: "张宝利"
        },
        {
          id: 8,
          name: "张名扬"
        },
        {
          id: 9,
          name: "朱宣"
        },
        {
          id: 10,
          name: "赵慧健"
        },
        {
          id: 12,
          name: "孟维春"
        },
        {
          id: 13,
          name: "胡英杰"
        },
        {
          id: 14,
          name: "杨宇昊"
        },
        {
          id: 15,
          name: "赵鹏飞"
        },
        {
          id: 16,
          name: "朱广珍"
        },
        {
          id: 17,
          name: "张斌"
        },
        {
          id: 18,
          name: "张明伟"
        },
        {
          id: 19,
          name: "杨雯伊"
        },
        {
          id: 20,
          name: "王晶晶"
        },
        {
          id: 21,
          name: "彭翀霄"
        },
        {
          id: 22,
          name: "李殿超"
        },
        {
          id: 23,
          name: "王双亮"
        },
        {
          id: 24,
          name: "康萌"
        },
        {
          id: 25,
          name: "张琴"
        },
        {
          id: 26,
          name: "赵梦卓"
        },
        {
          id: 27,
          name: "高文磊"
        },
        {
          id: 28,
          name: "蔡闻远"
        },
        {
          id: 29,
          name: "韩建达"
        },
        {
          id: 30,
          name: "杨航"
        }
      ],
      shadow: "hover",
      cindex: 0,
      timer: ""
    };
  },
  mounted() {},
  methods: {
    start() {
      // this.$message({
      //   message: "开始",
      //   type: "success"
      // });
      this.shadow = "hover";
      if (this.timer) {
        clearInterval(this.timer);
      }
      let self = this;
      this.timer = setInterval(function() {
        self.cindex = randomNum(0, 29);
      }, 100);
    },
    end() {
      clearInterval(this.timer);
      this.shadow = "always";
    }
  }
};
</script>