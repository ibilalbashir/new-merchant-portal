import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: 'main',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './main-page/main-page.module#MainPageModule'
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'campaign',
        loadChildren: './campaign/campaign.module#CampaignModule'
      },
      {
        path: 'forms',
        loadChildren: './forms/forms.module#Forms'
      },
      {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
      },
      {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
      },
      {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
      },
      {
        path: '',
        loadChildren: './userpage/user.module#UserModule'
      },
      {
        path: '',
        loadChildren: './timeline/timeline.module#TimelineModule'
      }
    ]
  },
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  }
];
