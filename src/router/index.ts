import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
export const defaultRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "home",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/goods",
    component: () => import("@/views/goods/index.vue"),
    meta: {
      title: "goods",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/goods/:sase",
    component: () => import("@/views/goods/components/index.vue"),
    meta: {
      title: "goods",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/goods/R275A",
    component: () => import("@/views/goods/components/R275A.vue"),
    meta: {
      title: "goods",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/goods/R17",
    component: () => import("@/views/goods/components/r17.vue"),
    meta: {
      title: "goods",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/goods/RS100",
    component: () => import("@/views/goods/components/rs100.vue"),
    meta: {
      title: "goods",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/goods/H920",
    component: () => import("@/views/goods/components/h920.vue"),
    meta: {
      title: "goods",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/goods/:goodType/product-params",
    component: () => import("@/views/goods/components/productParams/index.vue"),
    meta: {
      title: "goods",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/goods/:goodType/download",
    component: () => import("@/views/goods/components/download/index.vue"),
    meta: {
      title: "goods",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/goods/:goodType/qa",
    component: () => import("@/views/goods/components/qa/index.vue"),
    meta: {
      title: "goods",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/goods/:goodType/similar",
    component: () => import("@/views/goods/components/similar/index.vue"),
    meta: {
      title: "goods",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/technical",
    component: () => import("@/views/technical/index.vue"),
    meta: {
      title: "technical",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/CustomerCase",
    component: () => import("@/views/CustomerCase/index.vue"),
    meta: {
      title: "CustomerCase",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/CustomerCase/:case",
    component: () => import("@/views/CustomerCase/components/detailCase.vue"),
    meta: {
      title: "detailCase",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/aboutUs",
    component: () => import("@/views/aboutUs/index.vue"),
    meta: {
      title: "aboutUs",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/news",
    component: () => import("@/views/news/index.vue"),
    meta: {
      title: "aboutUs",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/expo",
    component: () => import("@/views/expo/index.vue"),
    meta: {
      title: "aboutUs",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/contactUs",
    component: () => import("@/views/contactUs/index.vue"),
    meta: {
      title: "aboutUs",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/report",
    component: () => import("@/views/report/index.vue"),
    meta: {
      title: "report",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/sys",
    component: () => import("@/views/sys/index.vue"),
    meta: {
      title: "sys",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/detail/:id",
    component: () => import("@/views/detail/index.vue"),
    meta: {
      title: "aboutUs",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/privacy-policy",
    component: () => import("@/views/privacy-policy/index.vue"),
    meta: {
      title: "privacy-policy",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
  {
    path: "/cookies-policy",
    component: () => import("@/views/cookies-policy/index.vue"),
    meta: {
      title: "cookies-policy",
      hidden: true,
      content: {
        keywords: "宁波新算技术有限公司,工业机器视觉行业,解码识读算法",
        description:
          "新算集团主营工业机器视觉传感器类产品的研发、设计和销售。新算核心研发团队已深耕工业机器视觉领域多年，具备完全独立自主知识产权的解码识读算法并已推出上市R275-A等一系列工业高性能固定式读码器产品。公司近年来深耕新能源电池及汽车制造...",
      },
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: defaultRoutes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.content) {
    const head = document.getElementsByTagName("head");
    const meta = document.createElement("meta");
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", to.meta.content.keywords || "");
    }
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        to.meta.content.description || ""
      );
    }
    meta.content = to.meta.content;
    head[0].appendChild(meta);
  }

  if (to.meta.title) {
    // document.title = to.meta.title;
  }
  next();
});
export default router;
