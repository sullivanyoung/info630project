import { AdminNavbar } from '../components/adminNavbar';
import { InventoryTable } from '../components/inventoryTable';
import { ReplenishInventory } from '../components/replenishInventoryModal';

export const Inventory = () => {
	return (
		<>
			<AdminNavbar />
			<div className="m-auto w-1/2">
				<div className="flex space-x-4 justify-between w-full">
					<h2 className="font-bold text-xl">Inventory</h2>
					<a
						className="bg-green-400 hover:bg-green-700 text-black text-lg ml-5 px-3 rounded-md font-medium ml-2"
						href="https://www.briandunning.com/sample-data/us-500.zip"
						download
					>
						Download Inventory Report
					</a>
					<ReplenishInventory />
				</div>
				<InventoryTable />
			</div>
		</>
	);
};
