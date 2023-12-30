export type Invoice = {
  id: number;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

const invoices: Invoice[] = [
  {
    id: 1,
    customer_id: '0',
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    id: 2,
    customer_id: '1',
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
];