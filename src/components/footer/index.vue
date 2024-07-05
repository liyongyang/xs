<template>
  <section class="section-text-wrapper container-pg6 bg-color2 text-left">
    <li class="title wow animate__animated animate__fadeInUp">联系我们获取更多产品信息与合作细节</li>
    <div class="flex items-center info">
      <el-button class="btn-black wow animate__animated animate__fadeInUp">样机试用/演示</el-button>
      <li class="call wow animate__animated animate__fadeInUp">咨询热线：15381991195</li>
    </div>
  </section>
  <div class="footer">
    <div class="main">
      <div class="cont">
        <div class="conf">
          <img class="logo-img wow animate__animated animate__fadeInUp" src="/common/logo2.png" alt="" />
          <li class="text-l text-color wow animate__animated animate__fadeInUp">专注工业机器视觉，以读码产品开启智能制造</li>
        </div>
        <div class="conf goods-box flex justify-between">
          <div v-for="(items, index) in goodMenus" :key="index">
            <li class="type wow animate__animated animate__fadeInUp">{{ items.name }}</li>
            <div class="space-y-4 wow animate__animated animate__fadeInUp">
              <li v-for="item in items.child" :key="item.path" class="text-color cursor-pointer" @click="toPage(item)">
                {{
            item.name }}
              </li>
            </div>
          </div>
        </div>
        <div class="conf space-y-6">
          <li>关注我们</li>
          <div class="space-x-6">
            <icon0></icon0>
            <icon1></icon1>
            <icon2></icon2>
            <icon3></icon3>
            <icon4></icon4>
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
</template>

<script setup lang='ts'>
import icon0 from '@/assets/footer-icon0.svg';
import icon1 from '@/assets/footer-icon1.svg';
import icon2 from '@/assets/footer-icon2.svg';
import icon3 from '@/assets/footer-icon3.svg';
import icon4 from '@/assets/footer-icon4.svg';
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goodMenus = [
  {
    name: '紧凑型R系列',
    child: [
      {
        name: 'R275-A',
        path: 'R275A',
      },
      {
        name: 'R270-A',
        path: 'R270A',
      },
      {
        name: 'R172 E/S',
        path: 'R172',
      },
      {
        name: 'R170 E/S',
        path: 'R17',
      },
    ]
  },
  {
    name: '双航插RS系列',
    child: [
      {
        name: 'RS 100',
        path: 'RS100',
      },
      {
        name: 'RS 300',
        path: 'RS300',
      },
      {
        name: 'RS 20000',
        path: 'RS20000',
      },
    ]
  },
  {
    name: '手持式H系列',
    child: [
      {
        name: 'H920',
        path: 'H920',
      },
      {
        name: 'H930',
        path: 'H930',
      },
      {
        name: 'H620',
        path: 'H620',
      },
    ]
  },
  {
    name: '读码模组'
  }
];

const toPage = (item: any) => {
  router.push({
    path: `/goods/${item.path}`,
  });
}
onMounted(() => { });
</script>
<style lang='scss' scoped>
.section-text-wrapper {
  color: #1d1c23;
  background-color: #F4F4F4;
  padding: 64px;

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
      }

      .goods-box {
        flex: 0 0 auto;
        width: 648px;
      }
    }

    .zc {
      margin-top: 32px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #A3A8AB;
    }
  }

}

// @media (max-width: 576px) {
//   .footer {
//     color: #fff;
//     margin-top: 24px;
//     width: 100%;
//     height: 560px;
//     background: #231c1e;
//     text-align: -webkit-center;

//     .cont {
//       width: 358px;
//       height: 100%;
//       margin: 0 auto;
//       padding: 24px;
//       display: block;

//       .img {
//         width: 180px;
//         display: flex;
//         flex-direction: row;
//         justify-content: space-between;
//         margin-bottom: 32px;

//         img {
//           width: 79px;
//           height: 79px;
//         }
//       }

//       .conf {
//         text-align: left;
//         width: auto;
//         font-size: 12px;
//         line-height: 24px;
//         text-align: -webkit-center;
//         margin: 12px;
//       }
//     }
//   }
// }</style>