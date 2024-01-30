import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { news } from '../../data/data';
import { News } from '../../data/type';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  photoCover:string=""
  contentTitle:string=""
  contentDescription:string=""

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value)=>{
      const n:News = news.filter((_,i)=> Number(value.get("id"))=== i)[0];
      this.photoCover = n.photoCover
      this.contentTitle =n.cardTitle
      this.contentDescription = n.description
    })
  }

}
