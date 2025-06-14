"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const userData = {
  id: "#001",
  name: "Eleanor",
  accountType: "Team Admin",
  subscriptionType: "premium Trial",
  expireDat: "11 oct 2024",
  purchaseDate: "12 june 2024",
};

const SubscriptionEarnings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      {/* Table */}
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className=" bg-ns-primary hover:bg-green-600">
              <TableHead className="text-white py-4 font-semibold text-center">
                Serial
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Name
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                <div className="flex items-center justify-center gap-1">
                  Account Type
                  <ChevronRight className="h-4 w-4 rotate-90" />
                </div>
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                <div className="flex items-center justify-center gap-1">
                  Subscription Type
                  <ChevronRight className="h-4 w-4 rotate-90" />
                </div>
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Expire date
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Purchase Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(15)
              .fill(userData)
              .map((user, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <TableCell className="font-medium text-center">
                    {user.id}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {user.name}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {user.accountType}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {user.subscriptionType}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {user.expireDat}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {user.purchaseDate}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {user.transActions}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center md:justify-end gap-2 mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {[1, 2, 3, 4].map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentPage(page)}
            className={`h-8 w-8 p-0 ${
              currentPage === page ? "bg-green-600 hover:bg-green-700" : ""
            }`}
          >
            {page}
          </Button>
        ))}

        <span className="text-gray-500 mx-2">...</span>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(30)}
          className="h-8 w-8 p-0"
        >
          30
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(Math.min(30, currentPage + 1))}
          disabled={currentPage === 30}
          className="h-8 w-8 p-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default SubscriptionEarnings;
