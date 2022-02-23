import React, { useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import SimpleList from 'components/SimpleList/SimpleList';
import LoadingOverlay from 'components/LoadingOverlay/LoadingOverlay';
import Card from 'components/Card/Card';
import { toast } from 'react-toastify';
import LinkedCasesListItem from './LinkedCasesListItem/LinkedCasesListItem';

import './LinkedCases.scss';

export const LinkedCases = ({
  caseId,
  linkedCases,
  isLoadingLinkedCases,
  caseTypes,
  statusIdsMap,
  openLinkExistingCase,
  getTLCaseEnums,
  getCaseTypesEnum,
  shouldFetchCaseTypes,
  isLoadingCaseTypes,
  enableLinkCaseAction,
  enableDeleteAction,
  isRemovingLinkedCase,
  removeLinkedCase,
  refreshLinkedCases,
  dispatch,
  openConfirmationPrompt,
  deletionOnlyOnExpanded,
  caseRedirectionMap,
  viewOnly,
  showTraceCaseId,
  onUnpublishedItem,
}) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getTLCaseEnums();
  }, [getTLCaseEnums]);

  useEffect(() => {
    if (!shouldFetchCaseTypes) {
      return;
    }

    if (!isLoadingCaseTypes && !caseTypes) {
      getCaseTypesEnum();
    }
  }, [getCaseTypesEnum, isLoadingCaseTypes, caseTypes, shouldFetchCaseTypes]);

  const onExpand = (selectedItem) => {
    setSelected(selectedItem);
  };

  const onCollapse = () => {
    setSelected(null);
  };

  const handleRemoveItem = useCallback(
    async (linkedCaseId) => {
      const modalHeader = (
        <span className="modal-title">Remove Linked Case</span>
      );
      const prompt = <div>Are you sure you want to proceed?</div>;

      const proceed = await openConfirmationPrompt({
        prompt,
        header: modalHeader,
      });

      if (!proceed) {
        return;
      }

      try {
        await removeLinkedCase(caseId, linkedCaseId);
        refreshLinkedCases(caseId);
        toast.success('Case unlink successfully');
      } catch (error) {
        toast.error('Unable to unlink case');
      }
    },
    [caseId, removeLinkedCase, refreshLinkedCases, dispatch]
  );

  const renderItem = (value, index) => {
    return (
      <LinkedCasesListItem
        key={value.caseId}
        caseTypes={caseTypes}
        statusIdsMap={statusIdsMap}
        linkedCase={value}
        index={index}
        isExpanded={index === selected}
        onExpand={onExpand}
        onCollapse={onCollapse}
        enableDeleteAction={enableDeleteAction}
        deletionOnlyOnExpanded={deletionOnlyOnExpanded}
        onRemove={handleRemoveItem}
        caseRedirectionMap={caseRedirectionMap}
        viewOnly={viewOnly}
        showTraceCaseId={showTraceCaseId}
        onUnpublishedItem={onUnpublishedItem}
      />
    );
  };

  const showNoCasesFoundMessage = useMemo(
    () =>
      !isRemovingLinkedCase &&
      !isLoadingLinkedCases &&
      linkedCases &&
      !linkedCases.length,
    [isLoadingLinkedCases, linkedCases, isRemovingLinkedCase]
  );

  const isLoading = isRemovingLinkedCase || isLoadingLinkedCases;

  return (
    <Card
      className="ui-library"
      contentClassName="no-gutters position-relative"
      title="Linked TL Cases"
    >
      <LoadingOverlay loading={isLoading} fullSize />
      <div className="linked-cases-wrapper">
        <div className="linked-cases-content">
          {showNoCasesFoundMessage && (
            <p
              className="no-cases-found-message"
              data-testid="no-linked-cases-message"
            >
              No Linked Cases
            </p>
          )}
          {linkedCases && (
            <SimpleList
              data={linkedCases}
              renderItem={renderItem}
              showPagination={false}
            />
          )}
          {enableLinkCaseAction && !viewOnly && (
            <div>
              <Button
                className="btn-primary button-header w-100 mt-1"
                onClick={() =>
                  openLinkExistingCase('LinkExistingCase', {
                    caseId,
                    refreshLinkedCases,
                  })
                }
              >
                Link Existing Case
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

LinkedCases.propTypes = {
  caseId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  openLinkExistingCase: PropTypes.func.isRequired,
  getTLCaseEnums: PropTypes.func,
  caseTypes: PropTypes.shape({}),
  statusIdsMap: PropTypes.shape({}),
  getCaseTypesEnum: PropTypes.func,
  shouldFetchCaseTypes: PropTypes.bool,
  isLoadingCaseTypes: PropTypes.bool.isRequired,
  isLoadingLinkedCases: PropTypes.bool.isRequired,
  enableLinkCaseAction: PropTypes.bool,
  enableDeleteAction: PropTypes.bool,
  deletionOnlyOnExpanded: PropTypes.bool,
  isRemovingLinkedCase: PropTypes.bool.isRequired,
  removeLinkedCase: PropTypes.func.isRequired,
  refreshLinkedCases: PropTypes.func,
  dispatch: PropTypes.func,
  openConfirmationPrompt: PropTypes.func.isRequired,
  linkedCases: PropTypes.arrayOf(
    PropTypes.shape({
      caseId: PropTypes.number,
      organizationName: PropTypes.string,
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
    })
  ),
  caseRedirectionMap: PropTypes.shape({}),
  viewOnly: PropTypes.bool,
  showTraceCaseId: PropTypes.bool,
  onUnpublishedItem: PropTypes.func,
};

LinkedCases.defaultProps = {
  caseTypes: null,
  statusIdsMap: null,
  shouldFetchCaseTypes: true,
  linkedCases: [],
  enableLinkCaseAction: true,
  enableDeleteAction: true,
  deletionOnlyOnExpanded: false,
  refreshLinkedCases: () => {},
  caseId: null,
  dispatch: () => Promise.resolve(false),
  caseRedirectionMap: {},
  viewOnly: false,
  getTLCaseEnums: () => {},
  getCaseTypesEnum: () => {},
  showTraceCaseId: true,
  onUnpublishedItem: () => {},
};

export default LinkedCases;
