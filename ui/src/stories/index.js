import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

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

storiesOf('Claims', module)
  .add('with claims', () => <Claims claims={[{id: 1, title: "Ducks are cool", slug: "ducks_are_cool"}, {id: 2, title: "Geese are neat", slug: "geese_are_neat"}]}>
  </Claims>)

storiesOf('User', module)
  .add('with claims', () => <User claims={[{id: 1, title: "Ducks are cool", slug: "/ducks_are_cool"}, {id: 2, title: "Geese are neat", slug: "/geese_are_neat"}]}>
       </User>)

storiesOf('Users', module)
  .add('with users', () => <Users users={[{id: 1, firstName: "Travis", lastName: "Vachon", email: "dontatme@gmail.com"}]} >
       </Users>)
