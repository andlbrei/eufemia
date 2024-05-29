import { Field, Form, JSONSchema, JSONSchemaType } from '@dnb/eufemia/src/extensions/forms';

/**
 * Findings: 
 * - Using the type JSONSchema seems to work well, but this type represents an old version of JSON Schema and will give errors when using attributes introduced in newer JSON Schema versions.
 * - Inline schemas seem to work.
 * 
 * 
 * Using inline is not a good solution, it will only work for the smallest of schemas.
 * Using JSONSchema might work for many schemas, but not those which use newer draft 2019 or 2020 attributes.
 */


interface DataType {
  myKey: string
}


// A simple schema will fail without any type help
const noConstSchema = {
  type: 'object',
  properties: {
    myKey: {
      type: 'string',
    },
  },
}

export function NoConstSchemaFormErrors() {
  return (
  <Form.Handler schema={noConstSchema}>
    <Field.String path="/myKey" value="" />
  </Form.Handler>
  )
}


// A simple schema as const will work
const constSchemaWithoutRequired = {
  type: 'object',
  properties: {
    myKey: {
      type: 'string',
    },
  },
} as const


export function ConstSchemaWithoutRequiredWorks() {
  return (
  <Form.Handler schema={constSchemaWithoutRequired}>
    <Field.String path="/myKey" value="" />
  </Form.Handler>
  )
}


// Using const will fail when using 'required'
const constSchemaWithRequired = {
  type: 'object',
  properties: {
    myKey: {
      type: 'string',
    },
  },
  required: ["myKey"]
} as const


export function ConstSchemaWithRequiredErrors() {
  return (
  <Form.Handler schema={constSchemaWithRequired}>
    <Field.String path="/myKey" value="" />
  </Form.Handler>
  )
}


// Inline schema works with 'required'
export function InlineSchemaWithRequiredWorks() {
  return (
  <Form.Handler schema={{
    type: 'object',
    properties: {
      myKey: {
        type: 'string',
      },
    },
    required: ["myKey"]
  }}>
    <Field.String path="/myKey" value="" />
  </Form.Handler>
  )
}

// Using JSONSchema will work with 'required'
const jsonSchemaWithRequired: JSONSchema = {
  type: 'object',
  properties: {
    myKey: {
      type: 'string',
    },
  },
  required: ["myKey"]
}


export function JSONSchemaWithRequiredWorks() {
  return (
  <Form.Handler schema={jsonSchemaWithRequired}>
    <Field.String path="/myKey" value="" />
  </Form.Handler>
  )
}


// Using JSONSchema fails for a Draft 2020 prop
const jsonSchemaWithDraft2020Prop: JSONSchema = {
  type: 'object',
  unevaluatedProperties: false,
  properties: {
    myKey: {
      type: 'string',
    },
  },
  required: ["myKey"]
}


export function JSONSchemaWithDraft2020PropErrors() {
  return (
  <Form.Handler schema={jsonSchemaWithDraft2020Prop}>
    <Field.String path="/myKey" value="" />
  </Form.Handler>
  )
}


// Using JSONSchemaType works in the type def, but fails in Form.Handler
const jsonSchemaTypeWithDraft2020Prop: JSONSchemaType<DataType> = {
  type: 'object',
  unevaluatedProperties: false,
  properties: {
    myKey: {
      type: 'string',
    },
  },
  required: ["myKey"]
}


export function JSONSchemaTypeWithDraft2020PropErrors() {
  return (
  <Form.Handler schema={jsonSchemaTypeWithDraft2020Prop}>
    <Field.String path="/myKey" value="" />
  </Form.Handler>
  )
}
