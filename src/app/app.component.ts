import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Render-Form';

  form = new FormGroup({});
  modelstringify = '';
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
    this.formLy = value;
    console.log(value, "value")
    console.log(this.formLy, "formLy")
  }

  submit() {
    if (this.form.valid) {
      // alert(JSON.stringify(this.model));
      this.modelstringify = JSON.parse(this.model.form);
    }
  }
}

