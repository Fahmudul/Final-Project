"use client";
import { toast } from "sonner";
import { handleDelete } from "@/Components/handleDelete";
import React, { useTransition } from "react";
import { AiOutlineDelete } from "react-icons/ai";
const DeleteBtn = ({ id }: { id: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();
  return (
    <div>
      <button
        className="active:scale-95 transition-all duration-300 text-red-400"
        onClick={() => {
          startTransition(() => {
            handleDelete(id);
            toast.success("Trainer Deleted");
          });
        }}
      >
        <AiOutlineDelete className="text-2xl" />
      </button>
    </div>
  );
};

export default DeleteBtn;
