import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Timothy Bernando',
      email: 'timbernando38@gmail.com',
      createdOn: '2/5/2025', // m/d/y
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 75225120.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 3, 2025',
        description: 'AirBnB Hawaii debit',
        status: 'Success',
        amount_usd: -4850.0
      },
      {
        dateTime: 'February 2, 2025',
        description: 'Debit from United airlines',
        status: 'Success',
        amount_usd: -1800.0
      },
      {
        dateTime: 'January 28, 2025',
        description: 'Withdrawal from R&B trading',
        status: 'Success',
        amount_usd: 850050.17
      },
      {
        dateTime: 'January 26, 2025',
        description: 'Withdrawal chk#229152',
        status: 'Success',
        amount_usd: -250120.0
      },
      {
        dateTime: 'December 29, 2024',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -1200.0
      },
      {
        dateTime: 'December 17, 2024',
        description: 'Teller Withdrawal',
        status: 'Success',
        amount_usd: -50000.0
      },
      {
        dateTime: 'December 15, 2024',
        description: 'Credit from fidelity investment',
        status: 'Success',
        amount_usd: 980000.0
      },
      {
        dateTime: 'December 13, 2024',
        description: 'Transfer to Joe Harden',
        status: 'Success',
        amount_usd: -320000.0
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Debit from Netgear',
        status: 'Success',
        amount_usd: -200000.0,
        account_no: '****4593'
      },
      {
        dateTime: 'March 22, 2024',
        description: 'Transfer to Infrastructure Development',
        status: 'Success',
        amount_usd: -400000.0,
        account_no: '****1682'
      },
      {
        dateTime: 'October 10, 2023',
        description: 'Credit from D&D Building',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****8293'
      },
      {
        dateTime: 'September 25, 2023',
        description: 'Debit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: -500000.0,
        account_no: '****4527'
      },
      {
        dateTime: 'August 15, 2023',
        description: 'Debit from Western Digital',
        status: 'Success',
        amount_usd: -300000.0,
        account_no: '****6471'
      },
      {
        dateTime: 'July 5, 2023',
        description: 'Credit from Asana',
        status: 'Success',
        amount_usd: 350000.0,
        account_no: '****3975'
      },
      {
        dateTime: 'June 10, 2023',
        description: 'Credit from Seagate Technology',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****2849'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'Isabella Gurdan',
      email: 'isabellagurdan881@gmail.com',
      createdOn: '2/18/2025', // m/d/y
      username: 'isabellagurdan881-expired',
      password: 'Love4456#-expired'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 473678.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '235456',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'October 23, 2024',
        description: 'Check no:3479.',
        status: 'Pending',
        amount_usd: 7500.0
      },
      {
        dateTime: 'October 17, 2024',
        description: 'Payment from David A, petosa',
        status: 'Success',
        amount_usd: 85000.0
      },
      {
        dateTime: 'September 13, 2024',
        description: 'SET Nopibs -Philadelphia',
        status: 'Success',
        amount_usd: -80.21
      },
      {
        dateTime: 'August 20, 2024',
        description: 'PA, Auto sales',
        status: 'Success',
        amount_usd: -1700.0
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Electric bill',
        status: 'Success',
        amount_usd: -287.85
      },
      {
        dateTime: 'March 22, 2024',
        description: 'Phone bill',
        status: 'Success',
        amount_usd: -75.4
      },
      {
        dateTime: 'December 10, 2023',
        description: 'Withdrawal from bitpay',
        status: 'Success',
        amount_usd: -6000.0
      },
      {
        dateTime: 'September 25, 2023',
        description: 'Withdrawal chk#',
        status: 'Success',
        amount_usd: -175.0
      },
      {
        dateTime: 'August 15, 2023',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -1200.0
      },
      {
        dateTime: 'July 5, 2023',
        description: 'Debit from Greenbean coffee pa.',
        status: 'Success',
        amount_usd: -12.1
      },
      {
        dateTime: 'June 10, 2023',
        description: 'Fashion District Philadelphia',
        status: 'Success',
        amount_usd: -2000.0,
        account_no: '****2849'
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      fullName: 'Wilma Riehle',
      email: 'w****@gmail.com',
      createdOn: '10/30/2025', // m/d/y
      username: 'RWilma01',
      password: 'Hopenotlost212'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 438980.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '2756',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'May 15, 2025',
        description: 'Transfer from Chase Bank - XXXXXX5378',
        status: 'Success',
        amount_usd: 75000
      },
      {
        dateTime: 'May 14, 2025',
        description: 'Transfer to Heritage Bank - XXXXXX3478',
        status: 'Success',
        amount_usd: -62000
      },
      {
        dateTime: 'May 13, 2025',
        description: 'Transfer from Jack Whitman - XXXXXX8145',
        status: 'Success',
        amount_usd: 62000
      },
      {
        dateTime: 'April 10, 2025',
        description: 'Transfer to Emily Carter - XXXXXX2371',
        status: 'Success',
        amount_usd: -28000
      },
      {
        dateTime: 'March 2, 2025',
        description: 'Transfer from Albion Freight Ltd. - XXXXXX9912',
        status: 'Success',
        amount_usd: 100000
      },
      {
        dateTime: 'February 14, 2025',
        description: 'VAT Fee - XXXXXX3379',
        status: 'Success',
        amount_usd: -35
      },
      {
        dateTime: 'January 10, 2025',
        description: 'Transfer to Marcus Bennett - XXXXXX6014',
        status: 'Success',
        amount_usd: -58000
      },
      {
        dateTime: 'December 18, 2024',
        description: 'Transfer from Nora Smith - XXXXXX7598',
        status: 'Success',
        amount_usd: 52000
      },
      {
        dateTime: 'November 1, 2024',
        description: 'Transfer from Beacon & Rowe Ltd. - XXXXXX6235',
        status: 'Success',
        amount_usd: 67000
      },
      {
        dateTime: 'September 20, 2024',
        description: "Transfer to Michael O'Connor - XXXXXX8942",
        status: 'Success',
        amount_usd: -34000
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Transfer from Owen Miller - XXXXXX4783',
        status: 'Success',
        amount_usd: 150000
      },
      {
        dateTime: 'June 23, 2024',
        description: 'Transfer to Sophie Davies - XXXXXX7265',
        status: 'Success',
        amount_usd: -69000
      },
      {
        dateTime: 'May 1, 2024',
        description: 'Transfer from Capshore Solutions - XXXXXX1570',
        status: 'Success',
        amount_usd: 59000
      },
      {
        dateTime: 'February 25, 2024',
        description: 'VAT Fee - XXXXXX6407',
        status: 'Success',
        amount_usd: -55
      },
      {
        dateTime: 'December 10, 2023',
        description: 'Transfer from Benjamin Hill - XXXXXX3904',
        status: 'Success',
        amount_usd: 200000
      },
      {
        dateTime: 'October 17, 2023',
        description: 'Transfer to Lily Turner - XXXXXX2796',
        status: 'Success',
        amount_usd: -47000
      },
      {
        dateTime: 'August 8, 2023',
        description: 'Transfer from Alderstone Corp. - XXXXXX8259',
        status: 'Success',
        amount_usd: 52000
      },
      {
        dateTime: 'June 15, 2023',
        description: 'Transfer from Daniel Walker - XXXXXX0621',
        status: 'Success',
        amount_usd: 88000
      },
      {
        dateTime: 'April 4, 2023',
        description: 'Transfer to Charlotte Morgan - XXXXXX5093',
        status: 'Success',
        amount_usd: -76000
      },
      {
        dateTime: 'January 11, 2023',
        description: 'Transfer from Lanchester Group - XXXXXX1940',
        status: 'Success',
        amount_usd: 64000
      },
      {
        dateTime: 'October 30, 2022',
        description: 'Transfer to Henry Clark - XXXXXX7228',
        status: 'Success',
        amount_usd: -53000
      },
      {
        dateTime: 'September 1, 2022',
        description: 'Transfer from Chloe Baker - XXXXXX8741',
        status: 'Success',
        amount_usd: 100000
      },
      {
        dateTime: 'July 20, 2022',
        description: 'Transfer from Halford Utilities - XXXXXX3156',
        status: 'Success',
        amount_usd: 76000
      },
      {
        dateTime: 'May 12, 2022',
        description: 'Transfer to Lewis Wood - XXXXXX1863',
        status: 'Success',
        amount_usd: -65000
      },
      {
        dateTime: 'February 18, 2022',
        description: 'Transfer from Ava Foster - XXXXXX9478',
        status: 'Success',
        amount_usd: 63000
      },
      {
        dateTime: 'December 2, 2021',
        description: 'Transfer from Norwick Systems - XXXXXX0537',
        status: 'Success',
        amount_usd: 58000
      },
      {
        dateTime: 'September 3, 2021',
        description: 'Transfer to Harry James - XXXXXX8640',
        status: 'Success',
        amount_usd: -75000
      },
      {
        dateTime: 'June 15, 2021',
        description: 'Transfer from Ellie Brooks - XXXXXX7905',
        status: 'Success',
        amount_usd: 54000
      },
      {
        dateTime: 'March 27, 2021',
        description: 'Transfer to Victoria Lane - XXXXXX6217',
        status: 'Success',
        amount_usd: -67000
      },
      {
        dateTime: 'November 9, 2020',
        description: 'Transfer from Linthorpe Supplies Ltd. - XXXXXX2636',
        status: 'Success',
        amount_usd: 49000
      },
      {
        dateTime: 'July 15, 2019',
        description: 'VAT Fee - XXXXXX3012',
        status: 'Success',
        amount_usd: -40
      },
      {
        dateTime: 'January 2, 2018',
        description: 'Transfer from Linthorpe Supplies Ltd. - XXXXXX1058',
        status: 'Success',
        amount_usd: 49000
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      fullName: 'Roy Seaton',
      email: 'r****@gmail.com',
      createdOn: '11/05/2025', // m/d/y
      username: 'RoyS01',
      password: 'Seaton212@'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 700000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '2756',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'October 21, 2025',
        description: 'Transfer from CVS pharmacy - XXXXXX8429',
        status: 'Success',
        amount_usd: 58.0
      },
      {
        dateTime: 'October 19, 2025',
        description: 'Transfer fee - XXXXXX2344',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'October 19, 2025',
        description: 'Transfer to Transfer to Anita - XXXXXX6542',
        status: 'Success',
        amount_usd: -16000.0
      },
      {
        dateTime: 'October 17, 2025',
        description: '1-800 flowers (returned payment) - XXXXXX1256',
        status: 'Success',
        amount_usd: 126.6
      },
      {
        dateTime: 'October 16, 2025',
        description: '1-800 flowers - XXXXXX3623',
        status: 'Success',
        amount_usd: 126.62
      },
      {
        dateTime: 'August 30, 2025',
        description: 'Transfer from Grace Mitchell - XXXXXX1029',
        status: 'Success',
        amount_usd: 15854.9
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Transfer fee - XXXXXX8654',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Transfer to Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: -25345.0
      },
      {
        dateTime: 'May 15, 2025',
        description: 'Transfer from Chase Bank - XXXXXX5378',
        status: 'Success',
        amount_usd: 26377.5
      },
      {
        dateTime: 'May 14, 2025',
        description: 'Transfer to Heritage Bank - XXXXXX3478',
        status: 'Success',
        amount_usd: -62000
      },
      {
        dateTime: 'May 13, 2025',
        description: 'Transfer from Jack Whitman - XXXXXX8145',
        status: 'Success',
        amount_usd: 21805.4
      },
      {
        dateTime: 'April 10, 2025',
        description: 'Transfer to Emily Carter - XXXXXX2371',
        status: 'Success',
        amount_usd: -28000
      },
      {
        dateTime: 'March 2, 2025',
        description: 'Transfer from Albion Freight Ltd. - XXXXXX9912',
        status: 'Success',
        amount_usd: 35170.0
      },
      {
        dateTime: 'February 14, 2025',
        description: 'VAT Fee - XXXXXX3379',
        status: 'Success',
        amount_usd: -35
      },
      {
        dateTime: 'January 10, 2025',
        description: 'Transfer to Marcus Bennett - XXXXXX6014',
        status: 'Success',
        amount_usd: -58000
      },
      {
        dateTime: 'December 18, 2024',
        description: 'Transfer from Nora Smith - XXXXXX7598',
        status: 'Success',
        amount_usd: 18288.4
      },
      {
        dateTime: 'November 1, 2024',
        description: 'Transfer from Beacon & Rowe Ltd. - XXXXXX6235',
        status: 'Success',
        amount_usd: 23563.9
      },
      {
        dateTime: 'September 20, 2024',
        description: "Transfer to Michael O'Connor - XXXXXX8942",
        status: 'Success',
        amount_usd: -34000
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Transfer from Owen Miller - XXXXXX4783',
        status: 'Success',
        amount_usd: 52755.0
      },
      {
        dateTime: 'June 23, 2024',
        description: 'Transfer to Sophie Davies - XXXXXX7265',
        status: 'Success',
        amount_usd: -69000
      },
      {
        dateTime: 'May 1, 2024',
        description: 'Transfer from Capshore Solutions - XXXXXX1570',
        status: 'Success',
        amount_usd: 20756.0
      },
      {
        dateTime: 'February 25, 2024',
        description: 'VAT Fee - XXXXXX6407',
        status: 'Success',
        amount_usd: -55
      },
      {
        dateTime: 'December 10, 2023',
        description: 'Transfer from Benjamin Hill - XXXXXX3904',
        status: 'Success',
        amount_usd: 70340.0
      },
      {
        dateTime: 'October 17, 2023',
        description: 'Transfer to Lily Turner - XXXXXX2796',
        status: 'Success',
        amount_usd: -47000
      },
      {
        dateTime: 'August 8, 2023',
        description: 'Transfer from Alderstone Corp. - XXXXXX8259',
        status: 'Success',
        amount_usd: 18288.4
      },
      {
        dateTime: 'June 15, 2023',
        description: 'Transfer from Daniel Walker - XXXXXX0621',
        status: 'Success',
        amount_usd: 30949.6
      },
      {
        dateTime: 'April 4, 2023',
        description: 'Transfer to Charlotte Morgan - XXXXXX5093',
        status: 'Success',
        amount_usd: -76000
      },
      {
        dateTime: 'January 11, 2023',
        description: 'Transfer from Lanchester Group - XXXXXX1940',
        status: 'Success',
        amount_usd: 22508.8
      },
      {
        dateTime: 'October 30, 2022',
        description: 'Transfer to Henry Clark - XXXXXX7228',
        status: 'Success',
        amount_usd: -53000
      },
      {
        dateTime: 'September 1, 2022',
        description: 'Transfer from Chloe Baker - XXXXXX8741',
        status: 'Success',
        amount_usd: 35170.0
      },
      {
        dateTime: 'July 20, 2022',
        description: 'Transfer from Halford Utilities - XXXXXX3156',
        status: 'Success',
        amount_usd: 26729.2
      },
      {
        dateTime: 'May 12, 2022',
        description: 'Transfer to Lewis Wood - XXXXXX1863',
        status: 'Success',
        amount_usd: -65000
      },
      {
        dateTime: 'February 18, 2022',
        description: 'Transfer from Ava Foster - XXXXXX9478',
        status: 'Success',
        amount_usd: 22157.1
      },
      {
        dateTime: 'December 2, 2021',
        description: 'Transfer from Norwick Systems - XXXXXX0537',
        status: 'Success',
        amount_usd: 20398.6
      },
      {
        dateTime: 'September 3, 2021',
        description: 'Transfer to Harry James - XXXXXX8640',
        status: 'Success',
        amount_usd: -75000
      },
      {
        dateTime: 'June 15, 2021',
        description: 'Transfer from Ellie Brooks - XXXXXX7905',
        status: 'Success',
        amount_usd: 19996.0
      },
      {
        dateTime: 'March 27, 2021',
        description: 'Transfer to Victoria Lane - XXXXXX6217',
        status: 'Success',
        amount_usd: -67000
      },
      {
        dateTime: 'November 9, 2020',
        description: 'Transfer from Linthorpe Supplies Ltd. - XXXXXX2636',
        status: 'Success',
        amount_usd: 17233.0
      },
      {
        dateTime: 'July 15, 2019',
        description: 'VAT Fee - XXXXXX3012',
        status: 'Success',
        amount_usd: -40
      },
      {
        dateTime: 'January 2, 2018',
        description: 'Transfer from Linthorpe Supplies Ltd. - XXXXXX1058',
        status: 'Success',
        amount_usd: 17233.0
      }
    ]
  }
];
