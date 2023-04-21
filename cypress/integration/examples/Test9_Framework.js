
import HomePage from '../pageObjects/HomePage'
import ProductsPage from '../pageObjects/ProductsPage'

describe('My Nineth Test Suite', function(){

    before(function(){
        // this code wil be executed once before all the tests in the block
        cy.fixture('example').then(function(data)
        {
    this.data = data
        })
    })

    it('Framework', function(){

        const homePage = new HomePage()
        const productsPage = new ProductsPage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.getNameInputBox().type(this.data.name)
        homePage.getEmailInputBox().type(this.data.email)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)

        homePage.getNameInputBox().should('have.attr','minlength','2') // minlength attribute validation
        homePage.getNameInputBox().should('have.attr','required')
        homePage.getNameInputBox().should('have.attr','type','text') // input type validation

        homePage.getEntrepreneur().should('be.disabled') // cy.get('#inlineRadio3').should('have.attr','disabled')

        homePage.getShopTab().click()

        this.data.itemName.forEach(element => {
            cy.selectProduct(element)
        });

        productsPage.getCheckoutButton().click()



        



        

        


    })
})