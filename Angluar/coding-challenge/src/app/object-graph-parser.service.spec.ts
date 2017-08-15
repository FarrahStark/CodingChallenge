import { TestBed, inject } from '@angular/core/testing';

import { ObjectGraphParserService } from './object-graph-parser.service';
import {IAttribute} from "./models/IAttribute";

describe('ObjectGraphParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectGraphParserService]
    });
  });

  it('should be created', inject([ObjectGraphParserService], (service: ObjectGraphParserService) => {
    expect(service).toBeTruthy();
  }));

  describe('parse', () => {

    it('should throw on undefined', inject([ObjectGraphParserService], (service: ObjectGraphParserService) => {
      //Arrange
      let input = undefined;
      //Act
      expect(() => {
        service.parse(input);
      }).toThrow(service.MissingOuterParenthesisMessage);
    }));

    it('should throw on empty string', inject([ObjectGraphParserService], (service: ObjectGraphParserService) => {
      //Arrange
      let input = '';
      //Act
      expect(() => {
        service.parse(input);
      }).toThrow(service.MissingOuterParenthesisMessage);
    }));

    it('should throw on missing end paren', inject([ObjectGraphParserService], (service: ObjectGraphParserService) => {
      //Arrange
      let input = '(asfasfsdaf';
      //Act
      expect(() => {
        service.parse(input);
      }).toThrow(service.MissingOuterParenthesisMessage);
    }));

    it('should throw on missing start paren', inject([ObjectGraphParserService], (service: ObjectGraphParserService) => {
      //Arrange
      let input = 'asfasfsdaf)';
      //Act
      expect(() => {
        service.parse(input);
      }).toThrow(service.MissingOuterParenthesisMessage);
    }));

    it('should throw on mismatched parenthesis', inject([ObjectGraphParserService], (service: ObjectGraphParserService) => {
      //Arrange
      let input = '(((((id,created,employee(id,firstname,employeeType(id), lastname),location)';
      //Act
      expect(() => {
        service.parse(input);
      }).toThrow(service.MismatchedParenthesisMessage);
    }));

    it('should return a matching object on valid input', inject([ObjectGraphParserService], (service: ObjectGraphParserService) => {
      //Arrange
      let input = '(id,created,employee(id,firstname,employeeType(id), lastname),location)';
      let expected = <Array<IAttribute>>
        [
          {label:'id', children: []},
          {label:'created', children: []},
          {label:'employee',
            children: [
              {label:'id', children: []},
              {label:'firstname', children: []},
              {label:'employeeType',
                children: [
                  {label:'id', children: []}
                ]
              },
              {label:'lastname', children: []},
            ]
          },
          {label:'location', children: []}
        ];
      //Act
      let actual = service.parse(input);
      //Assert
      expect(actual).toEqual(expected);
    }));
  });
});
