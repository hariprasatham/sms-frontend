import { Input } from "@/components/ui/input"
import { ColumnDef, Table } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { CirclePlus } from "lucide-react"


interface DataTableToolbarProps<TData> {
    table: Table<TData>
  }

    export function DataTableToolbar<TData>({
        table,
      }: DataTableToolbarProps<TData>) {

        const isFiltered = table.getState().columnFilters.length > 0
        return (
            <div className="inline-flex pb-5">
            <Input
            value={(table.getColumn('first_name')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('first_name')?.setFilterValue(event.target.value)
            }
            className="w-80 me-10 " placeholder="Filter Students ..." />
            <Button variant="outline" className="">
            <CirclePlus />
            <span className="ms-2">status</span>
            </Button>
            <Button variant="outline" className="me-10"> 
            <CirclePlus />
            <span className="ms-2">priority</span>
            </Button>
        </div>
        )
}