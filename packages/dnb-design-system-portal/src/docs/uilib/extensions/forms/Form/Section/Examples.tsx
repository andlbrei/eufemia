import ComponentBox from '../../../../../../shared/tags/ComponentBox'
import { Card, Code, Flex, P, Section } from '@dnb/eufemia/src'
import {
  Field,
  Form,
  JSONSchema,
  SectionProps,
  Value,
} from '@dnb/eufemia/src/extensions/forms'

export const WithoutDataContext = () => {
  return (
    <ComponentBox>
      <Form.Section onChange={console.log}>
        <Field.String path="/myField" />
      </Form.Section>
    </ComponentBox>
  )
}

export const NestedPathSection = () => {
  return (
    <ComponentBox>
      {() => {
        const MyNameSection = (props: SectionProps) => {
          return (
            <Form.Section {...props}>
              <Card stack>
                <Field.Name.First path="/firstName" />
                <Field.Name.Last path="/lastName" />
              </Card>
            </Form.Section>
          )
        }

        return (
          <Form.Handler
            onSubmit={console.log}
            defaultData={{
              nestedPath: {
                firstName: 'Nora',
                lastName: 'Mørk',
              },
            }}
          >
            <MyNameSection path="/nestedPath" />
            <Form.SubmitButton variant="send" />
          </Form.Handler>
        )
      }}
    </ComponentBox>
  )
}

export const OverwriteProps = () => {
  return (
    <ComponentBox>
      {() => {
        const MyNameSection = (props) => {
          return (
            <Form.Section {...props}>
              <Card stack>
                <Field.Composition width="large">
                  <Field.Name.First path="/firstName" />
                  <Field.Name.Last
                    path="/lastName"
                    required
                    minLength={10}
                  />
                </Field.Composition>
              </Card>
            </Form.Section>
          )
        }

        return (
          <Form.Handler
            onSubmit={console.log}
            defaultData={{
              nestedPath: {
                firstName: '',
                lastName: 'M',
              },
            }}
          >
            <MyNameSection
              path="/nestedPath"
              overwriteProps={{
                firstName: {
                  required: true,
                  label: 'Custom',
                },
                lastName: {
                  required: false,
                  minLength: 2,
                },
              }}
            />
            <Form.SubmitButton variant="send" />
          </Form.Handler>
        )
      }}
    </ComponentBox>
  )
}

export const AllFieldsRequired = () => {
  return (
    <ComponentBox>
      {() => {
        const MyNameSection = (props: SectionProps) => {
          return (
            <Form.Section {...props}>
              <Card stack>
                <Field.Composition width="large">
                  <Field.Name.First path="/firstName" />
                  <Field.Name.Last path="/lastName" />
                </Field.Composition>
              </Card>
            </Form.Section>
          )
        }

        const schema: JSONSchema = {
          type: 'object',
          required: ['myRequiredSection'],
        }

        return (
          <Flex.Stack>
            <Form.Handler onSubmit={console.log}>
              <MyNameSection required />
              <Form.SubmitButton variant="send" />
            </Form.Handler>

            <Form.Handler onSubmit={console.log} schema={schema}>
              <MyNameSection path="/myRequiredSection" />
              <Form.SubmitButton variant="send" />
            </Form.Handler>
          </Flex.Stack>
        )
      }}
    </ComponentBox>
  )
}

export const SchemaSupport = () => {
  return (
    <ComponentBox>
      {() => {
        const MyNameSection = (props: SectionProps) => {
          return (
            <Form.Section {...props}>
              <Card stack>
                <Field.Composition width="large">
                  <Field.Name.First path="/firstName" />
                  <Field.Name.Last
                    path="/lastName"
                    required
                    minLength={10}
                  />
                </Field.Composition>
              </Card>
            </Form.Section>
          )
        }

        const mySchema: JSONSchema = {
          type: 'object',
          properties: {
            nestedPath: {
              type: 'object',
              properties: {
                firstName: {
                  type: 'string',
                  minLength: 3,
                },
                lastName: {
                  type: 'string',
                  minLength: 2,
                },
              },
              required: ['firstName', 'lastName'],
            },
          },
        }

        return (
          <Form.Handler
            onSubmit={console.log}
            schema={mySchema}
            defaultData={{
              nestedPath: {
                firstName: '',
                lastName: 'M',
              },
            }}
          >
            <MyNameSection path="/nestedPath" />
            <Form.SubmitButton variant="send" />
          </Form.Handler>
        )
      }}
    </ComponentBox>
  )
}

