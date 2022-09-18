import downloadPDF from "@/util/html2pdf";

function Header() {
  //跳转GitHub
  function goGithub() {
    window.open("https://github.com/icefiresong24/MyResuem");
    }
//下载pdf
  function exportPDF() {
    const pdf = document.getElementById("pdf");
    downloadPDF(pdf!, "前端开发工程师", false, () => {});
  }
  return (
    <div className="flex items-center bg-[#202329] text-white justify-between h-10">
      <div className="cursor-pointer" onClick={goGithub}>
        github
      </div>
      <div>前端开发工程师</div>
      <div onClick={exportPDF}>PDF下载</div>
      <div>更换模板</div>
      <div>登录</div>
    </div>
  );
}

export default Header;