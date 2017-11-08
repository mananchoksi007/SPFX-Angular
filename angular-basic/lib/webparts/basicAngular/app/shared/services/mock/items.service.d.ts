import { IItemsService } from "./../../services/interfaces/items.service";
import { ItemModel } from "./../../models";
export declare class MockItemsService implements IItemsService {
    private readonly MOCK_DELAY;
    constructor();
    getItems(listName: string): Promise<ItemModel[]>;
}
