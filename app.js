const submitButton = document.getElementById("submit-button");
submitButton.addEventListener('click', userData);

function userData(e) {
  e.preventDefault();
  const payment = document.getElementById("payment-type").value
  const amountPaid = document.getElementById("amount").value
  const itemPurchased = document.getElementById("expense").value
  const datePurchased = document.getElementById("date").value
  const tableData = document.getElementById("table-body");
  const deleteExpense = "<button class='deleteButton'>Delete</button>";
  //event listener breaks submit button
  deleteExpense.addEventListener('click', (e) => {
    const deleteData = e.target.parentElement;
    deleteData.remove();
  });
  //Submit form button works removing the above event listener.
  let newRow = `
    <tr>
      <td>${payment}</td>
      <td>${amountPaid}</td>
      <td>${itemPurchased}</td>
      <td>${datePurchased}</td>
      <td>${deleteExpense}</td>
    </tr>
`
  tableData.innerHTML += newRow;

}