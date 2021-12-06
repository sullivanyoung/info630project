import { AdminNavbar } from '../components/adminNavbar';
import { InventoryTable } from '../components/inventoryTable';
import { Link } from 'react-router-dom';

export const Inventory = () => {
	return (
		<>
			<AdminNavbar />
			<div className="auto">
				<div className="flex space-x-4 justify-between w-7/12">
					<h2 className="font-bold text-xl">Inventory</h2>
					<Link to="/inventory">
						<h2 className="hover:text-blue-500">Replenish Inventory</h2>
					</Link>
				</div>
				<InventoryTable />
			</div>
		</>
	);
};
