import { useState } from "react";

// Import shadcn/ui Dialog components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export function EditOpeningBalance({ openModal, setOpenModal }) {

  return (
    <>
      {/* Shadcn Modal/Dialog */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Opening Balance</DialogTitle>
          </DialogHeader>
          {/* Modal content goes here */}
          <div className="py-4">
            <input
              type="number"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter new opening balance"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Close
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}