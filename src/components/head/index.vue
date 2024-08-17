<template>
  <div class="head-container">
    <!-- mobile -->
    <div class="head flex items-center justify-between" v-if="isSmallSize">
      <logo @click="reload"></logo>
      <div class="flex justify-between items-center">
        <div class="lang">
          <el-select
            v-model="locale"
            placeholder="Select"
            @change="changeLang()"
            :teleported-="false"
          >
            <el-option label="中文" value="zh" />
            <el-option label="English" value="en" />
          </el-select>
        </div>
        <menuSvg class="mx-2" @click="openMenu()"></menuSvg>
      </div>
    </div>
    <!-- pc -->
    <div
      ref="headRef"
      class="head-box"
      v-else
      @mouseleave="isShowChild(menus[0], false)"
    >
      <div class="head">
        <logo class="cursor-pointer mt-2" @click="reload"></logo>
        <section>
          <div class="menus">
            <div
              v-for="(item, index) in menus"
              :key="index"
              class=""
              @mouseenter="isShowChild(item, true)"
              @click="changePage(item)"
            >
              <li
                class="hvr-underline-from-center"
                :class="[
                  route.meta.title === item.path ? 'active-bg' : 'default-bg',
                  locale === 'en' ? 'menu-en' : 'menu',
                ]"
              >
                {{ item.name }}
              </li>
            </div>
          </div>
          <div class="head-child">
            <div class="good-tabs" v-show="activeRoute === 'goods'">
              <el-tabs tabPosition="left">
                <el-tab-pane
                  v-for="(t, index) in goodMenus"
                  :key="index"
                  :label="t.name"
                >
                  <li
                    :class="v.path === 'R275A' ? 'newLi' : ''"
                    class="hover:font-500"
                    v-for="(v, i) in t.child"
                    :key="i"
                    @click="toPage(v)"
                  >
                    {{ v.name }}
                  </li>
                </el-tab-pane>
              </el-tabs>
            </div>
            <div class="about-tabs" v-show="activeRoute === 'aboutUs'">
              <li
                class="mb-4 cursor-pointer hover:font-500"
                v-for="(v, i) in aboutUsMenus"
                :key="i"
                @click="toPage1(v)"
              >
                {{ v.name }}
              </li>
            </div>
          </div>
        </section>
        <div class="head-left">
          <div
            :class="activeRoute === '-1' ? 'active-bg' : 'default-bg'"
            class="btn-black mr-8 cursor-pointer"
            @click="loginCheck()"
          >
            {{ t("Email") }}
          </div>
          <div class="lang">
            <el-select v-model="locale" placeholder="" @change="changeLang()">
              <el-option label="中文" value="zh" />
              <el-option label="English" value="en" />
            </el-select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-dialog v-model="openMenus" class="modal-comp" :fullscreen="true">
    <div class="menu-list">
      <div class="menus wow animate__animated animate__fadeInDown">
        <div v-for="(item, index) in menus" :key="index">
          <li
            :class="activeRoute === item.path ? 'active-menu' : 'default-menu'"
            @click.stop="changePage(item)"
          >
            {{ item.name }}
          </li>
          <div v-if="item.path === 'goods'">
            <div
              class="flex flex-col"
              v-for="(item, index) in goodMenus"
              :key="index"
            >
              <li class="my-2">{{ item.name }}</li>
              <li
                :class="v.path === 'R275A' ? 'newLi' : ''"
                class="mb-2 hover:font-500"
                v-for="(v, i) in item.child"
                :key="i"
                @click="toPage(v)"
              >
                {{ v.name }}
              </li>
            </div>
          </div>
          <div v-if="item.path === 'aboutUs'">
            <li
              class="child-menu"
              v-for="t in item.child"
              :key="t.path"
              @click="toPage1(t)"
            >
              {{ t.name }}
            </li>
          </div>
        </div>
        <div class="bb-li">
          <li
            :class="activeRoute === '-1' ? 'active-bg' : 'default-bg'"
            class="w30 btn-black cursor-pointer"
            @click="loginCheck()"
          >
            {{ t("Email") }}
          </li>
        </div>
      </div>
      <div class="close" @click="openMenus = false">
        <el-icon><CloseBold /></el-icon>
      </div>
    </div>
  </el-dialog>
  <el-dialog
    class="modal-comp"
    v-model="showDialog"
    title="Warning"
    :width="isSmallSize ? 358 : 490"
    align-center
  >
    <div class="flex flex-col justify-center items-center space-y-10">
      <logo></logo>
      <el-form
        ref="ruleFormRef"
        :style="isSmallSize ? 'width: 320px' : 'width: 400px'"
        :model="ruleForm"
        label-width="left"
      >
        <el-form-item prop="name">
          <template #label>
            <div class="">{{ t("common.user") }}</div>
          </template>
          <el-input v-model="ruleForm.userName" />
        </el-form-item>
        <el-form-item prop="company">
          <template #label>
            <div class="">{{ t("common.pwd") }}</div>
          </template>
          <el-input v-model="ruleForm.password" type="password" show-password />
        </el-form-item>
        <div class="text-center mt-12">
          <el-button class="btn-black2" type="primary" @click="submitForm()">
            {{ t("common.login") }}
          </el-button>
        </div>
      </el-form>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { sys } from "@/api/sys";
