import { GarageComponent } from './chapter8/8.2/garage/garage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter6Component } from './chapter6/chapter6.component';
import { Chapter7Component } from './chapter7/chapter7.component';
import { MyParentComponent } from './chapter8/8.1/myparent.component';
import { ParentComponent } from './chapter8/8.3/parent/parent.component';
import { Chapter8Component } from './chapter8/chapter8.component';
import { Chapter9Component } from './chapter9/9.1/hostingDecorator/chapter9.component';
import { Chapter10_1_Component } from './chapter10/10.1/chapter10.1/chapter10_1_component';
import { Chapter11Component } from './chapter11/chapter11.component';
import { Chapter12Component } from './chapter12/chapter12/chapter12.component';
import { TableComponentComponent } from './chapter14/TableComponent/TableComponent.component';
import { HeroComponent } from './chapter15/hero/hero.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { Chapter16Component } from './chapter16/chapter16.component';
import { Chapter17Component } from './chapter17/chapter17.component';
import { UserResolver } from './chapter17/services/UsersResolver';
import { Chapter17_1Component } from './chapter17/chapter17_1/chapter17_1.component';
import { Chapter17_2Component } from './chapter17/chapter17_2/chapter17_2.component';

import { AuthGuard } from './chapter18/guards/authguard';
import { CurrentResolve } from './chapter18/services/currentResolver.service';

import { Chapter18Component } from './chapter18/chapter18.component';
import { Chapter18_2Component } from './chapter18/chapter18_2/chapter18_2.component';
import { Chapter18_1Component } from './chapter18/chapter18_1/chapter18_1.component';
import { Chapter19Component } from './chapter19/chapter19.component';
import { Chapter0Component } from './chapter0/chapter0.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { Chapter3Component } from './chapter3/chapter3.component';
import { Chapter20Component } from './chapter20/chapter20.component';
import { Chapter21Component } from './chapter21/chapter21.component';
import { Chapter22Component } from './chapter22/chapter22.component';



const routes: Routes = [

  { path: '', component: DasboardComponent },

  { path: 'chapter0', component: Chapter0Component },

  { path: 'chapter1', component: Chapter1Component },

  { path: 'chapter2', component: Chapter2Component },

  { path: 'chapter3', component: Chapter3Component },

  {
    path: 'chapter8',
    pathMatch: 'full',
    component: Chapter8Component,
    title: 'chapter8',
    data: {
      reuseComponent: true,
    },

    children: [
      {
        path: '8.1',
        component: MyParentComponent,
        data: {
          reuseComponent: true,
        },
        title: 'chapter8.1',
      },
      {
        path: '8.2',
        component: GarageComponent,
        data: {
          reuseComponent: true,
        },
        title: 'chapter8.2',
      },
      {
        path: '8.3/:id',
        component: ParentComponent,
        data: {
          reuseComponent: true,
        },
        title: 'chapter8.3',
      },
    ],
  },
  { path: 'chapter7', component: Chapter7Component },
  { path: 'chapter6', component: Chapter6Component },
  { path: 'chapter9', component: Chapter9Component },

  { path: 'chapter10', component: Chapter10_1_Component },

  { path: 'chapter11', component: Chapter11Component },

  { path: 'chapter12', component: Chapter12Component },

  { path: 'chapter14', component: TableComponentComponent },

  { path: 'chapter15', component: HeroComponent },

  { path: 'chapter16', component: Chapter16Component },

  {
    path: 'chapter17',
    component: Chapter17Component,
    resolve: { user: UserResolver },
    children: [
      {
        path: "_171/:id",
        component: Chapter17_1Component,
        title: "Children Route One"
      },
      {
        path: "_172/:id",
        component: Chapter17_2Component,
        title: "Children Route Two"

      }

    ]

  },

  {
    path: "chapter18",
    component: Chapter18Component,
    title: "Chapter Route 18",
    canActivate: [AuthGuard],
    resolve: { currentUser: CurrentResolve },
    data: {
      reuseComponent: true,
    },
    children: [
      {
        path: "chap181/:id",
        component: Chapter18_1Component,
        title: "Children Route One",
        data: {
          reuseComponent: true,
        },

      },
      {
        path: "chap182/:id",
        component: Chapter18_2Component,
        title: "Children Route Two",
        data: {
          reuseComponent: true,
        },

      }

    ]

  },

  {
    path: "chapter19",
    component: Chapter19Component,
    title: "Chapter Route 119"

  },

  {
    path: "chapter20",
    component: Chapter20Component,
    title: "Chapter Route 20"

  },

  {
    path: "chapter21",
    component: Chapter21Component,
    title: "Chapter Route 21"

  },
  {
    path: "chapter22",
    component: Chapter22Component,
    title: "Chapter Route 22"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
