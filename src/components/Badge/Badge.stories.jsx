// Generated with util/create-component.js
import React from 'react';
import StatusFlag from './StatusFlag/StatusFlag';
import PriorityFlagComponent from './PriorityFlag/PriorityFlag';

const StatusFlagTemplate = ({ status, ...args }) => (
  <StatusFlag status={status} {...args} />
);

export const CCReportCaseStatus = StatusFlagTemplate.bind({});

CCReportCaseStatus.args = {
  status: 'Pending Crawl',
  type: 'cc-report-case',
};
CCReportCaseStatus.argTypes = {
  status: {
    control: {
      type: 'select',
      options: [
        'Crawling',
        'Pending Crawl',
        'Unworked',
        'Unworked QA',
        'In Analyst Review',
        'In QA Review',
        'Analyst Done',
        'QA Done',
        'Published',
      ],
    },
  },
};

export const CCUrlCaseStatus = StatusFlagTemplate.bind({});

CCUrlCaseStatus.args = {
  status: 'Unreviewed',
  type: 'cc-url-case',
};
CCUrlCaseStatus.argTypes = {
  status: {
    control: {
      type: 'select',
      options: [
        'Unreviewed',
        'Reviewed',
        'Classified',
        'On Hold',
        'System Review',
        'QA Completed',
      ],
    },
  },
};

export const TLCaseStatus = StatusFlagTemplate.bind({});

TLCaseStatus.args = {
  status: 'Unworked',
  type: 'tl-case',
};
TLCaseStatus.argTypes = {
  status: {
    control: {
      type: 'select',
      options: [
        'Unworked',
        'In Analyst Review',
        'Pending',
        'Done',
        'Unworked QA',
        'In QA Review',
        'QA Done',
        'Published',
        'Updated',
      ],
    },
  },
};

export const ClientProduct = StatusFlagTemplate.bind({});

ClientProduct.args = {
  status: 'CC',
  type: 'client-product',
};
ClientProduct.argTypes = {
  status: {
    control: {
      type: 'select',
      options: ['CC', 'TL', 'GB'],
    },
  },
};

export const ActiveStatus = StatusFlagTemplate.bind({});

ActiveStatus.args = {
  status: 'Active',
  type: 'status',
};
ActiveStatus.argTypes = {
  status: {
    control: {
      type: 'select',
      options: ['Active', 'Inactive'],
    },
  },
};

export const ClientActionStatus = StatusFlagTemplate.bind({});

ClientActionStatus.args = {
  status: 'Pending',
  type: 'client-action',
};
ClientActionStatus.argTypes = {
  status: {
    control: {
      type: 'select',
      options: ['Pending', 'Terminated', 'Cleared', 'Unworked'],
    },
  },
};

const PriorityFlagTemplate = ({ priority, ...args }) => (
  <PriorityFlagComponent priority={priority} {...args} />
);

export const PriorityFlag = PriorityFlagTemplate.bind({});

PriorityFlag.args = {
  priority: 'Urgent',
};
PriorityFlag.argTypes = {
  priority: {
    control: {
      type: 'select',
      options: ['Urgent', 'High', 'Med', 'Low'],
    },
  },
};

export const ReportedStatus = StatusFlagTemplate.bind({});

ReportedStatus.args = {
  status: 'PPM',
  type: 'reported',
};

ReportedStatus.argTypes = {
  status: {
    control: {
      type: 'select',
      options: ['PPM', 'TL'],
    },
  },
};

export default {
  title: 'Badges',
};
