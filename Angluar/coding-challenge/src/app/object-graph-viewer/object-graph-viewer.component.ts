import { Component, OnInit } from '@angular/core';
import {ObjectGraphParserService} from "../object-graph-parser.service";
import {IAttribute} from "../models/IAttribute";

@Component({
  selector: 'graph-viewer',
  templateUrl: './object-graph-viewer.component.html',
  styleUrls: ['./object-graph-viewer.component.css']
})
export class ObjectGraphViewerComponent implements OnInit {
  input:string;
  errorText:string;
  presets:Array<string>;
  graph:Array<IAttribute>;
  constructor(public graphParser:ObjectGraphParserService) {
    this.presets = [
      '(id,created,employee(id,firstname,employeeType(id), lastname),location)',
      '(Family Name, Family Id, Members(Jim(Birth Year, Gender, Member Id),Jane(Birth Year, Gender, Member Id),Jordan(Birth Year, Gender, Member Id)))',
      '()',
      '(NerdFactor(level), HappyFactor(level), MonsterFactor(level), Agility(level), Awareness(level))'
    ]
  }

  ngOnInit() {
    this.onInputChange(this.presets[0]);
  }

  onInputChange(newValue: string){
    this.input=newValue
    try{
      this.graph = this.graphParser.parse(this.input);
      this.errorText = null;
    }
    catch (error){
      this.errorText = error;
      this.graph = null;
    }
  }
}
