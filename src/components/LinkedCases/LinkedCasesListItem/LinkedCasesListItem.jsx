import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Arrow from 'components/Arrow/Arrow';
import Button from 'react-bootstrap/Button';
import StatusFlag from 'components/Badge/StatusFlag/StatusFlag';
import { addPlaceholder } from 'helpers/utils';
import { getIdsEnumLabel } from 'helpers/enums';
import format from 'helpers/dates';
import { ReactComponent as Remove } from 'icons/delete.svg';

import './LinkedCasesListItem.scss';

const DATE_FORMAT = 'yyyy-MM-dd';
const TRACE_LABEL = 'Trace';
const LEAD_LABEL = 'Lead';

const LinkedCasesListItem = ({
  index,
  linkedCase,
  isExpanded,
  onExpand,
  onCollapse,
  caseTypes,
  statusIdsMap,
  enableDeleteAction,
  deletionOnlyOnExpanded,
  onRemove,
  caseRedirectionMap,
  viewOnly,
  showTraceCaseId,
  onUnpublishedItem,
}) => {
  const {
    mid,
    url,
    merchantName,
    orgName: organizationName,
    type: caseTypeId,
    caseId,
    status: statusId,
    datePublished,
  } = linkedCase;

  const caseTypeLabel = useMemo(() => {
    return getIdsEnumLabel(caseTypes, caseTypeId)
      .replace('Case', '')
      .replace('Cri', 'CRI');
  }, [caseTypeId, caseTypes]);

  const status = useMemo(() => {
    return getIdsEnumLabel(statusIdsMap, statusId);
  }, [caseTypeId, statusIdsMap]);

  const datePublishedStr = useMemo(() => {
    if (datePublished) {
      return format(datePublished, DATE_FORMAT);
    }

    return '--';
  }, [datePublished]);

  const toggleExpand = useCallback(() => {
    if (!isExpanded) {
      return onExpand(index);
    }
    onCollapse();
  }, [isExpanded, onExpand, onCollapse]);

  const headerIconPosition = isExpanded ? 'down' : 'right';

  const caseType = useMemo(() => {
    if (!caseTypes) {
      return null;
    }
    return caseTypes[caseTypeId];
  }, [caseTypes, caseTypeId]);

  const caseDetailURL = useMemo(() => {
    let redirectTo = '';
    Object.keys(caseRedirectionMap).forEach((key) => {
      if (caseType === key) {
        redirectTo = `${caseRedirectionMap[key]}/${caseId}`;
      }
    });
    return redirectTo;
  }, [caseType, caseId]);

  const isTraceCase = TRACE_LABEL === caseTypeLabel.trim();

  const isTraceorLeadCase =
    TRACE_LABEL === caseTypeLabel.trim() || LEAD_LABEL === caseTypeLabel.trim();

  const buttonContent = `${
    !showTraceCaseId && isTraceCase ? '' : `${caseId} - `
  }${url || '--'}`;

  const handleOnRemove = () => {
    onRemove(caseId);
  };

  const headerClassNames = isTraceCase ? 'item-header ml-2' : 'item-header';

  const onUnpublished = () => {
    onUnpublishedItem();
  };
  const linkButton = (urlCase) => {
    if (isTraceorLeadCase) {
      return !(status === 'Published' || status === 'Updated') ? (
        <Button
          className="p-0 link-btn"
          data-testid="case-item-link"
          onClick={onUnpublished}
        >
          <span title={buttonContent}>{buttonContent}</span>
        </Button>
      ) : (
        <Button
          className="p-0 link-btn"
          data-testid="case-item-link"
          href={`${urlCase}?isNotFromList=true`}
          target="_blank"
        >
          <span title={buttonContent}>{buttonContent}</span>
        </Button>
      );
    }
    return (
      <Button
        className="p-0 link-btn"
        data-testid="case-item-link"
        href={`${caseDetailURL}?isNotFromList=true`}
      >
        <span title={buttonContent}>{buttonContent}</span>
      </Button>
    );
  };

  return (
    <div className="linked-cases-list-item">
      <div className={headerClassNames}>
        {!isTraceCase && (
          <Arrow
            position={headerIconPosition}
            className="toggle-icon"
            onClick={toggleExpand}
            data-testid="toggle-arrow"
          />
        )}

        <div className="report-header mt-3 mb-3">
          <div className="case-information">
            {linkButton(caseDetailURL)}
            <div className="d-block">
              <span>{caseTypeLabel}</span>
              <span className="gray">{`- ${datePublishedStr}`}</span>
              <StatusFlag
                status={status}
                className="status-badge"
                type="tl-case"
              />
            </div>

            {enableDeleteAction && !deletionOnlyOnExpanded && (
              <div className="iconbox">
                <Button
                  data-testid="remove-linked-case"
                  className="d-flex align-items-center remove-btn"
                  onClick={handleOnRemove}
                >
                  <Remove fill="#006ba6" />
                </Button>
              </div>
            )}
            {deletionOnlyOnExpanded && isExpanded && (
              <div className="iconbox">
                <Button
                  data-testid="remove-linked-case"
                  className="d-flex align-items-center remove-btn"
                  onClick={handleOnRemove}
                >
                  <Remove fill="#006ba6" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isExpanded ? (
        <div className="expanded-content">
          <div className="row">
            <div className="col-sm-6">
              <span className="label">Merchant ID</span>
              <p className="description">{addPlaceholder(mid)}</p>
            </div>
            <div className="col-sm-6">
              <span className="label">Status</span>
              {status === '--' ? (
                <p className="description">{status}</p>
              ) : (
                <StatusFlag status={status} type="tl-case" />
              )}
            </div>
            <div className="col-sm-6">
              <span className="label">Merchant Name</span>
              <p className="description">{addPlaceholder(merchantName)}</p>
            </div>
            <div className="col-sm-12">
              <span className="label">Merchant URL</span>
              <p className="description">{addPlaceholder(url)}</p>
            </div>
            {!viewOnly && (
              <div className="col-sm-12" data-testid="client-name">
                <span className="label">Client</span>
                <p className="description">
                  {addPlaceholder(organizationName)}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

LinkedCasesListItem.propTypes = {
  index: PropTypes.number.isRequired,
  linkedCase: PropTypes.shape({
    caseId: PropTypes.number,
    orgName: PropTypes.string,
    dateCreated: PropTypes.string,
    datePublished: PropTypes.string,
    merchantId: PropTypes.number,
    merchantName: PropTypes.string,
    mid: PropTypes.string,
    orgGuid: PropTypes.string,
    status: PropTypes.number,
    type: PropTypes.number,
    url: PropTypes.string,
    urlId: PropTypes.number,
  }),
  onRemove: PropTypes.func,
  enableDeleteAction: PropTypes.bool,
  isExpanded: PropTypes.bool,
  onExpand: PropTypes.func,
  onCollapse: PropTypes.func,
  caseTypes: PropTypes.shape({}),
  statusIdsMap: PropTypes.shape({}),
  deletionOnlyOnExpanded: PropTypes.bool,
  caseRedirectionMap: PropTypes.shape({}),
  viewOnly: PropTypes.bool,
  showTraceCaseId: PropTypes.bool,
  onUnpublishedItem: PropTypes.func,
};

LinkedCasesListItem.defaultProps = {
  linkedCase: null,
  isExpanded: false,
  caseTypes: null,
  statusIdsMap: null,
  onExpand: () => {},
  onCollapse: () => {},
  enableDeleteAction: true,
  onRemove: () => {},
  deletionOnlyOnExpanded: false,
  caseRedirectionMap: {},
  viewOnly: false,
  showTraceCaseId: true,
  onUnpublishedItem: () => {},
};

export default LinkedCasesListItem;
