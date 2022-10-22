import { EditOutlined } from '@ant-design/icons'
import ModelSetting from '@/hooks/ModelSetting'
import downloadPDF from '@/util/html2pdf'

function Header() {
  const [apply, setApply] = useState('前端开发工程师')
  const [isModalOpen, setIsModalOpen] = useState(false)
  // 跳转GitHub
  function goGithub() {
    window.open('https://github.com/icefiresong24/MyResuem')
  }

  // 下载pdf
  function exportPDF() {
    const pdf = document.getElementById('pdf')
    downloadPDF(pdf!, apply, false, () => { })
  }
  return (
    <div className="flex items-center bg-[#202329] text-white justify-between h-10">
      <ModelSetting
        handleOk={(newTitle: string) => {
          setApply(newTitle)
        }}
        title={apply}
        visible={isModalOpen}
        handleCancel={() => {
          setIsModalOpen(false)
        }}
      ></ModelSetting>
      <div className="cursor-pointer" onClick={goGithub}>
        github
      </div>
      <div className="cursor-pointer" onClick={exportPDF}>PDF下载</div>
      <div onClick={() => {
        setIsModalOpen(true)
      }} className="cursor-pointer">
        {apply}
        <EditOutlined />
      </div>
      <div className="cursor-pointer">更换模板</div>
      <div className="cursor-pointer">登录</div>
    </div>
  )
}

export default Header
