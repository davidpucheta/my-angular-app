import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-params-example',
  templateUrl: './params-example.component.html',
  styleUrls: ['./params-example.component.css']
})
export class ParamsExampleComponent implements OnInit {
  urlParam: string = '';
  anotherParam:string = '';
  params: any[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.urlParam = this.route.snapshot.paramMap.get('urlParam') || '';
    this.anotherParam = this.route.snapshot.paramMap.get('anotherParam') || '';

    this.route.queryParams.subscribe(p => {
      this.params =
        Object.keys(p).map(k => ({
      name: k,
      value: p[k]
    }))});
  }
}
