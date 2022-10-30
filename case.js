let mangPet = [];
function display() {
    let gioHang = `<tr>
                <td>Giỏ Hàng Pet</td>
                <td> </td>
                <td> ${mangPet.length} Products</td>
                <br>
                </tr>`
    for (let i = 0; i < mangPet.length; i++) {
        let tongGia=0;

    }
        gioHang += `<tr>
                 <td id="${i}"> ${mangPet[i]} </td> 
                  <button onclick="edit(\`+i+\`)">Chỉnh sửa</button>
                   <button onclick="deletePet(\`+i+\`) ">Xóa</button>
                   <br>
                
                </tr>`
        if ()
    document.getElementById('hienGioHang').innerHTML = gioHang;
}

function addPet() {
    let namePet = document.getElementById(`name`).value;
    mangPet.push(namePet);
    display()
}
function edit(index){
    let editTable = '';
    editTable = `<input type="text" id="newEdit" value="`+mangPet[index]+`"> <button onclick="save(`+index+`)">Save</button> `
    document.getElementById(`editHere`).innerHTML=editTable;
}
function save(index){
    mangPet[index]= document.getElementById("newEdit").value;
    document.getElementById(`editHere`).innerHTML='';
    display()
}

function deletePet(index) {
    mangPet.splice(index, 1);
    display()
}
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