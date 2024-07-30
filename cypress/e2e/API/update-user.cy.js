describe('Update User', () => {
    it('successfuly update user', () => {
        var user = {
            "name": "Fitri",
            "Job": "QA"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(user.name)
            expect(response.body.Job).to.eq(user.Job)
        })
    });
})