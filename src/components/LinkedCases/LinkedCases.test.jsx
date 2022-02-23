import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { toast } from 'react-toastify';
import { LinkedCases } from './LinkedCases';

jest.mock('react-toastify');

const defaultProps = {
  caseId: 2725775,
  linkedCases: [
    {
      type: 4,
      url: 'https://www.alibaba.com/',
      merchantId: 59,
      merchantName: 'NAME0040',
      status: 7,
      urlId: 76,
      orgGuid: '916320c9-1f8a-424f-b9f5-e8f225eb08db',
      caseId: 2614477,
      datePublished: '2020-07-20T22:31:29.471+0000',
      mid: '174171052999',
      dateCreated: null,
    },
  ],
  isLoadingLinkedCases: false,
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
  getTLCaseEnums: jest.fn(),
  getCaseTypesEnum: jest.fn(),
  shouldFetchCaseTypes: false,
  isLoadingCaseTypes: false,
  enableLinkCaseAction: true,
  enableDeleteAction: true,
  openLinkExistingCase: jest.fn(),
  isRemovingLinkedCase: false,
  removeLinkedCase: jest.fn(),
  refreshLinkedCases: jest.fn(),
  openConfirmationPrompt: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
});

it('renders without crashing', () => {
  render(<LinkedCases {...defaultProps} />);
});

describe('initial load', () => {
  it('should call getTLCaseEnums after mount', () => {
    render(<LinkedCases {...defaultProps} />);

    expect(defaultProps.getTLCaseEnums).toHaveBeenCalledTimes(1);
  });

  it('should call getCaseTypesEnum if shouldFetchCaseTypes prop is true, and types arent loaded yet', () => {
    const props = {
      ...defaultProps,
      shouldFetchCaseTypes: true,
      caseTypes: null,
      isLoadingCaseTypes: false,
    };
    render(<LinkedCases {...props} />);

    expect(props.getCaseTypesEnum).toHaveBeenCalledTimes(1);
  });
});

describe('display conditions', () => {
  it('should display the loader overlay if it is loading the linked cases', () => {
    const props = {
      ...defaultProps,
      isLoadingLinkedCases: true,
    };

    const { getByTestId } = render(<LinkedCases {...props} />);
    expect(getByTestId('loading-overlay')).toBeTruthy();
  });

  it('should display a No Linked Cases message if data is empty', () => {
    const props = {
      ...defaultProps,
      linkedCases: [],
      isLoadingLinkedCases: false,
    };

    const { getByTestId } = render(<LinkedCases {...props} />);
    expect(getByTestId('no-linked-cases-message')).toBeTruthy();
  });
});

describe('trigger action', () => {
  it('should call handleRemoveItem when an item is deleted', async () => {
    const props = {
      ...defaultProps,
      removeLinkedCase: jest.fn().mockResolvedValue({}),
      openConfirmationPrompt: jest.fn().mockResolvedValue(true),
    };

    const { getByTestId } = render(<LinkedCases {...props} />);

    const deleteIcon = getByTestId('remove-linked-case');
    await act(async () => {
      fireEvent.click(deleteIcon);
    });

    expect(props.removeLinkedCase).toHaveBeenCalledTimes(1);
    expect(props.removeLinkedCase).toHaveBeenCalledWith(
      props.caseId,
      props.linkedCases[0].caseId
    );
    expect(props.refreshLinkedCases).toHaveBeenCalledTimes(1);
    expect(props.refreshLinkedCases).toHaveBeenCalledWith(props.caseId);
  });
});

describe('corner cases', () => {
  it('When delete linked case, confirmation is denied', async () => {
    const props = {
      ...defaultProps,
      openConfirmationPrompt: jest.fn().mockResolvedValue(false),
    };

    const { getByTestId } = render(<LinkedCases {...props} />);

    const deleteIcon = getByTestId('remove-linked-case');
    await act(async () => {
      fireEvent.click(deleteIcon);
    });

    expect(props.removeLinkedCase).toHaveBeenCalledTimes(0);
    expect(props.refreshLinkedCases).toHaveBeenCalledTimes(0);
  });

  it('When delete linked case and it fails', async () => {
    const props = {
      ...defaultProps,
      openConfirmationPrompt: jest.fn().mockResolvedValue(true),
      removeLinkedCase: jest.fn().mockRejectedValue(),
    };

    const { getByTestId } = render(<LinkedCases {...props} />);

    const deleteIcon = getByTestId('remove-linked-case');
    await act(async () => {
      fireEvent.click(deleteIcon);
    });

    expect(toast.error).toHaveBeenCalledTimes(1);
    expect(toast.error).toHaveBeenCalledWith('Unable to unlink case');
  });
});
