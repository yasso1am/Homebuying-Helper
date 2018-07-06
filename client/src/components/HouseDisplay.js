import React from 'react'
import {
  Container,
  Table,
} from 'semantic-ui-react'

class HouseDisplay extends React.Component {
  state = { houses: [] }

  houseName = (houses) => {
    return houses.map( house => 
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
      <Table.Cell> {house.purchase_price} </Table.Cell>
    )
  }
  
  render() {
    const { houses } = this.state
    return(
      <Container>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
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
          </Table.Body>
        </Table>
      </Container>
    )
  }
}
export default HouseDisplay