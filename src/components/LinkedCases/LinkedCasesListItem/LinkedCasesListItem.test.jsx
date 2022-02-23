import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LinkedCasesListItem from './LinkedCasesListItem';

const defaultProps = {
  linkedCase: {
    type: 4,
    url: 'https://www.alibaba.com/',
    merchantId: 59,
    merchantName: 'NAME0040',
    status: 7,
    urlId: 76,
    orgGuid: '916320c9-1f8a-424f-b9f5-e8f225eb08db',
    orgName: 'ORG NAME 0040',
    caseId: 2614477,
    datePublished: '2020-07-20T22:31:29.471+0000',
    mid: '174171052999',
    dateCreated: null,
  },
  index: 0,
  isExpanded: false,
  onExpand: jest.fn(),
  onCollapse: jest.fn(),
  caseTypes: {
    0: 'UNKNOWN',
    1: 'REPORT_CASE',
    2: 'URL_CASE',
    3: 'PAGE_CASE',
    4: 'LEAD_CASE',
    5: 'TRACE_CASE',
    6: 'CRI_CASE',
    7: 'ENHANCED_BOARDING_CASE',
  },
  statusIdsMap: {
    0: 'UNWORKED',
    1: 'IN_ANALYST_REVIEW',
    2: 'PENDING',
    3: 'DONE',
    4: 'UNWORKED_QA',
    5: 'IN_QA_REVIEW',
    6: 'QA_DONE',
    7: 'PUBLISHED',
    8: 'UPDATED',
  },
  caseRedirectionMap: {
    LEAD_CASE: '/lead-details',
    TRACE_CASE: '/trace-details',
    CRI_CASE: '/cri-details',
  },
};

beforeEach(() => {
  jest.clearAllMocks();
});

it('renders without crashing', () => {
  render(<LinkedCasesListItem {...defaultProps} />);
});

describe('interactions', () => {
  it('should not show client when viewOnly is true', () => {
    const props = {
      ...defaultProps,
      isExpanded: false,
      viewOnly: true,
    };
    const { queryByTestId } = render(<LinkedCasesListItem {...props} />);
    expect(queryByTestId('client-name')).toBeNull();
  });
  it('should call onExpand when clicking on arrow if isExpanded is false', () => {
    const props = {
      ...defaultProps,
      isExpanded: false,
    };
    const { getByTestId } = render(<LinkedCasesListItem {...props} />);
    const arrow = getByTestId('toggle-arrow');
    fireEvent.click(arrow);
    expect(props.onExpand).toHaveBeenCalledTimes(1);
  });

  it('should call onCollapse when clicking on arrow if isExpanded is true', () => {
    const props = {
      ...defaultProps,
      isExpanded: true,
    };
    const { getByTestId } = render(<LinkedCasesListItem {...props} />);
    const arrow = getByTestId('toggle-arrow');
    fireEvent.click(arrow);
    expect(props.onCollapse).toHaveBeenCalledTimes(1);
  });

  it('should call onRemove when clicking on delete icon', () => {
    const props = {
      ...defaultProps,
      enableDeleteAction: true,
      onRemove: jest.fn(),
    };
    const { getByTestId } = render(<LinkedCasesListItem {...props} />);
    const deleteIcon = getByTestId('remove-linked-case');
    fireEvent.click(deleteIcon);
    expect(props.onRemove).toHaveBeenCalledTimes(1);
  });

  it.each([
    ['LEAD_CASE', { id: 23, type: 4 }, `/lead-details/23`],
    ['TRACE_CASE', { id: 23, type: 5 }, `/trace-details/23`],
    ['CRI_CASE', { id: 23, type: 6 }, `/cri-details/23`],
  ])(
    'should have a href to the linked %s case',
    (caseTypeLabel, caseProps, expectedPath) => {
      const myProps = {
        ...defaultProps,
        linkedCase: {
          ...defaultProps.linkedCase,
          type: caseProps.type,
          caseId: caseProps.id,
        },
      };
      const { getByTestId } = render(<LinkedCasesListItem {...myProps} />);
      const link = getByTestId('case-item-link');
      expect(link).toHaveAttribute('href', expectedPath);
    }
  );
});
