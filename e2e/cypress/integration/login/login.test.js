import {NavigationMenu} from '../../pages/Navigation';

context('Simple page usage', () => {
    before(() => {
        cy.clearSession();
        cy.visit(`${Cypress.env().baseUrl}/login`);
    });

    context('User opens the login', () => {

        it('page matches the login link', () => {
            cy.location().should(loc => {
                expect(loc.href).to.eq(NavigationMenu.loginLink);
            });
        });
        context('desktop resolution', () => {
           before(() => {
               cy.viewport("macbook-11");
           })
            it('inputs and submit are visible', () => {
                expect(cy.get('input[name="username"]')).to.exist;
                expect(cy.get('input[name="password"]')).to.exist;
                expect(cy.get('input[type="submit"]')).to.exist;
            })
        });
        context('smaller resolution', () => {
            before(() => {
                cy.viewport(1000, 720);
            })
            it('inputs and submit are visible', () => {
                expect(cy.get('input[name="username"]')).to.exist;
                expect(cy.get('input[name="password"]')).to.exist;
                expect(cy.get('input[type="submit"]')).to.exist;
            })
        });
        context('phone resolution', () => {
            before(() => {
                cy.viewport('iphone-8');
            })
            it('inputs and submit are visible', () => {
                expect(cy.get('input[name="username"]')).to.exist;
                expect(cy.get('input[name="password"]')).to.exist;
                expect(cy.get('input[type="submit"]')).to.exist;
            })
        });
    });
    context('User tries to input data', () => {
        it('types two inputs incorrectly', () => {
            cy.get('input[name="username"]').type('thisusernameistoolong');
            cy.get('input[name="password"]').type('123')
            cy.get('input[type="submit"').click();
            cy.get('.login__form').find('.error').should('have.length', 2);
        });
        it('starts fixing one', () => {
            cy.get('input[name="username"]').type('fineusername');
            cy.get('.login__form').find('.error').should('have.length', 1);
        });
        it('fixes both and submits', () => {
            cy.get('input[name="username"]').clear().type('fineusername');
            cy.get('input[name="password"]').type('12345')
            cy.get('input[type="submit"').click();
            cy.get('.login__form').find('.error').should('have.length', 0);
        });
    });
});