import * as FileSaver from "file-saver";
import * as XLSX from  "xlsx";

const buttonStyle = {
    backgroundColor: 'blue',  // 배경색
    color: 'white',            // 글자색
    padding: '10px 20px',      // 패딩
    border: 'none',            // 테두리 없음
    cursor: 'pointer',         // 커서 모양
  };


const ReactExcelDownload = () => {
    const data = [
        {
            id: 1,
            title: '테스트1',
            content: ' 치킨.'
          }, {
            id: 2,
            title: '테스트2',
            content: ' 피자.'
          }, {
            id: 3,
            title: '테스트3?',
            content: ' 고민.'
          }
    ]

    const excelFileType = 'application/vnd.openxlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const excelFileExtension = '.xlsx';
    const excelFileName = '작성자';

    const excewlDownload = (excelData) =>{
        const ws = XLSX.utils.aoa_to_sheet([
            [`작성자_testKim`],
            [],
            ['제목','내용']
        ]);
        excelData.forEach((data)=>{
            XLSX.utils.sheet_add_aoa(
                ws,
                [
                    [
                        data.title,
                        data.content
                    ]
                ],
                {origin:-1}
            );
            ws['!cols'] = [ //<-- 행 사이즈
                {wpx:200},
                {wpx:200}
            ];
        });
        const wb = {Sheets : {data:ws},SheetNames:['data']};
        const excelButter = XLSX.write(wb,{bookType:'xlsx',type:'array'});
        const excelFile = new Blob([excelButter],{type:excelFileType});
        //FileSaver.saveAs(excelFile,excelFileName + excelFileExtension);
        FileSaver.saveAs(excelFile, '작성자.xlsx');
    }

        return (
            <div>
                <button  style={buttonStyle} onClick={()=> excewlDownload(data)}> 엑셀 다운로드 </button>
            </div>
        )
};

export default ReactExcelDownload;