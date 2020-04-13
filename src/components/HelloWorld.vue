<template>
  <div id="root">
    <el-card class="one" shadow="never">
      <div class="body">
        <h1>
          <el-link type="primary" class="title">{{msg}}</el-link>
        </h1>
        <h1>
          <el-link type="primary" class="title">主持人</el-link>
        </h1>
        <el-card
          :shadow="shadow"
          ref="userId"
          class="card"
          :dataId="staffListOnline[cindex]?staffListOnline[cindex].id:'暂无数据'"
        >{{ staffListOnline[cindex]?staffListOnline[cindex].username:'暂无数据' }}</el-card>
      </div>
      <div class="footer">
        <el-button type="success" @click="start">开始</el-button>
        <el-button type="danger" @click="end">结束</el-button>
      </div>
    </el-card>
    <el-card shadow="always" class="cardlink">
      项目地址:
      <el-link type="primary">git@github.com:JaxZMY/element-table.git</el-link>
    </el-card>
  </div>
</template>
<style scope>
.one {
  width: 300px;
  height: 400px;
  margin: 40px auto;
  /* background: url(../../static/images/tbbg.png) #010F1C; */
  /* background-size: cover; */
}
.cardlink {
  width: 400px;
  margin: auto;
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
.title {
  font-size: 20px !important;
}
</style>
<script>
//生成从minNum到maxNum的随机数
import { randomNum } from "../utils/utils.js";
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "主持人",
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
        },
        {
          id: 31,
          name: "刘月"
        }
      ],
      staffListOnline: [],
      shadow: "hover",
      cindex: 0,
      timer: ""
    };
  },
  mounted() {
    this.initPeople();
  },
  methods: {
    initPeople() {
      let self = this;
      axios({
        url: "http://10.10.1.253:66/user/selectAllByStatus",
        method: "post",
        data: {}
      })
        .then(res => {
          let result = res.data.data;
          if (res.data.code == 0) {
            self.msg = res.data.msg;
            self.staffListOnline = result.users;
          }
        })
        .catch(error => {
          alert(error);
        });
    },
    start() {
      // this.$message({
      //   message: "开始",
      //   type: "success"
      // });
      this.initPeople();
      this.shadow = "hover";
      if (this.timer) {
        clearInterval(this.timer);
      }
      let self = this;
      this.timer = setInterval(function() {
        self.cindex = randomNum(0, self.staffListOnline.length - 1);
      }, 50);
    },
    end() {
      clearInterval(this.timer);
      console.log(this.$refs.userId.$attrs.dataId);
      this.shadow = "always";
      axios({
        url: "http://10.10.1.253:66/user/updateStatus",
        headers: {
          "Content-Type": "application/json"
        },
        method: "post",
        data: {
          id: this.$refs.userId.$attrs.dataId
        }
      })
        .then(res => {
          this.$message({
            message: `${res.data.msg}`,
            type: "success"
          });
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>
