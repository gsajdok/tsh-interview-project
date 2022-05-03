import React from 'react';
import { render } from '../../tests';
import {Products} from './Products';

import {act, fireEvent, waitFor} from "@testing-library/react";
import {PRODUCTSL12P1 as mockProductsL12p1} from "../../mock/mockProducts_l12_p1";
import {PRODUCTSEMPTY as mockProductsEmpty} from "../../mock/mockProducts_empty";
import {Product} from "./Product";


describe('The products page', () => {
    beforeEach(() => {
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });

    let renderedPage;

    test('Should render with 12 products', async () => {
        const fetchMock = jest
            .spyOn(global, 'fetch')
            .mockImplementation(() =>
                Promise.resolve({json: () => Promise.resolve(mockProductsL12p1)})
            )
        await act( async () => renderedPage = render(<Products/>))
        await new Promise((r) => setTimeout(r, 500));

        await waitFor( () => {
            expect(
                renderedPage.container
                    .querySelector('.products')
                    .querySelector('.products__list')
                    .querySelectorAll('.product').length
            ).toBe(12)
        })
    })

    test('Should render a spinner if loads nothing/hasnt loaded anything yet', async () => {
        const fetchMock = jest
            .spyOn(global, 'fetch')
            .mockImplementation(() =>
                Promise.resolve({json: () => Promise.resolve([])})
            )
        await act( async () => renderedPage = render(<Products/>))
        await new Promise((r) => setTimeout(r, 500));

        expect(
            renderedPage.container
                .querySelector('.products')
                .querySelectorAll('.spinner').length
        ).toBe(1);
    })

    test('Should render a no products page if no products found', async () => {
        const fetchMock = jest
            .spyOn(global, 'fetch')
            .mockImplementation(() =>
                Promise.resolve({json: () => Promise.resolve(mockProductsEmpty)})
            )
        await act( async () => renderedPage = render(<Products/>))
        await new Promise((r) => setTimeout(r, 500));

        expect(
            renderedPage.container
                .querySelector('.products')
                .querySelectorAll('.product.product--empty').length
        ).toBe(1);
    })
})