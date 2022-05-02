import React from 'react';

import { render } from '../../tests';
import {Pagination} from "./Pagination";


describe('Pagination', () => {
    test(`Display 1 link if there's 1 page`, async () => {
        const renderedPage = render(<Pagination metaData={{totalPages: 1, totalItems: 100, currentPage: 1}}/>);
        expect(
            renderedPage
                .container
                .querySelector('.pagination')
                .querySelector('.pagination__digits')
                .childElementCount
        ).toBe(1);
    });

    test(`Display 6 links and a spacer in the middle if there's 7 pages`, async () => {
        const renderedPage = render(<Pagination metaData={{totalPages: 10, totalItems: 100, currentPage: 1}}/>);
        expect(
            renderedPage
                .container
                .querySelector('.pagination')
                .querySelector('.pagination__digits')
                .childElementCount
        ).toBe(7);
        expect(
            renderedPage
                .container
                .querySelector('.pagination')
                .querySelector('.pagination__digits')
                .querySelector(':nth-child(4)')
                .className
        ).toBe('pagination__spacer')
    });

    test('Display pages [1, 2, 3] if on first or second page', async () => {
        for(let i = 1; i<=2; i++) {
            const renderedPage = render(<Pagination metaData={{currentPage: i, totalItems: 100, totalPages: 10}}/>);
            expect(
                parseInt(Array.from(renderedPage
                    .container
                    .querySelector('.pagination')
                    .querySelector('.pagination__digits')
                    .querySelectorAll('.pagination__link'))[i-1].innerHTML)
            ).toBe(i)
        }
    })
    test('Display pages [2, 3, 4] if on third page', async () => {
            const renderedPage = render(<Pagination metaData={{currentPage: 3, totalItems: 100, totalPages: 10}}/>);
            expect(
                Array.from(renderedPage
                    .container
                    .querySelector('.pagination')
                    .querySelector('.pagination__digits')
                    .querySelectorAll('.pagination__link')).splice(0,3).map(e=>e.innerHTML)
            ).toStrictEqual(["2","3","4"])
    })
    test('Displays 6 last pages if the spacer is no longer necessary', async() => {
        const renderedPage = render(<Pagination metaData={{currentPage: 6, totalItems: 100, totalPages: 10}}/>);
        expect(
            Array.from(renderedPage
                .container
                .querySelector('.pagination')
                .querySelector('.pagination__digits')
                .querySelectorAll('.pagination__link')).map(e=>e.innerHTML)
        ).toStrictEqual(["5","6","7", "8", "9", "10"])
    })
});
