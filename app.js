const payment = document.getElementById("payment-type");
const amountPaid = document.getElementById("amount");
const itemPurchased = document.getElementById("expense");
const datePurchased = document.getElementById("date");
const deleteRow = document.createElement('button');
deleteRow.setAttribute('id', 'deleteButton');
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener('click', userData);

function userData(e) {
  e.preventDefault();
  const type = payment.value;
  const paid = amountPaid.value;
  const item = itemPurchased.value;
  const date = datePurchased.value;
  const tableData = document.getElementById("table-body");
  let newRow = `
    <tr>
      <td>${type}</td>
      <td>${paid}</td>
      <td>${item}</td>
      <td>${date}</td>
      <td>${deleteRow}</td>
    </tr>
`
  tableData.innerHTML += newRow;

}