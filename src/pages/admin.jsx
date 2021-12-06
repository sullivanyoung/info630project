import { AdminNavbar } from '../components/adminNavbar';
import { BudgetReport } from '../components/budgetReport';
import { EmployeeTable } from '../components/employeeTable';
import { InventoryTable } from '../components/inventoryTable';
import { Link } from 'react-router-dom';

export const Admin = () => {
	return (
		<>
			<AdminNavbar />
			<h1 className="font-bold text-5xl ml-20">Dashboard</h1>
			<div className="ml-24 mt-5">
				<div className="my-4">
					<div className="flex space-x-4 justify-between w-7/12">
						<h2 className="font-bold text-xl">Inventory</h2>
						<Link to="/inventory">
							<h2 className="hover:text-blue-500">More Info...</h2>
						</Link>
					</div>
					<InventoryTable />
				</div>
				<div className="my-4">
					<h2 className="font-bold text-xl">Employees</h2>
					<h2 className="">More Info...</h2>
					<EmployeeTable />
				</div>
				<div className="my-4">
					<h2 className="font-bold text-xl">Budget Report</h2>
					<BudgetReport />
				</div>
			</div>
		</>
	);
};
