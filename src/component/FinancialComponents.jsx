import React from 'react';
import HomepageButton from './HomepageButton';

// FilterTransactions Component
const FilterTransactions = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' , width: 'max-content'  , justifySelf: 'center' ,margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Filter Transactions</h2>
      <p style={{ color: '#555' }}>Here you can filter your transactions by date, amount, or type.</p>
      {/* Dummy data */}
      <ul>
        <li>Transaction 1: $100 - Grocery</li>
        <li>Transaction 2: $50 - Utilities</li>
      </ul>
      <HomepageButton/>
    </div>
  );
};

// CheckAccountBalance Component
const CheckAccountBalance = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' ,width: 'max-content'  , justifySelf: 'center',margin:'60px' }}>
      <h2 style={{ color: '#333' }}>Check Account Balance</h2>
      <p style={{ color: '#555' }}>Your current balance is: <strong>$1,250.00</strong></p>
      <HomepageButton/>
    </div>
  );
};

// TransferMoneyBetweenAccounts Component
const TransferMoneyBetweenAccounts = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' ,width: 'max-content'  , justifySelf: 'center',margin:'60px' }}>
      <h2 style={{ color: '#333' }}>Transfer Money</h2>
      <p style={{ color: '#555' }}>Transfer money between your accounts.</p>
      {/* Dummy data */}
      <form>
        <label style={{ display: 'block', margin: '10px 0' }}>Amount:</label>
        <input type="text" placeholder="$0.00" style={{ padding: '10px', width: '100%' }} />
        <button type="submit" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Transfer</button>
      </form>
      <HomepageButton/>
    </div>
  );
};

// IssueNewCard Component
const IssueNewCard = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'  ,width: 'max-content'  , justifySelf: 'center',margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Issue New Card</h2>
      <p style={{ color: '#555' }}>Request a new debit/credit card.</p>
      <button style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}>Request New Card</button>
      <HomepageButton/></div>
  );
};

// SendMoneyToRecipients Component
const SendMoneyToRecipients = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'  ,width: 'max-content'  , justifySelf: 'center',margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Send Money</h2>
      <p style={{ color: '#555' }}>Send money to your friends or family.</p>
      {/* Dummy data */}
      <form>
        <label style={{ display: 'block', margin: '10px 0' }}>Recipient:</label>
        <input type="text" placeholder="Recipient Name" style={{ padding: '10px', width: '100%' }} />
        <label style={{ display: 'block', margin: '10px 0' }}>Amount:</label>
        <input type="text" placeholder="$0.00" style={{ padding: '10px', width: '100%' }} />
        <button type="submit" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Send Money</button>
      </form>
      <HomepageButton/></div>
  );
};

// ViewTransactionHistory Component
const ViewTransactionHistory = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'  ,width: 'max-content'  , justifySelf: 'center',margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Transaction History</h2>
      <p style={{ color: '#555' }}>Here is your transaction history:</p>
      {/* Dummy data */}
      <ul>
        <li>Transaction 1: $100 - Grocery</li>
        <li>Transaction 2: $50 - Utilities</li>
        <li>Transaction 3: $200 - Rent</li>
 <li>Transaction 4: $30 - Entertainment</li>
      </ul>
      <HomepageButton/> </div>
  );
};

// ApplyForLoan Component
const ApplyForLoan = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'  ,width: 'max-content'  , justifySelf: 'center',margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Apply for a Loan</h2>
      <p style={{ color: '#555' }}>Fill out the form to apply for a loan.</p>
      <form>
        <label style={{ display: 'block', margin: '10px 0' }}>Loan Amount:</label>
        <input type="text" placeholder="$0.00" style={{ padding: '10px', width: '100%' }} />
        <button type="submit" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Apply</button>
      </form>
      <HomepageButton/> </div>
  );
};

// OrderNewDebitCard Component
const OrderNewDebitCard = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' ,width: 'max-content'  , justifySelf: 'center',margin:'60px' }}>
      <h2 style={{ color: '#333' }}>Order New Debit Card</h2>
      <p style={{ color: '#555' }}>Order a new debit card.</p>
      <button style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}>Order Card</button>
      <HomepageButton/></div>
  );
};

// ReportLostStolenCard Component
const ReportLostStolenCard = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' ,width: 'max-content'  , justifySelf: 'center' ,margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Report Lost or Stolen Card</h2>
      <p style={{ color: '#555' }}>If your card is lost or stolen, report it here.</p>
      <button style={{ padding: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px' }}>Report</button>
      <HomepageButton/></div>
  );
};

// ContactCustomerSupport Component
const ContactCustomerSupport = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'  ,width: 'max-content'  , justifySelf: 'center',margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Contact Customer Support</h2>
      <p style={{ color: '#555' }}>Get in touch with our support team.</p>
      <button style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Contact Support</button>
      <HomepageButton/> </div>
  );
};

