const payment = document.getElementById("payment-type");
const amountPaid = document.getElementById("amount");
const itemPurchased = document.getElementById("expense");
const datePurchased = document.getElementById("date");
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener('click', userData);

function userData(e) {
  e.preventDefault();
  const type = payment.value;
  const paid = amountPaid.value;
  const item = itemPurchased.value;
  const date = datePurchased.value;
  const deleteRow = document.createElement('button');
  deleteRow.setAttribute('id', 'deleteButton');
  deleteRow.textContent = 'Delete';
  deleteRow.addEventListener('click', deleteExpenseRow);
  const tableData = document.getElementById("table-body");
  let newRow = `
    <tr>
      <td>${type}</td>
      <td>${`$ ${paid}`}</td>
      <td>${item}</td>
      <td>${date}</td>
    </tr>
`

  if (type === 'Select Payment' || date === '' || paid === '' || item === '') {
    alert('Please enter an expense');
  } else {
    tableData.innerHTML += newRow;
    tableData.appendChild(deleteRow);
    submitButton.addEventListener('click', resetForm());
  }
}

function resetForm() {
  form = document.getElementById('form-data');
  form.reset();
}

function deleteExpenseRow(e) {
  let deleteData = e.target.parentElement;
  deleteData.remove();
}