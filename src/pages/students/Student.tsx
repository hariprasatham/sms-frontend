
import { Button } from "@/components/ui/button"
import { UserPlus , CirclePlus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DataTable } from "@/components/custom/data-table"
import { Student, columns } from "./Columns"



export const students: Student[] = [
  {
    first_name: "Aarav",
    last_name: "Singh",
    dob: "2008-05-15",
    gender: "Male",
    address: "123 Main St, Delhi",
    email: "aarav.singh@example.com",
    phone_number: "+91-9876543210",
    admission_date: "2023-01-10",
    class_id: "66b2cca5387ecc59f8b85379" // 10TH-GRADE
    ,
    id: "1"
  },
  {
    first_name: "Isha",
    last_name: "Sharma",
    dob: "2009-04-22",
    gender: "Female",
    address: "456 Elm St, Mumbai",
    email: "isha.sharma@example.com",
    phone_number: "+91-8765432109",
    admission_date: "2023-02-15",
    class_id: "66b2ccb7387ecc59f8b8537b" // 9TH-GRADE
    ,
    id: "2"
  },
  {
    first_name: "Rohan",
    last_name: "Verma",
    dob: "2010-11-05",
    gender: "Male",
    address: "789 Oak St, Bangalore",
    email: "rohan.verma@example.com",
    phone_number: "+91-7654321098",
    admission_date: "2023-03-12",
    class_id: "66b2ccc1387ecc59f8b8537d" // 8TH-GRADE
    ,
    id: "3"
  },
  {
    first_name: "Ananya",
    last_name: "Patel",
    dob: "2011-03-17",
    gender: "Female",
    address: "101 Pine St, Hyderabad",
    email: "ananya.patel@example.com",
    phone_number: "+91-6543210987",
    admission_date: "2023-04-20",
    class_id: "66b2ccc9387ecc59f8b8537f" // 7TH-GRADE
    ,
    id: "4"
  },
  {
    first_name: "Karan",
    last_name: "Jain",
    dob: "2012-08-25",
    gender: "Male",
    address: "202 Maple St, Chennai",
    email: "karan.jain@example.com",
    phone_number: "+91-5432109876",
    admission_date: "2023-05-30",
    class_id: "66b2ccd3387ecc59f8b85381" // 6TH-GRADE
    ,
    id: "5"
  },
  {
    first_name: "Pooja",
    last_name: "Reddy",
    dob: "2013-07-11",
    gender: "Female",
    address: "303 Cedar St, Pune",
    email: "pooja.reddy@example.com",
    phone_number: "+91-4321098765",
    admission_date: "2023-06-15",
    class_id: "66b2ccdb387ecc59f8b85383" // 5TH-GRADE
    ,
    id: "6"
  },
  {
    first_name: "Rahul",
    last_name: "Desai",
    dob: "2014-12-20",
    gender: "Male",
    address: "404 Birch St, Kolkata",
    email: "rahul.desai@example.com",
    phone_number: "+91-3210987654",
    admission_date: "2023-07-22",
    class_id: "66b2cce5387ecc59f8b85385" // 4TH-GRADE
    ,
    id: "7"
  },
  {
    first_name: "Sneha",
    last_name: "Nair",
    dob: "2015-01-30",
    gender: "Female",
    address: "505 Spruce St, Ahmedabad",
    email: "sneha.nair@example.com",
    phone_number: "+91-2109876543",
    admission_date: "2023-08-10",
    class_id: "66b2ccf5387ecc59f8b85387" // 3RD-GRADE
    ,
    id: "8"
  },
  {
    first_name: "Aditya",
    last_name: "Kapoor",
    dob: "2016-06-07",
    gender: "Male",
    address: "606 Palm St, Jaipur",
    email: "aditya.kapoor@example.com",
    phone_number: "+91-1098765432",
    admission_date: "2023-09-18",
    class_id: "66b2ccff387ecc59f8b85389" // 2ND-GRADE
    ,
    id: "9"
  },
  {
    first_name: "Meera",
    last_name: "Gupta",
    dob: "2017-03-22",
    gender: "Female",
    address: "707 Fir St, Chandigarh",
    email: "meera.gupta@example.com",
    phone_number: "+91-9876543211",
    admission_date: "2023-10-05",
    class_id: "66b2cd0c387ecc59f8b8538b" // 1ST-GRADE
    ,
    id: "10"
  }
]




const student = () => {
  return (
    <div className="pr-8">
      <div className="pt-20 pb-5 flex items-center justify-between">
      <h1 className="text-3xl " >STUDENTS . . .</h1>
      <Button>
          <UserPlus />
          Add-student
      </Button>
      </div>
      <div className="inline-flex pb-5">
        <Input className="w-80 me-10 " placeholder="Filter Students ..." />
        <Button variant="outline" className="">
          <CirclePlus />
          <span className="ms-2">status</span>
        </Button>
        <Button variant="outline" className="me-10"> 
          <CirclePlus />
          <span className="ms-2">priority</span>
        </Button>
      </div>
      <div>
        <DataTable columns={columns} data={students}  />
      </div>
    </div>
  )
}

export default student