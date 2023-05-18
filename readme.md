# Custom Input Layout Documentation

This documentation provides an overview and description of the custom input layout, which allows users to edit and add custom inputs. The layout is represented as an array of objects, where each object describes a specific input element.

## Table of Contents
- [Input Example](#input-example)
- [Input Object Properties](#input-object-properties)
  - [data_type](#data_type)
  - [label](#label)
  - [defaultValue](#defaultvalue)
  - [type](#type)
  - [key](#key)
  - [value](#value)
  - [placeholder](#placeholder)
  - [required](#required)
  - [size](#size)
  - [helperText](#helpertext)
  - [options](#options)
  - [min](#min)
  - [max](#max)
  - [step](#step)
  - [marks](#marks)
  - [variant](#variant)
  - [color](#color)
  - [icon](#icon)
  - [fontSize](#fontsize)
  - [fontWeight](#fontweight)
  - [textTransform](#texttransform)
  - [textAlign](#textalign)
- [Usage](#usage)

## Example Image

![example](https://i.imgur.com/KMb2ane.png)

## Use Example
```javascript
  const Data = exports['choy-keyboard'].showInput(InputExample);
  console.log('Received Data', Data);
```

## Input Example

```javascript
const InputExample = [
    {
        data_type: 'title',
        label: 'Enter Stash Password',
        defaultValue: 'Choy Keyboard',
        fontSize: 20,
        fontWeight: 500,
        textTransform: 'uppercase',
        color: 'black',
        textAlign: 'center',
    },
    {
        data_type: 'input',
        type: 'password',
        key: 'form_password',
        label: 'Password',
        value: '',
        defaultValue: '',
        placeholder: 'Enter Password',
        required: true,
        size: 'medium',
    },
    {
        data_type: 'input',
        type: 'select',
        key: 'form_currency',
        label: 'Currency',
        helperText: 'Select Currency',
        required: true,
        value: 'USD',
        defaultValue: 'USD',
        options: [
            { value: 'USD', label: 'USD' },
            { value: 'EUR', label: 'EUR' },
            { value: 'GBP', label: 'GBP' },
        ],
        size: 'medium',
    },
    {
        data_type: 'slider',
        type: 'range',
        label: 'Price Range',
        key: 'form_price_range',
        defaultValue: 60,
        min: 0,
        max: 100,
        step: 10,
        value: 50,
        marks: [
            { value: 0, label: '$0' },
            { value: 20, label: '$20' },
            { value: 37, label: '$37' },
            { value: 100, label: '$100' },
        ],
    },
    {
        data_type: 'button',
        type: 'submit',
        label: 'Submit',
        defaultValue: 'Submit',
        variant: 'contained',
        color: 'primary',
        icon: 'fa-solid fa-paper-plane',
        size: 'medium',
    },
    {
        data_type: 'button',
        type: 'reset',
        label: 'Cancel',
        defaultValue: 'Cancel',
        variant: 'outlined',
        color: 'error',
        size: 'medium',
    },
];