import logo from "@/assets/logo1.svg";
import menuSvg from "@/assets/menu.svg";
import { useUserStoreHook } from "@/store/modules/user";
import { onMounted, reactive, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
const userStore = useUserStoreHook();

const { t, locale } = useI18n();
const router = useRouter();
const route = useRoute();
const headRef = ref();
const openMenus = ref(false);
const isSmallSize = ref(window.innerWidth < 576);
const activeRoute = ref("goods");
const showMenu = ref(true);
const ruleForm = reactive({
  userName: "",
  password: "",
});
const menus = [
  {
    path: "goods",
    name: t("common.routes.menu1"),
    id: 0,
    child: [
      {
        name: t("gdList.card[1]"),
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
        name: t("gdList.card[2]"),
        child: [
          {
            name: "RS100",
            path: "RS100",
          },
        ],
      },
      {
        name: t("gdList.card[3]"),
        child: [
          {
            name: "H920",
            path: "H920",
          },
        ],
      },
    ],
  },
  // {
  //   path: "service",
  //   name: t("common.routes.menu2"),
  //   id: 1,
  // },
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
    child: [
      {
        name: t("common.childMenu[0]"),
        path: "aboutUs",
      },
      {
        name: t("common.childMenu[1]"),
        path: "news",
      },
      {
        name: t("common.childMenu[2]"),
        path: "expo",
      },
      {
        name: t("common.headLink.t4"),
        path: "contactUs",
      },
    ],
  },
];
const goodMenus = [
  {
    name: t("gdList.card[1]"),
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
    name: t("gdList.card[2]"),
    child: [
      {
        name: "RS100",
        path: "RS100",
      },
    ],
  },
  {
    name: t("gdList.card[3]"),
    child: [
      {
        name: "H920",
        path: "H920",
      },
    ],
  },
];

const aboutUsMenus = [
  {
    name: t("common.childMenu[0]"),
    path: "aboutUs",
  },
  {
    name: t("common.childMenu[1]"),
    path: "news",
  },
  {
    name: t("common.childMenu[2]"),
    path: "expo",
  },
  {
    name: t("common.headLink.t4"),
    path: "contactUs",
  },
];

watch(route, (v) => {
  document.body.style.overflow = "auto";
  if (v.path === "/contact") {
    activeRoute.value = "contact";
  } else {
    const temp = menus.find((l) => l.path === v.meta.title);
    activeRoute.value = temp?.path;
    console.log(`output->activeRoute.value`, activeRoute.value, v);
  }

  showMenu.value = true;
});

const openMenu = () => {
  openMenus.value = true;
};
const reload = () => {
  openMenus.value = false;
  router
    .push({
      path: "/",
    })
    .then(() => {
      window.location.reload();
    });
};
const isShowChild = (v: any, open: boolean) => {
  // if (open && (v.path === "goods" || v.path === "aboutUs")) {
  activeRoute.value = v.path;
  // }
  if (
    open &&
    (activeRoute.value === "goods" || activeRoute.value === "aboutUs")
  ) {
    headRef.value.style.height = "240px";
  } else {
    headRef.value.style.height = "88px";
  }
};
const toPage = (item: any) => {
  openMenus.value = false;
  router.push({
    path: `/goods/${item.path}`,
  });
};
const toPage1 = (v: any) => {
  openMenus.value = false;
  router.push({
    path: `/${v.path}`,
  });
};
const showDialog = ref(false);
const toContact = () => {
  ruleForm.userName = "";
  ruleForm.password = "";
  showDialog.value = true;
};
const loginCheck = () => {
  activeRoute.value = "report";
  openMenus.value = false;
  sys.loginCheck().subscribe((res) => {
    if (res) {
      router.push("/report");
    } else {
      toContact();
    }
  });
};

const submitForm = () => {
  showDialog.value = false;
  activeRoute.value = "report";
  userStore.getLogin(ruleForm).then((res) => {
    showMenu.value = false;
    router.push("/report");
  });
};
const changeLang = () => {
  localStorage.setItem("locale", locale.value);
  window.location.reload();
};
const changePage = (item: any) => {
  openMenus.value = false;
  activeRoute.value = item.path;
  router.push({
    path: `/${item.path}`,
  });
};

onMounted(() => {});
</script>

