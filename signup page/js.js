var option = null;
function insertData(){
    var table = document.getElementById("SignUp").getElementsByTagName('tbody')[0]  ;
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = document.getElementById("fullName").value;
    var cell2= newRow.insertCell(1);
    cell2.innerHTML = document.getElementById("email").value;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML =  `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}

    
function readData(){
    var data = {};
    data["fullName"] = document.getElementById("fullName").value;
    data["email"] = document.getElementById("email").value;
    return data;

}
function updateData(data){
  selectedRow.cells[0].innerHTML = data.fullName;
  selectedRow.cells[1].innerHTML = data.email;
}
function deleteData(data){
    if(confirm("Are you sure you want to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById("SignUp").deleteRow(row.rowIndex);
        resetForm();
    }
}

