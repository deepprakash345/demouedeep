// eslint-disable-next-line import/prefer-default-export
export const fieldDef = {
  submitHeaders: {
    'Content-Type': 'application/json',
    'x-adobe-routing': 'tier=undefined,bucket=undefined--undefined--undefined'
  },
  items: [{
    id: 'radiobutton-0978fab44d',
    fieldType: 'radio-group',
    name: 'radiobutton1699597878132',
    visible: true,
    type: 'string',
    enumNames: [
      'Item 1',
      'Item 2',
    ],
    label: {
      visible: true,
      value: 'Radio Button',
    },
    properties: {
      variant: 'cards',
      'afs:layout': {
        orientation: 'horizontal',
      },
      'fd:dor': {
        dorExclusion: false,
      },
      'fd:path': '/content/forms/af/aaa/jcr:content/guideContainer/radiobutton',
    },
    enum: [
      '0',
      '1',
    ],
    ':type': 'forms-components-examples/components/form/radiobutton',
  }],
};