// SetBudgetForThisMonth Component
const SetBudgetForThisMonth = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'  ,width: 'max-content'  , justifySelf: 'center',margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Set Budget for This Month</h2>
      <p style={{ color: '#555' }}>Define your budget for the month.</p>
      <form>
        <label style={{ display: 'block', margin: '10px 0' }}>Budget Amount:</label>
        <input type="text" placeholder="$0.00" style={{ padding: '10px', width: '100%' }} />
        <button type="submit" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Set Budget</button>
      </form>
      <HomepageButton/></div>
  );
};

// TrackSpending Component
const TrackSpending = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'  ,width: 'max-content'  , justifySelf: 'center',margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Track Spending</h2>
      <p style={{ color: '#555' }}>Monitor your spending habits.</p>
      {/* Dummy data */}
      <ul>
        <li>Grocery: $100</li>
        <li>Utilities: $50</li>
        <li>Rent: $200</li>
      </ul>
      <HomepageButton/></div>
  );
};

// AnalyzeSpending ```jsx
// AnalyzeSpendingHabits Component
const AnalyzeSpendingHabits = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' ,width: 'max-content'  , justifySelf: 'center',margin:'60px' }}>
      <h2 style={{ color: '#333' }}>Analyze Spending Habits</h2>
      <p style={{ color: '#555' }}>Review your spending habits over the past month.</p>
      {/* Dummy data */}
      <ul>
        <li>Food: $300</li>
        <li>Entertainment: $150</li>
        <li>Transport: $80</li>
      </ul>
      <HomepageButton/></div>
  );
};

// FindInvestmentOptions Component
const FindInvestmentOptions = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' ,width: 'max-content'  , justifySelf: 'center' ,margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Find Investment Options</h2>
      <p style={{ color: '#555' }}>Explore various investment opportunities.</p>
      <button style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Explore Investments</button>
      <HomepageButton/> </div>
  );
};

// CalculateInterestRates Component
const CalculateInterestRates = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'  ,width: 'max-content'  , justifySelf: 'center',margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Calculate Interest Rates</h2>
      <p style={{ color: '#555' }}>Calculate potential interest on your savings.</p>
      <form>
        <label style={{ display: 'block', margin: '10px 0' }}>Principal Amount:</label>
        <input type="text" placeholder="$0.00" style={{ padding: '10px', width: '100%' }} />
        <label style={{ display: 'block', margin: '10px 0' }}>Interest Rate (%):</label>
        <input type="text" placeholder="0%" style={{ padding: '10px', width: '100%' }} />
        <button type="submit" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Calculate</button>
      </form>
      <HomepageButton/></div>
  );
};

// SetSavingsGoals Component
const SetSavingsGoals = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'  ,width: 'max-content'  , justifySelf: 'center',margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Set Savings Goals</h2>
      <p style={{ color: '#555' }}>Define your savings goals for the year.</p>
      <form>
        <label style={{ display: 'block', margin: '10px 0' }}>Goal Amount:</label>
        <input type="text" placeholder="$0.00" style={{ padding: '10px', width: '100%' }} />
        <button type="submit" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Set Goal</button>
      </form>
      <HomepageButton/> </div>
  );
};

// CreateFinancialPlan Component
const CreateFinancialPlan = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'  ,width: 'max-content'  , justifySelf: 'center',margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Create Financial Plan</h2>
      <p style={{ color: '#555' }}>Outline your financial plan for the future.</p>
      <button style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Create Plan</button>
      <HomepageButton/> </div>
  );
};

// FinishTheReport Component
const FinishTheReport = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'  ,width: 'max-content'  , justifySelf: 'center',margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Finish the Report</h2>
      <p style={{ color: '#555' }}>Complete your financial report.</p>
      <button style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Finish Report </button>
      <HomepageButton/></div>
  );
};

// ScheduleACallWithFinancialAdvisor Component
const ScheduleACallWithFinancialAdvisor = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'  ,width: 'max-content'  , justifySelf: 'center',margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Schedule a Call with Financial Advisor</h2>
      <p style={{ color: '#555' }}>Book a consultation with our financial advisor.</p>
      <button style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Schedule Call</button>
      <HomepageButton/></div>
  );
};

// ScheduleACallWithLoanOfficer Component
const ScheduleACallWithLoanOfficer = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' ,width: 'max-content'  , justifySelf: 'center' ,margin:'60px'}}>
      <h2 style={{ color: '#333' }}>Schedule a Call with Loan Officer</h2>
      <p style={{ color: '#555' }}>Arrange a call with our loan officer for assistance.</p>
      <button style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Schedule Call</button>
      <HomepageButton/></div>
  );
};

export {
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
  ScheduleACallWithLoanOfficer
};