import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { DemoComponent } from './demo/demo.component';

import { ProductionPlanningComponent } from './pages/production-planning/production-planning.component';
import { QualityComponent } from './pages/quality/quality.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { MultiPlantComponent } from './pages/multi-plant/multi-plant.component';

// ================= CABLE NXT =================

// INTELLIGENCE
import { PocketMarginAiComponent } from './pages/nxt/pocket-margin-ai/pocket-margin-ai.component';
import { CommodityCostSimulationComponent } from './pages/nxt/commodity-cost-simulation/commodity-cost-simulation.component';
import { OrderRiskDetectionComponent } from './pages/nxt/order-risk-detection/order-risk-detection.component';
import { AiDashboardComponent } from './pages/nxt/ai-dashboard/ai-dashboard.component';


// DOMAIN CONTROL
import { DrumTraceabilityComponent } from './pages/nxt/drum-traceability/drum-traceability.component';
import { MultiLevelBomComponent } from './pages/nxt/multi-level-bom/multi-level-bom.component';
import { StageValidationComponent } from './pages/nxt/stage-validation/stage-validation.component';
import { BatchGenealogyComponent } from './pages/nxt/batch-genealogy/batch-genealogy.component';

import { CableAiComponent } from './pages/cable-ai/cable-ai.component';

  import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

import { CommunityComponent } from './pages/community/community.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { HelpComponent } from './pages/help/help.component';

  import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';


import { DashboardComponent } from './pages/dashboard/dashboard.component';


export const routes: Routes = [
  { path: 'home', component: HeroComponent },

  // CableMaker
  { path: 'cm/production-planning', component: ProductionPlanningComponent },
  { path: 'cm/quality', component: QualityComponent },
  { path: 'cm/warehouse', component: WarehouseComponent },
  { path: 'cm/orders', component: OrdersComponent },
  { path: 'cm/finance', component: FinanceComponent },
  { path: 'cm/multi-plant', component: MultiPlantComponent },

  // ================= CABLE NXT =================

  // INTELLIGENCE
  { path: 'nxt/pocket-margin-ai', component: PocketMarginAiComponent },
  { path: 'nxt/commodity-cost-simulation', component: CommodityCostSimulationComponent },
  { path: 'nxt/order-risk-detection', component: OrderRiskDetectionComponent },
  { path: 'nxt/ai-dashboard', component: AiDashboardComponent },

  // DOMAIN CONTROL
  { path: 'nxt/drum-traceability', component: DrumTraceabilityComponent },
  { path: 'nxt/multi-level-bom', component: MultiLevelBomComponent },
  { path: 'nxt/stage-validation', component: StageValidationComponent },
  { path: 'nxt/batch-genealogy', component: BatchGenealogyComponent },


  { path: 'cable-ai', component: CableAiComponent },

  { path: 'community', component: CommunityComponent },
{ path: 'pricing', component: PricingComponent },
{ path: 'help', component: HelpComponent },


  { path: 'demo', component: DemoComponent },

  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

{ path: 'reset-password', component: ResetPasswordComponent },


{ path: 'dashboard', component: DashboardComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];