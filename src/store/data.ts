interface Data {
  value: Module[]
  global: any
}
interface Module {
  name: string
  component: string
  show: boolean
  style: Nobject
}
const data: Data = {
  value: [
    {
      name: '基本资料',
      component: 'Basic',
      show: true,
      style: {
        info: {
          name: 'icefiresong24',
          age: 25,
          work: '3年',
          address: '深圳',
          email: 'xxxxxxxqq@.com',
          phone: '13122221111',
          job: '前端开发工程师',
          github: 'https://github.com/icefiresong24',
        },
        img: '',
        title: {
          color: 'black',
          fontSize: '24px',
        },
        context: {
          color: 'black',
          fontSize: '18px',
        },
      },
    },

    {
      name: '求职意向',
      component: 'Apply',
      show: true,
      style: {
        info: {
          duty: '前端开发工程师',
          salary: 'xxxx',
          status: '在职',
        },
        title: {
          color: 'black',
          fontSize: '24px',
        },
        context: {
          color: 'black',
          fontSize: '18px',
        },
      },
    },
    {
      name: '教育背景',
      component: 'Education',
      show: true,
      style: {
        info: [{ name: 'XXXX大学', profession: '计算机科学与技术', degree: '本科', startTime: '2022年1月', endTime: '2022年2月' }],
        title: {
          color: 'black',
          fontSize: '24px',
        },
        context: {
          color: 'black',
          fontSize: '18px',
        },
      },
    },
    {
      name: '技能特长',
      component: 'Skill',
      show: true,
      style: {
        info: '<p>精通js/html/css</p><p>熟练掌握vue、react、typescript</p><p>熟练使用webpack、vite、roolup构建工具</p><p>了解网络协议、node、服务器</p>',
        title: {
          color: 'black',
          fontSize: '24px',
        },
        context: {
          color: 'black',
          fontSize: '18px',
        },
      },
    },
    {
      name: '校园经历',
      component: 'School',
      show: true,
      style: {
        info: '<p>国家奖学金</p>',
        title: {
          color: 'black',
          fontSize: '24px',
        },
        context: {
          color: 'black',
          fontSize: '18px',
        },
      },
    },
    {
      name: '工作经验',
      component: 'Internship',
      show: true,
      style: {
        info: [
          {
            startTime: '2022年09月',
            endTime: '2022年09月',
            company: 'XXXX公司',
            role: '前端负责人',
            duty: '<p>负责项目的核心模块前端设计和研发工作</p>',
          },
        ],
        title: {
          color: 'black',
          fontSize: '24px',
        },
        context: {
          color: 'black',
          fontSize: '18px',
        },
      },
    },
    {
      name: '项目经验',
      component: 'Work',
      show: true,
      style: {
        info: [
          {
            startTime: '2022年01月',
            endTime: '2022年09月',
            projectName: 'XXXX系统',
            role: '前端负责人',
            description: '<p>完成主要模块开发</p><p>独立负责项目</p><p>基于XXXX,使用XXXX方法,达到XXXX效果</p><p>推动项目XXXX</p>',
          },
          {
            startTime: '2022年01月',
            endTime: '2022年09月',
            projectName: 'XXXX系统',
            role: '前端负责人',
            description: '<p>完成主要模块开发</p><p>独立负责项目</p><p>基于XXXX,使用XXXX方法,达到XXXX效果</p><p>推动项目XXXX</p>',
          },
          {
            startTime: '2022年01月',
            endTime: '2022年09月',
            projectName: 'XXXX系统',
            role: '前端负责人',
            description: '<p>完成主要模块开发</p><p>独立负责项目</p><p>基于XXXX,使用XXXX方法,达到XXXX效果</p><p>推动项目XXXX</p>',
          },
        ],
        title: {
          color: 'black',
          fontSize: '24px',
        },
        context: {
          color: 'black',
          fontSize: '18px',
        },
      },
    },
  ],
  global: {
    theme: 'black',
    text: '14px',
    title: '18px',
    margin: '10px',
  },
}

export default data
