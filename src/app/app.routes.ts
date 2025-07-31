import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { RxjsOperationComponent } from './rxjs-operation/rxjs-operation.component';
import { CounterComponent } from './counter/counter.component';
import { GridCssComponent } from './grid-css/grid-css.component';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempleteDrivenComponent } from './templete-driven/templete-driven.component';
import { ReactiveFComponent } from './reactive-f/reactive-f.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [

    {
        path: '',
        component:HomeComponent
    },
    {
        path: 'rxjs',
        component: RxjsOperationComponent
    },

    {
        path:'conter',
        component:CounterComponent
    },
    {
        path:'grid',
        component:GridCssComponent
    },
    {
        path:'todo',
        component:TodoComponent
    },
    {
        path:'reactive-form',
        component:ReactiveFormComponent
    },
    {
        path:'template-form',
        component:TempleteDrivenComponent
    },
    {
        path:'reactiveF',
        component:ReactiveFComponent
    },
    {
        path:'input-output',
        component:InputOutputComponent
    },
    {
        path:'child',
        component:ChildComponent
    }
];
