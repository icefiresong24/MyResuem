import Module from './Module'
import Resuem from './section/index'
function Design(props:any) {
  function exportPDF() {
    
  }
    return (
      <>
        <div className="flex items-center justify-between h-10">
          <div>化简</div>
          <div className="flex">
            <div>我的简历</div>
          </div>
          <div onClick={exportPDF}>导出</div>
        </div>
        <div className="flex justify-between w-full h-[calc(100%-2.5rem)]">
          <section className="w-75 <sm:hidden">
            <div className='h-10'>模块选择</div>
            <Module />
          </section>
          <section className='p-4'>
            <Resuem></Resuem>
          </section>
          <section className="w-75 bg-blue-500 <sm:hidden">nihao</section>
        </div>
      </>
    );
}

export default Design;