(()=>{"use strict";var __webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},(()=>{var deferred=[];__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(chunkIds){priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority];return}for(var notFulfilled=1/0,i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)notFulfilled>=priority&&Object.keys(__webpack_require__.O).every(key=>__webpack_require__.O[key](chunkIds[j]))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}})(),__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},(()=>{var leafPrototypes,getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__;__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode||"object"==typeof value&&value&&(4&mode&&value.__esModule||16&mode&&"function"==typeof value.then))return value;var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach(key=>def[key]=()=>value[key]);return def.default=()=>value,__webpack_require__.d(ns,def),ns}})(),__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises),[])),__webpack_require__.u=chunkId=>""+(({24:"components-app-detected-token-detected-token-ignored-popover-detected-token-ignored-popover-stories",48:"components-multichain-import-tokens-modal-import-tokens-modal-stories",159:"pages-confirmations-components-edit-gas-display-edit-gas-display-stories",172:"components-multichain-detected-token-banner-detected-token-banner-stories",204:"pages-confirmations-components-transaction-alerts-transaction-alerts-stories",226:"components-app-snaps-snap-content-footer-snap-content-footer-stories",246:"pages-connected-accounts-connected-accounts-stories",276:"components-ui-loading-indicator-loading-indicator-stories",384:"components-multichain-address-list-item-address-list-item-stories",457:"components-app-incoming-trasaction-toggle-incoming-transaction-toggle-stories",490:"components-multichain-global-menu-global-menu-stories",500:"components-app-snaps-update-snap-permission-list-update-snap-permission-list-stories",530:"components-multichain-network-list-menu-network-list-menu-stories",533:"components-ui-check-box-check-box-stories",574:"components-app-asset-list-asset-list-stories",583:"components-app-snaps-snap-version-snap-version-stories",600:"components-app-snaps-snap-permissions-list-snap-permissions-list-stories",630:"pages-snaps-snaps-list-snap-list-stories",632:"components-app-snaps-keyring-snap-removal-warning-keyring-snap-removal-warning-stories",657:"pages-confirmations-components-ledger-instruction-field-ledger-instruction-field-stories",762:"pages-swaps-main-quote-summary-main-quote-summary-stories",769:"pages-confirm-encryption-public-key-confirm-encryption-public-key-stories",792:"components-ui-button-group-button-group-stories",888:"pages-swaps-fee-card-fee-card-stories",902:"components-app-flask-experimental-area-experimental-area-stories",934:"pages-swaps-smart-transaction-status-smart-transaction-status-stories",957:"components-ui-text-field-text-field-stories",981:"components-app-incoming-trasaction-toggle-network-toggle-stories",999:"components-app-modals-customize-nonce-customize-nonce-stories",1013:"components-ui-truncated-definition-list-truncated-definition-list-stories",1022:"components-app-modals-confirm-remove-account-confirm-remove-account-stories",1070:"components-component-library-button-button-stories",1086:"pages-confirm-add-suggested-token-confirm-add-suggested-token-stories",1109:"components-ui-callout-callout-stories",1153:"components-multichain-pages-permissions-page-connection-list-item-stories",1207:"components-app-cancel-button-cancel-buitton-stories",1236:"pages-swaps-import-token-import-token-stories",1279:"pages-settings-networks-tab-custom-content-search-custom-content-search-stories",1290:"components-app-configure-snap-popup-configure-snap-popup-stories",1302:"pages-onboarding-flow-privacy-settings-privacy-settings-stories",1330:"components-component-library-text-field-text-field-stories",1337:"pages-confirmations-components-signature-request-siwe-signature-request-siwe-icon-signature-request-siwe-icon-stories",1369:"components-app-step-progress-bar-step-progress-bar-stories",1410:"pages-swaps-awaiting-signatures-awaiting-signatures-stories",1428:"components-ui-icon-icon-stories",1459:"components-institutional-interactive-replacement-token-modal-interactive-replacement-token-modal-stories",1479:"pages-institutional-confirm-connect-custodian-modal-confirm-connect-custodian-modal-stories",1504:"pages-keychains-reveal-seed-stories",1547:"components-component-library-text-field-search-text-field-search-stories",1628:"components-app-snaps-snap-remove-warning-snap-remove-warning-stories",1650:"components-ui-export-text-container-export-text-stories",1686:"components-ui-icon-with-fallback-icon-with-fallback-stories",1703:"pages-confirmations-components-multilayer-fee-message-multi-layer-fee-message-stories",1740:"pages-confirmations-components-confirm-gas-display-confirm-legacy-gas-display-confirm-legacy-gas-display-stories",1753:"components-app-connected-accounts-list-connected-accounts-list-stories",1767:"pages-confirmations-send-send-content-add-recipient-add-recipient-stories",1788:"components-ui-qr-code-view-qr-code-view-stories",1803:"pages-swaps-prepare-swap-page-slippage-notification-modal-stories",1821:"components-ui-show-hide-toggle-show-hide-toggle-stories",1853:"pages-institutional-institutional-entity-done-page-institutional-entity-done-page-stories",1882:"components-ui-card-card-stories",1964:"components-app-snaps-snap-legacy-authorship-header-snap-legacy-authorship-header-stories",1998:"components-institutional-note-to-trader-note-to-trader-stories",2042:"components-app-modals-transaction-confirmed-transaction-confirmed-stories",2058:"pages-institutional-custody-custody-stories",2065:"pages-confirmations-components-confirm-page-container-confirm-page-container-content-confirm-page-container-warning-confirm-page-container-warning-stories",2144:"components-app-snaps-copyable-copyable-stories",2221:"pages-swaps-countdown-timer-countdown-timer-stories",2257:"pages-swaps-slippage-buttons-slippage-buttons-stories",2271:"components-app-srp-quiz-modal-SRPQuiz-SRPQuiz-stories",2274:"pages-confirmations-components-advanced-gas-controls-advanced-gas-controls-stories",2289:"components-app-snaps-snap-authorship-header-snap-authorship-header-stories",2319:"pages-confirmations-components-confirm-info-info-stories",2346:"components-app-create-new-vault-create-new-vault-stories",2349:"components-app-snaps-snap-list-item-snap-list-item-stories",2362:"components-multichain-pages-page-page-stories",2377:"components-ui-info-tooltip-info-tooltip-stories",2382:"components-ui-color-indicator-color-indicator-stories",2384:"components-ui-account-list-account-list-stories",2392:"components-multichain-asset-list-conversion-button-asset-list-conversion-button-stories",2401:"pages-settings-networks-tab-networks-list-network-list-stories",2412:"components-ui-new-network-info-new-network-info-stories",2421:"pages-confirmations-components-signature-request-signature-request-header-signature-request-header-stories",2426:"components-ui-spinner-spinner-stories",2442:"components-component-library-avatar-favicon-avatar-favicon-stories",2461:"pages-confirmations-confirmation-stories-snap-account-redirect-stories",2462:"components-component-library-popover-popover-stories",2507:"components-ui-radio-group-radio-group-stories",2518:"components-app-detected-token-detected-token-values-detected-token-values-stories",2550:"components-ui-disclosure-disclosure-stories",2557:"components-ui-numeric-input-numeric-input-stories",2595:"pages-confirmations-send-send-content-send-asset-row-send-asset-row-stories",2599:"components-multichain-app-header-app-header-stories",2620:"components-component-library-button-base-button-base-stories",2629:"components-component-library-banner-alert-banner-alert-stories",2670:"pages-onboarding-flow-creation-successful-creation-successful-stories",2678:"components-app-tab-bar-tab-bar-stories",2695:"components-component-library-button-link-button-link-stories",2746:"pages-confirmations-send-send-header-send-header-stories",2763:"pages-confirmations-components-confirm-title-title-stories",2796:"pages-swaps-dropdown-input-pair-dropdown-input-pair-stories",2819:"components-multichain-asset-picker-amount-asset-picker-modal-asset-picker-modal-stories",2827:"pages-confirmations-confirmation-stories-add-ethereum-chain-stories",2839:"components-ui-menu-menu-stories",2864:"components-component-library-container-container-stories",2868:"components-ui-editable-label-editable-label-stories",2869:"components-multichain-import-account-bottom-buttons-stories",2870:"components-ui-typography-typography-stories",2884:"pages-confirmations-components-signature-request-header-signature-request-header-stories",2902:"pages-confirmations-components-fee-details-component-fee-details-component-stories",2915:"components-component-library-textarea-textarea-stories",2946:"pages-desktop-pairing-desktop-pairing-stories",2964:"components-component-library-popover-header-popover-header-stories",2966:"pages-swaps-searchable-item-list-list-item-search-list-item-search-stories",3055:"components-component-library-help-text-help-text-stories",3104:"components-app-srp-input-srp-input-stories",3114:"components-ui-pulse-loader-pulse-loader-stories",3142:"components-multichain-asset-picker-amount-asset-picker-amount-stories",3229:"components-institutional-wrong-network-notification-wrong-network-notification-stories",3278:"pages-confirmations-confirm-send-ether-confirm-send-ether-stories",3289:"pages-permissions-connect-snaps-snap-update-snap-update-stories",3341:"pages-confirmations-components-confirm-subtitle-confirm-subtitle-stories",3358:"components-component-library-modal-content-modal-content-stories",3470:"components-ui-site-icon-site-icon-stories",3486:"components-component-library-picker-network-picker-network-stories",3498:"components-multichain-import-account-private-key-stories",3512:"components-app-nft-details-nft-details-stories",3545:"components-ui-page-container-page-container-stories",3607:"pages-confirmations-components-gas-details-item-gas-details-item-stories",3641:"pages-settings-alerts-tab-alerts-tab-stories",3646:"components-ui-definition-list-definition-list-stories",3652:"components-app-confirm-info-row-address-stories",3666:"components-multichain-account-details-account-details-stories",3698:"components-component-library-button-icon-button-icon-stories",3722:"pages-confirmations-components-signature-request-signature-request-data-signature-request-data-stories",3778:"components-app-snaps-snap-avatar-snap-avatar-stories",3793:"components-app-recovery-phrase-reminder-recovery-phrase-reminder-stories",3798:"components-ui-sender-to-recipient-sender-to-recipient-stories",3842:"components-multichain-network-list-item-network-list-item-stories",3847:"components-app-token-cell-token-cell-stories",3888:"components-ui-toggle-button-toggle-button-stories",3907:"components-multichain-activity-list-item-activity-list-item-stories",3913:"components-app-snaps-snap-ui-renderer-snap-ui-renderer-stories",3948:"pages-onboarding-flow-create-password-create-password-stories",3979:"components-multichain-pages-page-components-header-header-stories",3982:"components-app-terms-of-use-popup-terms-of-use-popup-stories",4021:"components-app-info-box-info-box-stories",4057:"pages-confirmations-components-confirm-page-container-confirm-detail-row-confirm-detail-row-stories",4125:"pages-create-snap-account-create-snap-account-stories",4153:"components-app-modals-hold-to-reveal-modal-hold-to-reveal-modal-stories",4272:"pages-permissions-connect-redirect-permissions-redirect-stories",4291:"components-app-permission-cell-permission-cell-stories",4313:"components-ui-textarea-textarea-stories",4341:"components-component-library-tag-url-tag-url-stories",4355:"components-app-transaction-list-transaction-list-stories",4356:"1-INTRODUCTION-stories-mdx",4361:"components-component-library-icon-icon-stories",4431:"components-institutional-jwt-url-form-jwt-url-form-stories",4489:"components-ui-actionable-message-actionable-message-stories",4496:"components-multichain-import-nfts-modal-import-nfts-modal-stories",4524:"components-institutional-interactive-replacement-token-notification-interactive-replacement-token-notification-stories",4525:"components-multichain-import-token-link-import-token-link-stories",4538:"components-ui-mascot-mascot-stories",4546:"components-app-modals-eth-sign-modal-eth-sign-modal-stories",4563:"components-ui-hex-to-decimal-hex-to-decimal-stories",4569:"components-component-library-box-box-stories",4570:"components-app-snaps-snap-update-alert-snap-update-alert-stories",4580:"components-app-snaps-snap-delineator-snap-delineator-stories",4606:"pages-confirmations-confirmation-components-confirmation-network-switch-confirmation-network-switch-stories",4635:"components-app-detected-token-detected-token-details-detected-token-details-stories",4644:"components-app-import-token-token-search-token-search-stories",4721:"components-app-nfts-detection-notice-import-nfts-nfts-detection-notice-import-nfts-stories",4727:"components-component-library-modal-header-modal-header-stories",4758:"pages-confirmations-confirmation-stories-remove-snap-account-stories",4768:"5-BREAKPOINTS-stories-mdx",4798:"components-app-selected-account-selected-account-stories",4845:"components-multichain-import-account-json-stories",4865:"pages-settings-contact-list-tab-contact-list-tab-stories",4870:"components-multichain-badge-status-badge-status-stories",4894:"components-ui-button-button-stories",4966:"pages-remove-snap-account-remove-snap-account-stories",4971:"pages-confirmations-components-confirm-page-container-confirm-page-container-header-confirm-page-container-header-stories",4998:"components-multichain-pages-permissions-page-permissions-page-stories",5038:"components-multichain-product-tour-popover-product-tour-popover-stories",5064:"pages-onboarding-flow-welcome-welcome-stories",5092:"pages-institutional-interactive-replacement-token-page-interactive-replacement-token-page-stories",5181:"components-component-library-button-secondary-button-secondary-stories",5189:"pages-confirmations-components-confirm-gas-display-confirm-gas-display-stories",5193:"components-ui-logo-logo-stories",5199:"components-ui-slider-slider-stories",5261:"pages-confirmations-components-transaction-detail-transaction-detail-stories",5269:"pages-onboarding-flow-metametrics-metametrics-stories",5294:"pages-confirmations-components-advanced-gas-fee-popover-advanced-gas-fee-defaults-advanced-gas-fee-defaults-stories",5295:"components-ui-confusable-confusable-stories",5363:"components-multichain-import-tokens-modal-import-tokens-modal-confirm-stories",5382:"pages-confirmations-components-transaction-detail-item-transaction-detail-item-stories",5438:"components-multichain-pages-page-components-footer-footer-stories",5552:"components-component-library-select-button-select-button-stories",5630:"components-multichain-token-list-item-token-list-item-stories",5735:"components-component-library-modal-overlay-modal-overlay-stories",5770:"pages-settings-settings-search-settings-search-stories",5810:"components-app-whats-new-popup-whats-new-popup-stories",5819:"pages-confirmations-send-send-content-send-hex-data-row-send-hex-data-row-stories",5869:"pages-confirmations-components-signature-request-siwe-signature-request-siwe-tag-signature-request-siwe-tag-stories",5890:"components-app-hold-to-reveal-button-hold-to-reveal-button-stories",5912:"pages-snap-account-redirect-snap-account-redirect-stories",5914:"components-app-transaction-list-item-transaction-list-item-stories",5962:"components-app-name-name-stories",5970:"components-component-library-avatar-token-avatar-token-stories",5975:"components-app-snaps-install-error-install-error-stories",6005:"pages-swaps-transaction-settings-transaction-settings-stories",6026:"components-component-library-tag-tag-stories",6032:"components-app-snaps-snap-ui-markdown-snap-ui-markdown-stories",6068:"components-component-library-banner-tip-banner-tip-stories",6161:"components-multichain-import-account-import-account-stories",6209:"pages-confirmations-components-confirmation-warning-modal-confirm-warning-modal-stories",6210:"components-app-import-token-token-list-token-list-placeholder-token-list-placeholder-stories",6239:"pages-confirmations-send-send-content-send-gas-row-send-gas-row-stories",6260:"components-ui-dialog-dialog-stories",6262:"pages-confirmations-confirmation-stories-error-stories",6282:"pages-onboarding-flow-secure-your-wallet-secure-your-wallet-stories",6313:"components-component-library-modal-focus-modal-focus-stories",6340:"components-app-nft-options-nft-options-stories",6402:"pages-permissions-connect-snaps-snap-install-snap-install-stories",6410:"components-ui-jazzicon-jazzicon-stories",6457:"pages-confirmations-send-send-footer-send-footer-stories",6522:"pages-confirmations-components-review-spending-cap-review-spending-cap-stories",6530:"components-component-library-avatar-icon-avatar-icon-stories",6545:"components-ui-account-mismatch-warning-account-mismatch-warning-stories",6555:"components-institutional-jwt-dropdown-jwt-dropdown-stories",6636:"components-ui-url-icon-url-icon-stories",6644:"components-component-library-button-primary-button-primary-stories",6655:"pages-settings-networks-tab-networks-list-item-networks-list-item-stories",6679:"components-app-metamask-template-renderer-metamask-template-renderer-stories",6689:"components-app-snaps-snap-privacy-warning-snap-privacy-warning-stories",6761:"components-ui-update-nickname-popover-update-nickname-popover-stories",6796:"components-ui-nft-info-nft-info-stories",6806:"pages-confirmations-components-custom-spending-cap-custom-spending-cap-stories",6810:"components-ui-error-message-error-message-stories",6824:"components-app-detected-token-detected-token-address-detected-token-address-stories",6894:"pages-permissions-connect-permissions-connect-stories",6897:"components-multichain-receive-modal-receive-modal-stories",6928:"components-ui-site-origin-site-origin-stories",6948:"components-multichain-account-list-item-menu-account-list-item-menu-stories",6966:"pages-swaps-prepare-swap-page-smart-transactions-popover-stories",6973:"components-ui-tooltip-tooltip-stories",6991:"pages-settings-info-tab-info-tab-stories",7006:"components-component-library-input-input-stories",7009:"pages-confirmations-components-security-provider-banner-alert-security-provider-banner-alert-stories",7010:"pages-confirmations-components-signature-request-signature-request-message-signature-request-message-stories",7052:"components-institutional-transaction-failed-modal-transaction-failed-modal-stories",7061:"components-multichain-account-list-menu-account-list-menu-stories",7076:"components-multichain-create-account-create-account-stories",7108:"pages-confirmations-components-signature-request-siwe-signature-request-siwe-header-signature-request-siwe-header-stories",7172:"4-SHADOW-stories-mdx",7182:"components-ui-tabs-tabs-stories",7192:"pages-confirmations-components-confirm-header-header-stories",7206:"pages-swaps-dropdown-search-list-dropdown-search-list-stories",7210:"components-ui-dropdown-dropdown-stories",7226:"components-component-library-modal-body-modal-body-stories",7231:"components-ui-identicon-identicon-stories",7270:"pages-create-account-connect-hardware-select-hardware-stories",7305:"components-app-confirm-info-row-url-stories",7317:"components-ui-currency-display-currency-display-stories",7355:"components-ui-chip-chip-stories",7396:"components-app-user-preferenced-currency-display-user-preferenced-currency-display-stories",7422:"pages-onboarding-flow-secure-your-wallet-skip-srp-backup-popover-stories",7425:"components-ui-breadcrumbs-breadcrumbs-stories",7433:"pages-confirmations-components-edit-gas-fee-icon-edit-gas-fee-icon-stories",7464:"pages-confirmations-confirmation-stories-create-snap-account-stories",7465:"pages-institutional-onboarding-successful-onboarding-successful-stories",7466:"pages-onboarding-flow-pin-extension-pin-extension-stories",7490:"components-app-home-notification-home-notification-stories",7507:"pages-confirmations-components-signature-request-siwe-signature-request-siwe-message-signature-request-siwe-message-stories",7527:"components-ui-alert-alert-stories",7568:"components-component-library-form-text-field-form-text-field-stories",7678:"pages-confirmations-components-signature-request-siwe-signature-request-siwe-stories",7711:"pages-confirmations-components-set-approval-for-all-warning-set-approval-for-all-warning-stories",7719:"components-app-confirm-info-row-row-stories",7720:"pages-permissions-connect-snaps-snap-result-snap-result-stories",7768:"components-app-connected-accounts-permissions-connected-account-permissions-stories",7777:"components-component-library-banner-base-banner-base-stories",7825:"components-component-library-avatar-network-avatar-network-stories",7827:"pages-confirmations-confirmation-stories-switch-ethereum-chain-stories",7834:"pages-confirmations-components-signature-request-original-signature-request-original-warning-signature-request-original-warning-stories",7841:"pages-confirmations-confirmation-stories-success-stories",7860:"pages-confirmations-send-send-content-send-content-stories",7874:"components-ui-icon-border-icon-border-stories",8019:"components-ui-deprecated-networks-deprecated-networks-stories",8022:"pages-swaps-exchange-rate-display-exchange-rate-display-stories",8024:"pages-confirmations-components-confirm-title-confirm-title-stories",8038:"pages-confirmations-components-approve-content-card-approve-content-card-stories",8095:"pages-confirmations-confirm-approve-confirm-approve-content-confirm-approve-content-stories",8098:"components-multichain-nft-item-nft-item-stories",8125:"components-app-snaps-snap-connect-cell-snap-connect-cell-stories",8130:"pages-connected-sites-connected-sites-stories",8136:"components-app-confirm-info-row-value-double-stories",8161:"pages-permissions-connect-snaps-snaps-connect-snaps-connect-stories",8202:"components-multichain-account-picker-account-picker-stories",8252:"pages-swaps-loading-swaps-quotes-loading-swap-quotes-stories",8260:"components-app-network-account-balance-header-network-account-balance-header-stories",8261:"components-component-library-avatar-account-avatar-account-stories",8279:"pages-confirmations-token-allowance-token-allowance-stories",8306:"components-ui-list-item-list-item-stories",8334:"components-ui-metafox-logo-metafox-logo-stories",8347:"pages-confirmations-components-confirm-footer-footer-stories",8349:"pages-institutional-connect-custody-account-list-stories",8353:"components-app-transaction-activity-log-transaction-activity-log-icon-transaction-activity-log-icon-stories",8438:"components-app-cancel-speedup-popover-cancel-speedup-popover-stories",8465:"components-app-network-display-network-display-stories",8570:"pages-confirm-add-suggested-nft-confirm-add-suggested-nft-stories",8605:"components-app-permissions-connect-permission-list-permissions-connect-permission-list-stories",8616:"components-app-modals-new-account-modal-new-account-modal-stories",8628:"components-app-nft-default-image-nft-default-image-stories",8663:"pages-confirmations-components-signature-request-original-signature-request-original-stories",8709:"pages-confirmations-components-confirm-page-container-confirm-page-container-content-confirm-page-container-summary-confirm-page-container-summary-stories",8745:"pages-settings-advanced-tab-advanced-tab-stories",8809:"pages-unlock-page-unlock-page-stories",8823:"components-component-library-modal-modal-stories",8827:"components-ui-popover-popover-stories",8828:"components-app-detected-token-detected-token-selection-popover-detected-token-selection-popover-stories",8868:"pages-confirmations-components-contract-token-values-contract-token-values-stories",8871:"components-institutional-custody-confirm-link-modal-custody-confirm-link-modal-stories",9025:"components-app-nfts-detection-notice-nfts-tab-nfts-detection-notice-stories",9027:"components-multichain-account-list-item-account-list-item-stories",9105:"components-ui-loading-heartbeat-loading-heartbeat-stories",9106:"components-app-beta-header-beta-header-stories",9121:"pages-confirmations-components-contract-details-modal-contract-details-modal-stories",9137:"pages-create-account-connect-hardware-account-list-stories",9138:"pages-swaps-select-quote-popover-select-quote-popover-stories",9146:"pages-swaps-build-quote-build-quote-stories",9173:"components-component-library-text-text-stories",9196:"components-component-library-label-label-stories",9250:"components-ui-box-box-stories",9253:"components-app-account-list-item-account-list-item-stories",9268:"pages-institutional-confirm-add-custodian-token-confirm-add-custodian-token-stories",9274:"pages-settings-settings-stories",9288:"components-ui-form-combo-field-form-combo-field-stories",9289:"components-app-modals-hide-token-confirmation-modal-hide-token-confirmation-stories",9314:"components-component-library-badge-wrapper-badge-wrapper-stories",9315:"components-app-confirm-info-info-stories",9333:"components-component-library-select-wrapper-select-wrapper-stories",9360:"components-component-library-COMPONENT-LIBRARY-stories-mdx",9438:"components-multichain-avatar-group-avatar-group-stories",9443:"components-app-qr-hardware-popover-qr-hardware-sign-request-player-stories",9444:"pages-confirmations-components-signature-request-signature-request-stories",9462:"components-multichain-address-copy-button-address-copy-button-stories",9469:"components-app-currency-input-currency-input-stories",9487:"components-component-library-modal-footer-modal-footer-stories",9525:"components-component-library-avatar-base-avatar-base-stories",9650:"components-app-detected-token-detected-token-aggregators-detected-token-aggregators-stories",9659:"pages-confirmations-components-edit-gas-popover-edit-gas-popover-stories",9701:"components-ui-nickname-popover-nickname-popover-stories",9713:"components-component-library-checkbox-checkbox-stories",9772:"components-institutional-confirm-remove-jwt-modal-confirm-remove-jwt-modal-stories",9784:"components-multichain-connected-site-menu-connected-site-menu-stories",9809:"components-component-library-header-base-header-base-stories",9845:"2-DOCUMENTATION-stories-mdx",9863:"pages-confirmations-components-security-provider-banner-alert-blockaid-banner-alert-blockaid-banner-alert-stories",9874:"3-COLORS-stories-mdx",9898:"components-institutional-custody-labels-custody-labels-stories",9938:"components-ui-form-field-form-field-stories",9945:"pages-confirmations-components-confirm-hexdata-confirm-hexdata-stories",9970:"components-app-add-network-add-network-stories"})[chunkId]||chunkId)+"."+({24:"2a873ab0",48:"62196e1e",159:"a7221ff2",172:"27a1aab3",204:"07a366a7",226:"7720ef78",246:"a2eb6d29",276:"80b06175",373:"79b189d6",375:"0f7074d6",379:"eb413064",384:"39f223d7",456:"d75568f9",457:"4c6dab8c",477:"073dcb18",490:"db7beaf5",500:"3467d192",530:"6d406063",533:"ffe4b3cc",574:"57eeb143",583:"d7332a0e",600:"1d45e823",615:"badf30ca",630:"6b8f0f1e",632:"b8dc28e3",657:"d8fc1fbf",762:"70ac1054",769:"931ecf30",792:"81b402db",888:"fcb35600",902:"3a2e7a9b",934:"8b037788",957:"30b2b507",981:"32ff5f53",984:"a6a15b88",999:"ac710379",1010:"a66e1382",1013:"c36efed9",1022:"6d2c66d9",1070:"8c49e8c3",1086:"9fd59372",1109:"9d4a6b97",1153:"254f52da",1177:"58c4887a",1207:"1ed85296",1236:"f70268fe",1279:"12b7e4ff",1290:"4a3f6c93",1302:"ea241102",1322:"77867a1b",1330:"dd939719",1337:"14b5d7f9",1369:"e9ec0140",1410:"8661537e",1428:"c85b3609",1459:"00cfdca4",1462:"eeea6744",1479:"4a4d0849",1504:"43c55e02",1531:"8870b2e8",1547:"9ab17a07",1589:"628921af",1628:"7e58a0b4",1640:"ef0a5e48",1650:"243967c9",1686:"f8fa4c1e",1703:"dfd234cc",1740:"23d6ee42",1753:"cbf7b560",1767:"d3f2feb6",1788:"deed7d1a",1803:"aa8761db",1821:"7c8664ff",1853:"8fa39e29",1882:"544ddb0e",1964:"229ca277",1998:"130416eb",2037:"3e6f31b6",2042:"9518e09c",2058:"a0690176",2065:"fee10876",2144:"bc8632c2",2148:"5fa8185b",2221:"2e099e68",2235:"cd11a2b8",2254:"9fe853e4",2257:"f56cea3f",2263:"15d63058",2271:"c0f35952",2274:"1acbd893",2289:"3322a158",2319:"407fe242",2346:"40494689",2349:"0f393c1d",2362:"25c10d21",2377:"51f76a23",2382:"046acd36",2384:"0fb73a3b",2392:"adcdaf7f",2401:"5531cdc8",2412:"63d02373",2421:"1e5220ef",2426:"57ade033",2442:"3fe354e1",2461:"411f7314",2462:"e27d5d63",2507:"2dc1ea9d",2518:"f6761a35",2550:"e65d9b0c",2557:"62d20def",2595:"428bed1f",2599:"e033cc41",2620:"3e1dc0d4",2629:"947519d2",2670:"bb77b7ed",2678:"ef0ff7fc",2691:"feffb6da",2695:"b5dc0856",2746:"ed34acf4",2763:"ba4f229e",2796:"70a994a0",2807:"0d9c507f",2813:"528a40e5",2819:"31c964a4",2827:"9a576b17",2839:"aa320405",2864:"e67c9ff0",2868:"bec48eb5",2869:"5a292cbd",2870:"d45ef1ec",2884:"a6a0ba0a",2902:"7879bb5b",2915:"eba3bd6c",2946:"cb3674c1",2964:"2fdc4a45",2966:"7ccb0400",2979:"bb848cb7",3016:"22ee0a67",3055:"e75bab24",3104:"89630039",3114:"cd8878ca",3142:"a7e3ff5b",3229:"72f711a4",3278:"eac8edc7",3289:"3d71a6fc",3341:"7a4566e0",3358:"ba71d8e0",3470:"89c6f16c",3474:"43b66cfb",3486:"c0b550c5",3498:"d4bd0494",3512:"21d35d34",3545:"62b0c9a3",3607:"1cbe3f10",3641:"aaed850f",3646:"634043cc",3652:"a793dcb8",3666:"a33046a5",3693:"2951da98",3698:"d19cdbfa",3722:"53f1c4c2",3778:"89e698f4",3793:"7b674f83",3798:"4f76c388",3842:"18e2c057",3847:"94909432",3888:"24ef8fc6",3897:"9ea9c674",3907:"db1e8d05",3913:"a876ed45",3948:"afd9af36",3979:"3eb3b4fa",3982:"02ea0bd7",4021:"11dab0b3",4057:"aa9d0691",4125:"b4f49939",4153:"ae56285e",4261:"085d1fa2",4272:"bed2da13",4291:"d58fe594",4313:"1a26fa54",4341:"0286f7dc",4355:"b5e8cbde",4356:"fb52804d",4361:"c5eb3350",4431:"28fe1e78",4479:"3531ee15",4489:"c4bc99c7",4496:"f4815663",4524:"b71fbd5a",4525:"278423fa",4538:"d7c6c2e7",4542:"ba3b9822",4546:"d4a6e0e8",4563:"33783e4e",4569:"b91d231d",4570:"f2f1c4be",4580:"b0f79c9e",4606:"87128ffb",4635:"c826e1c5",4644:"514d985d",4692:"dc864219",4721:"71f6349c",4727:"64807d03",4758:"18fad244",4768:"72104b17",4798:"da600c16",4843:"48ce1ad2",4845:"bfe7f5c8",4849:"e833964f",4865:"63ec93ed",4870:"9ca3f206",4894:"d1d4ae10",4966:"1c9e5778",4970:"82817e47",4971:"4ff3381d",4986:"37acd629",4998:"19dffcd8",5038:"23d99615",5064:"f0eb5b86",5092:"11cee315",5109:"6fe2a781",5181:"9ec651fd",5182:"1e708387",5189:"93629e5e",5193:"c9c8ad34",5199:"a1690674",5248:"5bc22920",5261:"57f14ca0",5269:"d1a19f6a",5294:"fb1f93df",5295:"c8af37dc",5363:"1b9355b1",5382:"d5840c2f",5394:"be2e90f0",5438:"5f33ab4b",5472:"d93fcd86",5552:"4ffe75f7",5613:"79dacef9",5630:"e06280e8",5635:"66d237b6",5644:"3c9b782a",5735:"15e535e8",5770:"d378c739",5810:"5b5d14af",5819:"a5f0fd97",5869:"937a9909",5890:"550a45dc",5912:"8c726e0c",5914:"50e42ec1",5962:"487dc23b",5970:"ff7ec9ab",5975:"00ad82e3",6005:"034ffd88",6026:"bac71868",6032:"3cec6921",6068:"dda13fa1",6161:"e9fcecca",6203:"7046ee26",6209:"8f4553cd",6210:"566e24fd",6215:"ccc16e69",6222:"d5b30a1d",6239:"f0d6b51a",6260:"a4909781",6262:"aa9dae93",6282:"346d7341",6313:"c0136716",6340:"ae1a2efb",6390:"9b1aa109",6402:"b726275b",6410:"a7a79ad0",6457:"0c2e6f9f",6522:"9cb7a97f",6527:"d196c360",6530:"bfa2b195",6535:"1b69c6d9",6545:"083c73b3",6555:"9c3afa65",6582:"ed0b8168",6636:"c9b78fd5",6644:"7722d5a5",6655:"3317aac7",6679:"66d15372",6689:"e1c3081b",6761:"c232941b",6796:"fe845006",6806:"d7b8d403",6810:"2c3fb4f2",6824:"6a4a7ffb",6894:"0bde1ee9",6897:"6842fb0f",6928:"54213e65",6948:"7889b31a",6966:"0c7a7205",6973:"33f63d52",6976:"c314abaa",6991:"df00df25",7006:"86c97362",7009:"eeb6cc30",7010:"58f770af",7052:"8179ba1f",7061:"eb3a276e",7072:"d34382cb",7074:"a7208757",7076:"82c5c4be",7108:"dc264350",7143:"fe4af8c9",7172:"2f5342c3",7174:"3944ea64",7182:"8c62b50e",7192:"b272a7ea",7200:"067e839f",7206:"e068a8bc",7210:"14464bed",7226:"eb64f10c",7231:"24fae1aa",7245:"687effcd",7246:"99729671",7270:"26a27ecf",7298:"fba4d282",7305:"f8560b19",7317:"58a9fe39",7355:"3d6f0cc8",7364:"8486dbb1",7396:"1673375c",7422:"2cea7a14",7425:"0c1de02a",7433:"d77499fe",7464:"1718eb9f",7465:"5ce9b3a9",7466:"0649a53a",7487:"a95fd430",7490:"879bcaa5",7507:"7a601620",7527:"db96a114",7568:"503e1e47",7615:"a680d7f5",7631:"913fa859",7637:"d091f9c7",7678:"dc21f8c5",7680:"a616892c",7711:"d23d19fd",7719:"96574806",7720:"142adaca",7730:"053fed16",7743:"3910be9a",7744:"6bce46ec",7750:"14722eba",7768:"892fec02",7777:"b9080654",7825:"b41a3a92",7827:"85e42978",7834:"8b062a96",7841:"7d7d0d96",7860:"70ab11a4",7874:"a65a51d4",7895:"aa8782fe",7963:"4a91145e",7964:"2c0415d1",8019:"9324ebda",8022:"07355a61",8024:"a2afc77d",8038:"a6af3263",8047:"fb8452b8",8095:"52fee7fc",8098:"5fc766e8",8125:"c86b7027",8130:"fbc0ecab",8136:"12b82c4b",8161:"227877d2",8202:"955f84e0",8243:"5fe690d5",8252:"00d22f1c",8260:"62f8ff0f",8261:"2a993ce8",8279:"36513ef5",8306:"73de3741",8334:"e459e43f",8347:"239a0287",8349:"931342f9",8353:"3c191aca",8438:"4762a4c8",8456:"b3252caf",8465:"de91fc45",8570:"90d14c3e",8605:"427e5673",8613:"a777e3a4",8616:"91e58f80",8628:"89abf2ae",8645:"2f5308a8",8663:"0625eb26",8694:"d6e554b4",8709:"7b3f5a8e",8726:"a8d79134",8745:"f5e70d41",8809:"a8f184fe",8823:"4209fc66",8827:"d0fd7a54",8828:"6da2da71",8830:"6339f9fe",8868:"2d6ae243",8871:"df7b67d5",8913:"8a58a2a3",8995:"43dcf9e2",9025:"2a7d05f7",9027:"34d74466",9059:"40de9856",9105:"bcd81c57",9106:"abab8deb",9115:"094488ec",9121:"b040feae",9137:"156abde5",9138:"5fae0db2",9146:"9479bdd0",9173:"ad883a2b",9196:"f7349a3e",9250:"4fdd567e",9253:"02bc4ddd",9268:"116fd404",9274:"31e31baa",9288:"279a762b",9289:"5e7f4e20",9314:"0bd2eda0",9315:"96c009d4",9333:"797e4d2c",9360:"8d3b4fbe",9367:"88cc0b98",9377:"f4be4ae0",9433:"1c77c9f4",9438:"6f133de2",9443:"bc4cc83e",9444:"416ac766",9462:"088c6216",9469:"806ef353",9487:"02e65411",9525:"20402c5f",9555:"5dfc32a5",9589:"c05d4e2f",9619:"386f68dc",9650:"6ff79146",9659:"c31831a0",9660:"95e96ac1",9662:"120a71ee",9701:"43cd15b6",9706:"006700f5",9713:"2681a6a2",9762:"ebfc7b08",9772:"a306d70a",9784:"6ee05e37",9809:"8ad03148",9845:"42449e5b",9863:"f2ac94c0",9874:"f79e6129",9885:"072d43c5",9898:"6e6f3a89",9938:"7af3a429",9945:"5de5900c",9970:"8a838fe2"})[chunkId]+".iframe.bundle.js",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),(()=>{var inProgress={},dataWebpackPrefix="metamask-crx:";__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url]){inProgress[url].push(done);return}if(void 0!==key)for(var script,needAttach,scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")==dataWebpackPrefix+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack",dataWebpackPrefix+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach(fn=>fn(event)),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}})(),__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData){if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]);promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=Error();__webpack_require__.l(url,event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}},"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0}},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some(id=>0!==installedChunks[id])){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();