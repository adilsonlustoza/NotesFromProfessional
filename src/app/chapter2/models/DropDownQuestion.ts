import { QuestionBase } from './QuestionBase';

export class DropDownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}
