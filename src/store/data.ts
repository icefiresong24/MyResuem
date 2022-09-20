interface Data {
  value: Module[];
  global:any
}
interface Module {
  name: string;
  component: string;
  show: boolean;
  style: Nobject;
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
          work: "3年",
          address: "维斯特洛",
          email: "863548227qq@.com",
          phone: "13122221111",
          job: "前端开发工程师",
          github: "www.baidu.com",
        },
        img: "",
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
        info: [{ name: "野鸡学城", profession: "计算机科学与技术", degree: "本科", startTime: "2022年1月", endTime: "2022年2月" }],
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
        info: "<p>熟练使用Vue2、3及周边生态开发应用程序。结合HTML5、CSS3编写高质量、符合语义化的代码；</p><p>熟练使用 Element UI、Ant Design of Vue、Echarts等UI库，实现快速构建网页；</p><p>熟悉使用TypeScript，熟悉ECMAScript6语法，在项目中实际运用；</p><p>熟悉Webpack、Babel等项目打包工具，Git版本控制工具，实现多人协同开发。</p><p>了解 WebGIS，熟悉 Cesium 地图引擎及高德地图百度地图等地图 API；</p><p>了解HTTP协议、Linux系统常用操作，express框架。</p>",
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
        info: "<p>三好学生</p>",
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
            company: "996神仙难活公司",
            role: "前端负责人",
            duty: "<p>负责项目的核心模块前端设计和研发工作</p>",
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
            projectName: "上班摸鱼管理系统",
            role: "前端负责人",
            description: "<p>熟练使用Vue2、3及周边生态开发应用程序。结合HTML5、CSS3编写高质量、符合语义化的代码；</p><p>熟练使用 Element UI、Ant Design of Vue、Echarts等UI库，实现快速构建网页；</p><p>熟悉使用TypeScript，熟悉ECMAScript6语法，在项目中实际运用；</p><p>熟悉Webpack、Babel等项目打包工具，Git版本控制工具，实现多人协同开发。</p><p>了解 WebGIS，熟悉 Cesium 地图引擎及高德地图百度地图等地图 API；</p><p>了解HTTP协议、Linux系统常用操作，express框架。</p>",
          },
          {
            startTime: "2022-08-13",
            endTime: "2022-08-13",
            projectName: "下班喝酒管理系统",
            role: "前端负责人",
            description: "<p>熟练使用Vue2、3及周边生态开发应用程序。结合HTML5、CSS3编写高质量、符合语义化的代码；</p><p>熟练使用 Element UI、Ant Design of Vue、Echarts等UI库，实现快速构建网页；</p><p>熟悉使用TypeScript，熟悉ECMAScript6语法，在项目中实际运用；</p><p>熟悉Webpack、Babel等项目打包工具，Git版本控制工具，实现多人协同开发。</p><p>了解 WebGIS，熟悉 Cesium 地图引擎及高德地图百度地图等地图 API；</p><p>了解HTTP协议、Linux系统常用操作，express框架。</p>",
          },
          {
            startTime: "2022-08-13",
            endTime: "2022-08-13",
            projectName: "放假屏蔽管理系统",
            role: "前端负责人",
            description: "<p>熟练使用Vue2、3及周边生态开发应用程序。结合HTML5、CSS3编写高质量、符合语义化的代码；</p><p>熟练使用 Element UI、Ant Design of Vue、Echarts等UI库，实现快速构建网页；</p><p>熟悉使用TypeScript，熟悉ECMAScript6语法，在项目中实际运用；</p><p>熟悉Webpack、Babel等项目打包工具，Git版本控制工具，实现多人协同开发。</p><p>了解 WebGIS，熟悉 Cesium 地图引擎及高德地图百度地图等地图 API；</p><p>了解HTTP协议、Linux系统常用操作，express框架。</p>",
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
  global: {
    theme: "black",
    text: "14px",
    title: "18px",
    margin: "10px",
  },
};

export default data;
