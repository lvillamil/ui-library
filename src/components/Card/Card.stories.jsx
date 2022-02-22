import React from 'react';
import Button from 'react-bootstrap/Button';
import CardComponent from './Card';

const CardTemplate = ({ title, children, ...args }) => (
  <CardComponent title={title} {...args}>
    {children}
  </CardComponent>
);

export const SimpleCard = CardTemplate.bind({});

SimpleCard.args = {
  title: 'Title',
  children: 'This is the content',
  className: 'w-50',
};

SimpleCard.argTypes = {
  title: {
    control: {
      type: 'text',
    },
  },
};

const ContentCardTemplate = ({ title, children, ...args }) => (
  <CardComponent title={title} {...args}>
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      />
    </div>
    <Button variant="primary">Action 1</Button>
    <Button variant="success">Action 2</Button>
    <Button variant="danger">Action 3</Button>
    <Button variant="info">Action 4</Button>
  </CardComponent>
);

export const ContentCard = ContentCardTemplate.bind({});

ContentCard.args = {
  title: 'Content Card',
  children: 'This is the content',
  className: 'w-50',
};

ContentCard.argTypes = {
  title: {
    control: {
      type: 'text',
    },
  },
};

export default {
  title: 'Card',
};
