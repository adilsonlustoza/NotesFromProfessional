import { Chapter0_2Component } from './chapter0/chapter0_2/chapter0_2.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Chapter6Component } from './chapter6/chapter6.component';
import { Chapter7Component } from './chapter7/chapter7.component';
import { MyParentComponent } from './chapter8/8.1/myparent.component';
import { LimitedButton } from './chapter8/8.1/limited-button.component';
import { CarComponent } from './chapter8/8.2/car/car.component';
import { GarageComponent } from './chapter8/8.2/garage/garage.component';
import { ChildComponent } from './chapter8/8.3/child/child.component';
import { ParentComponent } from './chapter8/8.3/parent/parent.component';
import { Chapter8Component } from './chapter8/chapter8.component';
import { HttpClientModule } from '@angular/common/http';
import { Chapter9Component } from './chapter9/9.1/hostingDecorator/chapter9.component';
import { ButtonPressDirective } from './chapter9/9.1/hostingDecorator/ButtonPress.directive';
import { Chapter10_1_Component } from './chapter10/10.1/chapter10.1/chapter10_1_component';
import { CommonModule } from '@angular/common';
import { Chapter11Component } from './chapter11/chapter11.component';
import { EvenPipe } from './chapter11/Pipe/even.pipe';
import { Chapter12Component } from './chapter12/chapter12/chapter12.component';
import { Chapter121Component } from './chapter12/chapter12/chapter121.component';
import { Chapter124Component } from './chapter12/chapter12/chapter124.component';
import { TableComponentComponent } from './chapter14/TableComponent/TableComponent.component';
import { DynamicPipe } from './chapter14/TableComponent/pipes/dynamic.pipe';
import { CountdownPipe } from './chapter14/TableComponent/pipes/countdown.pipe';
import { TruthyPipe } from './chapter14/TableComponent/pipes/truthy.pipe';
import { IfDatePipe } from './chapter14/TableComponent/pipes/ifdate.pipe';
import { ReversePipe } from './chapter14/TableComponent/pipes/reverse.pipe';
import { HeroComponent } from './chapter15/hero/hero.component';
import { OrderBy } from './chapter15/orderBy.pipe';
import { DasboardComponent } from './dasboard/dasboard.component';
import { Chapter16Component } from './chapter16/chapter16.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Chapter17Component } from './chapter17/chapter17.component';
import { UserService } from './chapter17/services/user.service';
import { Chapter17_1Component } from './chapter17/chapter17_1/chapter17_1.component';
import { Chapter17_2Component } from './chapter17/chapter17_2/chapter17_2.component';
import { Chapter18Component } from './chapter18/chapter18.component';
import { Chapter18_1Component } from './chapter18/chapter18_1/chapter18_1.component';
import { Chapter18_2Component } from './chapter18/chapter18_2/chapter18_2.component';
import { Chapter19Component } from './chapter19/chapter19.component';
import { Chapter19_1Component } from './chapter19/chapter19_1/chapter19_1.component';
import { Chapter19_2Component } from './chapter19/chapter19_2/chapter19_2.component';
import { AdDirective } from './chapter19/ad.directive';
import { Chapter19_3Component } from './chapter19/chapter19_3/chapter19_3.component';
import { Chapter0Component } from './chapter0/chapter0.component';
import { Chapter0_1Component } from './chapter0/chapter0_1/chapter0_1.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import { StudentComponent } from './chapter1/student.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { DynamicFormQuestionComponent } from './chapter2/components/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './chapter2/components/dynamic-form/dynamic-form.component';
import { Chapter3Component } from './chapter3/chapter3.component';
import { Chapter301Component } from './chapter3/chapter301/chapter301.component';
import { Chapter302Component } from './chapter3/chapter302/chapter302.component';
import { Chapter303Component } from './chapter3/chapter303/chapter303.component';
import { Chapter20Component } from './chapter20/chapter20.component';
import { Chapter21Component } from './chapter21/chapter21.component';
import { Chapter211Component } from './chapter21/chapter211/chapter211.component';
import { EditDirective } from './chapter21/directive/edit.directive';
import { Chapter22Component } from './chapter22/chapter22.component';


@NgModule({
  declarations: [
    AppComponent,

    /*---------Chapter 0------------*/
    Chapter0Component,
    Chapter0_1Component,
    Chapter0_2Component,
    /*---------Chapter 1------------*/
    Chapter1Component,
    StudentComponent,
    /*---------Chapter 2------------*/

    Chapter2Component,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    /*---------Chapter 3------------*/
    Chapter3Component,
    Chapter301Component,
    Chapter302Component,
    Chapter303Component,

    /*---------Chapter 6------------*/
    Chapter6Component,
    Chapter7Component,
    /*---------Chapter 8------------*/
    MyParentComponent,
    LimitedButton,

    CarComponent,
    GarageComponent,

    ChildComponent,
    ParentComponent,

    Chapter8Component,
    /*---------Chapter 8------------*/

    /*---------Chapter 9------------*/
    Chapter9Component,
    ButtonPressDirective,
    /*---------Chapter 9------------*/

    /*---------Chapter 10------------*/
    Chapter10_1_Component,

    /*---------Chapter 11------------*/
    Chapter11Component,
    EvenPipe,

    /*---------Chapter 12------------*/
    Chapter12Component,
    Chapter121Component,
    Chapter124Component,

    /*---------Chapter 14------------*/
    TableComponentComponent,
    DynamicPipe,
    CountdownPipe,
    TruthyPipe,
    IfDatePipe,
    ReversePipe,
    /*---------Chapter 15------------*/
    HeroComponent,
    OrderBy,
    DasboardComponent,
    Chapter16Component,
    /*---------Chapter 17------------*/
    Chapter17Component,
    Chapter17_1Component,
    Chapter17_2Component,

    /* -----------Chapter 18---------- */
    Chapter18Component,
    Chapter18_1Component,
    Chapter18_2Component,


    /* -----------Chapter 19---------- */
    Chapter19_2Component,
    Chapter19_1Component,
    Chapter19_3Component,
    AdDirective,
    Chapter19Component,
      Chapter3Component,
      Chapter20Component,

    /* -----------Chapter 20---------- */
   Chapter20Component,

    /* -----------Chapter 21---------- */
   Chapter21Component,
   Chapter211Component,
   EditDirective,
    /* -----------Chapter 21---------- */
    Chapter22Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  //  { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    UserService
//UserToken
   /*  MockauthenticationService */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
