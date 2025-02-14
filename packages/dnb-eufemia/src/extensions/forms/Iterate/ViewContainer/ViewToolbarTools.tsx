import React, { useCallback, useContext } from 'react'
import { Button, Flex } from '../../../../components'
import RemoveButton from '../RemoveButton'
import useTranslation from '../../hooks/useTranslation'
import IterateElementContext from '../IterateElementContext'
import { edit } from '../../../../icons'

export default function ViewToolbarTools() {
  const iterateElementContext = useContext(IterateElementContext)
  const { switchContainerMode } = iterateElementContext ?? {}

  const translation = useTranslation().Iterate

  const editHandler = useCallback(() => {
    switchContainerMode?.('edit')
  }, [switchContainerMode])

  return (
    <Flex.Horizontal gap="large">
      <Button
        variant="tertiary"
        icon={edit}
        icon_position="left"
        on_click={editHandler}
      >
        {translation.edit}
      </Button>

      <RemoveButton text={translation.remove} />
    </Flex.Horizontal>
  )
}
