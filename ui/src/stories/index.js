import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import typeDefs from 'rex-schema'

import Claims from '../components/Claims'
import User from '../components/User'
import Users from '../components/Users'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

const claim1 = {id: 1, title: "Ducks are cool", slug: "ducks_are_cool"}
const claim2 = {id: 2, title: "Geese are neat", slug: "geese_are_neat"}
const user1 = {id: 1, firstName: "Travis", lastName: "Vachon", email: "dontatme@gmail.com"}


storiesOf('Claims', module)
  .add('with claims', () => <Claims claims={[claim1, claim2]}>
  </Claims>)

storiesOf('User', module)
  .add('with claims', () => <User claims={[claim1, claim2]}>
       </User>)

storiesOf('Users', module)
  .add('with users', () => <Users users={[user1]} >
       </Users>)
