import HomePage from "../../../pageObjects/HomePage";
import ProductsPage from "../../../pageObjects/ProductsPage";
import CheckoutPage from "../../../pageObjects/CheckoutPage";
import PurchasePage from "../../../pageObjects/PurchasePage";

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
const homePage = new HomePage()
const productsPage = new ProductsPage()
const checkoutPage = new CheckoutPage()
const purchasePage = new PurchasePage()

// Given I open Ecommerce Page
Given('I open Ecommerce Page', function(){
    cy.visit(Cypress.env('url') + '/angularpractice/')
})

// When I add items to Cart
When ('I add items to Cart', function(){
    homePage.getShopTab().click()

    this.data.itemName.forEach(function(element){
        cy.selectProduct(element)
     })
        productsPage.getCheckoutButton().click()
     
})

// And Validate the total prices
When ('Validate the total prices', () => {
    let sum = 0;
    checkoutPage.listOfTotalPrices().each(($el, index, $list) => {
        sum += Number($el.text().match(/[0-9]+/)) // regex for digits only
    })
    checkoutPage.totalPrice().then(function(price){
        let allPrice = parseInt(price.text().match(/[0-9]+/))
        expect(allPrice).to.equal(sum)
    }) 
})

// Then Select the country submit and verify Thankyou
Then ('Select the country submit and verify Thankyou', () => {
    checkoutPage.checkoputButton().click()
    purchasePage.deliveryLocationInputBox().type('India')
    purchasePage.suggestionBox().click()
    purchasePage.termAndConditionsCheckBox().click({force: true})
    purchasePage.purchaseButton().click()
    purchasePage.confirmationSuccessMessage().then(function(text){
        const confirmMessage = text.text()
        expect(confirmMessage.includes('Success! Thank you! Your order will be delivered in next few weeks :-).')).to.be.true
    })
})

// When I fill the form details
When ('I fill the form details', function(dataTable){
    homePage.getNameInputBox().type(dataTable.rawTable[1][0])
    homePage.getEmailInputBox().type(dataTable.rawTable[1][2])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

// Then validate the forms behaviour
Then ('validate the forms behaviour', () => {
    homePage.getNameInputBox().should('have.attr','minlength','2')
    homePage.getNameInputBox().should('have.attr','required')
    homePage.getNameInputBox().should('have.attr','type','text')
    Cypress.config('defaultCommandTimeout',8000)
})

// And select the Shop Page
Then ('select the Shop Page', () => {
    homePage.getShopTab().click()
})
