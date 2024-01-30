import { Component } from '@angular/core';
import{CommonModule} from "@angular/common"
import { RouterModule } from '@angular/router';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { news } from '../../data/data';
import { News } from '../../data/type';



@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule,RouterModule,MenuTitleComponent,BigCardComponent,SmallCardComponent,MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  listNews:Array<News> = news;
}
