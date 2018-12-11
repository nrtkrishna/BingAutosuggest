import { Component, OnInit, ViewChild } from '@angular/core';
import { Inject, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AutosuggestWithMap';
  @ViewChild('searchBox') private searchBox: ElementRef;
  @ViewChild('searchBoxContainer') private searchBoxContainer: ElementRef;
  @ViewChild('myMap') private myMap: ElementRef;

  // constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef) { }
  constructor(private ngZone: NgZone) { }

  ngOnInit(){
  

  }

  selectedSuggestion(suggestionResult) {
       console.log("selected =====> ", suggestionResult);
   }

  ngAfterViewInit() {

    this.ngZone.run(() => {
      setTimeout (() => {
       var map:any = new Microsoft.Maps.Map('#myMap', {
          credentials: 'AktQDKefhl630pH0Dfe5TQJ6GRUDoT16CHPs0BNpBBJxq1u7LBlJOEdhpzQ4TN3_'
      });

        Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', () => {
          // var options = {maxResults: 5}; 
          var manager = new Microsoft.Maps.AutosuggestManager({ map: map });
          manager.attachAutosuggest('#searchBox', '#searchBoxContainer', this.selectedSuggestion);
        });
      }, 1000);
      
        
  });

}
}
