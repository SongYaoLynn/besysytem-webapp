const tableHeader = {
  ground: [
    {
      title: "费用项目",
      key: "费用项目",
      fixed: "left",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130
    },
    {
      children: [
        {
          key: "陆侧邮件作业区车辆引导",
          title: "车辆引导",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区车辆引导"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件卸车",
          title: "邮件卸车",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区邮件卸车"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件驳运",
          title: "邮件驳运",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区邮件驳运"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件过检",
          title: "邮件过检",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区邮件过检"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区总包开拆",
          title: "总包开拆",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区总包开拆"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件扫描封发",
          title: "邮件扫描封发",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区邮件扫描封发"].toFixed(2)
            );
          }
        },
        {
          key: "陆侧邮件作业区二次供件",
          title: "二次供件",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区二次供件"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区本地信息处理",
          title: "本地信息处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区本地信息处理"].toFixed(2)
            );
          }
        },
        {
          key: "陆侧邮件作业区质检巡查",
          title: "质检巡查",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区质检巡查"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件装车发运",
          title: "邮件装车发运",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区邮件装车发运"].toFixed(2)
            );
          }
        },
        {
          key: "陆侧邮件作业区人工处理",
          title: "人工处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区人工处理"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区分流",
          title: "分流",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区分流"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区综合",
          title: "综合",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区综合"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区网运信息处理",
          title: "网运信息处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区网运信息处理"].toFixed(2)
            );
          }
        }
      ],
      title: "陆侧邮件作业区",
      align: "center"
    },
    {
      title: "合计",
      key: "合计",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130,
      render: (h, params) => {
        return h("div", params.row["合计"].toFixed(2));
      }
    }
  ],
  air: [
    {
      title: "费用项目",
      key: "费用项目",
      fixed: "left",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130
    },
    {
      children: [
        {
          key: "空侧邮件作业区调箱",
          title: "调箱",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区调箱"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区交接门洞接收集装箱",
          title: "交接门洞接收集装箱",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区交接门洞接收集装箱"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区掏箱",
          title: "掏箱",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区掏箱"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区安检机后分类传输",
          title: "安检机后分类传输",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区安检机后分类传输"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区空侧供件",
          title: "空侧供件",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区空侧供件"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区拒识邮件处理",
          title: "拒识邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区拒识邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区空侧封发装箱称重",
          title: "空侧封发装箱称重",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区空侧封发装箱称重"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区交邮",
          title: "交邮",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区交邮"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区收容处理",
          title: "收容处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区收容处理"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区人工处理",
          title: "人工处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区人工处理"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区信息处理",
          title: "信息处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区信息处理"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区运保",
          title: "运保",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区运保"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区综合",
          title: "综合",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区综合"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区白班",
          title: "白班",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区白班"].toFixed(2));
          }
        }
      ],
      title: "空侧邮件作业区",
      align: "center"
    },
    {
      title: "合计",
      key: "合计",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130,
      render: (h, params) => {
        return h("div", params.row["合计"].toFixed(2));
      }
    }
  ],
  flat: [
    {
      title: "费用项目",
      key: "费用项目",
      fixed: "left",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130
    },
    {
      children: [
        {
          key: "扁平件邮件作业区信盒传输线巡视",
          title: "信盒传输线巡视",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区信盒传输线巡视"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区非标件收集",
          title: "非标件收集",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区非标件收集"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区供件",
          title: "供件",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区供件"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区辅助分拣",
          title: "辅助分拣",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区辅助分拣"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区分拣机巡视",
          title: "分拣机巡视",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区分拣机巡视"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区塑封操作",
          title: "塑封操作",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区塑封操作"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区空盒收集",
          title: "空盒收集",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区空盒收集"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区塑封机错包处理",
          title: "塑封机错包处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区塑封机错包处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区拒识邮件处理",
          title: "拒识邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区拒识邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区收容邮件处理",
          title: "收容邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区收容邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区分拣封发专项邮件处理",
          title: "分拣封发专项邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区分拣封发专项邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区接发",
          title: "接发",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区接发"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区牵引车驾驶",
          title: "牵引车驾驶",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区牵引车驾驶"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区质检",
          title: "质检",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区质检"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区白班",
          title: "白班",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区白班"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区综合",
          title: "综合",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区综合"].toFixed(2));
          }
        }
      ],
      title: "扁平件邮件作业区",
      align: "center"
    },
    {
      title: "合计",
      key: "合计",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130,
      render: (h, params) => {
        return h("div", params.row["合计"].toFixed(2));
      }
    }
  ],
  air_ground: [
    {
      title: "费用项目",
      key: "费用项目",
      fixed: "left",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130
    },
    {
      children: [
        {
          key: "空侧邮件作业区调箱",
          title: "调箱",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区调箱"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区交接门洞接收集装箱",
          title: "交接门洞接收集装箱",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区交接门洞接收集装箱"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区掏箱",
          title: "掏箱",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区掏箱"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区安检机后分类传输",
          title: "安检机后分类传输",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区安检机后分类传输"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区空侧供件",
          title: "空侧供件",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区空侧供件"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区拒识邮件处理",
          title: "拒识邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区拒识邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区空侧封发装箱称重",
          title: "空侧封发装箱称重",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区空侧封发装箱称重"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区交邮",
          title: "交邮",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区交邮"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区收容处理",
          title: "收容处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区收容处理"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区人工处理",
          title: "人工处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区人工处理"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区信息处理",
          title: "信息处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区信息处理"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区运保",
          title: "运保",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区运保"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区综合",
          title: "综合",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区综合"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区白班",
          title: "白班",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区白班"].toFixed(2));
          }
        }
      ],
      title: "空侧邮件作业区",
      align: "center"
    },
    {
      children: [
        {
          key: "陆侧邮件作业区车辆引导",
          title: "车辆引导",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区车辆引导"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件卸车",
          title: "邮件卸车",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区邮件卸车"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件驳运",
          title: "邮件驳运",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区邮件驳运"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件过检",
          title: "邮件过检",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区邮件过检"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区总包开拆",
          title: "总包开拆",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区总包开拆"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件扫描封发",
          title: "邮件扫描封发",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区邮件扫描封发"].toFixed(2)
            );
          }
        },
        {
          key: "陆侧邮件作业区二次供件",
          title: "二次供件",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区二次供件"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区本地信息处理",
          title: "本地信息处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区本地信息处理"].toFixed(2)
            );
          }
        },
        {
          key: "陆侧邮件作业区质检巡查",
          title: "质检巡查",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区质检巡查"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件装车发运",
          title: "邮件装车发运",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区邮件装车发运"].toFixed(2)
            );
          }
        },
        {
          key: "陆侧邮件作业区人工处理",
          title: "人工处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区人工处理"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区分流",
          title: "分流",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区分流"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区综合",
          title: "综合",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区综合"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区网运信息处理",
          title: "网运信息处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区网运信息处理"].toFixed(2)
            );
          }
        }
      ],
      title: "陆侧邮件作业区",
      align: "center"
    },
    {
      title: "合计",
      key: "合计",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130,
      render: (h, params) => {
        return h("div", params.row["合计"].toFixed(2));
      }
    }
  ],
  air_flat: [
    {
      title: "费用项目",
      key: "费用项目",
      fixed: "left",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130
    },
    {
      children: [
        {
          key: "空侧邮件作业区调箱",
          title: "调箱",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区调箱"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区交接门洞接收集装箱",
          title: "交接门洞接收集装箱",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区交接门洞接收集装箱"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区掏箱",
          title: "掏箱",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区掏箱"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区安检机后分类传输",
          title: "安检机后分类传输",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区安检机后分类传输"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区空侧供件",
          title: "空侧供件",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区空侧供件"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区拒识邮件处理",
          title: "拒识邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区拒识邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区空侧封发装箱称重",
          title: "空侧封发装箱称重",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区空侧封发装箱称重"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区交邮",
          title: "交邮",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区交邮"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区收容处理",
          title: "收容处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区收容处理"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区人工处理",
          title: "人工处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区人工处理"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区信息处理",
          title: "信息处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区信息处理"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区运保",
          title: "运保",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区运保"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区综合",
          title: "综合",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区综合"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区白班",
          title: "白班",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区白班"].toFixed(2));
          }
        }
      ],
      title: "空侧邮件作业区",
      align: "center"
    },
    {
      children: [
        {
          key: "扁平件邮件作业区信盒传输线巡视",
          title: "信盒传输线巡视",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区信盒传输线巡视"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区非标件收集",
          title: "非标件收集",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区非标件收集"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区供件",
          title: "供件",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区供件"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区辅助分拣",
          title: "辅助分拣",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区辅助分拣"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区分拣机巡视",
          title: "分拣机巡视",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区分拣机巡视"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区塑封操作",
          title: "塑封操作",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区塑封操作"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区空盒收集",
          title: "空盒收集",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区空盒收集"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区塑封机错包处理",
          title: "塑封机错包处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区塑封机错包处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区拒识邮件处理",
          title: "拒识邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区拒识邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区收容邮件处理",
          title: "收容邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区收容邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区分拣封发专项邮件处理",
          title: "分拣封发专项邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区分拣封发专项邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区接发",
          title: "接发",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区接发"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区牵引车驾驶",
          title: "牵引车驾驶",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区牵引车驾驶"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区质检",
          title: "质检",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区质检"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区白班",
          title: "白班",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区白班"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区综合",
          title: "综合",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区综合"].toFixed(2));
          }
        }
      ],
      title: "扁平件邮件作业区",
      align: "center"
    },
    {
      title: "合计",
      key: "合计",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130,
      render: (h, params) => {
        return h("div", params.row["合计"].toFixed(2));
      }
    }
  ],
  ground_flat: [
    {
      title: "费用项目",
      key: "费用项目",
      fixed: "left",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130
    },
    {
      children: [
        {
          key: "陆侧邮件作业区车辆引导",
          title: "车辆引导",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区车辆引导"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件卸车",
          title: "邮件卸车",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区邮件卸车"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件驳运",
          title: "邮件驳运",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区邮件驳运"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件过检",
          title: "邮件过检",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区邮件过检"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区总包开拆",
          title: "总包开拆",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区总包开拆"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件扫描封发",
          title: "邮件扫描封发",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区邮件扫描封发"].toFixed(2)
            );
          }
        },
        {
          key: "陆侧邮件作业区二次供件",
          title: "二次供件",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区二次供件"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区本地信息处理",
          title: "本地信息处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区本地信息处理"].toFixed(2)
            );
          }
        },
        {
          key: "陆侧邮件作业区质检巡查",
          title: "质检巡查",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区质检巡查"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件装车发运",
          title: "邮件装车发运",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区邮件装车发运"].toFixed(2)
            );
          }
        },
        {
          key: "陆侧邮件作业区人工处理",
          title: "人工处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区人工处理"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区分流",
          title: "分流",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区分流"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区综合",
          title: "综合",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区综合"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区网运信息处理",
          title: "网运信息处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区网运信息处理"].toFixed(2)
            );
          }
        }
      ],
      title: "陆侧邮件作业区",
      align: "center"
    },
    {
      children: [
        {
          key: "扁平件邮件作业区信盒传输线巡视",
          title: "信盒传输线巡视",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区信盒传输线巡视"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区非标件收集",
          title: "非标件收集",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区非标件收集"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区供件",
          title: "供件",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区供件"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区辅助分拣",
          title: "辅助分拣",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区辅助分拣"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区分拣机巡视",
          title: "分拣机巡视",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区分拣机巡视"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区塑封操作",
          title: "塑封操作",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区塑封操作"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区空盒收集",
          title: "空盒收集",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区空盒收集"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区塑封机错包处理",
          title: "塑封机错包处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区塑封机错包处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区拒识邮件处理",
          title: "拒识邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区拒识邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区收容邮件处理",
          title: "收容邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区收容邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区分拣封发专项邮件处理",
          title: "分拣封发专项邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区分拣封发专项邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区接发",
          title: "接发",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区接发"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区牵引车驾驶",
          title: "牵引车驾驶",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区牵引车驾驶"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区质检",
          title: "质检",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区质检"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区白班",
          title: "白班",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区白班"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区综合",
          title: "综合",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区综合"].toFixed(2));
          }
        }
      ],
      title: "扁平件邮件作业区",
      align: "center"
    },
    {
      title: "合计",
      key: "合计",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130,
      render: (h, params) => {
        return h("div", params.row["合计"].toFixed(2));
      }
    }
  ],
  all: [
    {
      title: "费用项目",
      key: "费用项目",
      fixed: "left",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130
    },
    {
      children: [
        {
          key: "空侧邮件作业区调箱",
          title: "调箱",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区调箱"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区交接门洞接收集装箱",
          title: "交接门洞接收集装箱",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区交接门洞接收集装箱"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区掏箱",
          title: "掏箱",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区掏箱"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区安检机后分类传输",
          title: "安检机后分类传输",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区安检机后分类传输"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区空侧供件",
          title: "空侧供件",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区空侧供件"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区拒识邮件处理",
          title: "拒识邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区拒识邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区空侧封发装箱称重",
          title: "空侧封发装箱称重",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["空侧邮件作业区空侧封发装箱称重"].toFixed(2)
            );
          }
        },
        {
          key: "空侧邮件作业区交邮",
          title: "交邮",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区交邮"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区收容处理",
          title: "收容处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区收容处理"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区人工处理",
          title: "人工处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区人工处理"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区信息处理",
          title: "信息处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区信息处理"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区运保",
          title: "运保",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区运保"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区综合",
          title: "综合",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区综合"].toFixed(2));
          }
        },
        {
          key: "空侧邮件作业区白班",
          title: "白班",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["空侧邮件作业区白班"].toFixed(2));
          }
        }
      ],
      title: "空侧邮件作业区",
      align: "center"
    },
    {
      children: [
        {
          key: "陆侧邮件作业区车辆引导",
          title: "车辆引导",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区车辆引导"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件卸车",
          title: "邮件卸车",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区邮件卸车"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件驳运",
          title: "邮件驳运",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区邮件驳运"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件过检",
          title: "邮件过检",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区邮件过检"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区总包开拆",
          title: "总包开拆",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区总包开拆"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件扫描封发",
          title: "邮件扫描封发",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区邮件扫描封发"].toFixed(2)
            );
          }
        },
        {
          key: "陆侧邮件作业区二次供件",
          title: "二次供件",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区二次供件"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区本地信息处理",
          title: "本地信息处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区本地信息处理"].toFixed(2)
            );
          }
        },
        {
          key: "陆侧邮件作业区质检巡查",
          title: "质检巡查",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区质检巡查"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区邮件装车发运",
          title: "邮件装车发运",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区邮件装车发运"].toFixed(2)
            );
          }
        },
        {
          key: "陆侧邮件作业区人工处理",
          title: "人工处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区人工处理"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区分流",
          title: "分流",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区分流"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区综合",
          title: "综合",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["陆侧邮件作业区综合"].toFixed(2));
          }
        },
        {
          key: "陆侧邮件作业区网运信息处理",
          title: "网运信息处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["陆侧邮件作业区网运信息处理"].toFixed(2)
            );
          }
        }
      ],
      title: "陆侧邮件作业区",
      align: "center"
    },
    {
      children: [
        {
          key: "扁平件邮件作业区信盒传输线巡视",
          title: "信盒传输线巡视",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区信盒传输线巡视"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区非标件收集",
          title: "非标件收集",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区非标件收集"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区供件",
          title: "供件",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区供件"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区辅助分拣",
          title: "辅助分拣",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区辅助分拣"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区分拣机巡视",
          title: "分拣机巡视",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区分拣机巡视"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区塑封操作",
          title: "塑封操作",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区塑封操作"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区空盒收集",
          title: "空盒收集",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区空盒收集"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区塑封机错包处理",
          title: "塑封机错包处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区塑封机错包处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区拒识邮件处理",
          title: "拒识邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区拒识邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区收容邮件处理",
          title: "收容邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区收容邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区分拣封发专项邮件处理",
          title: "分拣封发专项邮件处理",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区分拣封发专项邮件处理"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区接发",
          title: "接发",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区接发"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区牵引车驾驶",
          title: "牵引车驾驶",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h(
              "div",
              params.row["扁平件邮件作业区牵引车驾驶"].toFixed(2)
            );
          }
        },
        {
          key: "扁平件邮件作业区质检",
          title: "质检",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区质检"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区白班",
          title: "白班",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区白班"].toFixed(2));
          }
        },
        {
          key: "扁平件邮件作业区综合",
          title: "综合",
          width: 130,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h("div", params.row["扁平件邮件作业区综合"].toFixed(2));
          }
        }
      ],
      title: "扁平件邮件作业区",
      align: "center"
    },
    {
      title: "合计",
      key: "合计",
      align: "center",
      ellipsis: true,
      tooltip: true,
      width: 130,
      render: (h, params) => {
        return h("div", params.row["合计"].toFixed(2));
      }
    }
  ]
};

export { tableHeader };
