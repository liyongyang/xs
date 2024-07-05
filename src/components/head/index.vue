<template>
  <div class="head-container">
    <div ref="headRef" class="head-box" @mouseenter="isShowChild(true)" @mouseleave="isShowChild(false)">
      <div class="head">
        <img class="cursor-pointer" src="/common/logo.png" alt="" @click="reload" />
        <div>
          <div class="menus">
            <div v-for="(item, index) in menus" :key="index" class="" @click="changePage(item, i)">
              <li class="menu hvr-underline-from-center"
                :class="activeRoute === item.path ? 'active-bg' : 'default-bg'">
                {{ item.name }}</li>
            </div>
          </div>
          <div class="head-child">
            <div class="good-tabs" v-show="activeRoute === 'goods'">
              <el-tabs tabPosition="left">
                <el-tab-pane v-for="(t, index) in goodMenus" :key="index" :label="t.name">
                  <li class="hover:font-500" v-for="(v, i) in t.child" :key="i" @click="toPage(v)">{{ v.name }}</li>
                </el-tab-pane>
              </el-tabs>
            </div>
            <div class="about-tabs" v-show="activeRoute === 'aboutUs'">
              <li class="my-4 cursor-pointer hover:font-500" v-for="(v, i) in aboutUsMenus" :key="i"
                @click="toPage1(v)">{{ v.name }}</li>
            </div>
          </div>
        </div>
        <div class="head-left">
          <div :class="activeRoute === '-1' ? 'active-bg' : 'default-bg'" class="btn-black mr-8" @click="toContact">
            {{ t("Email") }}
          </div>
          <div class="lang">
            <el-select v-model="locale" placeholder="Select" @change="changeLang(v)">
              <el-option label="中文" value="zh" />
              <el-option label="English" value="en" />
            </el-select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const { t, locale } = useI18n();
const router = useRouter();
const route = useRoute();
const headRef = ref()
const isSmallSize = ref(window.innerWidth < 576);
const activeRoute = ref('goods');
const showMenu = ref(true);
const menus = [
  {
    path: "goods",
    name: t("common.routes.menu1"),
    id: 0,
  },
  {
    path: "service",
    name: t("common.routes.menu2"),
    id: 1,
  },
  {
    path: "technical",
    name: t("common.routes.menu3"),
    id: 2,
  },
  {
    path: "CustomerCase",
    name: t("common.routes.menu4"),
    id: 3,
  },
  {
    path: "aboutUs",
    name: t("common.routes.menu5"),
    id: 4,
  },
];
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
        path: 'R17',
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
];

const aboutUsMenus = [
  {
    name: '新闻资讯',
    path: 'news',
  },
  {
    name: '展会动态',
    path: 'expo',
  },
  {
    name: '联系我们',
    path: 'contactUs',
  },
]

watch(route, (v) => {
  document.body.style.overflow = "auto";
  if (v.path === "/contact") {
    activeRoute.value = '-1';
  } else {
    const temp = menus.find((l) => l.path === v.meta.title);
    activeRoute.value = temp?.path;
  }
  showMenu.value = true;
});

const reload = () => {
  router
    .push({
      path: "/",
    })
    .then(() => {
      window.location.reload();
    });
};
const isShowChild = (open: boolean) => {
  console.log(`output->activeRoute.value`, activeRoute.value)
  if (activeRoute.value === 'goods' || activeRoute.value === 'aboutUs') {
    if (open) {
      headRef.value.style.height = '240px'
    } else {
      headRef.value.style.height = '88px'
    }
  }
};
const toPage = (item: any) => {
  router.push({
    path: `/goods/${item.path}`,
  });
}
const toPage1 = (v: any) => {
  router.push({
    path: `/${v.path}`,
  });
}

const toContact = () => {
  activeRoute.value = '-1';
  showMenu.value = false;
  router.push("/contact");
};
const changeLang = () => {
  localStorage.setItem("locale", locale.value);
  window.location.reload();
};
const changePage = (item: any, i: number) => {
  activeRoute.value = item.path;
  if (activeRoute.value === 'goods' || activeRoute.value === 'aboutUs') {
    headRef.value.style.height = '240px'
  }
  else {
    headRef.value.style.height = '88px'
  }
  router.push({
    path: `/${item.path}`,
  });
};

onMounted(() => { });

</script>

<style lang='scss' scoped>
.head-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #ffffff;

  .head-box {
    height: 88px;
    padding: 32px 64px 8px 64px;
    margin: 0 auto;
    overflow: hidden;
    transition: height 0.8s;
    -webkit-transition: height 0.8s;

    &:hover {
      // height: 240px;
    }

    .head {
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .menus {
        display: flex;

        .menu {
          font-size: 16px;
          cursor: pointer;
          padding: 12px 0;
          margin: 0 40px;
        }

        .hvr-underline-from-center:before {
          height: 3px;
          background-color: #20262e;
        }
      }

      .head-left {
        display: flex;
        align-items: center;
      }
    }

    .head-child {
      position: relative;
      display: flex;
      margin: 0 20px;
      font-weight: 500;
      padding-top: 12px;
      background: #ffffff;
      color: #1D1C23CC;

      .good-tabs {

        :deep(.el-tabs__item) {
          text-align: left;
          height: 32px !important;
          line-height: 32px;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          justify-content: flex-start;

          &:hover {
            color: #1D1C23;
          }
        }

        :deep(.el-tabs__active-bar) {
          background: #e4e7ed;
        }

        :deep(.el-tabs__item.is-active) {
          font-weight: 500;
          color: #1D1C23;
        }

        :deep(.el-tab-pane) {
          li {
            cursor: pointer;
            color: #1D1C23CC;
            height: 32px;
            line-height: 32px;
          }
        }
      }

      .about-tabs {
        position: absolute;
        right: 0;
        margin: 0 20px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;

      }

      .chil-item {
        cursor: pointer;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
        color: #1D1C23CC;
      }
    }
  }

  .lang {
    :deep(.el-select) {
      width: 104px !important;
      background-color: inherit;

      &:hover:not(.el-select--disabled) .el-input__wrapper {
        box-shadow: none !important;
      }
    }

    :deep(.el-select .el-input.is-focus .el-input__wrapper) {
      box-shadow: none !important;
    }

    :deep(.el-select__placeholder) {
      color: #1D1C23;
    }

    :deep(.el-input) {
      height: 48px;
    }

    :deep(.el-input__inner) {
      color: #1D1C23;
      font-weight: 500;
    }

    :deep(.el-input__wrapper) {
      position: relative;
      border-radius: 12px;
      padding-left: 8px;
      box-shadow: 0 0 0 1px #b0a7a700 inset;
    }

    :deep(.el-input__suffix) {
      position: absolute;
      right: 20px;

      svg {
        font-weight: 500;
        color: #1D1C23;
      }
    }
  }

  .btn-black {
    height: auto;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 32px;
    border-radius: 99px;
    color: #fff;
    background-color: #1d1c23;
    border: 1px solid #fefefe;
  }
}
</style>
