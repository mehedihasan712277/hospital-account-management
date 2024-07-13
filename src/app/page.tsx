import { Add, ArrowDownward, ArrowUpward, Remove } from "@mui/icons-material"
import { Stack } from "@mui/material"

const page = () => {
  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"} sx={{ marginY: "26px" }}>

        <div className="w-[230px] py-6 flex items-center justify-center gap-3 rounded-lg bg-[#FCFCFC] shadow-md">
          <p className="flex justify-center items-center h-12 w-12 rounded-md text-white bg-[#697AD2]"><ArrowUpward></ArrowUpward></p>
          <p className="text-[#1C2554] font-bold">Export Report</p>
        </div>
        <div className="w-[230px] py-6 flex items-center justify-center gap-3 rounded-lg bg-[#FCFCFC] shadow-md">
          <p className="flex justify-center items-center bg-[#9F76DD]  text-white h-12 w-12 rounded-md"><ArrowDownward></ArrowDownward></p>
          <p className="text-[#1C2554] font-bold">Import Report</p>
        </div>
        <div className="w-[230px] py-6 flex items-center justify-center gap-3 rounded-lg bg-[#FCFCFC] shadow-md">
          <p className="flex justify-center items-center h-12 w-12 rounded-md text-white bg-[#61B566]"><Add></Add></p>
          <p className="text-[#1C2554] font-bold">Cash In</p>
        </div>
        <div className="w-[230px] py-6 flex items-center justify-center gap-3 rounded-lg bg-[#FCFCFC] shadow-md">
          <p className="flex justify-center items-center h-12 w-12 rounded-md text-white bg-[#E95D5D]"><Remove></Remove></p>
          <p className="text-[#1C2554] font-bold">Cash Out</p>
        </div>
      </Stack>
    </div>
  )
}

export default page