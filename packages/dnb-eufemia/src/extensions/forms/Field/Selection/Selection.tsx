import React, { useMemo, useCallback } from 'react'
import classnames from 'classnames'
import { makeUniqueId } from '../../../../shared/component-helper'
import {
  ToggleButton,
  Dropdown,
  Radio,
  HelpButton,
  Autocomplete,
} from '../../../../components'
import OptionField, { makeOptions } from '../Option'
import { useFieldProps } from '../../hooks'
import { pickSpacingProps } from '../../../../components/flex/utils'
import FieldBlock from '../../FieldBlock'
import {
  FormError,
  FieldProps,
  FieldHelpProps,
  FieldBlockWidth,
} from '../../types'
import type { FormStatusText } from '../../../../components/FormStatus'
import type {
  AutocompleteAllProps,
  AutocompleteProps,
} from '../../../../components/Autocomplete'
import type {
  DropdownAllProps,
  DropdownProps,
} from '../../../../components/Dropdown'
import {
  convertCamelCaseProps,
  ToCamelCase,
} from '../../../../shared/helpers/withCamelCaseProps'

interface IOption {
  title: string | React.ReactNode
  value: number | string
  status: FormStatusText
}

export type Data = AutocompleteAllProps['data'] | DropdownAllProps['data']

export type Props = FieldHelpProps &
  FieldProps<IOption['value']> & {
    variant?: 'dropdown' | 'autocomplete' | 'radio' | 'button'
    optionsLayout?: 'horizontal' | 'vertical'
    children?: React.ReactNode

    // - Autocomplete and Dropdown specific props
    autocompleteProps?: ToCamelCase<AutocompleteProps>
    dropdownProps?: ToCamelCase<DropdownProps>
    data?: Data
    width?: FieldBlockWidth
  }

function Selection(props: Props) {
  const clearValue = useMemo(() => `clear-option-${makeUniqueId()}`, [])

  const {
    id,
    className,
    variant = 'dropdown',
    label,
    labelDescription,
    layout = 'vertical',
    optionsLayout = 'vertical',
    placeholder,
    value,
    info,
    warning,
    error,
    hasError,
    disabled,
    help,
    emptyValue,
    width = 'large',
    htmlAttributes,
    setHasFocus,
    handleChange,
    children,

    // - Autocomplete and Dropdown specific props
    data,
    autocompleteProps,
    dropdownProps,
  } = useFieldProps(props)

  const handleDropdownChange = useCallback(
    ({ data: { selectedKey } }) => {
      handleChange?.(
        !selectedKey || selectedKey === clearValue
          ? emptyValue
          : selectedKey
      )
    },
    [handleChange, emptyValue, clearValue]
  )

  const onChangeHandler = useCallback(
    ({ value }) => {
      handleChange?.(value === undefined ? emptyValue : value)
    },
    [handleChange, emptyValue]
  )

  // Specific handleShow and handleHide because Dropdown preserve the initially received callbacks, so changes
  // due to `useCallback` usage will have no effect, leading to useFieldPropss handleFocus and handleBlur sending out old
  // copies of value as arguments.
  const handleShow = useCallback(
    ({ data }) => {
      setHasFocus(true, data?.selectedKey)
    },
    [setHasFocus]
  )

  const handleHide = useCallback(
    ({ data }) => {
      setHasFocus(false, data?.selectedKey)
    },
    [setHasFocus]
  )

  const cn = classnames(
    'dnb-forms-field-selection',
    `dnb-forms-field-selection__variant--${variant}`,
    `dnb-forms-field-selection__options-layout--${optionsLayout}`,
    className
  )

  const fieldSectionProps = {
    forId: id,
    className: cn,
    ...pickSpacingProps(props),
    info,
    warning,
    error,
    layout,
    label,
    labelDescription,
  }

  const getStatus = useCallback(
    (error: Error | FormError | undefined) => {
      return (
        error?.message ??
        ((warning instanceof Error && warning.message) ||
          (warning instanceof FormError && warning.message) ||
          warning?.toString() ||
          (info instanceof Error && info.message) ||
          (info instanceof FormError && info.message) ||
          info?.toString())
      )
    },
    [info, warning]
  )

  const status = getStatus(error)

  switch (variant) {
    case 'radio':
    case 'button': {
      const options: IOption[] = React.Children.toArray(children)
        .filter(
          (child) =>
            React.isValidElement(child) && child.type === OptionField
        )
        .map((option: React.ReactElement) => {
          const { error, title, children, ...rest } = option.props
          const status = getStatus(error)

          return {
            title: title ?? children,
            status,
            ...rest,
          }
        })

      const Component = (
        variant === 'radio' ? Radio : ToggleButton
      ) as typeof Radio & typeof ToggleButton

      return (
        <FieldBlock {...fieldSectionProps}>
          <Component.Group
            className={cn}
            layout_direction={
              optionsLayout === 'horizontal' ? 'row' : 'column'
            }
            disabled={disabled}
            on_change={onChangeHandler}
            value={String(value ?? '')}
          >
            {options.map((option, i) => {
              const { value, title, status, ...rest } = option
              return (
                <Component
                  id={options.length === 1 ? id : undefined}
                  key={`option-${i}-${value}`}
                  label={variant === 'radio' ? title : undefined}
                  text={variant === 'button' ? title : undefined}
                  value={String(value ?? '')}
                  status={(hasError || status) && 'error'}
                  {...htmlAttributes}
                  {...rest}
                />
              )
            })}
          </Component.Group>
        </FieldBlock>
      )
    }

    case 'autocomplete':
    case 'dropdown': {
      const sharedProps: AutocompleteAllProps & DropdownAllProps = {
        id,
        list_class: 'dnb-forms-field-selection__list',
        portal_class: 'dnb-forms-field-selection__portal',
        title: placeholder,
        value: String(value ?? ''),
        status: (hasError || status) && 'error',
        disabled,
        ...htmlAttributes,
        data: data ?? makeOptions<Data>(children),
        suffix: help ? (
          <HelpButton title={help.title}>{help.content}</HelpButton>
        ) : undefined,
        on_change: handleDropdownChange,
        on_show: handleShow,
        on_hide: handleHide,
        stretch: true,
      }

      return (
        <FieldBlock {...fieldSectionProps} width={width}>
          {variant === 'autocomplete' ? (
            <Autocomplete
              {...sharedProps}
              {...(autocompleteProps
                ? (convertCamelCaseProps(
                    autocompleteProps
                  ) as AutocompleteAllProps)
                : null)}
            />
          ) : (
            <Dropdown
              {...sharedProps}
              {...(dropdownProps
                ? (convertCamelCaseProps(
                    dropdownProps
                  ) as DropdownAllProps)
                : null)}
            />
          )}
        </FieldBlock>
      )
    }
  }
}

Selection._supportsSpacingProps = true
export default Selection
