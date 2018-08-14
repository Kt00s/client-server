import {Component} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";


class Item{
    nameOfConf: string;
    done: boolean;
    explOfConf: string;

    constructor(nameOfConf: string, explane: string) {

        this.nameOfConf = nameOfConf;
        this.explOfConf = explane;
        this.done = false;
    }
}

@Component({
    selector: 'purchase-app',
    template: `<div class="page-header">
        <h1> Список лекций </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="name" placeholder = "Название" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="string" class="form-control" [(ngModel)]="expl" placeholder = "Описание" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(name, expl)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Название</th>
                <th>Описание</th>
                <th>Интересует</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let item of items">
                <td>{{item.nameOfConf}}</td>
                <td>{{item.explOfConf}}</td>
                <td><input type="checkbox" [(ngModel)]="checks" (click)="item.done=checks" ))/></td>
            </tr>
            </tbody>
        </table>
        <div class="col-md-offset-2 col-md-8">
            <button class="btn btn-default" (click)="sendItems()">Отправить</button>
        </div>
    </div>`

})
export class AppComponent {
    items: Item[] =
        [
            { nameOfConf: "лекция1", done: false, explOfConf: 'описание1' },
            { nameOfConf: "лекция2", done: false, explOfConf: 'описание2' },
            { nameOfConf: "лекция3", done: false, explOfConf: 'описание3' },
            { nameOfConf: "лекция4", done: false, explOfConf: 'описание4' }
        ];
    addItem(name: string, expl: string): void {

        if(name==null || name.trim()=="" || expl==null)
            return;
        this.items.push(new Item(name, expl));
    }
    sendItems():string{
        let str:string="";
        for(let entry of this.items){
                if(entry[2]==true) str=str+'1';
                else str=str+'0';
        }
        alert(str);
        return str;
    }
}