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
import { Badge } from "@/components/ui/badge";
import { X, Check, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { UserDetailsModal } from "./details-modal";

const userData = {
  id: "#001",
  name: "Eleanor Pena",
  teamName: "Red Devils",
  matches: 10,
  plan: "Free",
  status: "Active",
};
const TeamManagerTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {/* Table */}
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className=" bg-ns-primary hover:bg-green-600">
              <TableHead className="text-white py-4 font-semibold text-center">
                User ID
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Manager Name
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Team Name
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Matches Organized
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Subscription Plan
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                <div className="flex items-center gap-1">
                  Status
                  <ChevronRight className="h-4 w-4 rotate-90" />
                </div>
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Action
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
                    {user?.teamName}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {user.matches.toString().padStart(2, "0")}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {user.plan}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === "Active" ? "default" : "destructive"
                      }
                      className={
                        user.status === "Active"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      {user.status === "Suspended" ? (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                            onClick={() => setSelectedUser(user)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <UserDetailsModal
                            user={selectedUser}
                            onClose={() => setIsModalOpen(false)}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
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

export default TeamManagerTab;
