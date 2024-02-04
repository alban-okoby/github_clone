import { Component } from '@angular/core';
import { ImageCompanyUrl } from 'src/app/core/data/imageUrl';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent {
  compagnyImageUrl!: ImageCompanyUrl;

}
