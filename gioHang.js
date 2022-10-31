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

    }
    document.getElementById('hienGioHang').innerHTML = gioHang;

}
function add() {
    let namePet = document.getElementById('name').value;
    listGioHang.push(namePet);

    document.getElementById('hienGia').innerHTML= 'Tổng thiệt hại: '+ tongGia + 'tr';
    tongGia=0;
    tinhGia()
    display()
}
function deletePet(index){
    listGioHang.splice(index,1);
    tongGia=0;
    tinhGia()
    display()
}
function tinhGia() {
    for (let i = 0; i < listGioHang.length; i++) {
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
    document.getElementById('hienGia').innerHTML = 'Tổng thiệt hại: ' + tongGia + 'tr';
}