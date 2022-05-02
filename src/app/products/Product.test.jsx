import React from 'react';

import { render } from '../../tests';
import {cleanup, fireEvent} from '@testing-library/react';
import {Product} from "./Product";

//Renders
//Renders its components
//Is disabled when disabled
//has Promo when promoted
//amount of stars works

import {NORMALPRODUCT, DISABLEDPRODUCT, PROMOPRODUCT} from "../../mock/mockProduct";

describe('Product', () => {
    let renderedPage;
    beforeEach(() => {
        renderedPage = render(<Product item={NORMALPRODUCT}/>);
    })

    test('Should display the image', async () => {
        expect(
            renderedPage.container
                .querySelector('.product__image')
                .querySelector('img').getAttribute('src')
        ).toBe(NORMALPRODUCT.image)
    });
    test('which isnt disabled', async () => {
        expect(
            renderedPage.container
                .querySelector('.product__image')
                .querySelector('img').classList.contains("product__image--disabled")
        ).toBe(false)
    });
    test('Doesnt have the promo tag', async () => {
        expect(
            renderedPage.container
                .querySelector('.product__image')
                .querySelector('.product__image__promo')
        ).toBe(null);
    });
    test('Should display the title', async () => {
        expect(
            renderedPage.container
                .querySelector('.product__title')
                .querySelector('h2').textContent
        ).toBe(NORMALPRODUCT.name)
    });
    test('Should display the description', async () => {
        expect(
            renderedPage.container
                .querySelector('.product__description')
                .querySelector('p').textContent
        ).toBe(NORMALPRODUCT.description)
    });
    test('Should display 5 stars', async () => {
        expect(
            renderedPage.container
                .querySelector('.product__rating')
                .querySelectorAll('.star').length
        ).toBe(5)
    });
    test('of which the rest are empty', async () => {
        expect(
            renderedPage.container
                .querySelector('.product__rating')
                .querySelectorAll('.star.star--empty').length
        ).toBe(5-NORMALPRODUCT.rating)
    })
    test('Should display the button', async() => {
        expect(
        renderedPage.container
            .querySelector('.product__details')
            .querySelector('a.button')
        ).not.toBe(null);
    })
    test('which shouldnt be disabled', async() => {
        expect(
            renderedPage.container
                .querySelector('.product__details')
                .querySelector('a.button').hasAttribute("disabled")
        ).toBe(false)
    })
    test('and should be able to launch the modal window', async() => {
        const button = renderedPage.container.querySelector('.product__details a.button');
        fireEvent.click(button);
        expect(renderedPage.container.querySelector('.modal')).not.toBe(null)
    })
});

describe('Disabled product', () => {
    let renderedPage;
    beforeEach(() => {
        renderedPage = render(<Product item={DISABLEDPRODUCT}/>);
    })

    test('has a disabled class assigned to the image', async () => {
        expect(
            renderedPage.container
                .querySelector('.product__image')
                .querySelector('img').classList.contains("product__image--disabled")
        ).toBe(true)
    });
    test('and the button is disabled', async () => {
        expect(
            renderedPage.container
                .querySelector('.product__details')
                .querySelector('a.button').hasAttribute('disabled')
        ).toBe(true)
    });
    test('and isnt able to launch the modal window', async() => {
        const button = renderedPage.container.querySelector('.product__details a.button');
        fireEvent.click(button);
        expect(renderedPage.container.querySelector('.modal')).toBe(null)
    })
});

describe('Promo product', () => {
    let renderedPage;
    beforeEach(() => {
        renderedPage = render(<Product item={PROMOPRODUCT}/>);
    })

    test('Has the promo tag', async () => {
        expect(
            renderedPage.container
                .querySelector('.product__image')
                .querySelector('.product__image__promo')
        ).not.toBe(null);
    });
});

describe('Modal window', () => {
    let renderedPage;
    beforeEach(() => {
        renderedPage = render(<Product item={NORMALPRODUCT}/>);
    })

    test('can be opened', async() => {
        const button = renderedPage.container.querySelector('.product__details a.button');
        fireEvent.click(button);
        expect(renderedPage.container.querySelector('.modal')).not.toBe(null)
    })
    test('can be opened and disables the overflow', async () => {
        const button = renderedPage.container.querySelector('.product__details a.button');
        fireEvent.click(button);
        expect(getComputedStyle(document.querySelector('body')).overflow).toBe("hidden")
    })
    test('can close to reenable overflow', async () => {
        const button = renderedPage.container.querySelector('.product__details a.button');
        fireEvent.click(button);
        const buttonClose = renderedPage.container.querySelector('button.modal__close__button')
        fireEvent.click(buttonClose);
        expect(getComputedStyle(document.querySelector('body')).overflow).toBe("auto")
    })
});