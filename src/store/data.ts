interface Data{
  value:Module[]
}
interface Module{
  name: string,
  component: string,
  show: boolean,
  style:Nobject
}
const data: Data = {
  value: [
    {
      name: "基本资料",
      component: "Basic",
      show: true,
      style: {
        info: {
          name: "冰与火之歌",
          age: 25,
          work: 3,
          address: "维斯特洛",
          email: "qq@.com",
          phone: "11111111111",
        },
        img: "@/assets/images/vx.jpg",
        title: {
          color: "black",
          fontSize: "24px",
        },
        context: {
          color: "black",
          fontSize: "18px",
        },
      },
    },

    {
      name: "求职意向",
      component: "Apply",
      show: true,
      style: {
        info: {
          duty: "前端开发工程师",
          salary: "10000",
          status: "在职",
        },
        title: {
          color: "black",
          fontSize: "24px",
        },
        context: {
          color: "black",
          fontSize: "18px",
        },
      },
    },
    {
      name: "教育背景",
      component: "Education",
      show: true,
      style: {
        info: [
          { name: "野鸡学城", profession: "计算机科学与技术", degree: "本科" },
        ],
        title: {
          color: "black",
          fontSize: "24px",
        },
        context: {
          color: "black",
          fontSize: "18px",
        },
      },
    },
    {
      name: "技能特长",
      component: "Skill",
      show: true,
      style: {
        info: [
          "熟练掌握 Vue2、3 及周边生态开发应用程序。结合 HTML5、CSS3 编写高质量、符合语义化的代码；",
          "熟练掌握 Element UI、Ant Design、Echarts 等 UI 库，实现快速构建网页；",
        ],
        title: {
          color: "black",
          fontSize: "24px",
        },
        context: {
          color: "black",
          fontSize: "18px",
        },
      },
    },
    {
      name: "校园经历",
      component: "School",
      show: true,
      style: {
        info: ["国家奖学金", "全国一等奖"],
        title: {
          color: "black",
          fontSize: "24px",
        },
        context: {
          color: "black",
          fontSize: "18px",
        },
      },
    },
    {
      name: "工作经验",
      component: "Internship",
      show: true,
      style: {
        info: [
          {
            startTime: "2022-1-1",
            endTime: "2022-1-1",
            company: "****公司",
            role: "前端负责人",
            duty: "负责项目的核心模块前端设计和研发工作；",
          },
        ],
        title: {
          color: "black",
          fontSize: "24px",
        },
        context: {
          color: "black",
          fontSize: "18px",
        },
      },
    },
    {
      name: "项目经验",
      component: "Work",
      show: true,
      style: {
        info: [
          {
            startTime: "2022-08-13",
            endTime: "2022-08-13",
            projectName: "后台管理系统",
            role: "前端负责人",
            description: "负责项目的核心模块前端设计和研发工作；",
          },
        ],
        title: {
          color: "black",
          fontSize: "24px",
        },
        context: {
          color: "black",
          fontSize: "18px",
        },
      },
    },
  ],
};

export default data