//import the module types to the app
//scope package, can be single and double ""

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';  //working with DOM
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component'; //single '' for local module
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { PositionDetailComponent } from "./position-detail/position-detail.component";
//import { MyValidationService } from "service/my-validation";

// meta data here
@NgModule({
    //component don't come from another module, avaliable from my module
    declarations: [ 
        AppComponent,   //componet want to avaliable here.
        AboutComponent,
        HomeComponent,
        PositionDetailComponent
    ],
    // used to bring other module my module needs
    imports: [  //
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),    //property
        ROUTING
    ],
    providers: [],
    //starting point of my app's root module, as target to bootstrap the app
    bootstrap: [AppComponent]
})

//this is the root module , import the module to the app
export class AppModule {
}
