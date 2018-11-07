import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  //空侧
  {
    path: '/air',
    name: 'air',
    meta: {
      icon: 'md-build',
      title: '空侧责任中心'
    },
    component: Main,
    children: [
      {
        path: 'air_manual',
        name: 'air_manual',
        meta: {
          icon: 'ios-hammer',
          title: '人工'
        },
        component: parentView,
        children: [
          {
            path: 'air_base',
            name: 'air_base',
            meta: {
              icon: 'ios-grid',
              title: '基本数据'
            },
            component: () => import('@/view/air/manual/air_base.vue')
          },
          {
            path: 'air_link',
            name: 'air_link',
            meta: {
              icon: 'ios-grid-outline',
              title: '环节分摊'
            },
            component: () => import('@/view/air/manual/air_link.vue')
          },
          {
            path: 'air_manual_detail/:id',
            name: 'air_manual_detail',
            meta: {
              icon: 'md-flower',
              title: route => `${route.params.id}`,
              // notCache: true,
              hideInMenu: true
            },
            component: () => import('@/view/air/manual/air_link_detail.vue')
          },
        ]
      },
      {
        path: 'air_depreciation',
        name: 'air_depreciation',
        meta: {
          icon: 'ios-hammer-outline',
          title: '折旧'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'air_transport',
        name: 'air_transport',
        meta: {
          icon: 'ios-hammer-outline',
          title: '运输'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'air_repair',
        name: 'air_repair',
        meta: {
          icon: 'ios-hammer-outline',
          title: '修理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'air_business',
        name: 'air_business',
        meta: {
          icon: 'ios-hammer-outline',
          title: '业务'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'air_manage',
        name: 'air_manage',
        meta: {
          icon: 'ios-hammer-outline',
          title: '管理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
    ]
  },
  //陆侧
  {
    path: '/ground',
    name: 'ground',
    meta: {
      icon: 'md-build',
      title: '陆侧责任中心'
    },
    component: Main,
    children: [
      {
        path: 'ground_manual',
        name: 'ground_manual',
        meta: {
          icon: 'ios-hammer',
          title: '人工'
        },
        component: parentView,
        children: [
          {
            path: 'ground_base',
            name: 'ground_base',
            meta: {
              icon: 'ios-grid',
              title: '基本数据'
            },
            component: () => import('@/view/ground/manual/ground_base.vue')
          },
          {
            path: 'ground_link',
            name: 'ground_link',
            meta: {
              icon: 'ios-grid-outline',
              title: '环节分摊'
            },
            component: () => import('@/view/ground/manual/ground_link.vue')
          },
          {
            path: 'test',
            name: 'test',
            meta: {
              icon: 'md-grid',
              title: 'test',
              hideInMenu: true
            },
            component: () => import('@/view/manual/center/table_test.vue')
          },
          {
            path: 'ground_manual_detail/:id',
            name: 'ground_manual_detail',
            meta: {
              icon: 'md-flower',
              title: route => `${route.params.id}`,
              // notCache: true,
              hideInMenu: true
            },
            component: () => import('@/view/ground/manual/ground_link_detail.vue')
          },
        ]
      },
      {
        path: 'ground_depreciation',
        name: 'ground_depreciation',
        meta: {
          icon: 'ios-hammer-outline',
          title: '折旧'
        },
        // component: parentView,
        // children: [
        //   {
        //     path: 'base_else',
        //     name: 'base_else',
        //     meta: {
        //       icon: 'md-grid',
        //       title: '其它责任中心',
        //       hideInMenu: true
        //     },
        //     component: () => import('@/view/manual/else/table_else.vue')
        //   },
        // ]
      },
      {
        path: 'ground_transport',
        name: 'ground_transport',
        meta: {
          icon: 'ios-hammer-outline',
          title: '运输'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'ground_repair',
        name: 'ground_repair',
        meta: {
          icon: 'ios-hammer-outline',
          title: '修理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'ground_business',
        name: 'ground_business',
        meta: {
          icon: 'ios-hammer-outline',
          title: '业务'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'ground_manage',
        name: 'ground_manage',
        meta: {
          icon: 'ios-hammer-outline',
          title: '管理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },

    ]
  },
  //扁平件
  {
    path: '/flat',
    name: 'flat',
    meta: {
      icon: 'md-build',
      title: '扁平件责任中心'
    },
    component: Main,
    children: [
      {
        path: 'flat_manual',
        name: 'flat_manual',
        meta: {
          icon: 'ios-hammer',
          title: '人工'
        },
        component: parentView,
        children: [
          {
            path: 'flat_base',
            name: 'flat_base',
            meta: {
              icon: 'ios-grid',
              title: '基本数据'
            },
            component: () => import('@/view/flat/manual/flat_base.vue')
          },
          {
            path: 'flat_link',
            name: 'flat_link',
            meta: {
              icon: 'ios-grid-outline',
              title: '环节分摊'
            },
            component: () => import('@/view/flat/manual/flat_link.vue')
          },
          {
            path: 'test',
            name: 'test',
            meta: {
              icon: 'md-grid',
              title: 'test',
              hideInMenu: true
            },
            component: () => import('@/view/manual/center/table_test.vue')
          },
          {
            path: 'flat_manual_detail/:id',
            name: 'flat_manual_detail',
            meta: {
              icon: 'md-flower',
              title: route => `${route.params.id}`,
              // notCache: true,
              hideInMenu: true
            },
            component: () => import('@/view/flat/manual/flat_link_detail.vue')
          },
        ]
      },
      {
        path: 'flat_depreciation',
        name: 'flat_depreciation',
        meta: {
          icon: 'ios-hammer-outline',
          title: '折旧'
        },
        // component: parentView,
        // children: [
        //   {
        //     path: 'base_else',
        //     name: 'base_else',
        //     meta: {
        //       icon: 'md-grid',
        //       title: '其它责任中心',
        //       hideInMenu: true
        //     },
        //     component: () => import('@/view/manual/else/table_else.vue')
        //   },
        // ]
      },
      {
        path: 'flat_transport',
        name: 'flat_transport',
        meta: {
          icon: 'ios-hammer-outline',
          title: '运输'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'flat_repair',
        name: 'flat_repair',
        meta: {
          icon: 'ios-hammer-outline',
          title: '修理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'flat_business',
        name: 'flat_business',
        meta: {
          icon: 'ios-hammer-outline',
          title: '业务'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'flat_manage',
        name: 'flat_manage',
        meta: {
          icon: 'ios-hammer-outline',
          title: '管理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },

    ]
  },
  //设备
  {
    path: '/equipment',
    name: 'equipment',
    meta: {
      icon: 'md-build',
      title: '设备责任中心'
    },
    component: Main,
    children: [
      {
        path: 'equipment_manual',
        name: 'equipment_manual',
        meta: {
          icon: 'ios-hammer',
          title: '人工'
        },
        component: parentView,
        children: [
          {
            path: 'equipment_base',
            name: 'equipment_base',
            meta: {
              icon: 'ios-grid',
              title: '基本数据'
            },
            component: () => import('@/view/equipment/manual/equipment_base.vue')
          }
        ]
      },
      {
        path: 'equipment_depreciation',
        name: 'equipment_depreciation',
        meta: {
          icon: 'ios-hammer-outline',
          title: '折旧'
        },
        // component: parentView,
        // children: [
        //   {
        //     path: 'base_else',
        //     name: 'base_else',
        //     meta: {
        //       icon: 'md-grid',
        //       title: '其它责任中心',
        //       hideInMenu: true
        //     },
        //     component: () => import('@/view/manual/else/table_else.vue')
        //   },
        // ]
      },
      {
        path: 'equipment_transport',
        name: 'equipment_transport',
        meta: {
          icon: 'ios-hammer-outline',
          title: '运输'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'equipment_repair',
        name: 'equipment_repair',
        meta: {
          icon: 'ios-hammer-outline',
          title: '修理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'equipment_business',
        name: 'equipment_business',
        meta: {
          icon: 'ios-hammer-outline',
          title: '业务'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'equipment_manage',
        name: 'equipment_manage',
        meta: {
          icon: 'ios-hammer-outline',
          title: '管理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },

    ]
  },
  //运输
  {
    path: '/transport',
    name: 'transport',
    meta: {
      icon: 'md-build',
      title: '运输责任中心'
    },
    component: Main,
    children: [
      {
        path: 'transport_manual',
        name: 'transport_manual',
        meta: {
          icon: 'ios-hammer',
          title: '人工'
        },
        component: parentView,
        children: [
          {
            path: 'transport_base',
            name: 'transport_base',
            meta: {
              icon: 'ios-grid',
              title: '基本数据'
            },
            component: () => import('@/view/transport/manual/transport_base.vue')
          }
        ]
      },
      {
        path: 'transport_depreciation',
        name: 'transport_depreciation',
        meta: {
          icon: 'ios-hammer-outline',
          title: '折旧'
        },
        // component: parentView,
        // children: [
        //   {
        //     path: 'base_else',
        //     name: 'base_else',
        //     meta: {
        //       icon: 'md-grid',
        //       title: '其它责任中心',
        //       hideInMenu: true
        //     },
        //     component: () => import('@/view/manual/else/table_else.vue')
        //   },
        // ]
      },
      {
        path: 'transport_transport',
        name: 'transport_transport',
        meta: {
          icon: 'ios-hammer-outline',
          title: '运输'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'transport_repair',
        name: 'transport_repair',
        meta: {
          icon: 'ios-hammer-outline',
          title: '修理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'transport_business',
        name: 'transport_business',
        meta: {
          icon: 'ios-hammer-outline',
          title: '业务'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'transport_manage',
        name: 'transport_manage',
        meta: {
          icon: 'ios-hammer-outline',
          title: '管理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },

    ]
  },
  //综合
  {
    path: '/comprehensive',
    name: 'comprehensive',
    meta: {
      icon: 'md-build',
      title: '综合责任中心'
    },
    component: Main,
    children: [
      {
        path: 'comprehensive_manual',
        name: 'comprehensive_manual',
        meta: {
          icon: 'ios-hammer',
          title: '人工'
        },
        component: parentView,
        children: [
          {
            path: 'comprehensive_base',
            name: 'comprehensive_base',
            meta: {
              icon: 'ios-grid',
              title: '基本数据'
            },
            component: () => import('@/view/comprehensive/manual/comprehensive_base.vue')
          }
        ]
      },
      {
        path: 'comprehensive_depreciation',
        name: 'comprehensive_depreciation',
        meta: {
          icon: 'ios-hammer-outline',
          title: '折旧'
        },
        // component: parentView,
        // children: [
        //   {
        //     path: 'base_else',
        //     name: 'base_else',
        //     meta: {
        //       icon: 'md-grid',
        //       title: '其它责任中心',
        //       hideInMenu: true
        //     },
        //     component: () => import('@/view/manual/else/table_else.vue')
        //   },
        // ]
      },
      {
        path: 'comprehensive_transport',
        name: 'comprehensive_transport',
        meta: {
          icon: 'ios-hammer-outline',
          title: '运输'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'comprehensive_repair',
        name: 'comprehensive_repair',
        meta: {
          icon: 'ios-hammer-outline',
          title: '修理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'comprehensive_business',
        name: 'comprehensive_business',
        meta: {
          icon: 'ios-hammer-outline',
          title: '业务'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'comprehensive_manage',
        name: 'comprehensive_manage',
        meta: {
          icon: 'ios-hammer-outline',
          title: '管理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },

    ]
  },
  //邮航
  {
    path: '/air_mail',
    name: 'air_mail',
    meta: {
      icon: 'md-build',
      title: '邮航'
    },
    component: Main,
    children: [

      {
        path: 'air_mail_depreciation',
        name: 'air_mail_depreciation',
        meta: {
          icon: 'ios-hammer-outline',
          title: '折旧'
        },
        // component: parentView,
        // children: [
        //   {
        //     path: 'base_else',
        //     name: 'base_else',
        //     meta: {
        //       icon: 'md-grid',
        //       title: '其它责任中心',
        //       hideInMenu: true
        //     },
        //     component: () => import('@/view/manual/else/table_else.vue')
        //   },
        // ]
      },
      {
        path: 'air_mail_transport',
        name: 'air_mail_transport',
        meta: {
          icon: 'ios-hammer-outline',
          title: '运输'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'air_mail_repair',
        name: 'air_mail_repair',
        meta: {
          icon: 'ios-hammer-outline',
          title: '修理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'air_mail_business',
        name: 'air_mail_business',
        meta: {
          icon: 'ios-hammer-outline',
          title: '业务'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'air_mail_manage',
        name: 'air_mail_manage',
        meta: {
          icon: 'ios-hammer-outline',
          title: '管理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },

    ]
  },
  //战略责任中心
  {
    path: '/strategy',
    name: 'strategy',
    meta: {
      icon: 'md-build',
      title: '战略责任中心'
    },
    component: Main,
    children: [

      {
        path: 'strategy_depreciation',
        name: 'strategy_depreciation',
        meta: {
          icon: 'ios-hammer-outline',
          title: '折旧'
        },
        // component: parentView,
        // children: [
        //   {
        //     path: 'base_else',
        //     name: 'base_else',
        //     meta: {
        //       icon: 'md-grid',
        //       title: '其它责任中心',
        //       hideInMenu: true
        //     },
        //     component: () => import('@/view/manual/else/table_else.vue')
        //   },
        // ]
      },
      {
        path: 'strategy_transport',
        name: 'strategy_transport',
        meta: {
          icon: 'ios-hammer-outline',
          title: '运输'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'strategy_repair',
        name: 'strategy_repair',
        meta: {
          icon: 'ios-hammer-outline',
          title: '修理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'strategy_business',
        name: 'strategy_business',
        meta: {
          icon: 'ios-hammer-outline',
          title: '业务'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },
      {
        path: 'strategy_manage',
        name: 'strategy_manage',
        meta: {
          icon: 'ios-hammer-outline',
          title: '管理'
        },
        // component: () => import('@/view/manual/else/table_else.vue')
      },

    ]
  },
  //统计
  {
    path: '/statistics',
    name: 'statistics',
    meta: {
      icon: 'md-build',
      title: '统计信息'
    },
    component: Main,
    children: [
      {
        path: 'statistics_cost',
        name: 'statistics_cost',
        meta: {
          icon: 'ios-hammer',
          title: '成本费用明细'
        },
        component: parentView,
        children: [
          {
            path: 'statistics_cost_center_group',
            name: 'statistics_cost_center_group',
            meta: {
              icon: 'ios-grid',
              title: '责任中心/班组'
            },
            component: () => import('@/view/statistics/statistics_cost_center_group.vue')
          },
          {
            path: 'statistics_cost_department',
            name: 'statistics_cost_department',
            meta: {
              icon: 'ios-grid',
              title: '部门'
            },
            component: () => import('@/view/statistics/statistics_cost_department.vue')
          },
          {
            path: 'statistics_cost_link',
            name: 'statistics_cost_link',
            meta: {
              icon: 'ios-grid',
              title: '环节'
            },
            component: () => import('@/view/statistics/statistics_cost_link.vue')
          },
        ]
      },
      {
        path: 'statistics_link',
        name: 'statistics_link',
        meta: {
          icon: 'ios-grid-outline',
          title: '环节分摊'
        },
        component: () => import('@/view/statistics/statistics_link.vue')
      },
      {
        path: 'statistics_link_detail/:id',
        name: 'statistics_link_detail',
        meta: {
          icon: 'md-flower',
          title: route => `${route.params.id}`,
          // notCache: true,
          hideInMenu: true
        },
        component: () => import('@/view/statistics/statistics_link_detail.vue')
      },
      {
        path: 'statistics_profit_loss',
        name: 'statistics_profit_loss',
        meta: {
          icon: 'ios-grid',
          title: '损益核算'
        },
        component: () => import('@/view/statistics/statistics_profit_loss.vue')
      },
    ]
  },

  //上传
  {
    path: '/update',
    name: 'update',
    meta: {
      hide: true
    },
    component: Main,
    children: [
      {
        path: 'update_single',
        name: 'update_single',
        meta: {
          icon: 'md-cloud-upload',
          title: '数据录入'
        },
        component: () => import('@/view/update/update-base.vue')
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      // notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          // notCache: true
        },
        component: () => import('@/view/update/update-base.vue')
        // component: () => import('@/view/single-page/home')
      }
    ]
  },
  // {
  //   path: '/components',
  //   name: 'components',
  //   meta: {
  //     icon: 'logo-buffer',
  //     title: '组件'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'tables_page',
  //       name: 'tables_page',
  //       meta: {
  //         icon: 'md-grid',
  //         title: '多功能表格'
  //       },
  //       component: () => import('@/view/components/tables/tables.vue')
  //     },
  //     {
  //       path: 'icons_page',
  //       name: 'icons_page',
  //       meta: {
  //         icon: '_bear',
  //         title: '自定义图标'
  //       },
  //       component: () => import('@/view/components/icons/icons.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/excel',
  //   name: 'excel',
  //   meta: {
  //     icon: 'ios-stats',
  //     title: 'EXCEL导入导出'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'upload-excel',
  //       name: 'upload-excel',
  //       meta: {
  //         icon: 'md-add',
  //         title: '导入EXCEL'
  //       },
  //       component: () => import('@/view/excel/upload-excel.vue')
  //     },
  //     {
  //       path: 'export-excel',
  //       name: 'export-excel',
  //       meta: {
  //         icon: 'md-download',
  //         title: '导出EXCEL'
  //       },
  //       component: () => import('@/view/excel/export-excel.vue')
  //     }
  //   ]
  // },
  //错误页面
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
