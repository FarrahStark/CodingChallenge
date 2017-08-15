import {Injectable} from '@angular/core';
import {IAttribute} from './models/IAttribute';

@Injectable()
export class ObjectGraphParserService {
  readonly MismatchedParenthesisMessage = 'Mismatched parenthesis in input string';
  readonly MissingOuterParenthesisMessage = 'Invalid input; Input must be wrapped in parenthesis';


  constructor() {
  }

  private validateInput(input: string): void {
    if (!input || input.length < 2 || input[0] !== '(' || input[input.length - 1] !== ')') {
      throw this.MissingOuterParenthesisMessage;
    }
  }

  parse(input: string): Array<IAttribute> {
    this.validateInput(input);
    input = input.substring(1, input.length - 1);
    let stack = <Array<IAttribute>>[];
    let root = <IAttribute>{
      label:'root',
      children:<Array<IAttribute>>[]
    };
    let current = root;
    let attributeName = '';

    let flushAttribute = ():IAttribute => {
      if(!attributeName || !attributeName.trim())
      {
        return null;
      }

      let attribute = <IAttribute>{
        label: attributeName.trim(),
        children: []
      };
      current.children.push(attribute);
      attributeName = ''
      return attribute;
    };

    for (let i = 0; i < input.length; ++i) {
      if (input[i] === '(') {
        let attribute = flushAttribute();
        if(attribute === null)
        {
          throw this.MismatchedParenthesisMessage;
        }

        stack.push(current);
        current = attribute;
      }
      else if (input[i] == ')') {
        flushAttribute();
        if(stack.length < 1)
        {
          throw this.MismatchedParenthesisMessage;
        }

        current = stack.pop();
      }
      else if (input[i] == ',') {
        flushAttribute();
      }
      else {
        attributeName += input[i];
      }
    }
    flushAttribute();

    if (stack.length != 0) {
      throw this.MismatchedParenthesisMessage;
    }
    return root.children;
  }
}
