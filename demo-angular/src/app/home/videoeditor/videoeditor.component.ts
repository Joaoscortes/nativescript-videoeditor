import { Component, OnInit } from '@angular/core';
import { Videoeditors } from "nativescript-videoeditors";


@Component({
    selector: 'ns-videoeditor',
    templateUrl: './videoeditor.component.html',
    styleUrls: ['./videoeditor.component.css'],
    moduleId: module.id,
})
export class VideoeditorComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

    }

    test() {
        console.log("Call Test");
        let videoeditor = new Videoeditors();
        console.log("Call videoeditor test", videoeditor.test());
    }
}
