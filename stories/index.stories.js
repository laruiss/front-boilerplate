import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Idea, Ideas } from '@/components'

storiesOf('Idea', module)
  .add('Lorem ipsum', () => <Idea onDelete={action('deleted')} title="Lorem ipsum" body="Lorem ipsum dolor sit amet" />)

const ideas = [
  { id: 1, title: 'Dummy title 1', body: 'Dummy body 1' },
  { id: 2, title: 'Dummy title 2', body: 'Dummy body 2' },
]

storiesOf('Ideas', module)
  .add('Lorem ipsums', () => (
    <Ideas ideas={{ list: ideas }} onDelete={action('deleted')} />
  ))
