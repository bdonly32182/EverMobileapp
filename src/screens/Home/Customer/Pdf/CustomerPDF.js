import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
export function CustomerPDF(customer) {
    pdfMake.fonts={
        Sarabun:{
            normal:'Sarabun-Regular.ttf',
            bold:'Sarabun-Bold.ttf',
            italics:'Sarabun-Italic.ttf',
            bolditalics:'Sarabun-BoldItalic.ttf'
        }
    }

        const DocDifinition = () => {

           let docDifinition ={
                pageSize:'A4',
                info: {
                    title: `asd`
                },
               content:[
                    
                   {text:'ภ.ด.ส.๖',fontSize:12,alignment:'right'},

               ],
               defaultStyle:{
                   font:'Sarabun'
               },
               styles: {

               }
           }

           return docDifinition        
        }
        let PdfFile = DocDifinition()
       return PdfFile       
    
}

