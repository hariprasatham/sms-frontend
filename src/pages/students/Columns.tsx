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
import { DataTableColumnHeader } from "@/components/custom/data-table-column-header";
import { DataTableRowActions } from "@/components/custom/data-table-row-actions";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type ClassInfo = {
  class_name: string;
};

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
  class_id: ClassInfo;
};

export const columns: ColumnDef<Student>[] = [

  // {
  //   accessorKey: "id",
  //   header: "id",
  //   cell: ({ row }) => {
  //     return (
  //       <div className="w-10" >{row.getValue("id")}</div>
  //     )
  //   }
  // },
  {
    accessorKey: "first_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='First Name' />
    ),
    cell: ({row})=> <div className="w-20">{row.getValue("first_name")}</div>,
    enableSorting: false,
    enableHiding:  false,
  },
  {
    accessorKey: "last_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Last Name' />
    ),
    cell: ({ row }) => <div className="w-32">{row.getValue("last_name")}</div>,
    enableHiding:false,
    enableSorting: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Email' />
    ),
    cell: ({ row }) => <div className="w-52" >{row.getValue("email")}</div>,
    enableSorting:false,
    enableHiding:false,
  },
  {
    accessorKey: "phone_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Phone Number' />
    ),    
    cell: ({ row }) => <div className="w-32" >{row.getValue("phone_number")}</div>,
    enableSorting:false,
    enableHiding:false,
  },
  {
    accessorKey: "admission_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Admission Date' />
    ),    
    cell: ({ row }) => <div className="w-32" >{row.getValue("admission_date")}</div>,
    enableSorting:false,
    enableHiding:false,
  },
  {
    accessorKey: "class_id",
    // header: "class_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Class Name' />
    ), 
    cell: ({ row }) => <div className="w-32" >{row.original.class_id?.class_name}</div>
  },
  {
    accessorKey: "dob",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='DoB' />
    ),    
    cell: ({ row }) => <div className="w-32" >{row.getValue("dob")}</div>,
    enableSorting:false,
    enableHiding:false,
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Gender' />
    ),    
    cell: ({ row }) => <div className="w-32" >{row.getValue("gender")}</div>,
    enableSorting:false,
    enableHiding:false,
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Address' />
    ),    
    cell: ({ row }) => <div className="w-32" >{row.getValue("address")}</div>,
    enableSorting:false,
    enableHiding:false,
  },
  {
    id: "actions",
    header: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];
