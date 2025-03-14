import assert from 'assert';

export const fieldDef = {
  submitHeaders: {
    'Content-Type': 'application/json',
    'x-adobe-routing': 'tier=undefined,bucket=undefined--undefined--undefined'
  },
  items: [{
    id: 'dropdown-c6f396a9b8',
    fieldType: 'drop-down',
    name: 'country',
    visible: true,
    type: 'string',
    enabled: true,
    readOnly: false,
    enforceEnum: true,
    enumNames: [
      'India',
      'United States',
    ],
    placeholder: 'Please select',
    default: 'IN',
    label: {
      visible: true,
      value: 'Country',
    },
    enum: [
      'IN',
      'US',
    ],
    ':type': 'forms-components-examples/components/form/dropdown',
  },
  ],
};

export const extraChecks = [
  (html) => {
    assert.equal(html.querySelector('#dropdown-c6f396a9b8').value, 'IN');
  },
];
