import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class headerComponent{

    constructor(private dataStorageService: DataStorageService){}

    onSaveData(){

        this.dataStorageService.storeReipes();

    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }

    
    

}