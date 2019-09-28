import { Routes } from '@angular/router';

import { NgbdpaginationBasicComponent } from './pagination/pagination.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'pagination',
        component: NgbdpaginationBasicComponent,
        data: {
          title: 'Pagination',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Pagination' }
          ]
        }
      }
      
    ]
  }
];
