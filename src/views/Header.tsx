import { EditOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
import ModelSetting from '@/hooks/ModelSetting'
import downloadPDF from '@/util/html2pdf'
function Header() {
  const [apply, setApply] = useState('前端开发工程师')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { state } = useLocation()

  // 下载pdf
  function exportPDF() {
    const pdf = document.getElementById('pdf')
    downloadPDF(pdf!, apply, false, () => { })
  }
  return (
    <header className="flex items-center bg-[#202329] text-white justify-between h-10">
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
      <a href="https://github.com/icefiresong24/MyResuem">github</a>
      <button className="cursor-pointer border-none" onClick={exportPDF}>PDF下载</button>
      <button onClick={() => {
        setIsModalOpen(true)
      }} className="cursor-pointer border-none">
        {apply}
        <EditOutlined />
      </button>
      <button className="cursor-pointer border-none">更换模板</button>
      {
        (state as any).username ? <div>{(state as any).username}</div> : <Link to={{ pathname: '/login' }}>登录</Link>
      }
    </header>
  )
}

export default Header
