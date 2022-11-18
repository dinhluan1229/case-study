function saveStudent() {

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let gender = document.getElementById('gender').value;

    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
        students.push({
            fullName: fullName,
            email: email,
            phone: phone,
            address: address,
            gender: gender,
        });
        localStorage.setItem('students',JSON.stringify(students));
        this.temPorAry();
        document.getElementById("fullName").value ='';
        document.getElementById("email").value ='';
        document.getElementById("phone").value ='';
        document.getElementById("address").value ='';


}

function temPorAry(){
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    if (students.length===0){
        document.getElementById('list-student').style.display= 'none';
        return false;
    }
    else {
        document.getElementById('list-student').style.display= 'block';
    }
    let tableContent =` <tr>
          <td>No</td>
          <td>Họ và tên</td>
          <td>Email</td>
          <td>Điện thoại</td>
          <td>Giới tính</td>
          <td>Địa chỉ</td>
          <td>Hành động</td>
          </tr>`;
    students.forEach((student,index) => {
        let studentId = index;
        let genderLabel =parseInt(student.gender) === 1 ? 'Nam' : 'Nữ';
        index++;
        tableContent += ` <tr>
          <td>${index}</td>
          <td>${student.fullName}</td>
          <td>${student.email}</td>
          <td>${student.phone}</td>
          <td>${genderLabel}</td>
          <td>${student.address}</td>
          <td>
            <a href="#" onclick="editStudent(${studentId})">Edit</a> | <a href="#" onclick="deleteStudent(${studentId})">Delete</a>
            </td>
          </tr>`
    })
    document.getElementById('add-students').innerHTML = tableContent;

}
function deleteStudent(id){
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
        students.splice(id,1);
        localStorage.setItem('students',JSON.stringify(students));
    temPorAry();
}
function editStudent(id){
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
        document.getElementById("fullName").value= students[id].fullName;
        document.getElementById("email").value= students[id].email;
        document.getElementById("phone").value= students[id].phone;
        document.getElementById("address").value= students[id].address;
        document.getElementById('gender').value= students[id].gender;
        document.getElementById('index').value= id;
}
function changeStudent(){
    let id =  document.getElementById('index').value;
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    let data = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        gender: document.getElementById('gender').value,
    }
    students[id] = data;
    localStorage.setItem('students',JSON.stringify(students));
    temPorAry()
    document.getElementById("fullName").value ='';
    document.getElementById("email").value ='';
    document.getElementById("phone").value ='';
    document.getElementById("address").value ='';
}