export const WithVisibility = () => {
  return (
    <ComponentBox scope={{ Output }}>
      {() => {
        const MySection = ({ children, ...props }) => {
          return (
            <Form.Section {...props}>
              <Card stack>
                <Field.Boolean
                  label="Are you sure?"
                  variant="buttons"
                  path="/iAmSure"
                />
                <Form.Visibility visible pathTrue="/iAmSure" animate>
                  <Field.Selection
                    label="Choose"
                    variant="radio"
                    path="/mySelection"
                  >
                    <Field.Option value="less" title="Less" />
                    <Field.Option value="more" title="More" />
                  </Field.Selection>

                  <Form.Visibility
                    visibleWhen={{
                      path: '/mySelection',
                      hasValue: 'more',
                    }}
                    animate
                  >
                    <Field.String label="My String" path="/myString" />
                  </Form.Visibility>
                </Form.Visibility>

                {children}
              </Card>

              <Output />
            </Form.Section>
          )
        }

        return (
          <Form.Handler
            onChange={console.log}
            defaultData={{
              nestedPath: {
                iAmSure: false,
                mySelection: 'less',
                myString: 'has a value',
              },
            }}
          >
            <MySection path="/nestedPath">
              <Form.Visibility
                visibleWhen={{
                  path: '/myString',
                  withValue: (value) => value !== 'has a value',
                }}
                animate
              >
                <P>
                  Result:{' '}
                  <Value.String path="/nestedPath/myString" inline />
                </P>
              </Form.Visibility>
            </MySection>
          </Form.Handler>
        )
      }}
    </ComponentBox>
  )
}

export const NestedSections = () => {
  return (
    <ComponentBox>
      {() => {
        return (
          <Form.Handler
            onSubmit={console.log}
            defaultData={{
              nestedPath: {
                name: {
                  first: 'Nora',
                  last: 'Mørk',
                },
                address: {
                  street: 'Strøget',
                  nr: '',
                },
              },
            }}
          >
            <MySection path="/nestedPath" required />
            <Form.SubmitButton variant="send" />
          </Form.Handler>
        )

        function MySection(props: SectionProps) {
          return (
            <Form.Section {...props}>
              <Card stack>
                <MyNameSection path="/name" />
                <MyAddressSection path="/address" />
                <MyValueSection />
              </Card>
            </Form.Section>
          )
        }

        function MyNameSection(props: SectionProps) {
          return (
            <Form.Section {...props}>
              <Field.Composition width="large">
                <Field.Name.First path="/first" />
                <Field.Name.Last path="/last" />
              </Field.Composition>
            </Form.Section>
          )
        }

        function MyAddressSection(props: SectionProps) {
          return (
            <Form.Section {...props}>
              <Field.Composition width="large">
                <Field.String
                  label="Gateadresse"
                  path="/street"
                  width="stretch"
                />
                <Field.String label="Nr." path="/nr" width="small" />
              </Field.Composition>
            </Form.Section>
          )
        }

        function MyValueSection(props: SectionProps) {
          return (
            <Form.Section {...props}>
              <Value.SummaryList>
                <Form.Section path="/name">
                  <Value.Composition gap="small">
                    <Value.Name.First path="/first" />
                    <Value.Name.Last path="/last" />
                  </Value.Composition>
                </Form.Section>

                <Form.Section path="/address">
                  <Value.Composition gap="small">
                    <Value.String label="Gateadresse" path="/street" />
                    <Value.String label="Nr." path="/nr" placeholder="–" />
                  </Value.Composition>
                </Form.Section>
              </Value.SummaryList>
            </Form.Section>
          )
        }
      }}
    </ComponentBox>
  )
}

const Output = () => {
  const { data } = Form.useData()

  return (
    <Section
      element="output"
      innerSpace
      backgroundColor="sand-yellow"
      top
      bottom="large"
    >
      <Code>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Code>
    </Section>
  )
}
