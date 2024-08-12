<template>
  <div class="pg-wrapper">
    <div
      v-if="route.meta.title != 'report' && route.meta.title != 'sys'"
      class="contact"
    >
      <li class="title wow animate__animated animate__fadeInUp">
        联系我们获取更多产品信息与合作细节
      </li>
      <div class="items-center info">
        <el-button
          class="btn-black wow animate__animated animate__fadeInUp"
          @click="openDialog()"
          >样机试用/演示</el-button
        >
        <li class="call wow animate__animated animate__fadeInUp">
          咨询热线：15381991195
        </li>
      </div>
    </div>
    <div class="footer">
      <div class="main">
        <div class="cont">
          <div class="conf">
            <logo></logo>
            <li
              class="text-l text-color wow animate__animated animate__fadeInUp"
            >
              专注工业机器视觉，以读码产品开启智能制造
            </li>
          </div>
          <div class="conf goods-box flex flex-wrap justify-between">
            <div v-for="(items, index) in goodMenus" :key="index">
              <li class="type wow animate__animated animate__fadeInUp">
                {{ items.name }}
              </li>
              <div class="space-y-4 wow animate__animated animate__fadeInUp">
                <li
                  v-for="item in items.child"
                  :key="item.path"
                  class="text-color cursor-pointer"
                  @click="toPage(item)"
                >
                  {{ item.name }}
                </li>
              </div>
            </div>
          </div>
          <div class="conf space-y-6">
            <li>关注我们</li>
            <div class="flex space-x-6">
              <div class="icon-item">
                <icon0 class="cursor-pointer"></icon0>
                <img
                  class="icon-hover"
                  src="@/assets/footer/icon0.png"
                  alt=""
                />
              </div>
              <div class="icon-item">
                <icon1 class="cursor-pointer"></icon1>
                <img
                  class="icon-hover"
                  src="@/assets/footer/icon1.png"
                  alt=""
                />
              </div>
              <div class="icon-item">
                <icon2 class="cursor-pointer"></icon2>
                <img
                  class="icon-hover"
                  src="@/assets/footer/icon2.png"
                  alt=""
                />
              </div>
              <div class="icon-item">
                <icon3 class="cursor-pointer"></icon3>
                <img
                  class="icon-hover"
                  src="@/assets/footer/icon3.png"
                  alt=""
                />
              </div>
              <div class="icon-item">
                <icon4 class="cursor-pointer"></icon4>
                <img
                  class="icon-hover"
                  src="@/assets/footer/icon4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="zc flex justify-start space-x-8">
          <li>隐私政策</li>
          <li>Cookies政策</li>
          <li>备案信息</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import icon0 from "@/assets/footer/footer-icon0.svg";
import icon1 from "@/assets/footer/footer-icon1.svg";
import icon2 from "@/assets/footer/footer-icon2.svg";
import icon3 from "@/assets/footer/footer-icon3.svg";
import icon4 from "@/assets/footer/footer-icon4.svg";
import logo from "@/assets/logo2.svg";
import { addDialog } from "@/components/Dialog/index";
import * as popModules from "@/components/Dialog/modulesIdex";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const isSmallSize = ref(window.innerWidth < 900);

const goodMenus = [
  {
    name: "紧凑型R系列",
    child: [
      {
        name: "R275-A",
        path: "R275A",
      },
      {
        name: "R270-A",
        path: "R275A",
      },
      {
        name: "R172-E/S",
        path: "R17",
      },
      {
        name: "R170-E/S",
        path: "R17",
      },
    ],
  },
  {
    name: "双航插RS系列",
    child: [
      {
        name: "RS100",
        path: "RS100",
      },
      // {
      //   name: "RS 300",
      //   path: "RS300",
      // },
      // {
      //   name: "RS 20000",
      //   path: "RS20000",
      // },
    ],
  },
  {
    name: "手持式H系列",
    child: [
      {
        name: "H920 无线/有线",
        path: "H920",
      },
      // {
      //   name: "H930",
      //   path: "H930",
      // },
      // {
      //   name: "H620",
      //   path: "H620",
      // },
    ],
  },
];

