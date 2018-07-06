import React from 'react'
import {
  Container,
  Table,
  Header,
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setHeaders } from '../reducers/headers'
import axios from 'axios'

class HouseDisplay extends React.Component {
  state = { houses: [], colors: ['red', 'blue'] }

  componentDidMount(){
    const { dispatch } = this.props
    axios.get('api/houses')
    .then( res => 
      this.setState({houses: res.data})
      // dispatch(setHeaders(res.headers))
    )
  }

  houseName = (houses) => {
    return houses.map( (house, i) => 
      <Table.HeaderCell> {house.name} </Table.HeaderCell>
    )
  }

  loanTerm = (houses) => {
    return houses.map ( house =>
      <Table.Cell> { house.loan_term } years </Table.Cell> 
    )
  }

  paymentsPerYear = (houses) => {
    return houses.map ( house => 
      <Table.Cell> { house.payments_per_year } </Table.Cell>
    )
  }

  totalMonthlyPayments = (houses) => {
    return houses.map ( house =>
      <Table.Cell> { house.payments_per_year * house.loan_term } </Table.Cell>
    )
  }

  purchasePrice = (houses) => {
    return houses.map (house =>
      <Table.Cell> ${house.purchase_price} </Table.Cell>
    )
  }

  downPaymentPercent = (houses) => {
    return houses.map (house =>
    <Table.Cell> {house.down_payment }% </Table.Cell> 
    )
  }
  
  downPaymentAmount = (houses) => {
    return houses.map(house => 
    <Table.Cell> ${house.down_payment / 100 * house.purchase_price} </Table.Cell>
    )
  }

  loanAmount = (houses) => {
    return houses.map(house =>
    <Table.Cell> ${house.purchase_price - (house.down_payment / 100 * house.purchase_price)} </Table.Cell>
    )
  }

  interestRate = (houses) => {
    return houses.map(house =>
    <Table.Cell> {house.interest_rate }% </Table.Cell>
    )
  }
  pmiCalc = (houses) => {
    return houses.map(house => {
     if (house.down_payment < 20) {
      const loan_amount = house.purchase_price - (house.down_payment / 100 * house.purchase_price)
      const pmiMonthly = loan_amount * 0.9 / 100 / house.payments_per_year
        return <Table.Cell> ${pmiMonthly} </Table.Cell>
     }
    return <Table.Cell> No PMI </Table.Cell>
    })
  }
  
  render() {
    const { houses } = this.state
    return(
      <Container>
        <Header as="h1" textAlign="center"> Home View </Header>
        <Table basic="very" striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={5}/>
                { this.houseName(houses) }
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell> Life of Loan (years) </Table.Cell>
                { this.loanTerm(houses) }
            </Table.Row>
            <Table.Row>
              <Table.Cell> Number of Payments/Year </Table.Cell>
                { this.paymentsPerYear(houses) }
            </Table.Row>
            <Table.Row>
              <Table.Cell> Total Monthly Payments </Table.Cell>
                { this.totalMonthlyPayments(houses) }
            </Table.Row>
            <Table.Row>
              <Table.Cell> Purchase Price </Table.Cell>
               { this.purchasePrice(houses) }
            </Table.Row>
            <Table.Row>
              <Table.Cell> Down Payment Percentage </Table.Cell>
                { this.downPaymentPercent(houses) }
            </Table.Row>
            <Table.Row>
              <Table.Cell> Down Payment Amount </Table.Cell>
                { this.downPaymentAmount(houses) }
            </Table.Row>
            <Table.Row>
              <Table.Cell> Loan Amount </Table.Cell>
                { this.loanAmount(houses) }
            </Table.Row>
            <Table.Row>
              <Table.Cell> Interest Rate </Table.Cell> 
                { this.interestRate(houses) }
            </Table.Row>
            <Table.Row>
              <Table.Cell> PMI Monthly (calc. @ 0.9% of loan/payment) </Table.Cell>
                { this.pmiCalc(houses) }
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    )
  }
}
export default connect()(HouseDisplay)