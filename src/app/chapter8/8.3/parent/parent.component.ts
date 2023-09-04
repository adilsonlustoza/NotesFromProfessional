import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'parent-component',
  template: `
   <p>Params route {{this.id}}</p>
   <child-component [data]="asyncData"></child-component>
`
})
export class ParentComponent implements OnInit {

  asyncData: any;

  id:any=0;

  comments: string = "https://jsonplaceholder.typicode.com/comments";

  constructor(private _http: HttpClient, private route: ActivatedRoute) { }


  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id')?.toString();



    this._http.get(this.comments)
    .pipe(
       map((response) => { this.handleData(response)}))
       .subscribe(result => {console.log('Processado : '+ result);
     });
  }

  handleData(data: any) {
    this.asyncData = data;
  }


}
