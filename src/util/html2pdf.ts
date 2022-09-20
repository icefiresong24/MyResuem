import JsPDF from 'jspdf';
// import html2canvas from 'html2canvas'
import html2canvas from 'html2canvas'
const downloadPDF = (
  el: HTMLElement,
  pdfName: string,
  preview: boolean,
  callback: Function
): void => {
  let eleW: number = el.offsetWidth; // 获得该容器的宽
  let eleH: number = el.offsetHeight; // 获得该容器的高

  let canvas: HTMLCanvasElement = document.createElement('canvas');
  canvas.width = eleW * 2; // 将画布宽&&高放大两倍
  canvas.height = eleH * 2;

  let context: any = canvas.getContext('2d');
  context.scale(2, 2);

  html2canvas(el, {
    scale: 2, // 设置缩放
    useCORS: true, // 允许canvas画布内 可以跨域请求外部链接图片, 允许跨域请求。,
    logging: false // 打印日志用的 可以不加默认为false
  }).then((canvas: any) => {
    // el.setAttribute("crossOrigin",'anonymous');
    let contentWidth = canvas.width;
    let contentHeight = canvas.height;
    //一页pdf显示html页面生成的canvas高度;
    let pageHeight = (contentWidth / 592.28) * 841.89;
    //未生成pdf的html页面高度
    let leftHeight = contentHeight;
    //页面偏移
    let position = 0;
    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    let imgWidth = 595.28;
    let imgHeight = (595.28 / contentWidth) * contentHeight;
    let pageData = canvas.toDataURL('image/jpeg', 1.0);
    let pdf = new JsPDF('p', 'pt', 'a4');

    if (leftHeight < pageHeight) {
      //在pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置在pdf中显示；
      pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
    } else {
      // 分页
      while (leftHeight > 0) {
        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
        leftHeight -= pageHeight;
        position -= 841.89;
        //避免添加空白页
        if (leftHeight > 0) {
          pdf.addPage();
        }
      }
    }
    if (preview) {
      let dataUrl = pdf.output('datauristring');
      
      console.log('pdf', pdf.output('datauristring'));
      callback(dataUrl);
      return
    }
    //可动态生成
    pdf.save(pdfName);
    callback();
  });
};

export default downloadPDF;
