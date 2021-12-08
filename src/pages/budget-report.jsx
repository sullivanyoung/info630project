import { AdminNavbar } from '../components/adminNavbar';
import { BudgetReportTable } from '../components/budgetReportTable';

export const BudgetReport = () => {
	return (
		<>
			<AdminNavbar />
			<div className="w-1/2 m-auto">
				<div className="flex space-x-4 justify-between w-full py-4">
					<h1 className="font-bold text-2xl py-1">Budget Report</h1>
					<a
						className="bg-green-400 hover:bg-green-700 text-black text-lg ml-5 px-3 rounded-md font-medium ml-2"
						href="https://www.briandunning.com/sample-data/us-500.zip"
						download
					>
						Download Budget Report
					</a>
				</div>
				<BudgetReportTable />
			</div>
		</>
	);
};
