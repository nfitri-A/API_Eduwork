describe('Validate Headers', () => {
    it('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')

        //tugas menambahkan assertion berdasarkan response body yang di dapatkan
        cy.get('@pokemon').its('body').then((body) => {
            expect(body.abilities[0].ability.name).to.equal('limber');
            expect(body.abilities[0].is_hidden).to.be.false;
            expect(body.abilities[1].ability.name).to.equal('imposter');
            expect(body.abilities[1].is_hidden).to.be.true;
            expect(body.base_experience).to.equal(101);
            expect(body.name).to.eq('ditto');
            expect(body.abilities).to.have.length(2);
            
        });
    });
    it('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });
    it('Successfully validate status code with params', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbassaur')
        cy.get('@bulbassaur').its('body').should('include', { name: "bulbasaur" })
    
    });
    it('Tugas Api 10.3 Validate Content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').then((body) => {
            expect(body.abilities[0].ability.name).to.equal('limber');
        });
    });
})