<style lang="scss" scoped>
.head-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #ffffff;

  .head-box {
    width: 1384px;
    padding: 24px 0;
    height: 88px;
    margin: 0 auto;
    overflow: hidden;
    transition: height 0.8s;
    -webkit-transition: height 0.8s;

    .head {
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .menus {
        position: relative;
        display: flex;
        gap: 32px;

        .menu {
          font-size: 16px;
          cursor: pointer;
          padding: 12px 0;
          margin: 0 40px;
        }
        .menu-en {
          font-size: 16px;
          cursor: pointer;
          padding: 12px 0;
          margin: 0 16px;
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
      color: #1d1c23cc;

      .good-tabs {
        .newLi {
          position: relative;
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 6px;
            right: 2px;
            width: 6px;
            height: 6px;
            border-radius: 100%;
            background-color: #c6c6cd;
          }
        }
        :deep(.el-tabs__item) {
          text-align: left;
          height: 32px !important;
          line-height: 32px;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          justify-content: flex-start;

          &:hover {
            color: #1d1c23;
          }
        }

        :deep(.el-tabs__active-bar) {
          background: #e4e7ed;
        }

        :deep(.el-tabs__item.is-active) {
          font-weight: 500;
          color: #1d1c23;
        }

        :deep(.el-tab-pane) {
          li {
            cursor: pointer;
            color: #1d1c23cc;
            height: 32px;
            line-height: 32px;
          }
          &:nth-child(0) {
            color: red;
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
        color: #1d1c23cc;
      }
    }
  }

  .lang {
    margin-left: 20px;
    :deep(.el-select) {
      width: 110px !important;
      background-color: inherit;

      &:hover:not(.el-select--disabled) .el-input__wrapper {
        box-shadow: none !important;
      }
    }
    :deep(.el-select__wrapper) {
      box-shadow: none !important;
    }

    :deep(.el-select .el-input.is-focus .el-input__wrapper) {
      box-shadow: none !important;
    }

    :deep(.el-select__placeholder) {
      color: #1d1c23;
    }

    :deep(.el-input) {
      height: 48px;
    }

    :deep(.el-input__inner) {
      padding: 0;
      color: #1d1c23;
      font-weight: 500;
    }
    :deep(.el-input__wrapper) {
      position: relative;
      // padding-left: 8px;
      box-shadow: 0 0 0 1px #b0a7a700 inset;
      .is-focus {
        color: #1d1c23;
      }
    }
    :deep(.el-select-dropdown__item.selected) {
      color: #111112 !important;
      background-color: #2e2e3840;
    }

    :deep(.el-input__suffix) {
      // position: absolute;
      // right: 20px;

      .el-input__suffix-inner {
      }
      svg {
        color: #1d1c23;
      }
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
  &:hover {
    background-color: #414344;
  }
}
.btn-black2 {
  width: 314px;
  height: auto;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 32px;
  border-radius: 99px;
  color: #fff;
  background-color: #111112;
  border: 1px solid #111112;
  &:hover {
    background-color: #414344;
  }
}
:deep(.el-form-item) {
  margin: 0 auto;
  display: block;
  text-align: left;
  margin-bottom: 24px;

  .el-form-item__label {
    color: #1d1c23;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 4px;
  }

  .el-form-item__content {
    width: 100%;
  }
  .el-input__wrapper {
    font-size: 14px;
    height: 44px;
    line-height: 44px;
    font-weight: 500;
  }
  .el-input__inner {
    text-align: center;
    padding: 0 16px;
  }
  .el-input .el-input__icon {
    font-size: 18px;
  }
}
.btn-white {
  font-size: 14px;
  line-height: 20px;
  color: #1d1c23;
  padding: 10px 32px;
  border-radius: 99px;
  background-color: #fff;
  &:hover {
    background-color: #f4f4f4;
  }
}
@media (max-width: 576px) {
  .head-container {
    .head {
      padding: 28px 16px 12px 16px;
    }
  }
  .el-dialog__body {
    padding: 0 !important;
  }
  .menu-list {
    padding-top: 24px;
    width: 100vw;
    height: 100vh;
    // position: absolute;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    .menus {
      color: #1d1c23;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .child-menu {
        font-size: 14px;
        line-height: 20px;
        padding: 8px 0;
      }
      :deep(.el-tabs__item) {
        text-align: left;
        height: 32px !important;
        line-height: 32px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        justify-content: flex-start;

        &:hover {
          color: #1d1c23;
        }
      }
      .active-menu {
        height: 48px;
        width: 358px;
        font-size: 16px;
        font-weight: 600;
        padding: 12px 0;
        border-bottom: #1d1c23 2px solid;
      }
      .default-menu {
        height: 48px;
        width: 358px;
        font-size: 16px;
        font-weight: 600;
        padding: 12px 0;
        border-bottom: #c6c6cd 1px solid;
      }
      .bb-li {
        height: 48px;
        width: 358px;
        font-size: 16px;
        font-weight: 600;
      }
    }
    .close {
      position: absolute;
      top: 24px;
      right: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #1d1c23;
      font-size: 24px;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background-color: #f4f4f4;
      z-index: 999;
    }
    .newLi {
      width: max-content;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 2px;
        right: -12px;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: #c6c6cd;
      }
    }
  }
}
</style>
