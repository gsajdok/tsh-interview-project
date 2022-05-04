import {NavigationMenu} from '../../pages/Navigation';

const interceptAndStubWithFile = (fileName) => {
    cy.intercept(
        {
            method: 'GET', // Route all GET requests
        },
        { fixture: fileName }
    ).as('interceptAndStub');
}

context('Simple page usage', () => {
    before(() => {
        cy.clearSession();
        cy.visit(Cypress.env().baseUrl);
        interceptAndStubWithFile('limit_12_page_1.json');
        cy.wait('@interceptAndStub')
    });

    context('User opens the page', () => {

        it('page matches the home link', () => {
            cy.location().should(loc => {
                expect(loc.href).to.eq(NavigationMenu.homeLink);
            });
        });
        it('page shows the header', () => {
            cy.get('header').should('exist');
        })
        it('page shows the product list', () => {
            cy.get('.products').should('exist');
        })
        it('page shows the pagination', () => {
            cy.get('.pagination').should('exist');
        })
    })

    context('User goes to the 5th page', () => {
        it('pagination exists and is populated', () => {
            cy.get('.pagination .pagination__digits').find('a').should('have.length', 6)
        });
        it('page 5 should not be visible', () => {
            cy.get('.pagination .pagination__digits .pagination__link[data-page="5"]').should('not.exist');
        })
        it('clicks on page 3', () => {
            interceptAndStubWithFile('limit_12_page_3.json');
            cy.get('.pagination .pagination__digits .pagination__link[data-page="3"]').click();
        })
        it('clicks on page 4', () => {
            interceptAndStubWithFile('limit_12_page_4.json');
            cy.get('.pagination .pagination__digits .pagination__link[data-page="4"]').click();
        })
        it('clicks on page 5', () => {
            interceptAndStubWithFile('limit_12_page_5.json');
            cy.get('.pagination .pagination__digits .pagination__link[data-page="5"]').click();
        })
    })

    context('User searches for chairs', () => {

        it('writes chair in the search input', () => {
            cy.get('#searchInput').click().type('Chair');
            cy.get('#searchInput').should(($input) => {
                const value = $input.val();
                expect(value).to.match(/Chair/);
            })
        });
        it('finds and clicks the search button', () => {
            interceptAndStubWithFile('limit_12_page_1_search_Chair.json');
            cy.get('label.searchInput__button').should('be.visible').click();
        });
        it('only shows chairs', () => {
            cy.wait(500);
            cy.get('.products .products__list .product__title h2').each(($ele, $list) => {
                expect($ele).to.contain.text('Chair');
            }).then(($list) => {
                expect($list).to.have.length(4)
            })
        })
    })

    context('User enables promo', () => {
        it('presses the promo tag', () => {
            interceptAndStubWithFile('limit_12_page_1_search_Chair_promo_true.json');
            cy.get('#checkbox__promo+label').should('be.visible').click();
        })
        it('only shows promos', () => {
            cy.wait(500);
            cy.get('.products .products__list .product__image__promo').should('have.length', 3);
        })
    });
    context('User clicks a link', () => {
        before(() => {
            interceptAndStubWithFile('limit_12_page_1_search_Chair_promo_true.json');
        })

        it('presses the button', () => {
            cy.get('.products .products__list .product .product__details a:not([disabled])').first().should('be.visible').click();
        })
        it('shows the modal and blocks overflow', () => {
            cy.get('.modal').should('exist');
            cy.get('body').should(($el) => {
                expect($el).to.have.css('overflow', 'hidden')
            })
        })
        it('closes the modal', () => {
            cy.get('.modal .modal__close__button').should('be.visible').click();
            cy.get('.modal').should('not.exist');
            cy.get('body').should(($el) => {
                expect($el).to.have.css('overflow', 'auto')
            })
        })
    })
})