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
