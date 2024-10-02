import { Component, OnInit } from "@angular/core";
import { ImageResource } from "../../resource/image_resource";

@Component({
    standalone: false,
    selector: 'base-layout',
    template: `
        <img alt="nothing" src={{SignUpSuccessImage}}/>
    `
})

export class BaseLayoutComponent {
    SignUpSuccessImage: string = ImageResource.SignUpSuccess_Bg;
    constructor(

    ) {

    }

}