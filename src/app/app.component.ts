import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
  title = 'Render-Form';

  form = new FormGroup({});
  model = {
    form: `
    {
      "form": [
    {
        "id": "name",
        "value": "",
        "type": "text"
        },
        {
        "id": "email",
        "value": "",
        "type": "text"
        },
        {
        "id": "gender",
        "value": "male",
        "type": "radio",
        "option": ["male", "female"]
        }
        ]
    }
`
  };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'form',
      type: 'textarea',
      templateOptions: {
        label: 'Form',
        required: true,
        maxLength: 900,
        rows: 20,
      },
    },
  ];

  formLy: any;

  onClick(value: any) {
    this.formLy = {
      item: value
    }
  }

  submit() {
    if (this.form.valid) {
      // alert(JSON.stringify(this.model));
      this.formLy = {
        info: JSON.parse(this.model.form)
      }
    }
  }
}

