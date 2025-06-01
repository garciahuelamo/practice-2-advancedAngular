import { Routes } from '@angular/router';
import { TableElementComponent } from '../components/table-element/table-element.component';
import { FormElementComponent } from '../components/form-element/form-element.component';

export const routes: Routes = [
    {
        path: 'table',
        component: TableElementComponent
    },
    {
        path: 'form',
        component: FormElementComponent
    }
];
