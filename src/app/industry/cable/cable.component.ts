import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-cable',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './cable.component.html',
  styleUrls: ['./cable.component.css']
})
export class CableComponent implements OnInit {

  currentSlide = 0;

  slides = [
    {
      image: 'https://img.freepik.com/premium-photo/closeup-fiber-optic-cable-generative-ai_220873-18024.jpg?w=2000',
      text: 'Cable Maker'
    },
    {
      image: 'https://www.netsuite.com/portal/assets/img/business-articles/erp/social-ai-erp.jpg',
      text: 'ERP for Cable'
    },
    {
      image: 'https://logicinfo.com/wp-content/uploads/2023/06/blog-markdown-202306-scaled.jpg',
      text: 'AI for Cable'
    }
  ];

  ngOnInit() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 4000);
  }

  goToSlide(i: number) {
    this.currentSlide = i;
  }







  erpModules = [
    { icon: 'storage', title: 'Master Data', desc: 'Centralized control of items, machines, and formulations.' },
    { icon: 'shopping_cart', title: 'Sales & Orders', desc: 'Manage inquiries, quotations, and customer orders.' },
    { icon: 'precision_manufacturing', title: 'Production Planning', desc: 'Smart scheduling across all stages.' },
    { icon: 'verified', title: 'Quality Management', desc: 'Integrated testing and compliance tracking.' },
    { icon: 'inventory_2', title: 'Inventory', desc: 'Real-time stock tracking of materials and cables.' },
    { icon: 'local_shipping', title: 'Dispatch', desc: 'Automated shipment planning and logistics.' },
    { icon: 'payments', title: 'Finance & Costing', desc: 'Accurate costing and financial tracking.' },
    { icon: 'bar_chart', title: 'Reports', desc: 'Real-time dashboards and insights.' }
  ];
  aiFeatures = [
    { icon: 'trending_up', title: 'Demand Forecasting', desc: 'Predict future orders using AI.' },
    { icon: 'build', title: 'Predictive Maintenance', desc: 'Detect machine issues before failure.' },
    { icon: 'search', title: 'Defect Detection', desc: 'Identify quality anomalies.' },
    { icon: 'schedule', title: 'Production Optimization', desc: 'Optimize schedules and batches.' },
    { icon: 'lightbulb', title: 'Cost Optimization', desc: 'Reduce material and production costs.' }
  ];
  benefits = [
    { icon: 'factory', title: 'Industry-Specific', desc: 'Built exclusively for cable manufacturers.' },
    { icon: 'bolt', title: 'Fast Implementation', desc: 'Deploy faster than generic ERP systems.' },
    { icon: 'visibility', title: 'Full Visibility', desc: 'Real-time production and inventory tracking.' },
    { icon: 'smart_toy', title: 'AI-Powered', desc: 'Smart insights for better decisions.' },
    { icon: 'trending_up', title: 'Scalable', desc: 'Works for small to large plants.' },
    { icon: 'cloud', title: 'Cloud Ready', desc: 'Cloud or on-premise deployment.' }
  ];
}






