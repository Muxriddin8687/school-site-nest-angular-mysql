import { Component, inject } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  getDataService = inject(GetDataService);

  team$: any = this.getDataService.team();
}
