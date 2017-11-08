import { OnInit } from '@angular/core';
import { ConfigurationService } from "./../shared/services/configuration.service";
import { ItemsService } from "./../shared/services";
export declare class ListComponent implements OnInit {
    private configurationService;
    private itemsService;
    private listName;
    private items;
    constructor(configurationService: ConfigurationService, itemsService: ItemsService);
    ngOnInit(): void;
}
