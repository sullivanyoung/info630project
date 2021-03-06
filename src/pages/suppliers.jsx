import { AdminNavbar } from '../components/adminNavbar';
import { SupplierTable } from '../components/supplierTable';

export const Supplier = () => {
	return (
		<>
			<AdminNavbar />
			<div className="m-auto w-1/2">
				<div className="flex justify-between w-full">
					<h1 className="font-bold text-2xl">Suppliers</h1>

					<a
						className="bg-green-400 hover:bg-green-700 text-black text-lg ml-5 px-3 py-1 rounded-md font-medium ml-2"
						href="https://www.briandunning.com/sample-data/us-500.zip"
						download
					>
						Download Suppliers Report
					</a>
				</div>
				<SupplierTable />
			</div>
		</>
	);
};
