import { IItemsService } from "./../services/interfaces/items.service";
import { ItemModel } from "./../models";
export declare class ItemsService implements IItemsService {
    getItems(listName: string): Promise<ItemModel[]>;
}
