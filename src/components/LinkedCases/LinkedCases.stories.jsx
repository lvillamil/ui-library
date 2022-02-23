import React from 'react';
import LinkedCases from './LinkedCases';

export default {
  title: 'LinkedCases',
};

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
    {
      caseId: 16937354,
      dateCreated: null,
      datePublished: null,
      merchantId: 685,
      merchantName: 'NAME0666',
      mid: '425205035990',
      orgGuid: 'G2_CLIENT_ORGANIZATION_CHILD_1',
      orgName: 'G2 Client Organization child 1',
      status: 0,
      type: 4,
      url: null,
      urlId: null,
    },
    {
      caseId: 11069199,
      dateCreated: null,
      datePublished: '2020-11-05T22:48:49.188+00:00',
      merchantId: 22231,
      merchantName: 'LinkedCasesTest',
      mid: '987Linktest',
      orgGuid: 'G2_CLIENT_ORGANIZATION_CHILD_2',
      orgName: 'G2 Client Organization child 2',
      status: 7,
      type: 4,
      url: 'http://www.linkedcasetestmerchant.com',
      urlId: 2774366,
    },
    {
      caseId: 2883447,
      dateCreated: null,
      datePublished: null,
      merchantId: 2,
      merchantName: 'Merchant Inc.',
      mid: '89720128925',
      orgGuid: '80ff0f4e-f4d4-4649-9793-121bca957179',
      orgName: 'Organization 1587404502978',
      status: 0,
      type: 6,
      url: 'https://www.facebook.com/',
      urlId: 3,
    },
    {
      caseId: 2829491,
      dateCreated: null,
      datePublished: '2020-08-07T17:36:09.557+00:00',
      merchantId: null,
      merchantName: null,
      mid: null,
      orgGuid: null,
      orgName: null,
      status: 7,
      type: 5,
      url: 'www.demo-ichnaea.com',
      urlId: 12627,
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
  getTLCaseEnums: () => {},
  getCaseTypesEnum: () => {},
  shouldFetchCaseTypes: false,
  isLoadingCaseTypes: false,
  enableLinkCaseAction: true,
  enableDeleteAction: false,
  openLinkExistingCase: () => {},
  isRemovingLinkedCase: false,
  removeLinkedCase: () => {},
  refreshLinkedCases: () => {},
  openConfirmationPrompt: () => {},
  showTraceCaseId: false,
};

export const LinkedCasesStory = () => <LinkedCases {...defaultProps} />;

export const ViewOnly = () => <LinkedCases {...defaultProps} viewOnly />;

export const SmallContainer = () => (
  <div>
    <div className="row">
      <div className="col-3">
        <LinkedCases {...defaultProps} viewOnly />
      </div>
    </div>
    <div className="col-6">
      <LinkedCases {...defaultProps} viewOnly />
    </div>
  </div>
);
