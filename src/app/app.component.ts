import { Component, OnInit } from '@angular/core';
import { Inject, AfterViewInit, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AutosuggestWithMap';

  // constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef) { }
  constructor() { }

  ngOnInit(){
    var self = this;
    Microsoft.Maps.loadModule('Microsoft.Maps.Autosuggest', () => {
      var options = {maxResults: 5}; 
      var manager = new Microsoft.Maps.AutosuggestManager(options);
      manager.attachAutosuggest('#searchBox', '#searchBoxContainer', self.selectedSuggestion);
    });
  }

  selectedSuggestion(suggestionResult) {
       console.log("selected =====> ", suggestionResult);
   }

  ngAfterViewInit() {


}
}
