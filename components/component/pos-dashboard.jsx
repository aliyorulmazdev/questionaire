import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export function PosDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Table Info</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col p-4">
              <div className="flex justify-between mb-4">
                <span className="text-md font-medium">Table Name:</span>
                <span className="text-md font-medium">Table 1</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Latest Order Date:</span>
                <span className="text-sm font-medium">18:30 PM</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-sm">First Order Date:</span>
                <span className="text-sm font-medium">16:20 PM</span>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="default">Move Table</Button>
                <Button variant="default">Close Table</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Item 1</TableCell>
                  <TableCell>$20.00</TableCell>
                  <TableCell>
                    <Button className="w-full">
                      <SmileIcon className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Item 2</TableCell>
                  <TableCell>$15.00</TableCell>
                  <TableCell>
                    <Button className="w-full">
                      <SmileIcon className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Item 3</TableCell>
                  <TableCell>$30.00</TableCell>
                  <TableCell>
                    <Button className="w-full">
                      <SmileIcon className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Add Item</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <select className="border border-gray-300 rounded px-2 py-1 w-full">
                      <option>Select Item</option>
                      <option>Item 4</option>
                      <option>Item 5</option>
                      <option>Item 6</option>
                    </select>
                  </TableCell>
                  <TableCell>$10.00</TableCell>
                  <TableCell className="flex justify-end">
                    <Button>Customize</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button className="w-full mt-4">Add Item</Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Payment Info</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="font-medium text-sm">Subtotal:</span>
                <span className="font-medium text-sm">$75.00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-sm">Tax:</span>
                <span className="font-medium text-sm">$7.50</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-lg">Total:</span>
                <span className="font-medium text-lg">$82.50</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-lg">Remaining:</span>
                <span className="font-medium text-lg">$17.50</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <Button className="w-full mb-4 mr-3">
                <CreditCardIcon className="w-4 h-4" />
                Credit Card
              </Button>
              <Button className="w-full mb-4 mr-3">
                <CroissantIcon className="w-4 h-4" />
                Sodexo
              </Button>
              <Button className="w-full mb-4">
                <CurrencyIcon className="w-4 h-4" />
                Cash
              </Button>
            </div>
            <input
              className="border border-gray-300 rounded px-2 py-1 w-full mb-4"
              placeholder="Payment Amount"
            />
            <Button className="w-full mb-4">Add Transaction</Button>
            <div className="flex justify-around">
              <SplitIcon className="w-6 h-6" />
              <StoreIcon className="w-6 h-6" />
              <ShoppingCartIcon className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>12/25/2023</TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell>$20.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12/24/2023</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>$15.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function CroissantIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z" />
      <path d="m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83" />
      <path d="M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4" />
      <path d="m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2" />
      <path d="M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5" />
    </svg>
  );
}

function CurrencyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}

function SplitIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 3h5v5" />
      <path d="M8 3H3v5" />
      <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
      <path d="m15 9 6-6" />
    </svg>
  );
}

function StoreIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
