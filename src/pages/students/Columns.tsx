// import { ColumnDef } from "@tanstack/react-table"

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal,ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Student = {
  id:string;
  first_name:string;
  last_name:string;
  dob:string;
  gender:string;
  address:string;
  email:string;
  phone_number:string;
  admission_date:string;
  class_id:string
};

export const columns: ColumnDef<Student>[] = [

  {
    accessorKey: "id",
    header: "id",
    cell: ({ row }) => {
      return (
        <div className="w-10" >{row.getValue("id")}</div>
      )
    }
  },
  {
    accessorKey: "first_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row})=>{
      return(
        <div className="w-20">{row.getValue("first_name")}</div>
      )
    }
  },
  {
    accessorKey: "last_name",
    header: () => <div className="text-left">Last Name</div>,
    cell: ({ row }) => {
      return (
        <div className="w-32">{row.getValue("last_name")}</div>
      )

    },
  },
  {
    accessorKey: "email",
    header: "email",
    cell: ({ row }) => {
      return (
        <div className="w-32" >{row.getValue("email")}</div>
      )
    }
  },
  {
    accessorKey: "phone_number",
    header: "phone_number",
    cell: ({ row }) => {
      return (
        <div className="w-32" >{row.getValue("phone_number")}</div>
      )
    }
  },
  {
    accessorKey: "admission_date",
    header: "admission_date",
    cell: ({ row }) => {
      return (
        <div className="w-32" >{row.getValue("admission_date")}</div>
      )
    }
  },
  {
    accessorKey: "class_id",
    header: "class_id",
    cell: ({ row }) => {
      return (
        <div className="w-32" >{row.getValue("class_id")}</div>
      )
    }
  },
  {
    accessorKey: "dob",
    header: "dob",
    cell: ({ row }) => {
      return (
        <div className="w-32" >{row.getValue("dob")}</div>
      )
    }
  },
  {
    accessorKey: "gender",
    header: "gender",
    cell: ({ row }) => {
      return (
        <div className="w-32" >{row.getValue("gender")}</div>
      )
    }
  },
  {
    accessorKey: "address",
    header: "address",
    cell: ({ row }) => {
      return (
        <div className="w-32" >{row.getValue("address")}</div>
      )
    }
  },
  {
    id: "actions",
    header: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];
