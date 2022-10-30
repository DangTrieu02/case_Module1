let listGioHang = [];
let tongGia=0;
function display() {
    let gioHang = `
        <tr>
        <td>số Pet trong list : ${listGioHang.length}</td><br> 
        </tr>
        <tr>
        <td>Tên Pet :</td> <br>
        </tr>`
    for (let i = 0; i < listGioHang.length; i++) {
        gioHang += `<tr> 
                            <td id=" ${i}"> ${listGioHang[i]} </td><br>
                            <td> <button onclick="deletePet(` + i + `)">Delete</button> </td>
                   </tr>`
        if (listGioHang[i] === 'Golden') {
            tongGia += 20;
        }
        if (listGioHang[i] === 'Mèo trắng') {
            tongGia += 10;
        }
        if (listGioHang[i] === 'Con chó Phốc') {
            tongGia += 16;
        }
        if (listGioHang[i] === 'Husky ngáo ộp') {
            tongGia += 22;
        }
        if (listGioHang[i] === 'Mèo Anh lông ngắn') {
            tongGia += 19;
        }
        if (listGioHang[i] === 'Mèo Anh lông dài') {
            tongGia += 19
        }
        if (listGioHang[i] === 'Mèo khá bảnh') {
            tongGia += 12
        }
        if (listGioHang[i] === 'Mèo gôn đần') {
            tongGia += 40;
        }
    }
    document.getElementById('hienGioHang').innerHTML = gioHang;
    document.getElementById('hienGia').innerHTML= tongGia + 'tr';
}
function add() {
    let namePet = document.getElementById('name').value;
    listGioHang.push(namePet);
    display()
}
function deletePet(index){
    listGioHang.splice(index,1);
    display()
}