
import HomePage from '../pageObjects/HomePage'
import ProductsPage from '../pageObjects/ProductsPage'
import CheckoutPage from '../pageObjects/CheckoutPage'
import PurchasePage from '../pageObjects/PurchasePage'

describe('My Nineth Test Suite', function(){

    before(function(){
        // this code wil be executed once before all the tests in the block
        cy.fixture('example').then(function(data)
        {
    this.data = data
        })
    })

    it('Framework', function(){
        Cypress.config('defaultCommandTimeout',8000)

        const homePage = new HomePage()
        const productsPage = new ProductsPage()
        const checkoutPage = new CheckoutPage()
        const purchasePage = new PurchasePage()

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

        let sum = 0;

        checkoutPage.listOfTotalPrices().each(($el, index, $list) => {
            sum += Number($el.text().match(/[0-9]+/)) // regex for digits only
        })

        checkoutPage.totalPrice().then(function(price){
            let allPrice = parseInt(price.text().match(/[0-9]+/))
            expect(allPrice).to.equal(sum)
        }) 
        
        checkoutPage.checkoputButton().click()

        purchasePage.deliveryLocationInputBox().type('India')
        purchasePage.suggestionBox().click()
        purchasePage.termAndConditionsCheckBox().click({force: true})
        purchasePage.purchaseButton().click()



        // purchasePage.confirmationSuccessMessage().then(function(text){
        //     Cypress.$('a.close').remove()
        //     let confirmMessage = text.text().trim()
        //     cy.log(confirmMessage)
        //     expect(confirmMessage).to.equal('Success! Thank you! Your order will be delivered in next few weeks :-).')
        // })

        // purchasePage.confirmationSuccessMessage().should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        purchasePage.confirmationSuccessMessage().then(function(text){
            const confirmMessage = text.text()
            expect(confirmMessage.includes('Success! Thank you! Your order will be delivered in next few weeks :-).')).to.be.true
        })

        



        

        


    })
})