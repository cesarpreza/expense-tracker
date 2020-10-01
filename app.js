const submitButton = document.getElementById("submit-button");
submitButton.addEventListener('click', userData);

function userData() {
    const payment = document.getElementById("payment-type").value
    const amountPaid = document.getElementById("amount").value
    const itemPurchased = document.getElementById("expense").value
    const datePurchased = document.getElementById("date").value
    const tableData = document.getElementById("table-body");
    let newRow = `
    <tr>
      <td>${payment}</td>
      <td>${amountPaid}</td>
      <td>${itemPurchased}</td>
      <td>${datePurchased}</td>
    </tr>
`
    tableData.innerHTML = newRow;

}