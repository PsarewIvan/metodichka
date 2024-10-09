(() => {
    const infoContents = document.querySelectorAll('.js-info');

    infoContents.forEach((infoContent) => {
        const infoBlock = infoContent.querySelector('.js-info-block');
        const infoButton = infoContent.querySelector('.js-info-button');

        infoButton?.addEventListener('click', () => {
            infoBlock?.classList.toggle('hidden');
        });
    });
})();

(() => {
    const table = document.querySelector('.js-metrics-table');
    const tbody = table?.querySelector('tbody');
    const rows = tbody?.querySelectorAll('.js-metrics-row');
    const ellipsisAboveRow = tbody?.querySelector('.js-ellipsis-above-row');
    const moreButton = tbody?.querySelector('.js-metrics-table-more-button');
    const lowButton = tbody?.querySelector('.js-metrics-table-low-button');
    const moreButtonsRow = tbody?.querySelector('.js-more-button-row');

    if (rows) {
        let todayRow = null;
        let todayIndex = -1;
        let hasRowsHidden = false;

        rows.forEach((row, index) => {
            if (row.classList.contains('js-today')) {
                todayRow = row;
                todayIndex = index;
            }
        });

        hideRow();

        if (todayIndex < 2) {
            ellipsisAboveRow?.classList.add('hidden');
        }

        if (!hasRowsHidden) {
            moreButtonsRow?.classList.add('hidden');
        }

        moreButton?.addEventListener('click', () => {
            ellipsisAboveRow?.classList.add('hidden');
            moreButton?.classList.add('hidden');
            lowButton?.classList.remove('hidden');

            rows.forEach((row) => {
                row.classList.remove('hidden');
            });
        });

        lowButton?.addEventListener('click', () => {
            hideRow();
        });

        function hideRow() {
            rows.forEach((row, index) => {
                if (todayIndex > index + 1 || todayIndex + 1 < index) {
                    row.classList.add('hidden');
                    hasRowsHidden = true;
                }
            });

            moreButton?.classList.remove('hidden');
            lowButton?.classList.add('hidden');

            ellipsisAboveRow?.classList.remove('hidden');
        }
    }
})();

(() => {
    let hasTableInit = false;
    let hasMobileInit = false;
    let hasMenuOpen = false;

    const burger = document.querySelector('.js-header-burger');
    const nav = document.querySelector('.js-nav');

    const header = document.querySelector('.js-header');
    const content = document.getElementById('js-main-content');

    burger?.addEventListener('click', onBurgerClick);

    window.addEventListener('resize', initMobileTable);
    initMobileTable();

    function initMobileTable() {
        if (window.innerWidth < 1056) {
            const headerRect = header?.getBoundingClientRect();

            if (!hasTableInit) {
                nav?.classList.add('hidden');
            }

            if (content?.stye && headerRect) {
                content.stye.marginTop = `${headerRect.height}px`;
            }

            hasTableInit = true;
        } else if (hasTableInit) {
            nav?.classList.remove('hidden');
            hasTableInit = false;
        }

        if (window.innerWidth < 768) {
            if (!hasMobileInit) {
            }

            hasMobileInit = true;
        } else if (hasMobileInit) {
            hasMobileInit = false;
        }
    }

    function onBurgerClick() {
        if (hasMenuOpen) {
            hasMenuOpen = false;
            nav?.classList.add('hidden');
            burger?.classList.remove('open');
            document.body.classList.remove('body-lock');
        } else {
            hasMenuOpen = true;
            nav?.classList.remove('hidden');
            burger?.classList.add('open');
            document.body.classList.add('body-lock');
        }
    }
})();

(() => {
    const selectsWrapper = document.querySelectorAll(
        '.js-select-component-wrapper'
    );

    selectsWrapper.forEach((selectWrapper) => {
        const select = selectWrapper.querySelector('.js-select-component');
        const placeholder = select?.dataset.placeholder;
        const options = select?.querySelectorAll('option');
        const reset = selectWrapper?.querySelector('.js-select-reset');

        const dataOptions = Array.from(options).map((option) => ({
            text: option.innerHTML,
            value: option.value,
        }));

        const slimSelect = new SlimSelect({
            select,
            settings: {
                showSearch: false,
            },
            data: [
                ...(placeholder
                    ? [{ placeholder: true, text: placeholder }]
                    : []),
                ...dataOptions,
            ],
            events: {
                afterChange: (evt) => {
                    const value = evt?.[0]?.value;

                    if (value) {
                        reset.classList.remove('hidden');
                    }
                },
            },
        });

        reset?.addEventListener('click', () => {
            if (slimSelect) {
                slimSelect.setSelected('', false);
                reset.classList.add('hidden');
            }
        });

        const selectDiv = selectWrapper.querySelector(
            `div[data-id="${slimSelect?.settings?.id}"]`
        );
        const arrow = selectWrapper.querySelector('.ss-arrow');

        select?.addEventListener('change', (event) => {
            if (dataOptions.some(({ value }) => value === event.target.value)) {
                selectDiv.classList.add('select-component_selected');
                arrow?.classList.add('transparent');
            } else {
                selectDiv.classList.remove('select-component_selected');
                arrow?.classList.remove('transparent');
            }
        });
    });
})();

(() => {
    const tabsBlocks = document.querySelectorAll('.js-tabs');

    tabsBlocks.forEach((tabs) => {
        const buttons = tabs.querySelectorAll('.js-tab-button');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                resetButtons();
                button.classList.add('active');
            });
        });

        function resetButtons() {
            buttons.forEach((button) => {
                button.classList.remove('active');
            });
        }
    });
})();

//# sourceMappingURL=index.js.map
