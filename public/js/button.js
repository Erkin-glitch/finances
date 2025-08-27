 const checkbox = document.getElementById('transactionType');
  const labelExpense = document.getElementById('label-expense');
  const labelIncome = document.getElementById('label-income');

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      labelIncome.classList.add('active');
      labelExpense.classList.remove('active');
    } else {
      labelExpense.classList.add('active');
      labelIncome.classList.remove('active');
    }
  });