const openDialog = () => {
  addDialog({
    title: "",
    width: isSmallSize.value ? "358px" : "480px",
    props: {},
    footer: false,
    component: popModules.SY,
    callBack: (config) => {
      //当弹窗任务结束后，调用父页面的回掉函数。（比如	我新增完成了需要刷新列表页面）
      if (config) {
      }
    },
  });
};

const toPage = (item: any) => {
  router.push({
    path: `/goods/${item.path}`,
  });
};
onMounted(() => {});
</script>
<style lang="scss" scoped>
.pg-wrapper {
  color: #1d1c23;
  background-color: #f4f4f4;
  border-top: 1px solid #dfe1e2;
  text-wrap: wrap;
  word-wrap: break-word;
  white-space: normal;
  .contact {
    text-align: left;
    width: 1384px;
    margin: 0 auto;
    padding: 64px 0;
  }

  .title {
    font-size: 48px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 3.84px;
  }

  .text {
    font-size: 24px;
    line-height: 32px;
  }

  .info {
    display: flex;
    margin-top: 32px;

    .call {
      margin-left: 32px;
    }
  }

  .btn-white {
    font-size: 14px;
    line-height: 20px;
    padding: 10px 32px;
    border-radius: 99px;
    color: #1d1c23;
    background-color: #fff;
    border: 1px solid #1d1c23;
    &:hover {
      background-color: #f4f4f4;
    }
  }

  .btn-black {
    height: auto;
    width: 212px;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 32px;
    border-radius: 99px;
    color: #fff;
    background-color: #1d1c23;
    border: 1px solid #fefefe;
    &:hover {
      background-color: #414344;
    }
  }
}

.footer {
  color: #fff;
  width: 100%;
  padding: 64px;
  background: #111212;

  .main {
    width: 1384px;
    margin: 0 auto;

    .cont {
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .logo-img {
        height: 28px;
        width: 134px;
        margin: 10px 4px;
      }

      .text-color {
        color: #a3a8ab;
      }

      .text-l {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
      }

      .conf {
        text-align: left;
        font-size: 12px;
        line-height: 24px;

        .type {
          color: #fff;
          font-size: 16px;
          font-style: normal;
          line-height: 22px;
          margin-bottom: 32px;
        }
        .icon-item {
          position: relative;
          &:hover {
            .icon-hover {
              opacity: 1;
              transform: scale(1.3);
              transition: all 0.8s;
              top: -210px;
            }
          }
          .icon-hover {
            opacity: 0;
            position: absolute;
            top: -185px;
            left: -75px;
            z-index: 999;
          }
        }
      }

      .goods-box {
        flex: 0 0 auto;
        width: 484px;
      }
    }

    .zc {
      margin-top: 32px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #a3a8ab;
    }
  }
}

@media (max-width: 576px) {
  .pg-wrapper {
    text-align: center;
    .contact {
      text-align: center;
      width: 390px;
      margin: 0 auto;
      padding: 64px 0;
    }
    .title {
      width: 290px;
      margin: 0 auto;
      font-size: 28px;
      font-weight: 500;
      line-height: normal;
    }

    .text {
      font-size: 24px;
      line-height: 32px;
    }

    .info {
      display: block;
      margin-top: 32px;

      .call {
        margin: 16px 0;
      }
    }
  }
  .footer {
    padding: 32px 24px;
    .main {
      width: 358px;
      margin: 0 auto;
      .cont {
        flex-direction: column;

        .text-l {
          margin-bottom: 48px;
        }
        .goods-box {
          flex: 0 0 auto;
          width: 252px;
          & > div {
            margin-bottom: 32px;
          }
        }
      }
    }
  }
}
</style>
