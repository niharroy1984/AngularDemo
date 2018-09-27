type ServicerData struct {
    TransactionId string 
    LoanId string `json:"loan_account_number"`
	TotalPrincipleOutstanding float64 `json:"total_principal_outstanding"`
	TotalInterestOutstanding float64 `json:"total_interest_outstanding"`
    CurrentMonthPrincipalOutstanding float64 `json:"current_month_principal_outstanding"`
    CurrentInterestOutstanding float64 `json:"current_month_interest_outstanding"`
    PrincipalCollected float64 `json:"current_month_principal_collected"`
    InterestCollected float64 `json:"current_month_interest_collected"`
    OverduePricipalCollected float64 `json:"overdue_principal_collected"`
    OverdueInterestCollected float64 `json:"overdue_interest_collected"`
    PrepaymentCollected float64 `json:"prepayment_collected"`
 }

    String transactionid
	String loanAccountNo;
	double principalOutstanding
	double interestOutstanding
	double principalCollected;
	double overduePrincipalCollected;
	double interestCollected;
	double overDueInterestCollected;
	int overdueDays;
	double prepayment;
}