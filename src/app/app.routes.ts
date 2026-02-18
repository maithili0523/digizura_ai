import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

import { CableComponent } from './industry/cable/cable.component';
import { CableMakerComponent } from './industry/cable/cable-maker/cable-maker.component';

import { DemoComponent } from './demo/demo.component';

import { MasterDataComponent } from './industry/cable/erp/master-data/master-data.component';
import { SalesOrderComponent } from './industry/cable/erp/sales-order/sales-order.component';
import { ProductionPlanningComponent } from './industry/cable/erp/production-planning/production-planning.component';
import { QualityComponent } from './industry/cable/erp/quality/quality.component';
import { InventoryComponent } from './industry/cable/erp/inventory/inventory.component';
import { DispatchComponent } from './industry/cable/erp/dispatch/dispatch.component';
import { FinanceComponent } from './industry/cable/erp/finance/finance.component';
import { ReportsComponent } from './industry/cable/erp/reports/reports.component';
import { AiComponent } from './industry/cable/erp/ai/ai.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { AiForCableComponent } from './industry/cable/ai-for-cable/ai-for-cable.component';

export const routes: Routes = [
  { path: 'home', component: HeroComponent },

  { path: 'cable', component: CableComponent },
  { path: 'cable-maker', component: CableMakerComponent },

  // ERP routes
  { path: 'erp/master-data', component: MasterDataComponent },
  { path: 'erp/sales-order', component: SalesOrderComponent },
  { path: 'erp/production-planning', component: ProductionPlanningComponent },
  { path: 'erp/quality', component: QualityComponent },
  { path: 'erp/inventory', component: InventoryComponent },
  { path: 'erp/dispatch', component: DispatchComponent },
  { path: 'erp/finance', component: FinanceComponent },
  { path: 'erp/reports', component: ReportsComponent },
  { path: 'erp/ai', component: AiComponent },

  // AI page
  { path: 'ai-for-cable', component: AiForCableComponent },

  // other pages
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'demo', component: DemoComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
