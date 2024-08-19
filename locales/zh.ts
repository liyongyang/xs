// index 首页结构 zh
export default {
  common: {
    routes: {
      menu1: "工业读码器",
      menu2: "读码模组",
      menu3: "技术能力",
      menu4: "客户案例",
      menu5: "公司信息",
    },
    childMenu: ["关于新算", "新闻资讯", "展会动态"],
    btn: {
      more: "了解更多",
      more2: "查看更多",
      try: "试用/联系我们",
      read_more: "阅读更多",
      video: "观看视频",
    },
    headLink: {
      t1: "产品参数",
      t2: "下载",
      t3: "常见问题",
      t4: "联系我们",
    },
    form: {
      t1: "姓名",
      t2: "公司",
      t3: "电话",
      t4: "邮箱",
      t5: "职务",
      t6: "所在城市",
      t7: "提交",
    },
    back: "返回",
    user: "账号",
    pwd: "密码",
    login: "登录",
    footer: {
      info1: {
        tit: "联系我们获取更多产品信息与合作细节",
        txt1: "样机试用/演示",
        txt2: "咨询热线",
        txt3: "15381991195",
      },
      info2: {
        txt1: "专注工业机器视觉，以读码产品开启智能制造",
        txt2: "隐私政策",
        txt3: "Cookies政策",
        txt4: "浙ICP备2023017780号-1",
        txt5: "关注我们",
      },
    },
  },
  Email: "客户报备",
  home: {
    sec1: [
      {
        name: "R275-A",
        type: "紧凑型 R 系列读码器",
        feat: "强大稳定解码力 · 一键调试 · 超小尺寸",
      },
      {
        name: "RS100",
        type: "双航插 RS 系列读码器",
        feat: ["全新光学系统", "-Tech™ · 一键调试+ · 精准无极调焦"],
      },
      {
        name: "H920（有线/无线）",
        type: "手持式 H 系列读码器",
        feat: "强大稳定解码力 · 同轴瞄准 · 训练功能",
      },
    ],
    sec2: {
      title: "创新技术，算无止境",
      list: [
        {
          t1: "机器视觉算法引擎™",
          t2: "完全自主研发解码算法 IP，性能强劲、解码稳定",
          hover: false,
        },
        {
          t1: "一键调试 OneClick",
          t2: "不止是调光，更是自适应算法调参，达到最优解码",
          hover: false,
        },
        {
          t1: "全新光学系统",
          t2: "多种镜头规格、光源颜色及光源类型，灵活组合以高可配置性应对不同场景需求",
          hover: false,
        },
      ],
    },
    sec3: {
      title: "业务出发，场景覆盖",
      tip: "多矩阵的产品储备，适配不同业务需求",
      list: [
        {
          title: "紧凑型 R 系列读码器",
          xh: ["R275-A", "R270-A"],
          type: "R",
        },
        {
          title: "紧凑型 R 系列读码器",
          xh: ["R172-E/S", "R170-E/S"],
          type: "R",
        },
        {
          img: "/home/carousel4.webp",
          title: "手持式 H 系列读码器",
          xh: ["H920 无线/有线"],
          type: "H",
        },
        {
          img: "/home/carousel3.png",
          title: "双航插 RS 系列读码器",
          xh: ["RS100", "RS300"],
          type: "RS",
        },
      ],
    },
  },
  gdList: {
    card: ["工业读码器全系列", "紧凑型R系列", "双航插RS系列", "手持式H系列"],
    r27x: [
      {
        title: "强大稳定解码力",
        txt: "自主知识产权解码引擎，性能强劲、解码稳定",
      },
      {
        title: "一键调试 OneClick",
        txt: "一键触发、解码又快又准",
      },
      {
        title: "毫秒级自动对焦",
        txt: "自动适应各种条码尺寸和工作距离",
      },
      {
        title: "超小尺寸",
        txt: "极致尺寸便于部署于狭窄产线或机台",
      },
    ],
    r17x: [
      {
        title: "一键调试 OneClick",
        txt: "自适应算法、自动调参、自识别码制",
      },
      {
        title: "读取稳定",
        txt: "10颗LED照明确保各种工况下清晰读码",
      },
      {
        title: "部署灵活",
        txt: "紧凑型一体化设计",
      },
      {
        title: "性价比高",
        txt: "适合各种读码场景",
      },
    ],
    RS100: [
      {
        title: "全新光学系统 X-Tech™",
        txt: "3×3×3 灵活组合以高可配置性应对不同场景需求",
      },
      {
        title: "一键调试+ OneClick Plus",
        txt: "新升级一键调试，新增 Quick & Max 模式，读码更快更稳定",
      },
      {
        title: "精准无极调焦",
        txt: "精确调焦，对焦距离可由 30mm 至 ∞ 无穷远",
      },
      {
        title: "双航插支持丰富通信协议",
        txt: "高标准双航插，稳定可靠，不用再担心脱落停机问题",
      },
    ],
    RS300: [
      {
        title: "-",
        txt: "-",
      },
      {
        title: "-",
        txt: "-",
      },
      {
        title: "-",
        txt: "-",
      },
      {
        title: "-",
        txt: "-",
      },
    ],
    Hlist: ["H920（有线）", "H920（无线）"],
    H: [
      {
        title: "强大稳定解码力",
        txt: "专为手持读码场景设计的算法引擎 Mobi × 均匀光技术",
      },
      {
        title: "旗舰级同轴瞄准",
        txt: "全面改善传统手持式读码器瞄准偏移现象，不再担心漏扫情况",
      },
      {
        title: "训练功能",
        txt: "新算专有训练功能，极大提升效率，带来极致流畅度",
      },
      {
        title: "人性化设计",
        txt: "专业的工业设计，更懂工厂实地使用情况",
      },
    ],
  },
  A275A_INFO: {
    name: "A275-A",
    detailInfo: {
      title: "设计细节",
      slider: [
        [
          {
            tit: "全透型钢化视窗",
            txt: "光学镀膜 + 钢化视窗 = 清晰读取，坚固耐用",
          },
          {
            tit: "全新几何光学设计",
            txt: "专业设计的镀银抛物面反射器，读码更加稳定",
          },
          {
            tit: "专研偏光滤镜照明",
            txt: "减少光干扰，稳定读码",
          },
        ],
        [
          {
            img: "/R275A/detail/slider3.webp",
            tit: "多ROI配置功能",
            txt: "多码环境下也能稳定读取",
          },
          {
            img: "/R275A/detail/slider4.webp",
            tit: "先进异构处理系统",
            txt: "提高解码性能、降低功耗",
          },
          {
            img: "/R275A/detail/slider5.webp",
            tit: "先进异构处理系统",
            txt: "光专为解决难读码而优化的 DSP",
          },
        ],
      ],
    },
    yyInfo: {
      title: "丰富的应用场景",
      slider: [
        [
          {
            tit: "0.5mm超小码",
            txt: "电子零部件的条码越来越小。采用超分辨率算法™的 R275-A，能够稳定读取超小码",
          },
          {
            tit: "L角破损30%",
            txt: "即使关键定位器（L角）破损达30%，SPL技术TM都能够轻松解决",
          },
        ],
        [
          {
            tit: "撞针深浅不一",
            txt: "金属铸件的撞针打标工艺会影响条码质量，利用新算强大的图像处理能力可以实现稳定读取",
          },
          {
            tit: "弧面反光",
            txt: "金属弧面的DPM码容易造成反光干扰解码，通过偏光滤镜降低反射可稳定解码",
          },
        ],
        [
          {
            tit: "金属拉丝",
            txt: "条码会因为黑色金属拉丝基底而难以读取，R275-A增强算法能够实现稳定读取",
          },
          {
            tit: "塑料膜遮挡",
            txt: "物流包裹覆膜会造成读码无法读取，强大的算法引擎能够解决该问题",
          },
        ],
        [
          {
            tit: "透过玻璃读取",
            txt: "精密设备有时要求读码器透过玻璃窗读取，通过偏光滤镜能够减少玻璃反光，从而读取条码",
          },
          {
            tit: "多码同时读取",
            txt: "SMT料盘往往有多个类型的条码，R275-A支持多种码制，能够实现同时读取多个不同的条码",
          },
        ],
      ],
    },
    dbInfo: {
      title: "产品对比",
      more: "详细参数",
    },
  },
  r17: {
    name: "R17 系列紧凑型读码器",
    tip: "一键调试 · 读取稳定 · 部署灵活",
    b1: "一键调试",
    info1: [
      {
        title: "自动调参",
        info: "超 86万 种参数配置，自动优化曝光、增益、滤镜等参数，应对挑战性读码情况",
      },
      {
        title: "自动检测读码类型",
        info: "自动检测1D码/2D码，根据条码类型条区域定义条码模版库，提高读取速度",
      },
    ],
    b2: "读取稳定",
    info2: "10颗LED照明确保各种工况下清晰读码",
    b3: "部署灵活",
    info3: "紧凑型一体化设计",
    b4: "应用场景",
    info4: [
      [
        {
          title: "锂电新能源",
        },
        {
          title: "3C电子",
        },
      ],
      [
        {
          title: "汽车制造",
        },
        {
          title: "光伏新能源",
        },
      ],
    ],
  },
  rs100: {
    name: "RS100 工业读码器",
    tip: "全新光学系统 · 一键调试+ · 精准无极调焦",
    b1: "全新光学系统",
    tip1: "灵活选配光源类型、镜头规格、光源颜色，满足不同场景需求",
    b2: "新算",
    info2: [
      [
        {
          title: "超解析力镜头：读取远距离难读码样本",
          info: "使用具有精密光学设计的 12/16mm 8MP 镜头，发挥100%CMOS传感器性能，相比同级产品仅能发挥70%CMOS传感器性能的1.2MP普通镜头，RS100的解析力更强、成像质量更好、读取远距离难读码更稳定",
        },
        {
          title: "大视野镜头：读取近距离多码样本",
          info: "使用 6mm 镜头，通过定制CMOS传感器及加速硬核，读取条码的视野相比同级产品扩大30%以上，能够一次性同时读取40个以上条码",
        },
      ],
      [
        {
          title: "3种光源最佳解码实例，光源可选择交叠使用",
          info: "",
        },
      ],
    ],
    b3: "一键调试+ OneClick Plus",
    tip3: "新升级一键调试+，新增Quicik& Max模式，读码更快更稳定",
    info3: [
      [
        {
          title: "新升级一键调试，新增 Quick & Max 模式，读码更快更稳定",
          info: "更快速：解码速度翻倍 ,更稳定：极致稳定解码，更适合移动读取",
        },
        {
          title: "N 种组合光源调试",
          info: "算法赋予读码器“智能大脑”，一键自适应无限组合光源，能够自主根据读码样本、工况，智能选择最优光源强度及光源类型，极大提升解码性能快速做出最优选择，算法应用不冗余更精简",
        },
      ],
      [
        {
          title: "自适应算法",
          info: "自动匹配机器视觉算法引擎™的CV算法、AI算法",
        },
        {
          title: "自动调参",
          info: "超192万种参数配置，自动优化光源、曝光、增益等参数，应对挑战性读码情况",
        },
      ],
      [
        {
          title: "自动检测条码类型",
          info: "自动检测 1D/2D 码，根据条码类型调 取预定义条码模版库，提高读取速度",
        },
      ],
    ],
    b4: "精准无极调焦",
    tip4: "根据架设距离、1D/2D码样本尺 寸精确调焦，对焦距离可由30mm 至∞无穷远",
    info4: [
      {
        title: "新算无极对焦环系统",
        info: "根据架设距离、1D/2D 码样本尺寸精确调焦，对焦距离可由 30mm 至 ∞ 无穷远",
      },
      {
        title: "机械调焦",
        info: "手动机械调焦搭配无极对焦环系统能够极大提升操作准确性",
      },
    ],
    b5: "便利功能",
    info5: [
      [
        {
          title: "双航插支持丰富通信协议",
          info: "高标准双航插，稳定可靠，不用再担心脱落停机问题",
        },
        {
          title: "格式化数据功能",
          info: "提供多种数据编辑格式，让数据管理更高效",
        },
      ],
      [
        {
          title: "刻印验证功能",
          info: "保证 1D/2D 码质量，及时发现印刷缺陷，减少浪费",
        },
      ],
    ],
    b6: "应用场景",
    info6: [
      [
        {
          img: `/rs100/yy0.png`,
          title: "易反光表面",
          info: "金属表面容易产生反光干扰，通过自适应组合光源的偏振光能够降低反射并实现稳定读码",
        },
        {
          img: `/rs100/yy1.png`,
          title: "移动读取",
          info: "强大的解码性能能够读取不断旋转的圆柱体锂电池",
        },
      ],
      [
        {
          img: `/rs100/yy2.png`,
          title: "多码同时读取",
          info: "SMT 料盘上的多个类型的 1D/2D 码，RS100能够同时读取",
        },
        {
          img: `/rs100/yy3.png`,
          title: "组网读取",
          info: "RS100支持组网功能，能够通过多台读码器同时读取快递盒不同面的 1D/2D 码，非常适合物流行业",
        },
      ],
      [
        {
          img: `/rs100/yy4.png`,
          title: "金属撞针",
          info: "RS100强大的解码性能可以解决金属零部件因撞针打标工艺质量差导致的无法解码、读取速度慢等问题",
        },
        {
          img: `/rs100/yy5.png`,
          title: "多种颜色树脂",
          info: "轮胎上的1D码通常较小，RS100具备大景深、大像素，能够稳定读取",
        },
      ],
      [
        {
          img: `/rs100/yy6.png`,
          title: "玻璃面读取",
          info: "玻璃上的 1D/2D 码对比度低且存在严重反光，通过偏振光读取，高效稳定",
        },
        {
          img: `/rs100/yy7.png`,
          title: "突发模式读码",
          info: "通过连续拍照，实现多次解码，有效解决高速物流线中漏拍问题，提高解码稳定性",
        },
      ],
    ],
  },
  h920: {
    name: "H920 无线/有线款读码器",
    type: "H920 无线/有线",
    tip: "专利手持算法引擎 · 同轴瞄准 · 训练功能",
    b1: "专利手持算法引擎",
    tip1: "专为手持读码场景设计的算法引擎 Mobi × 均匀光技术",
    tip1_2: "轻松应对各种难读码",
    info1: [
      [
        {
          title: "自动检测读码类型",
        },
        {
          title: "自动检测读码类型",
        },
        {
          title: "自动检测读码类型",
        },
      ],
      [
        {
          title: "自动检测读码类型",
        },
        {
          title: "自动检测读码类型",
        },
        {
          title: "自动检测读码类型",
        },
      ],
    ],
    b2: "同轴瞄准",
    tip2: "旗舰级瞄准性能",
    tip2_2: "全面改善传统手持式读码器瞄准偏移现象，不用再担心漏扫情况",
    info2: [
      {
        info: "H920 指哪读哪，所见即所扫",
      },
      {
        info: "传统读码器瞄准偏移，需重复扫描",
      },
    ],
    b3: "训练功能",
    tip3: "新算专有训练功能，极大提升效率，带来极致流畅度",
    tip3_2: `训练需要待读取的 1D/2D码，提升解码景深、解码速度和解码率，待训练完成后，同类码的读取即可达到瞬时读取`,
    b4: "人性化设计",
    tip4: "专业的工业设计，更懂工厂实地使用情况",
    b5: "应用场景",
    info5: [
      {
        img: `/h920/yy0.webp`,
        title: "汽车制造",
      },
      {
        img: `/h920/yy1.webp`,
        title: "汽车制造",
      },
    ],
  },
  technical: {
    tit1: "全栈软硬件自研 强大性能表现",
    tit2: "全栈软硬件自研,强大性能表现",
    p1: {
      tit: "视觉机器算法引擎™",
      tip: "完全自主研发解码算法 IP，性能强劲、解码稳定",
      card: [
        {
          tit: "超分辨率算法™️",
          tip: `等效3MP镜头读码效果，支持读取最小尺寸单元 1mil的一维码，1.5mil的二维码1MP镜头=3MP镜头成像效果，3倍成像质量提升`,
        },
        {
          tit: "专利 SPL 技术™️",
          tip: `专利亚像素定位技术精度可达0.02Pixel，即使定位器（L角）缺陷达30%也能轻松读取`,
        },
        {
          tit: "自研增强算法",
          tip: `⾃研增加算法，即使对⽐度低⾄ 2%的条码也能够稳定读取，⼀个近乎看不尽的DM码（2%对⽐度），通过算法实现增强⾄明显看到，并成功解码`,
        },
      ],
    },
    p2: {
      tit: "一键调试 OneClick",
      tip: "不止是调光，更是自适应算法调参，达到最优解码",
      card1: [
        {
          txt: "自适应光源",
          txt2: "灵活组合光源以自适应性、高可配置性应对不同场景需求",
        },
        {
          txt: "自动调参",
          txt2: "最高达192万种参数配置1，自 动优化曝光、增益、滤波等 参数，应对挑战性读码情况",
        },
        {
          txt: "自适应算法",
          txt2: "自动匹配机器视觉算法引擎TM的CV算法、AI 算法",
        },
        {
          txt: "自动对焦",
          txt2: "自动适应各种条码尺寸和工作距离",
        },
        {
          txt: "自识别条码类型",
          txt2: "自动检测1D码/2D码，根据条码类型调取预定义条码模版库，提高读取速度",
        },
        {
          txt: "无限光源组合技术",
          txt2: "自主根据读码样本、工况， 智能选择最优光源强度及光源类型，极大提升解码性能",
        },
      ],
      txt: "仅限具备一键调试+ OneClick Plus 功能的读码器产品",
      card2: [
        {
          tit: "极致易用",
          tip: "仅需通过机身按钮或软件按钮，OneClick 即可实现解码",
        },
        {
          tit: "极致性能",
          tip1: "对于C级以上条码，⼀键调试 Max 单码平均解码耗时为20ms，相⽐同级产品速度提升 2 倍",
          tip2: "对于条形码，⼀键调试 Max 单码平均解码耗时为10ms，相⽐同级产品速度提升 3 倍",
        },
      ],
    },
    p3: {
      tit: "对比表格",
    },
    p4: {
      tit: "全新光学系统",
      tip: "多种镜头规格、光源颜色及光源类型，灵活组合以高可配置性应对不同场景需求",
      card: {
        tit: "灵活配置",
        tip: "多种镜头焦段、光源颜色、光源类型，满足多样化需求",
        tit_r: "3 × 3 × 3 灵活配置",
        list: [
          {
            tit: "镜头焦段",
            opts: ["6mm", "12mm", "16mm"],
          },
          {
            tit: "光源颜色",
            opts: [
              {
                name: "红色",
                key: "red",
              },
              {
                name: "蓝色",
                key: "blue",
              },
            ],
          },
          {
            tit: "光源类型",
            opts: ["直射光", "偏振光", "均匀光"],
          },
        ],
      },
    },
    p5: {
      tit: "无限组合光源技术",
      tip1: "首创技术极大提升解码稳定性和性能",
      tip2: "首创技术极大提升解码稳定性和性能,搭配一键调试Max，自动选择光源强度及光源类型，相比以往单一光源解码，组合光源解码可极大提升解码性能",
      imgInfo: [
        {
          txt: "50%直射光+50%偏振光",
          img: `/technical/light0.png`,
        },
        {
          txt: "80%直射光+20%偏振光",
          img: `/technical/light1.png`,
        },
        {
          txt: "100%均匀光",
          img: `/technical/light2.png`,
        },
      ],
    },
    p6: {
      tit: "同轴瞄准",
      tip: "指哪读哪，所见即所扫",
      txt: "旗舰级瞄准技术，全面改善手持式读码器瞄准偏移现象，不再担心漏扫情况",
    },
  },
  customerCase: {
    tit: "助力企业实现数智化升级引擎不熄",
    p1: "行业案例",
    p2: "客户案例",
    cardConf: [
      {
        key: "car",
        name: "汽车制造",
        img: "/customerCase/card0.webp",
        case: [
          [
            {
              name: "汽车引擎撞针 DPM 缺陷码",
              img: "/customerCase/car-0.webp",
            },
            {
              name: "汽车玻璃低对比度 DM 码",
              img: "/customerCase/car-1.webp",
            },
            { name: "曲轴水滴遮挡 DPM 码", img: "/customerCase/car-2.webp" },
            { name: "轮胎条形码", img: "/customerCase/car-3.webp" },
          ],
          [
            {
              name: "手持式读码器读取汽车 1D/2D 码",
              img: "/customerCase/car-4.webp",
            },
          ],
        ],
      },
      {
        key: "gf",
        name: "光伏新能源",
        img: "/customerCase/card1.webp",
        case: [
          { name: "光伏板条形码", img: "/customerCase/gf-0.webp" },
          { name: "光伏板难读码", img: "/customerCase/gf-1.webp" },
        ],
      },
      {
        key: "ld",
        name: "锂电新能源",
        img: "/customerCase/card2.webp",
        case: [
          { name: "移动读取圆柱电池 DPM 码", img: "/customerCase/ld-0.webp" },
          { name: "软包电池 DPM 码", img: "/customerCase/ld-1.webp" },
          { name: "方形电池 DPM 码", img: "/customerCase/ld-2.webp" },
        ],
      },
      {
        key: "sm",
        name: "3C数码",
        img: "/customerCase/card3.webp",
        case: [
          { name: "电子元器件 0.5mm 超小码", img: "/customerCase/sm-0.webp" },
          {
            name: "移动读取多个 IC 上的 DM 码",
            img: "/customerCase/sm-1.webp",
          },
        ],
      },
      {
        key: "bdt",
        name: "半导体",
        img: "/customerCase/card4.webp",
        case: [
          {
            name: "在狭窄空间中读取 DPM 码",
            img: "/customerCase/bdt-0.webp",
          },
          { name: "同时读取多个 1D/2D 码", img: "/customerCase/bdt-1.webp" },
          {
            name: "隔着玻璃读取晶圆托盘条形码",
            img: "/customerCase/bdt-2.webp",
          },
          { name: "读取低对比度 DPM 码", img: "/customerCase/bdt-3.webp" },
        ],
      },
      {
        key: "wl",
        name: "物流运输",
        img: "/customerCase/card5.webp",
        case: [
          { name: "快递盒塑料膜遮挡条形码", img: "/customerCase/wl-0.webp" },
          { name: "组网功能", img: "/customerCase/wl-1.webp" },
          { name: "突发模式", img: "/customerCase/wl-2.webp" },
        ],
      },
    ],
  },
  caseList: {
    alTit: "典型案例",
    ysTit: "应用优势",
    car: {
      banner: "/customerCase/banner/car.webp",
      title: "汽车制造行业解决方案",
      txt: "在汽车制造行业，从原材料的入库、生产线上的零部件追踪，到成品的出厂检验和物流管理，读码器的应用贯穿于汽车制造的各个环节。通过自动化的 1D/2D 码信息读取，汽车制造商能够实时监控生产进度、精准管理库存、优化供应链，并有效防止质量问题的发生。",
      ysList: [
        "提高生产效率，减少人工错误、提高设备稼动率",
        "全流程可追溯，确保每个零部件符合质量标准",
        "实现准时、高质量交付，提升客户满意度",
      ],
      case: [
        { name: "汽车引擎撞针 DPM 缺陷码", img: `/customerCase/car-0.webp` },
        { name: "汽车玻璃低对比度 DM 码", img: `/customerCase/car-1.webp` },
        { name: "曲轴水滴遮挡 DPM 码", img: `/customerCase/car-2.webp` },
        { name: "轮胎条形码", img: `/customerCase/car-3.webp` },
        {
          name: "手持式读码器读取汽车 1D/2D 码",
          img: `/customerCase/car-4.webp`,
        },
      ],
    },
    gf: {
      banner: "/customerCase/banner/gf.webp",
      title: "光伏新能源行业解决方案",
      txt: "光伏新能源行业正处于行业发展的关键时期，而读码器作为一种高效、准确的机器视觉设备，正日益成为光伏发电系统中不可或缺的一部分。通过读取光伏板上的 1D/2D 码，读码器能够实现对光伏板生产、运输、安装等各个环节的快速识别和数据采集，为光伏新能源行业的智能化、自动化数字管理提供有力支持。",
      ysTit: "应用优势",
      ysList: [
        "提高生产效率，确保产能最大化",
        "实现高速生产节拍下的全流程追溯管理",
        "实时追踪生产数据，保障产品质量和安全性",
      ],
      case: [
        { name: "光伏板条形码", img: `/customerCase/case/gf-0.png` },
        { name: "光伏板难读码", img: `/customerCase/case/gf-1.png` },
      ],
    },
    ld: {
      banner: "/customerCase/banner/ld.webp",
      title: "锂电新能源行业解决方案",
      txt: "锂电新能源行业以其高能量密度、环保和可持续发展等特点，正日益成为全球能源转型的重要引领者。在生产、装配和物流等各个环节，数据的准确采集和处理对于保障锂电产品质量、提高生产效率以及实现供应链的可追溯性至关重要。而读码器作为一种高效精准的自动识别技术，正成为锂电新能源行业实现智能化、自动化管理的核心机器视觉设备之一。",
      ysList: [
        "提高生产效率，缩短生产周期",
        "确保产品质量的一致性和稳定性",
        "实现全流程数据追溯和管理",
      ],
      case: [
        {
          name: "移动读取圆柱电池 DPM 码",
          img: `/customerCase/case/ld-0.png`,
        },
        { name: "软包电池 DPM 码", img: `/customerCase/case/ld-1.png` },
        { name: "方形电池 DPM 码", img: `/customerCase/case/ld-2.png` },
      ],
    },
    sm: {
      banner: "/customerCase/banner/sm.webp",
      title: "3C数码行业解决方案",
      txt: "随着科技的不断发展，3C电子行业已成为最为活跃和竞争力的行业之一。3C电子行业的特点之一是其高速的生产节奏和严格的品质要求。生产环境通常需要处理大量的零部件和成品，而这些零部件往往具有小型化、多样化和复杂化的特点。因此，高效的识别和追踪系统成为了提高生产效率和确保产品质量的关键。",
      ysList: [
        "提升产线效率，减少停线时间和生产成本",
        "实现高速生产节拍下的全流程追溯管理",
        "保障产品质量，提升客户满意度",
      ],
      case: [
        {
          name: "电子元器件 0.5mm 超小码",
          txt: "TWS 耳机作为消费电子行业的热门产品之一，对零部件的可追溯性提出了严格要求",
          img: `/customerCase/case/sm-0.png`,
          rInfo: [
            {
              tit: "案例需求",
              content: [
                {
                  name: "读取微小零部件",
                  txt: "TWS 耳机的零部件采用 Data Matrix 码(DM 码)进行追溯，如耳机天线部分的微小 DM 码、芯片上对比度低的码等，这些高难度码对读码器的解码性能提出了极高要求",
                },
                {
                  name: "在复杂工况下读取",
                  txt: "生产过程中，零部件材料和光照等因素的变化会增加解码难度，需要专业工程师调试，才能确保在复杂场景下实现稳定解码",
                },
              ],
            },
            {
              tit: "解决方案",
              content: [
                {
                  name: "高性能算法引擎",
                  txt: "R275-A 读码器具有自主知识产权的机器视觉算法引擎™，能够应对各种难读 DM 码，解码高效稳定。即使是 0.5mm 的超小码，也能快速读取且实现 99.99%+ 读取率",
                },
                {
                  name: "一键调试 OneClick",
                  txt: "R275-A 搭载强大的一键调试功能，无需专业工程师，也能通过毫秒级自动对焦、自适应算法、自动调参等能力，轻松读取复杂场景下的各种条码",
                },
              ],
            },
            {
              tit: "推荐产品",
              imgList: [
                {
                  img: `/customerCase/case/sm-gd0.png`,
                  name: "紧凑型 R 系列 R275-A 固定式读码器",
                },
                {
                  img: `/customerCase/case/sm-gd1.png`,
                  name: "双航插 RS 系列 RS100-M16 固定式读码器",
                },
                {
                  img: `/customerCase/case/sm-gd2.png`,
                  name: "手持式 H 系列 H920 高性能手持式读码器",
                },
              ],
            },
          ],
        },
        {
          name: "移动读取多个 IC 上的 DM 码",
          img: `/customerCase/case/sm-1.png`,
        },
      ],
    },
    bdt: {
      banner: "/customerCase/banner/bdt.webp",
      title: "半导体行业解决方案",
      txt: "随着 IoT、5G、AI 等技术的快速发展，半导体市场呈现出前所未有的增长态势，对生产工艺的精准度和效率也提出了更高的要求。。在半导体制造过程中，每一片晶圆、每一个芯片都需要被精确追踪，以确保生产的高效性和产品的高质量。为了确保产品的质量和生产流程的顺畅，通过读码器追踪和管理半导体元件和成品在整个生产链中的流动显得尤为重要。",
      ysList: [
        "易于集成到空间紧凑的生产线或机台中",
        "提升半导体供应链追溯性",
        "实时追踪生产数据，保障产品质量和安全性",
      ],
      case: [
        {
          name: "在狭窄空间中读取DPM码",
          img: `/customerCase/case/bdt-0.png`,
          rInfo: [
            {
              tit: "案例需求",
              content: [
                {
                  name: "高性能稳定读码",
                  txt: "芯片表面的二维码，超小、高密度且低对比度，使难以被精准识读，常出现漏拍情况",
                },
                {
                  name: "高速移动读取",
                  txt: "芯片分拣会高速运行，因此需要读码器能够在高速机台上稳定、快速地识读二维码",
                },
                {
                  name: "紧凑机台适配",
                  txt: "分拣机设备对空间要求极为严苛，需极致尺寸的紧凑型设计来适应各种分拣机台的安装",
                },
              ],
            },
            {
              tit: "解决方案",
              content: [
                {
                  name: "紧凑型整机结构设计",
                  txt: "R275-A 以极限尺寸 45*30*25 mm ，适配各种分拣机台的安装，提高部署灵活性 ( ≈ 1/3 名片大小)",
                },
                {
                  name: "高性能识读效果",
                  txt: "R275-A 内置自研机器视觉算法引擎™，稳定识读半导体芯片表面的超小、高密度、低对比度等二维码，并在高速生产线上实现稳定的识别，不漏拍",
                },
              ],
            },
            {
              tit: "推荐产品",
              imgList: [
                {
                  img: `/customerCase/case/sm-gd0.png`,
                  name: "紧凑型 R 系列 R275-A 固定式读码器",
                },
                {
                  img: `/customerCase/case/sm-gd3.png`,
                  name: "紧凑型 R 系列 R172 E/S 固定式读码器",
                },
              ],
            },
          ],
        },
        {
          name: "同时读取多个 1D/2D 码",
          img: `/customerCase/case/bdt-1.png`,
        },
        {
          name: "隔着玻璃读取晶圆托盘条形码",
          img: `/customerCase/case/bdt-2.png`,
        },
        { name: "读取低对比度 DPM 码", img: `/customerCase/case/bdt-3.png` },
      ],
    },
    wl: {
      banner: "/customerCase/banner/wl.webp",
      title: "物流运输行业",
      txt: "随着全球经济的快速发展和电子商务的普及，物流运输行业正经历前所未有的变革和扩张。现代物流运输不仅要求高效的货物配送和管理，还需要极高的准确性和可追溯性，以满足不断增长的市场需求和客户期望。传统的手动扫描和数据录入方式已经难以满足这一复杂且高速运转的行业要求。因此，自动化、智能化的解决方案应运而生，固定式读码器作为其中的重要技术手段，正在为物流运输行业带来革命性的变化。",
      ysList: [
        "自动化数据采集，提高包裹追踪和管理能力",
        "减少人工干预，降低人力成本",
        "适应出入库、盘点、分拣等多种物流需求",
      ],
      case: [
        {
          name: "快递盒塑料膜遮挡条形码",
          img: `/customerCase/case/wl-0.png`,
        },
        { name: "组网功能", img: `/customerCase/case/wl-1.png` },
        { name: "突发模式", img: `/customerCase/case/wl-1.png` },
      ],
    },
  },
  aboutUs: {
    bn_tit: "新算技术",
    bn_msg: [
      `新算技术，深耕于工业机器视觉传感器领域，具备完全独立自主知识产权的解码识读算法。公司以研发为导向，在视觉算法、硬件设计上已做到完全的独立自主，目前已向市场推出多系列高性能固定式工业读码器、手持式工业读码器等多条产品线，在 3C 电子、汽车、新能源及半导体等工业制造领域积累了丰富的行业服务经验。`,
    ],
    p1: {
      title: "公司概况",
      info: [
        {
          key: "员工人数",
          name: "70+",
          icon: "/aboutUs/icon-svg0.svg",
        },
        {
          key: " 研发投入",
          name: "3000+ 万",
          icon: "/aboutUs/icon-svg1.svg",
        },
        {
          key: "融资额",
          name: "超亿元",
          icon: "/aboutUs/icon-svg2.svg",
        },
        {
          key: "深度合作客户",
          name: "30+",
          icon: "/aboutUs/icon-svg3.svg",
        },
      ],
    },
    p2: {
      title: "",
      msg: [`专注工业机器视觉，以读码产品开启智能制造`],
      bgImg: "/aboutUs/banner2.webp",
    },
    p3: {
      title: "企业历程",
      timeList: [
        {
          time: "2024",
          child: ["推出 双航插 RS 系列 旗舰款RS300"],
        },
        {
          time: "2023",
          child: [
            "总部宁波新算正式成立",
            "天使轮融资 顶级风投 红杉中国种子基金",
          ],
        },
        {
          time: "2022",
          child: [
            "Pre-A轮融资 顺为资本, 华方资本, 红杉中国",
            "推出高性能手持式 H9X 系列",
          ],
        },
        {
          time: "2021",
          child: ["推出 紧凑型 R 系列旗舰款 R275-A"],
        },
        {
          time: "2019",
          child: ["深圳新算成立"],
        },
        {
          time: "2016",
          child: ["研究部署工业机器视觉算法"],
        },
      ],
    },
    p4: {
      title: "奖项与资质",
    },
  },
  news: {
    tit: "新闻资讯",
    list: [
      {
        img: "",
        title: "VSDC Innovators Awards 2024 创新奖揭晓！新算技术获行业权威认可",
        tip: [
          "2024 年 6 月 19 日，深圳——全球知名工业视觉领域权威奖项《视觉系统设计》创新奖 2024 (VSDC Innovators Awards 2024) 隆重揭晓，新算凭借旗舰款 R275-A 紧凑型工业读码器一举获奖。这一荣誉不仅是对新算产品卓越性能的肯定，更是对新算在工业机器视觉领域不断创新、追求卓越的高度认可。",
        ],
        time: "2023-07-10 08:18",
        link: "/detail/3",
      },
      {
        img: "",
        title: "专注先进工业传感器，「宁波新算」完成Pre-A轮融资｜早起看早期",
        tip: [
          "本轮融资资金将用于投入进一步提升工业读码器等核心产品的量产产能，并加大在先进工业视觉传感器领域的多品类研发。",
        ],
        time: "2023-07-10 08:18",
        link: "/detail/2",
      },
      {
        img: ``,
        title:
          "「新算科技」获数千万元天使轮融资，由红杉中国种子基金独家投资 | 早起看早期",
        tip: [
          "工业读码与传感器生产商「新算科技」于近日获数千万元天使轮融资，本轮融资投资方为红杉中国种子基金，融资资金将用于工厂建设、产品品控管理及供应链体系建设。「新算科技」成立于2019年，主要专注于图像处理算法的研发与读码产品的设计，面向3C、新能源、汽车、仓储、智能物流、机器人、商超、支付与数字ID等行业，提供通用型DPM工业读码器、高速高性能工业读码器和高性价比读码模组。",
        ],
        time: "2022-07-22 08:15",
        link: "/detail/2",
      },
    ],
  },
  newsList: [
    {
      title: "专注先进工业传感器，「宁波新算」完成Pre-A轮融资｜早起看早期",
      author: "文｜杨逍",
      editor: "编辑｜苏建勋",
      origin: "来源｜36氪pro（ID：krkrpro）",
      date: "2023-07-10 08:18",
      content: [
        {
          type: "content",
          value:
            "新算已经在2023年上半年完成了对多个包括3C、新能源以及汽车产线客户的量产交付。",
        },
        {
          type: "content",
          value:
            "近日，36氪获悉，先进工业传感器公司新算技术宣布完成PreA轮融资，该轮由顺为资本领投，华方资本和老股东红杉中国跟投。新算技术团队在一年内连续完成两轮融资，累计获得亿元级融资规模。蔚澜资本担任公司长期独家资本顾问。本轮融资资金将用于投入进一步提升工业读码器等核心产品的量产产能，并加大在先进工业视觉传感器领域的多品类研发。目前，全球工业传感器市场规模超过500亿美元，并且保持10%年增长率，预计到2023年底全球市场规模将超过600亿美元；",
        },
        {
          type: "content",
          value:
            "随着国内工业自动化水平提升，中国工业传感器市场规模也达到了近550亿元人民币，年增速超过16%，远高于全球增速。同时，中国市场的工业传感器，尤其是高端制造用到的传感器，在相当长时间里一直被美日德系公司垄断。",
        },
        {
          type: "content",
          value:
            "以工业传感器领域的大单品之一工业读码器领域为例，基恩士(Keyence)、康耐视(Cognex)以及得利捷(Datalogic)等知名国际品牌垄断了中国先进读码器领域十年以上时间，而国内品牌在算法的积累上一直相对薄弱，对于解码率和稳定性要求极高的工业场景一直无法切入。但与此同时，随着中国整体制造水平的不断提升，包括新能源电池制造、新能源汽车的整车制造，以及高端3C产品等生产对于精度和效率越来越高，原有国产读码器品牌更是难以打开局面，始终在“代理贴牌”和一些中低端的场景打价格竞争。而新算创始团队选择在技术最难、门槛最高、切入容错率最低的工业读码器产品切入市场，新算创始人张苏宁告诉36氪：“只有在最难的单品上立住脚，正面PK海外大厂的核心产品，国产工业传感器才有机会真正树立自己的品牌价值。”",
        },
        {
          type: "content",
          value:
            "新算团队在算法上积累了近8年的时间，测试了海量的工业读码场景，在去年成功推出新算读码器R275-A和R270-A系列等产品。2023年，新算已经实现了读码器产品的量产以及品控测试的验证，并且顺利进入了多个具代表性的高端3C产品制造商及新能源大厂供应商名录。张苏宁表示：“新算同时已经成为多个制造业终端的独家供应商，在海外品牌垄断几乎十年以上的市场里，从正面撕开了一个口子。”",
        },
        {
          type: "img",
          value: "/detail/1.png",
        },
        {
          type: "content",
          value:
            "算法技术上，新算自研了ISP前处理算法“像素自适应增强算法”，对百万级分辨率的图像输入进行超分辨率处理，在亚像素级的定位任务中，为了获取更多的输入像素信息以实现更好的分辨率重建，用了混合注意力机制的Transformer模型。在实现自适应增强的同时，结合了通道注意力及所有窗口信息的自注意力方案，从而充分利用了它们各自的优势，即能够利用全局统计和强大的局部拟合能力。张苏宁表示，在新算特有的‘像素自适应增强算法’帮助下，R275-A和R270-A系列固定式读码器利用百万级图像传感器输入可达到300万像素的图像质量。目前新算的产品已经在2023年上半年完成了对多个包括3C、新能源以及汽车产线客户的量产交付，预计在2023年创始团队表示会完成数万台产品的交付，同时团队已经开始了基于已经积累的算法优势开发物流、仓储以及机器人等场景的读码产品。",
        },
        {
          type: "content",
          value:
            "投资人说：\n顺为资本合伙人程天：“随着工业4.0时代到来，智能制造和工业自动化成为国家产业升级的重点战略方向。代码之于制造生产，如同所有零部件的‘电子身份证’，是唯一不变的身份标识。工业读码器作为高端制造领域的‘卡脖子’设备器材，国内市场长期被外资品牌垄断，政策引导方向明确，国产替代趋势清晰。未来受益于锂电池、新能源车、精密制造等下游产业的持续拉动，市场发展前景广阔。新算旗下产品性能出众，首款读码器在解码率、读取对比度、破损图形识别等维度均已比肩国际头部品牌。创始人张苏宁具备丰富的高端工业读码器开发经历及商业化落地经验，期待团队继续深耕工业机器视觉领域，用高品质兼具性价比的产品，填补国内市场空白，助力先进制造转型升级大趋势”华方资本合伙人路驰：“各类工业传感器是国内产业数字化转型的基石，是数据的来源。",
        },
        {
          type: "content",
          value:
            "长期被海外大厂垄断的工业读码器是其中非常重要的一环，我们非常高兴能遇到新算团队并参与其中，创始人团队的创业精神和研发实力给我们留下了非常深刻的印象。目前团队也已经在多个场景下打破了国外的垄断局面，我们相信新算团队未来能够迅速在工业流程自动化中实现更多的规模化落地，并不断开拓新的场景。”",
        },
      ],
    },
    {
      title:
        "「新算科技」获数千万元天使轮融资，由红杉中国种子基金独家投资 | 早起看早期",
      author: "文｜周倩",
      editor: "编辑｜彭孝秋",
      origin: "来源｜36氪pro（ID：krkrpro）",
      date: "2022-07-22 08:15",
      content: [
        {
          type: "content",
          value:
            "36氪获悉，工业读码与传感器生产商「新算科技」于近日获数千万元天使轮融资，本轮融资投资方为红杉中国种子基金，融资资金将用于工厂建设、产品品控管理及供应链体系建设。「新算科技」成立于2019年，主要专注于图像处理算法的研发与读码产品的设计，面向3C、新能源、汽车、仓储、智能物流、机器人、商超、支付与数字ID等行业，提供通用型DPM工业读码器、高速高性能工业读码器和高性价比读码模组。据Grand View Research报告数据，2021年读码器全球市场规模约70亿美元，预计2028年将达到110亿美元，年复合增长率为6.7%，亚太地区在2020年主导了市场，占全球读码器市场份额达到40%。但一直以来全球工业读码器市场被主要厂商包括基恩士（Keyence）、康耐视（Cognex）、得利捷（Datalogic）等国外品牌占据，提升读码器的技术壁垒也是各个视觉传感龙头企业的核心任务。在「新算科技」创始人张苏宁看来，目前国内单纯在制造业上使用的工业读码器仍以进口品牌为主，新算科技以读码器为切入点，不断扩充产品系列，依凭视觉算法和硬件设计能力，加上本土企业服务速度超越国外品牌的优势，仍然有机会成为和国外龙头相抗衡的本土视觉传感器公司，为工厂的信息化提供更好的解决方案。目前，「新算科技」已构建通用DPM读码器、读码模组、工业手持式读码器、支付模组以及读码芯片等多条产品线，已落地的两款产品分别是R270和R275系列读码器，两者性能均达到国际领先⽔平，并成功在A公司电池产线落地。「新算科技」读码器的核心优势是将神经网络和传统算法相结合，经过大量数据训练的神经网络可以抽象出二维码或条码的纹理特征，在各种复杂的场景下能够对二维码或者条码的区域先用AI将码先进行粗略定位，随后利用传统算法进行高速筛选进行精细定位，大幅度提高解码效率。其次，「新算科技」的算法能够做到无视图像的对比度变化和干扰，对二维码或者条码的边界进行亚像素级别的定位，定位精度可达0.02个像素点。总体来看，「新算科技」在ID定位或者解码的算法具备三大优势：高精度、抗干扰、适应性强。",
        },
        {
          type: "img",
          value: "/detail/2.png",
        },
        {
          type: "content",
          value:
            "此外，「新算科技」还将研发用于图像处理且自带读码功能的专用芯片，替换现有产品的外采芯片，降低功耗和成本，使视觉传感器产品实现供货稳定的同时产品力也将得以大幅提升。在此次融资完成后，「新算科技」将在南京和宁波设立工厂，两条柔性生产线同时兼顾多款产品的生产。目前公司有意向合作的代理销售商有十几家，主要分布在华东、华南和西部地区。团队方面，创始人张苏宁曾负责新世电子的AGV惯性导航传感器与视觉导引传感器项目，2017年底创⽴常州深图图像技术有限公司，负责⼯业图像处理算法设计与图像式读码器算法设计；CTO周岩为芯⽚领域专家，曾就职于Synopsys、⼩⽶、中星微、新岸线等多家知名芯⽚公司，曾带领设计团队负责过多款⼿机芯⽚、超⼤规模应⽤处理器SOC芯⽚的研发。团队核心成员皆是“NXP杯”智能车竞赛摄像头组国赛一等奖成员，深耕图像处理算法长达7年。",
        },
        {
          type: "title",
          value: "投资观点",
        },
        {
          type: "content",
          value:
            "红杉中国合伙人张涵表示：新一代制造业革命是重塑产业链价值的过程，这意味着产业链上的每一个环节都需要做智能化数字化升级，每个产品都需要可标识与可追溯。工业读码器和视觉传感器在工业数字化升级的过程中发挥了至关重要的作用。我们相信新算科技在张总的带领下，依靠自身强大的研发和工程能力，打造国有高端自主品牌，迅速实现读码和传感设备在仓储、物流、工业自动化领域的规模化落地，为客户与合作伙伴持续创造价值。",
        },
      ],
    },
    {
      title: "VSDC Innovators Awards 2024 创新奖揭晓！新算技术获行业权威认可",
      date: "2024-06-19 15:47",
      banner: "/detail/vsdc.png",
      content: [
        {
          type: "content",
          value:
            "2024 年 6 月 19 日，深圳——全球知名工业视觉领域权威奖项《视觉系统设计》创新奖 2024 (VSDC Innovators Awards 2024) 隆重揭晓，新算凭借旗舰款 R275-A 紧凑型工业读码器一举获奖。这一荣誉不仅是对新算产品卓越性能的肯定，更是对新算在工业机器视觉领域不断创新、追求卓越的高度认可。",
        },
        {
          type: "img",
          value: "/detail/1.jpeg",
        },
        {
          type: "content",
          value:
            "《Vision Systems Design》举办的 Innovators Awards 在全球机器视觉行业享有盛誉，旨在表彰在产品或技术、应用程序或研发方面表现卓越的机器视觉行业公司。该奖项的专家评审团由系统集成商、顾问和行业学者组成。今年的奖项经过 15 位专家评委及近 50 位业界大众评委的评分评定，新算 R275-A 紧凑型工业读码器在众多参赛产品中脱颖而出，获得本次评选中读码器品类的最高奖项。",
        },
        {
          type: "img",
          value: "/detail/3.png",
        },
        {
          type: "content",
          value:
            "新算 R275-A 紧凑型工业读码器采用了自主知识产权的机器视觉算法引擎™，结合一键调试 OneClick 功能，大幅提高了解码的稳定性和性能。其具备超小尺寸的特点，便于在各种环境中安装和部署。R275-A 不仅满足了工业现场对高性能、易操作的读码器需求，同时展现了新算在软硬件设计上的独立自主和技术领先。",
        },
        {
          type: "img",
          value: "/detail/4.png",
        },
        {
          type: "content",
          value:
            "新算 R275-A 适用于 3C 电子、半导体、汽车制造等行业，目前已成功应用于头部知名消费电子品牌 TWS 耳机生产产线、高精尖半导体设备芯片分拣机中。此外，凭借出色的激光刻印 DM 码、镭雕 DM 码识读性能，R275-A 在汽车制造行业也尤为适用。 未来，新算将持续致力于技术研发和产品创新，不断提升产品性能，为客户提供更加优质的解决方案。",
        },
        {
          type: "title",
          value: "关于新算技术",
        },
        {
          type: "content",
          value:
            "新算技术，深耕于工业机器视觉传感器领域，具备完全独立自主知识产权的解码识读算法。公司以研发为导向，在视觉算法、硬件设计上已做到完全的独立自主，目前已向市场推出多系列高性能固定式工业读码器、手持式工业读码器等多条产品线，在 3C 电子、汽车、新能源及半导体等工业制造领域积累了丰富的行业服务经验。",
        },
      ],
    },
  ],
  contactUs: {
    tit: "联系我们",
    contact: [
      {
        name: "商务咨询",
        txt: "lvml{'@'}xs-trinity.com",
      },
      {
        name: "加入我们",
        txt: "hrfxy{'@'}xs-trinity.com",
      },
      {
        name: "联系电话",
        txt: "15381991195",
      },
    ],
    wx: {
      name: "官方微信二维码",
      img: "/aboutUs/wx.png",
    },
    gzh: {
      name: "微信公众号二维码",
      img: "/aboutUs/gzh.png",
    },
    loc: {
      title: "办公地点",
      content: [
        {
          name: "宁波总部",
          loc: "宁波鄞州区星空国际写字楼大厦",
          bg: `/aboutUs/loc0.png`,
        },
        {
          name: "南京分公司",
          loc: "南京栖霞区紫东国际创意园",
          bg: `/aboutUs/loc1.png`,
        },
        {
          name: "杭州分公司",
          loc: "杭州萧山区杭州湾智慧谷",
          bg: `/aboutUs/loc2.png`,
        },
        {
          name: "苏州办公室",
          loc: "苏州苏州工业园区传奇大厦",
          bg: `/aboutUs/loc3.png`,
        },
        {
          name: "深圳办公室",
          loc: "深圳南山区南海德大厦",
          bg: `/aboutUs/loc4.png`,
        },
      ],
    },
  },
};
