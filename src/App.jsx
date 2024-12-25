import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ActionSuggestionCard from './component/subcomponents/ActionSuggestionCard';
import {
  FilterTransactions,
  CheckAccountBalance,
  TransferMoneyBetweenAccounts,
  IssueNewCard,
  SendMoneyToRecipients,
  ViewTransactionHistory,
  ApplyForLoan,
  OrderNewDebitCard,
  ReportLostStolenCard,
  ContactCustomerSupport,
  SetBudgetForThisMonth,
  TrackSpending,
  AnalyzeSpendingHabits,
  FindInvestmentOptions,
  CalculateInterestRates,
  SetSavingsGoals,
  CreateFinancialPlan,
  FinishTheReport,
  ScheduleACallWithFinancialAdvisor,
  ScheduleACallWithLoanOfficer,
} from './component/FinancialComponents.jsx';
import AppBar from './component/AppBar.jsx';
import './App.css'
import Card from './component/subcomponents/Card.jsx';





function App() {
  return (
    < div  className="container">
      <AppBar/>
    <div >
    <div>
      <Card/>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ActionSuggestionCard />} />
        <Route path="/filter-your-transactions" element={<FilterTransactions />} />
        <Route path="/check-account-balance" element={<CheckAccountBalance />} />
        <Route
          path="/transfer-money-between-accounts"
          element={<TransferMoneyBetweenAccounts />} />
        <Route path="/issue-new-card" element={<IssueNewCard />} />
        <Route path="/send-money-to-recipients" element={<SendMoneyToRecipients />} />
        <Route path="/view-transaction-history" element={<ViewTransactionHistory />} />
        <Route path="/apply-for-a-loan" element={<ApplyForLoan />} />
        <Route path="/order-a-new-debit-card" element={<OrderNewDebitCard />} />
        <Route path="/report-a-lost-stolen-card" element={<ReportLostStolenCard />} />
        <Route path="/contact-customer-support" element={<ContactCustomerSupport />} />
        <Route path="/set-budget-for-this-month" element={<SetBudgetForThisMonth />} />
        <Route path="/track-spending" element={<TrackSpending />} />
        <Route path="/analyze-spending-habits" element={<AnalyzeSpendingHabits />} />
        <Route path="/find-investment-options" element={<FindInvestmentOptions />} />
        <Route path="/calculate-interest-rates" element={<CalculateInterestRates />} />
        <Route path="/set-savings-goals" element={<SetSavingsGoals />} />
        <Route path="/create-a-financial-plan" element={<CreateFinancialPlan />} />
        <Route path="/finish-the-report" element={<FinishTheReport />} />
        <Route
          path="/schedule-a-call-with-financial-advisor"
          element={<ScheduleACallWithFinancialAdvisor />} />
        <Route
          path="/schedule-a-call-with-loan-officer"
          element={<ScheduleACallWithLoanOfficer />} />
      </Routes>
    </BrowserRouter>

    </div>
   </div>
  );
}

export default App;