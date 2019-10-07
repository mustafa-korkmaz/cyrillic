import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'alphabet',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../alphabet/alphabet.module').then(m => m.AlphabetPageModule)
          }
        ]
      },
      {
        path: 'pronunciation',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pronunciation/pronunciation.module').then(m => m.PronunciationPageModule)
          }
        ]
      },
          {
        path: '',
        redirectTo: '/tabs/pronunciation',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pronunciation',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
