import { AdminNavbar } from '../components/adminNavbar';
import { BudgetReportTable } from '../components/budgetReportTable';
import { EmployeeTable } from '../components/employeeTable';
import { InventoryTable } from '../components/inventoryTable';
import { Link } from 'react-router-dom';
import { SupplierTable } from '../components/supplierTable';

export const Admin = () => {
	return (
		<>
			<AdminNavbar />
			<div className="m-auto w-1/2">
				<h1 className="font-bold text-5xl ml-20">Dashboard</h1>
				<div className="ml-24 mt-5">
					<div className="my-4">
						<div className="flex space-x-4 justify-between w-full">
							<h2 className="font-bold text-xl">Inventory</h2>
							<Link to="/inventory">
								<h2 className="hover:text-blue-500">More Info...</h2>
							</Link>
						</div>
						<InventoryTable />
					</div>
					<div className="my-4">
						<div className="flex space-x-4 justify-between w-full">
							<h2 className="font-bold text-xl">Employees</h2>
							<Link to="/employees">
								<h2 className="hover:text-blue-500">More Info...</h2>
							</Link>
						</div>
						<EmployeeTable />
					</div>
					<div className="my-4">
						<h2 className="font-bold text-xl">Budget Report</h2>
						<BudgetReportTable />
					</div>
					<div className="my-4">
						<h2 className="font-bold text-xl">Suppliers</h2>
						<SupplierTable />
					</div>
				</div>
			</div>
		</>
	);
};
